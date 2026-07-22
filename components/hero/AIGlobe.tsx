"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AIGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      42,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100,
    );

    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);

    mount.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Main transparent globe
    const globeGeometry = new THREE.SphereGeometry(1.7, 64, 64);

    const globeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x2563eb,
      transparent: true,
      opacity: 0.055,
      roughness: 0.2,
      metalness: 0.1,
      clearcoat: 1,
      side: THREE.DoubleSide,
    });

    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    globeGroup.add(globe);

    // Wireframe layer
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    });

    const wireframe = new THREE.Mesh(globeGeometry, wireMaterial);
    globeGroup.add(wireframe);

    // Latitude rings
    for (let i = -4; i <= 4; i++) {
      const latitude = (i / 5) * (Math.PI / 2);
      const radius = 1.7 * Math.cos(latitude);
      const y = 1.7 * Math.sin(latitude);

      const ringGeometry = new THREE.RingGeometry(
        radius - 0.006,
        radius + 0.006,
        120,
      );

      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x60a5fa,
        transparent: true,
        opacity: 0.16,
        side: THREE.DoubleSide,
      });

      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = y;

      globeGroup.add(ring);
    }

    // Longitude rings
    for (let i = 0; i < 8; i++) {
      const curve = new THREE.EllipseCurve(
        0,
        0,
        1.7,
        1.7,
        0,
        Math.PI * 2,
        false,
        0,
      );

      const points = curve.getPoints(160).map(
        (point) => new THREE.Vector3(point.x, point.y, 0),
      );

      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      const material = new THREE.LineBasicMaterial({
        color: 0x60a5fa,
        transparent: true,
        opacity: 0.18,
      });

      const line = new THREE.LineLoop(geometry, material);
      line.rotation.y = (Math.PI / 8) * i;

      globeGroup.add(line);
    }

    // Glowing nodes
    const nodePositions = [
      [0.6, 1.25, 0.95],
      [-0.9, 0.8, 1.15],
      [1.3, 0.25, 0.95],
      [-1.35, -0.2, 0.75],
      [0.75, -1.1, 1.05],
      [-0.45, -1.35, 0.85],
      [1.05, 0.85, -0.95],
      [-0.75, 1.05, -1.05],
    ];

    const nodeGeometry = new THREE.SphereGeometry(0.045, 20, 20);

    nodePositions.forEach(([x, y, z], index) => {
      const nodeMaterial = new THREE.MeshBasicMaterial({
        color: index % 2 === 0 ? 0x2563eb : 0x7c3aed,
      });

      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(x, y, z);

      globeGroup.add(node);
    });

    // Outer atmospheric glow
    const atmosphereGeometry = new THREE.SphereGeometry(1.85, 64, 64);

    const atmosphereMaterial = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.BackSide,
      uniforms: {
        glowColor: {
          value: new THREE.Color(0x2563eb),
        },
      },
      vertexShader: `
        varying vec3 vertexNormal;

        void main() {
          vertexNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vertexNormal;
        uniform vec3 glowColor;

        void main() {
          float intensity = pow(0.72 - dot(vertexNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          gl_FragColor = vec4(glowColor, intensity * 0.42);
        }
      `,
    });

    const atmosphere = new THREE.Mesh(
      atmosphereGeometry,
      atmosphereMaterial,
    );

    globeGroup.add(atmosphere);

    // Orbit rings
    const orbitMaterial = new THREE.LineBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.26,
    });

    for (let i = 0; i < 3; i++) {
      const orbitCurve = new THREE.EllipseCurve(
        0,
        0,
        2.25 + i * 0.18,
        1.45 + i * 0.12,
        0,
        Math.PI * 2,
        false,
        0,
      );

      const orbitPoints = orbitCurve.getPoints(180).map(
        (point) => new THREE.Vector3(point.x, point.y, 0),
      );

      const orbitGeometry =
        new THREE.BufferGeometry().setFromPoints(orbitPoints);

      const orbit = new THREE.LineLoop(orbitGeometry, orbitMaterial);

      orbit.rotation.x = 0.55 + i * 0.22;
      orbit.rotation.y = 0.28 + i * 0.42;
      orbit.rotation.z = i * 0.4;

      globeGroup.add(orbit);
    }

    globeGroup.rotation.x = 0.14;
    globeGroup.rotation.z = -0.08;

    let mouseX = 0;
    let mouseY = 0;
    let frameId = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = mount.getBoundingClientRect();

      mouseX =
        ((event.clientX - rect.left) / rect.width - 0.5) * 0.45;

      mouseY =
        ((event.clientY - rect.top) / rect.height - 0.5) * 0.3;
    };

    const handleResize = () => {
      if (!mount) return;

      const width = mount.clientWidth;
      const height = mount.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    const animate = () => {
      globeGroup.rotation.y += 0.0025;

      globeGroup.rotation.x +=
        (mouseY - globeGroup.rotation.x) * 0.025;

      globeGroup.rotation.z +=
        (-mouseX * 0.35 - globeGroup.rotation.z) * 0.025;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    mount.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    animate();

    return () => {
      cancelAnimationFrame(frameId);

      mount.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      globeGeometry.dispose();
      globeMaterial.dispose();
      wireMaterial.dispose();
      nodeGeometry.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      orbitMaterial.dispose();

      renderer.dispose();

      if (renderer.domElement.parentElement === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="white-globe-shell">
      <div className="white-globe-grid" />
      <div ref={mountRef} className="white-ai-globe" />

      <div className="globe-live-status">
        <span className="globe-live-dot" />
        Global systems connected
      </div>

      <div className="globe-floating-stat globe-stat-one">
        <strong>24/7</strong>
        <span>Operations active</span>
      </div>

      <div className="globe-floating-stat globe-stat-two">
        <strong>98.4%</strong>
        <span>System health</span>
      </div>
    </div>
  );
}

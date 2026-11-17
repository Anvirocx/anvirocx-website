"use client";
import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";

export default function QuickEnquiry() {
  const [status,setStatus]=useState<"idle"|"sending"|"success"|"error">("idle");
  async function submit(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form=event.currentTarget;
    const data=new FormData(form);
    data.append("source","ANVIROCX Homepage Quick Enquiry");
    setStatus("sending");
    try {
      const response=await fetch("https://formspree.io/f/mkolepen",{method:"POST",body:data,headers:{Accept:"application/json"}});
      if(!response.ok) throw new Error("Submission failed");
      form.reset();setStatus("success");
    } catch {setStatus("error");}
  }
  if(status==="success") return <div role="status" className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center"><CheckCircle2 className="mx-auto text-emerald-700" size={38}/><h3 className="mt-4 text-2xl font-bold text-slate-950">Enquiry submitted!</h3><p className="mt-3 text-slate-600">Thanks for reaching out. Your request was submitted and we'll respond by email after reviewing it.</p><button type="button" onClick={()=>setStatus("idle")} className="mt-6 font-semibold text-blue-700">Send another enquiry</button></div>;
  return <form onSubmit={submit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 md:p-9">
    <p className="text-sm font-bold uppercase tracking-widest text-blue-700">Direct website enquiry</p>
    <h3 className="mt-3 text-2xl font-bold text-slate-950">Tell us what you need.</h3>
    <p className="mt-3 text-sm leading-6 text-slate-600">Submit your enquiry here — no email app needed.</p>
    <div className="mt-6 grid gap-4 sm:grid-cols-2"><label className="text-sm font-semibold text-slate-700">Your name *<input name="name" required autoComplete="name" placeholder="Full name" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-blue-600"/></label><label className="text-sm font-semibold text-slate-700">Business email *<input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-blue-600"/></label></div>
    <label className="mt-4 block text-sm font-semibold text-slate-700">Support needed *<select name="service" required defaultValue="" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-blue-600"><option value="" disabled>Select a service</option><option>Email Support</option><option>Live Chat Support</option><option>Ticket Management</option><option>Multiple Channels</option><option>Not Sure Yet</option></select></label>
    <label className="mt-4 block text-sm font-semibold text-slate-700">Your requirements *<textarea name="requirements" required rows={4} placeholder="Tell us about your store, support volume, and goals..." className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-blue-600"/></label>
    <button type="submit" disabled={status==="sending"} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-4 font-bold text-white hover:bg-blue-800 disabled:opacity-60">{status==="sending"?<><LoaderCircle size={18} className="animate-spin"/> Sending...</>:<>Send Enquiry <ArrowRight size={18}/></>}</button>
    {status==="error"&&<p role="alert" className="mt-4 text-sm text-red-700">Couldn't submit right now. Please retry or email hello@anvirocx.com.</p>}
    <p className="mt-4 text-xs leading-5 text-slate-500">Your details are sent to our enquiry service for follow-up. This form does not initiate a live human chat.</p>
  </form>;
}
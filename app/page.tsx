"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building2, HeartPulse, ShoppingBag, Users, ClipboardCheck, BarChart3, MessageCircle, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pages = ["Home", "About Us", "Our Methods", "Q&A", "Contact Us"];

export default function OrleahConsultingWebsite() {
  const [activePage, setActivePage] = useState("Home");

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#26313A]">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={() => setActivePage("Home")} className="text-left">
            <div className="text-xl font-semibold tracking-wide text-[#06294A]">
             Orleah Consulting Group, LLC
            </div>
          </button>
          <nav className="hidden gap-2 md:flex">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activePage === page
                    ? "bg-[#06294A] text-white"
                    : "text-slate-700 hover:bg-stone-100"
                }`}
              >
                {page}
              </button>
            ))}
          </nav>
          <Button onClick={() => setActivePage("Contact Us")} className="hidden rounded-full bg-[#B8943D] hover:bg-[#9C7B30] md:inline-flex">
            Start a Conversation
          </Button>
        </div>
        <div className="flex gap-2 overflow-x-auto px-4 pb-4 md:hidden">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium ${
                activePage === page ? "bg-[#06294A] text-white" : "bg-white text-slate-700"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </header>

      <main>
        {activePage === "Home" && <HomePage setActivePage={setActivePage} />}
        {activePage === "About Us" && <AboutPage />}
        {activePage === "Our Methods" && <MethodsPage />}
        {activePage === "Q&A" && <QAPage />}
        {activePage === "Contact Us" && <ContactPage />}
      </main>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-semibold tracking-[0.18em]">ORLEAH CONSULTING GROUP, LLC</div>
            <div className="mt-1 text-sm text-slate-600">Operational Management • Oversight • Culture Development</div>
          </div>
          <div className="text-sm text-slate-500">© 2026 Orleah Consulting Group, LLC. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

function HomePage({ setActivePage }: { setActivePage: (page: string) => void }) {
  return (
    <section>
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-[#06294A]">
            Strategy • People • Culture • Results
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-[#06294A] md:text-6xl">
            Operational clarity for organizations ready to grow with discipline.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Orleah Consulting Group, LLC helps healthcare providers, consumer goods companies, and small businesses strengthen operations, improve oversight, and build workplace cultures that support lasting performance.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button onClick={() => setActivePage("Contact Us")} className="rounded-full bg-[#06294A] px-6 py-6 hover:bg-[#041F38]">
              Schedule a Consultation
            </Button>
            <Button onClick={() => setActivePage("Our Methods")} variant="outline" className="rounded-full px-6 py-6">
              Explore Our Methods
            </Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }}>
        <Card className="overflow-hidden rounded-[2rem] border-0 bg-white shadow-2xl">
  <CardContent className="flex items-center justify-center p-8">
    <img
      src="/logo.png"
      alt="Orleah Consulting Group Logo"
      className="w-full max-w-md rounded-2xl"
    />
  </CardContent>
</Card>
        </motion.div>
      </div>

      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-semibold">What we help improve</h2>
            <p className="mt-3 text-slate-600">Practical consulting support for owners, executives, and leadership teams that need better structure, accountability, and follow-through.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <ServiceCard icon={<ClipboardCheck />} title="Operational Management" text="Build clearer workflows, stronger routines, and measurable expectations across departments." />
            <ServiceCard icon={<BarChart3 />} title="Oversight & Accountability" text="Create review systems, leadership dashboards, and follow-up practices that reduce drift." />
            <ServiceCard icon={<Users />} title="Culture Development" text="Strengthen communication, ownership, service standards, and team alignment." />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <PageShell eyebrow="About Us" title="A consulting group built around operations, people, and sustainable performance.">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Card className="rounded-3xl border-0 shadow-sm">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold">Who we are</h3>
            <p className="mt-4 leading-8 text-slate-700">
              Orleah Consulting Group, LLC partners with organizations that need practical, hands-on support to improve daily operations, leadership consistency, and workplace culture. Our work is designed for real-world environments where owners and managers need clear systems, reliable oversight, and measurable progress.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              We understand that performance is not created by policy alone. It comes from people, process, communication, accountability, and leadership habits that are reinforced consistently over time.
            </p>
          </CardContent>
        </Card>
        <div className="grid gap-5">
          <Value title="Operational discipline" text="We help organizations reduce ambiguity and create routines that support consistent execution." />
          <Value title="Leadership alignment" text="We work with leaders to define expectations, improve communication, and strengthen follow-through." />
          <Value title="Culture with purpose" text="We help teams move from reaction-based management to ownership-based performance." />
        </div>
      </div>
    </PageShell>
  );
}

function MethodsPage() {
  const steps = [
    ["1", "Assess","We begin by conducting a structured review of your organization’s current operations, leadership practices, staffing models, and communication flow. This includes evaluating day-to-day execution, identifying inefficiencies, and understanding how decisions are made and implemented across teams. We also assess the experience of your customers, residents, or clients, depending on your industry. The goal of this phase is to develop a clear, objective understanding of what is working well, where breakdowns are occurring, and where opportunities exist to improve performance and consistency."],
    ["2", "Identify","After gaining a clear understanding of your organization, we identify the key gaps, risks, and inefficiencies that are limiting performance. This includes operational bottlenecks, inconsistencies in leadership execution, breakdowns in communication, and areas where accountability is unclear or not reinforced. We also highlight opportunities for improvement that may not be immediately visible from within the organization. This phase prioritizes the most impactful issues so leadership teams can focus on meaningful change rather than reacting to surface-level problems."],
    ["3", "Build","Once priorities are defined, we design practical systems and tools to support improvement. This includes developing workflows, leadership routines, communication structures, and accountability frameworks tailored to your organization. Our focus is on building solutions that are simple, sustainable, and aligned with how your business actually operates. Rather than creating theoretical models, we emphasize real-world application so that leaders and teams can adopt and implement changes effectively without unnecessary complexity or disruption."],
    ["4", "Implement", "Implementation is where strategy becomes execution. We work closely with leadership to introduce new processes, clarify expectations, and ensure alignment across departments. This includes supporting communication rollout, reinforcing accountability, and helping teams adapt to new standards and workflows. We focus on consistency and follow-through so that improvements are not temporary. Our role is to guide leaders through the transition, helping them maintain clarity and momentum while embedding new practices into daily operations."],
    ["5", "Sustain", "Long-term success requires consistency beyond the initial implementation phase. We help organizations establish review processes, performance tracking systems, and leadership habits that reinforce ongoing improvement. This includes developing routines for monitoring progress, addressing issues early, and maintaining accountability at all levels. The goal is to ensure that the improvements made are not dependent on external support but are sustained internally through strong leadership, clear expectations, and a culture of ownership and continuous development."],
  ];

  return (
    <PageShell eyebrow="Our Methods" title="A practical framework for improving how organizations operate.">
      <div className="grid gap-5">
        {steps.map(([num, title, text]) => (
          <Card key={num} className="rounded-3xl border-0 shadow-sm">
            <CardContent className="flex flex-col gap-5 p-6 md:flex-row md:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#06294A] text-xl font-semibold text-white">{num}</div>
              <div>
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-2 leading-7 text-slate-700">{text}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}

function QAPage() {
  const questions = [
    ["What types of organizations do you work with?", "We work with a range of organizations, with particular focus on healthcare providers, including nursing homes and long-term care facilities, as well as retail and consumer goods companies, especially within the skincare space. In addition, we partner with small businesses that are experiencing growth or operational challenges and need stronger structure, oversight, and leadership alignment. While industries may differ, the underlying operational and cultural principles we address are highly transferable and applicable across multiple business environments."],
    ["Do you provide hands-on implementation support?", "Yes. Our approach is intentionally hands-on and execution-focused. We do not simply provide recommendations and leave organizations to figure out the rest. Instead, we work alongside leadership teams to help implement changes, introduce new processes, and reinforce accountability. This includes supporting communication rollout, aligning leadership expectations, and ensuring that systems are not only introduced but consistently followed. Our goal is to help organizations translate strategy into practical, sustainable execution."],
    ["Can you help with workplace culture?", "Absolutely. Culture development is a core component of our work. We focus on building cultures rooted in accountability, ownership, and clear communication. This involves helping leadership teams define expectations, reinforce consistent behaviors, and create an environment where staff understand their roles and responsibilities. Rather than treating culture as an abstract concept, we approach it as something that is built through daily actions, leadership habits, and structured systems that support long-term alignment and performance."],
    ["Do you only consult for healthcare?", "No. While healthcare, particularly nursing home operations, is a significant area of experience, our consulting approach is designed to be applicable across multiple industries. The principles of operational management, oversight, and culture development are relevant to retail, consumer goods, and service-based businesses as well. We tailor our approach to the specific needs of each organization, ensuring that recommendations are practical, relevant, and aligned with the realities of that industry."],
    ["How does an engagement begin?", "Most engagements begin with an initial consultation designed to understand your organization’s current state, key challenges, and desired outcomes. This conversation allows us to assess whether there is a strong fit and where we can provide the most value. From there, we outline a structured approach tailored to your organization, including scope, priorities, and next steps. Our goal is to ensure clarity from the beginning so that any engagement is focused, intentional, and aligned with measurable results."],
  ];

  return (
    <PageShell eyebrow="Q&A" title="Common questions about working with Orleah Consulting Group.">
      <div className="grid gap-5">
        {questions.map(([q, a]) => (
          <Card key={q} className="rounded-3xl border-0 shadow-sm">
            <CardContent className="p-7">
              <div className="flex gap-4">
                <MessageCircle className="mt-1 h-6 w-6 shrink-0 text-amber-[#B8943D]" />
                <div>
                  <h3 className="text-xl font-semibold">{q}</h3>
                  <p className="mt-2 leading-7 text-slate-700">{a}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}

function ContactPage() {
  return (
    <PageShell eyebrow="Contact Us" title="Let’s discuss where your organization is today and where you want it to go.">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="rounded-3xl border-0 bg-[#041F38] text-white shadow-sm">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold">Request a Consultation</h3>
            <p className="mt-4 leading-7 text-stone-200">
              Tell us about your organization, your current challenges, and where you want to go. We’ll review your submission and follow up with a thoughtful, practical next step.
            </p>
            <div className="mt-8 space-y-5 text-stone-100">
              <ContactLine icon={<Mail />} text="support@ceu.healthcare" />
              <ContactLine icon={<Phone />} text="(818) 584-6151" />
              <ContactLine icon={<MapPin />} text="Woodland Hills, California" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-0 shadow-sm">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold">Let's Start the Conversation to Impact Change!</h3>
            <p className="mt-2 text-slate-600"> Share a few details about your organization and the challenges you're facing. We’ll review your submission and follow up to discuss how we can support your goals.</p>
            <form action="https://formspree.io/f/xeenagrz" method="POST" className="mt-6 grid gap-4">
  <input
    name="name"
    placeholder="Name"
    required
    className="rounded-2xl border p-3"
  />

  <input
    name="email"
    type="email"
    placeholder="Email"
    required
    className="rounded-2xl border p-3"
  />

  <input
    name="organization"
    placeholder="Organization"
    className="rounded-2xl border p-3"
  />

  <textarea
    name="message"
    placeholder="How can we help?"
    required
    className="h-32 rounded-2xl border p-3"
  />

  <button
    type="submit"
    className="mt-2 rounded-full bg-[#B8943D] py-4 text-white hover:bg-[#9C7B30]"
  >
    Request Consultation
  </button>
</form>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}

function PageShell({ eyebrow, title, children }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <div className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#B8943D]">{eyebrow}</div>
        <h1 className="mb-10 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">{title}</h1>
        {children}
      </motion.div>
    </section>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
      {React.cloneElement(icon, { className: "h-5 w-5 text-amber-300" })}
      <span className="font-medium">{title}</span>
    </div>
  );
}

function ServiceCard({ icon, title, text }) {
  return (
    <Card className="rounded-3xl border-0 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <CardContent className="p-7">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#06294A]">
          {React.cloneElement(icon, { className: "h-6 w-6" })}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-3 leading-7 text-slate-600">{text}</p>
      </CardContent>
    </Card>
  );
}

function Value({ title, text }) {
  return (
    <Card className="rounded-3xl border-0 shadow-sm">
      <CardContent className="flex gap-4 p-6">
        <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-emerald-800" />
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-2 leading-7 text-slate-700">{text}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function ContactLine({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      {React.cloneElement(icon, { className: "h-5 w-5 text-amber-300" })}
      <span>{text}</span>
    </div>
  );
}

function InputPlaceholder({ label, tall }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">{label}</label>
      <div className={`rounded-2xl border border-stone-200 bg-[#F7F5F0] ${tall ? "h-32" : "h-12"}`} />
    </div>
  );
}

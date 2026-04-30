import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { MapPin, Phone, Mail, Linkedin, Instagram, Twitter, Check, ArrowRight, Lock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  company: z.string().trim().min(1, "Company name is required").max(120),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  projectType: z.string().min(1, "Please select a project type"),
  projectValue: z.string().min(1, "Please select a value range"),
  location: z.string().trim().max(120).optional().or(z.literal("")),
  source: z.string().optional(),
  message: z.string().trim().min(10, "Please share at least a brief project description").max(2000),
});

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const res = schema.safeParse(data);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      toast({ title: "Please review the form", description: "Some required fields need attention.", variant: "destructive" });
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  return (
    <section className="grid lg:grid-cols-2 min-h-[calc(100vh-5rem)]">
      {/* LEFT */}
      <div className="bg-roca-navy text-roca-white p-10 md:p-16 lg:p-20">
        <p className="font-label text-roca-muted text-xs mb-6"><Link to="/" className="hover:text-roca-copper">Home</Link> <span className="mx-2 text-roca-copper">/</span> Contact</p>
        <h1 className="font-display text-4xl md:text-[44px] leading-tight mb-6">Let's Build Something <span className="text-roca-copper italic">Remarkable.</span></h1>
        <span className="block w-16 h-px bg-roca-copper mb-7" />
        <p className="text-roca-white/80 max-w-md mb-10">Whether you're at the briefing stage or ready to proceed, our team is ready to discuss your project.</p>

        <div className="space-y-6 mb-10">
          {[
            { Icon: MapPin, t: "Roca Group HQ, 12 Exchange Square, Manchester, M2 7EN" },
            { Icon: Phone, t: "+44 (0) 161 234 5678" },
            { Icon: Mail, t: "enquiries@rocagroup.co.uk" },
          ].map(({ Icon, t }) => (
            <div key={t} className="flex items-start gap-4">
              <div className="w-10 h-10 border border-roca-copper/40 flex items-center justify-center text-roca-copper shrink-0"><Icon size={16} /></div>
              <p className="text-roca-white/85 pt-2">{t}</p>
            </div>
          ))}
        </div>

        <p className="font-label text-roca-copper text-xs mb-2">Office Hours</p>
        <p className="text-roca-white/85 mb-10">Mon–Fri 8:00am – 6:00pm</p>

        <div className="flex gap-4 mb-10">
          {[Linkedin, Instagram, Twitter].map((Icon, i) => (
            <a key={i} href="#" aria-label="social" className="w-11 h-11 border border-roca-copper/50 flex items-center justify-center text-roca-copper hover:bg-roca-copper hover:text-roca-navy transition-colors">
              <Icon size={16} />
            </a>
          ))}
        </div>

        <div className="border border-roca-copper/30">
          <iframe
            title="Roca Group Manchester HQ"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.847!2d-2.243!3d53.4837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sManchester!5e0!3m2!1sen!2suk!4v1700000000000"
            width="100%" height="280" style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="bg-roca-cream p-10 md:p-16 lg:p-20">
        {submitted ? (
          <div className="h-full flex flex-col items-center justify-center text-center animate-fade-up">
            <div className="w-20 h-20 rounded-full border-2 border-roca-copper flex items-center justify-center mb-8">
              <Check className="text-roca-copper" size={40} strokeWidth={2.5} />
            </div>
            <h2 className="font-display text-4xl text-roca-navy mb-4">Thank You</h2>
            <p className="text-foreground/75 max-w-md">A member of our team will contact you within 4 business hours.</p>
          </div>
        ) : (
          <>
            <h2 className="font-display text-4xl text-roca-navy mb-3">Tell Us About Your Project</h2>
            <p className="text-foreground/70 mb-10">Required fields are marked with an asterisk.</p>

            <form onSubmit={onSubmit} className="space-y-7" noValidate>
              <Field name="name" label="Full Name *" error={errors.name} />
              <Field name="company" label="Company Name *" error={errors.company} />
              <Field name="email" type="email" label="Email Address *" error={errors.email} />
              <Field name="phone" label="Phone Number" error={errors.phone} />

              <SelectField name="projectType" label="Project Type *" error={errors.projectType}
                options={["", "Commercial", "Residential", "Civil", "Industrial", "Fit-Out", "Heritage", "Other"]} />

              <SelectField name="projectValue" label="Estimated Project Value *" error={errors.projectValue}
                options={["", "Under £1M", "£1M–£5M", "£5M–£25M", "£25M–£100M", "£100M+"]} />

              <Field name="location" label="Project Location" error={errors.location} />

              <SelectField name="source" label="How did you hear about us?" error={errors.source}
                options={["", "Search engine", "Referral", "Industry publication", "Event", "Other"]} />

              <div>
                <label className="font-label text-[11px] text-roca-navy block mb-2">Message / Project Brief *</label>
                <textarea name="message" rows={5} maxLength={2000} className="w-full bg-transparent border-0 border-b-2 border-roca-navy/30 focus:border-roca-copper focus:outline-none py-2 text-roca-navy resize-none" />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>

              <button type="submit" className="btn-copper w-full !py-5">Submit Enquiry <ArrowRight size={16} /></button>
              <p className="text-xs text-foreground/60 flex items-center gap-2"><Lock size={12} /> Your information is kept strictly confidential and never shared with third parties.</p>
            </form>
          </>
        )}
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", error }: { name: string; label: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="font-label text-[11px] text-roca-navy block mb-2">{label}</label>
      <input type={type} name={name} maxLength={255} className="w-full bg-transparent border-0 border-b-2 border-roca-navy/30 focus:border-roca-copper focus:outline-none py-2 text-roca-navy" />
      {error && <p className="text-destructive text-xs mt-1">{error}</p>}
    </div>
  );
}

function SelectField({ name, label, options, error }: { name: string; label: string; options: string[]; error?: string }) {
  return (
    <div>
      <label className="font-label text-[11px] text-roca-navy block mb-2">{label}</label>
      <select name={name} className="w-full bg-transparent border-0 border-b-2 border-roca-navy/30 focus:border-roca-copper focus:outline-none py-2 text-roca-navy">
        {options.map((o) => <option key={o} value={o}>{o || "Select..."}</option>)}
      </select>
      {error && <p className="text-destructive text-xs mt-1">{error}</p>}
    </div>
  );
}

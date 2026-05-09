import { motion } from "framer-motion";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

const topics = [
  "General question",
  "Wholesale / retail inquiry",
  "Press / partnerships",
  "Order / shipping support",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    topic: topics[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: replace with real backend / form service
    console.log("contact form submitted", form);
    setSent(true);
  };

  return (
    <>
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 px-6 bg-milk">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block uppercase tracking-[0.3em] text-xs md:text-sm text-middle-brown font-display"
          >
            Say hi
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-3 font-display uppercase text-dark-brown text-[14vw] md:text-[7vw] leading-[0.95]"
          >
            We read
            <br />
            <span className="inline-block bg-middle-brown text-milk px-4 -rotate-[2deg]">
              every note.
            </span>
          </motion.h1>
          <p className="mt-6 text-dark-brown/80 max-w-md mx-auto">
            Wholesale, partnerships, customer support, or just to tell us how
            the chocolate bar made your morning — drop us a line.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 md:pb-32 bg-milk">
        <div className="max-w-2xl mx-auto">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#f3e7d4] rounded-3xl p-10 text-center"
            >
              <h2 className="font-display uppercase text-3xl md:text-4xl text-dark-brown">
                Thanks for the note.
              </h2>
              <p className="mt-4 text-dark-brown/80">
                We'll get back to you within two business days.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", email: "", topic: topics[0], message: "" });
                }}
                className="mt-6 text-xs uppercase tracking-widest underline text-dark-brown/80 hover:text-dark-brown"
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <Field label="Your name">
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={onChange("name")}
                  className="contact-input"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={onChange("email")}
                  className="contact-input"
                />
              </Field>
              <Field label="Topic">
                <select
                  value={form.topic}
                  onChange={onChange("topic")}
                  className="contact-input bg-white appearance-none"
                >
                  {topics.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </Field>
              <Field label="Message">
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={onChange("message")}
                  className="contact-input resize-none"
                />
              </Field>

              <button
                type="submit"
                className="w-full md:w-auto bg-dark-brown text-milk font-display tracking-[0.18em] uppercase text-sm px-10 py-4 rounded-full hover:bg-middle-brown transition-colors"
              >
                Send message
              </button>
            </form>
          )}

          <div className="mt-12 pt-12 border-t border-dark-brown/10 text-sm text-dark-brown/80 grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-display uppercase text-dark-brown mb-1 text-base">
                Wholesale
              </h3>
              <a
                href="mailto:wholesale@clearcore.example"
                className="underline hover:text-dark-brown"
              >
                wholesale@clearcore.example
              </a>
            </div>
            <div>
              <h3 className="font-display uppercase text-dark-brown mb-1 text-base">
                Press
              </h3>
              <a
                href="mailto:press@clearcore.example"
                className="underline hover:text-dark-brown"
              >
                press@clearcore.example
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-dark-brown/70 mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

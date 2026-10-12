import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = "shahriarnaiemrafi33@gmail.com";

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/shahriarnaiem-rafi",
      icon: "fab fa-github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shahriarnaiem33",
      icon: "fab fa-linkedin-in",
    },
    {
      name: "Email",
      url: `mailto:${emailAddress}`,
      icon: "fas fa-envelope",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFormErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      errors.message = "Please enter a message.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${formData.name.trim()}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name.trim()}\n` +
        `Email: ${formData.email.trim()}\n\n` +
        `Message:\n${formData.message.trim()}`
    );

    window.location.href =
      `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-base-content outline-none transition-all duration-300 placeholder:text-base-content/40 focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-base-200 px-6 py-20 md:px-12"
    >
      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            Let's work together
          </p>

          <h2 className="text-4xl font-extrabold text-base-content md:text-5xl">
            Get in <span className="text-primary">Touch</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-base-content/70">
            Have a project idea, a question, or an opportunity?
            I'd love to hear from you. Let's create something great together!
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid gap-8 md:grid-cols-5">
          {/* Contact Information */}
          <div className="rounded-3xl bg-gradient-to-br from-neutral to-gray-800 p-8 text-white shadow-xl md:col-span-2 md:p-10">
            <h3 className="text-2xl font-bold">
              Let's talk about your project.
            </h3>

            <p className="mt-4 leading-7 text-gray-300">
              I'm open to collaboration, exciting projects, and opportunities
              to grow as a developer. Send me a message and let's connect.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href={`mailto:${emailAddress}`}
                className="flex items-center gap-4 break-all transition-colors hover:text-primary"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                  <i className="fas fa-envelope" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-gray-400">
                    Email me
                  </span>
                  <span className="text-sm font-medium">
                    {emailAddress}
                  </span>
                </span>
              </a>
            </div>

            <div className="mt-10">
              <h4 className="mb-4 font-semibold">Find me online</h4>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target={
                      social.name === "Email" ? undefined : "_blank"
                    }
                    rel={
                      social.name === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={social.name}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-xl transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
                  >
                    <i className={social.icon} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 border-t border-white/15 pt-6">
              <p className="text-sm italic text-gray-300">
                "Great things happen when creative minds connect."
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-base-300 bg-base-100 p-8 shadow-xl md:col-span-3 md:p-10">
            <h3 className="mb-2 text-2xl font-bold text-base-content">
              Send me a message
            </h3>

            <p className="mb-8 text-sm text-base-content/60">
              Fill out the form below to start a conversation.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <div className="mb-5">
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-base-content"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(formErrors.name)}
                  aria-describedby={
                    formErrors.name ? "contact-name-error" : undefined
                  }
                  className={`${inputClass} ${
                    formErrors.name ? "border-red-500" : ""
                  }`}
                />

                {formErrors.name && (
                  <p
                    id="contact-name-error"
                    role="alert"
                    className="mt-2 text-sm text-red-500"
                  >
                    {formErrors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="mb-5">
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-base-content"
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(formErrors.email)}
                  aria-describedby={
                    formErrors.email ? "contact-email-error" : undefined
                  }
                  className={`${inputClass} ${
                    formErrors.email ? "border-red-500" : ""
                  }`}
                />

                {formErrors.email && (
                  <p
                    id="contact-email-error"
                    role="alert"
                    className="mt-2 text-sm text-red-500"
                  >
                    {formErrors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-base-content"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(formErrors.message)}
                  aria-describedby={
                    formErrors.message
                      ? "contact-message-error"
                      : undefined
                  }
                  className={`${inputClass} resize-y ${
                    formErrors.message ? "border-red-500" : ""
                  }`}
                />

                {formErrors.message && (
                  <p
                    id="contact-message-error"
                    role="alert"
                    className="mt-2 text-sm text-red-500"
                  >
                    {formErrors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn btn-primary w-full rounded-xl text-base shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                Send Message
                <i className="fas fa-paper-plane ml-2" aria-hidden="true" />
              </button>

              {submitted && (
                <p
                  role="status"
                  className="mt-4 text-center text-sm text-success"
                >
                  Your email app should open with your message prepared.
                  Please send the email to complete the process.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="mt-10 text-center text-sm text-base-content/60">
          Thank you for visiting my portfolio. I look forward to hearing from you!
        </p>
      </div>
    </section>
  );
};

export default Contact;
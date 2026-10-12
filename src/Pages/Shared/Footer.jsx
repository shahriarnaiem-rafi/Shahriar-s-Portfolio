import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/shahriarnaiem-rafi",
      icon: "fab fa-github",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shahriarnaiem33",
      icon: "fab fa-linkedin-in",
    },
    {
      name: "Email",
      href: "mailto:shahriarnaiemrafi33@gmail.com",
      icon: "fas fa-envelope",
    },
    {
      name: "Whatsapp",
      href: "https://wa.me/8801301441194",
      icon: "fab fa-whatsapp",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-neutral via-gray-900 to-accent text-white">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="absolute -top-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        {/* Brand */}
        <div className="text-center">
          <a
            href="#home"
            className="inline-block text-2xl font-bold tracking-wide transition-colors hover:text-primary"
          >
            Shahriar Naiem Rafi
            <span className="text-primary">.</span>
          </a>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-300 sm:text-base">
            Building creative digital experiences with passion, creativity,
            and clean code.
          </p>
        </div>

        {/* Social Links */}
        <div className="my-8 flex justify-center gap-5">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target={social.name === "Email" ? undefined : "_blank"}
              rel={
                social.name === "Email"
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={social.name}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xl text-gray-200 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            >
              <i className={social.icon} aria-hidden="true" />
            </a>
          ))}

        </div>

        {/* Divider */}
        <div className="border-t border-white/15" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-5 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-gray-300">
            &copy; {currentYear}{" "}
            <span className="font-semibold text-white">
              Shahriar Naiem Rafi
            </span>
            . All rights reserved.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <p className="text-sm text-gray-300">
              Interested in collaborating?{" "}
              <a
                href="mailto:shahriarnaiemrafi33@gmail.com"
                className="font-semibold text-primary transition-colors hover:text-white"
              >
                Let's talk!
              </a>
            </p>

            {/* Back to Top */}
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <i className="fas fa-arrow-up" aria-hidden="true" />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
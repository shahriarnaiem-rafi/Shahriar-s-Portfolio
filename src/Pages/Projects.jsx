import React from "react";

const projects = [
  {
    id: 1,
    title: "Online Course Management System",
    description:
      "An online course management platform built with React and Tailwind CSS. Laravel integration is planned.",
    image: "https://i.ibb.co/wNs8nc55/Screenshot-5.png",
    alt: "Online Course Management System preview",
    technologies: ["React", "Tailwind CSS", "Laravel"],
    liveUrl: "https://imagitechacademy.netlify.app/",
    status: "In Development",
  },
  {
    id: 2,
    title: "Hotel Management System",
    description:
      "A hotel management interface built with React and Tailwind CSS, designed to simplify hotel operations.",
    image: "https://i.ibb.co/RT7QzJbn/Screenshot-1.png",
    alt: "Hotel Management System preview",
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://grandpr0snr.netlify.app/",
    status: "Live Demo",
  },
  {
    id: 3,
    title: "Hotel Management System 2",
    description:
      "A hotel management application developed with Laravel and Tailwind CSS, with admin and customer functionality.",
    image: "https://i.ibb.co/SX4snLQ6/Screenshot-6.png",
    alt: "Laravel Hotel Management System preview",
    technologies: ["Laravel", "PHP", "Tailwind CSS"],
    liveUrl: null,
    status: "Coming Soon",
  },
  {
    id: 4,
    title: "Firsttrack Courier Service",
    description:
      "A courier management system with package tracking by ID, built with PHP, MySQL, JavaScript, and CSS frameworks.",
    image: "https://i.ibb.co/hJQ0zbQ5/Screenshot-2.png",
    alt: "Firsttrack Courier Service preview",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    liveUrl: "http://shahriarn.iceiy.com/?i=1",
    status: "Live Demo",
  },
  {
    id: 5,
    title: "Yammi Foods",
    description:
      "A food e-commerce UI concept featuring an engaging layout and a user-friendly shopping experience.",
    image: "https://i.ibb.co/mrJWzd2L/Screenshot-3.png",
    alt: "Yammi Foods website preview",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "https://shahriarnaiem-rafi.github.io/Yammi-Foods/",
    status: "Live Demo",
  },
  {
    id: 6,
    title: "Donation For Flood",
    description:
      "A flood relief donation website with a responsive interface designed to support relief campaigns.",
    image: "https://i.ibb.co/k7Xyfhs/Screenshot-4.png",
    alt: "Donation For Flood website preview",
    technologies: ["HTML", "Tailwind CSS", "Bootstrap", "JavaScript"],
    liveUrl:
      "https://shahriarnaiem-rafi.github.io/Donation-for-Flood/",
    status: "Live Demo",
  },
];

const Projects = () => {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-base-200 px-5 py-20 sm:px-8 md:px-12"
    >
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            What I've built
          </p>

          <h2 className="text-4xl font-extrabold text-base-content md:text-5xl">
            My <span className="text-primary">Projects</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-base-content/70 md:text-lg">
            Explore my work, from responsive frontend experiences to
            full-stack web applications. Each project represents an
            opportunity to learn, solve problems, and build something useful.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl"
            >
              {/* Project Image */}
              <a
                href={project.image}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View full image of ${project.title}`}
                className="relative block overflow-hidden bg-base-300"
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                  <span className="translate-y-3 rounded-full bg-white px-5 py-2 text-sm font-semibold text-gray-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Preview Image
                  </span>
                </div>
              </a>

              {/* Project Details */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Project {String(project.id).padStart(2, "0")}
                  </span>

                  <span className="rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/70">
                    {project.status}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-base-content transition-colors duration-300 group-hover:text-primary">
                  {project.title}
                </h3>

                <p className="mb-5 flex-1 text-sm leading-7 text-base-content/70">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-base-300 px-2.5 py-1 text-xs font-medium text-base-content/80 transition-colors hover:border-primary hover:text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full rounded-xl transition-all duration-300 hover:gap-3"
                  >
                    View Project
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="btn btn-outline w-full cursor-not-allowed rounded-xl opacity-60"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-5 text-base text-base-content/70">
            Have an idea for a project? Let's build something amazing together.
          </p>

          <a
            href="/contact"
            className="btn btn-primary rounded-xl px-8 shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Let's Collaborate
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

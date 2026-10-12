import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "PHP",
    "Laravel",
    "MySQL",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-base-200 px-6 py-20 md:px-12"
    >
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            Get to know me
          </p>

          <h2 className="text-4xl font-extrabold md:text-5xl">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
        </div>

        {/* Main Content */}
        <div className="grid items-start gap-10 md:grid-cols-5 md:gap-14">
          {/* Profile Card */}
          <div className="md:col-span-2">
            <div className="rounded-3xl border border-base-300 bg-base-100 p-8 text-center shadow-xl transition-transform duration-300 hover:-translate-y-2">
              <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-primary via-purple-500 to-accent text-5xl font-black text-white shadow-lg">
                SR
              </div>

              <h3 className="text-2xl font-bold">
                Shahriar Naiem Rafi
              </h3>

              <p className="mt-2 font-medium text-primary">
                Web Developer
              </p>

              <p className="mt-4 text-sm leading-7 text-base-content/70">
                Passionate about building responsive, user-friendly, and
                meaningful web experiences.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <span className="badge badge-primary badge-outline">
                  Frontend
                </span>
                <span className="badge badge-secondary badge-outline">
                  Backend
                </span>
                <span className="badge badge-accent badge-outline">
                  Problem Solving
                </span>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="md:col-span-3">
            <h3 className="mb-5 text-2xl font-bold md:text-3xl">
              Turning ideas into{" "}
              <span className="text-primary">digital experiences.</span>
            </h3>

            <div className="space-y-5 text-base leading-8 text-base-content/80">
              <p>
                Hi, I'm{" "}
                <strong className="text-base-content">
                  Shahriar Naiem Rafi
                </strong>
                , a creative and enthusiastic web developer who enjoys
                transforming ideas into functional, attractive, and
                user-friendly websites.
              </p>

              <p>
                I have hands-on experience with{" "}
                <strong className="text-primary">
                  frontend and backend technologies
                </strong>
                , including React, JavaScript, HTML, CSS, Bootstrap, PHP,
                Laravel, and MySQL. Through an intensive six-month web
                development course and practical projects, I've been
                developing my skills in responsive design, application
                development, and database management.
              </p>

              <p>
                I believe in writing clean code, learning continuously, and
                creating digital solutions that offer real value. I'm eager
                to take on new challenges, collaborate with other developers,
                and grow through real-world projects.
              </p>
            </div>

            {/* Technologies */}
            <div className="mt-8">
              <h4 className="mb-4 text-lg font-bold">
                Technologies I Work With
              </h4>

              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-base-300 bg-base-100 px-4 py-2 text-sm font-semibold shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="btn btn-primary rounded-xl px-7 shadow-lg transition-transform duration-300 hover:-translate-y-1"
              >
                Let's Connect
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                to="/projects"
                className="btn btn-outline rounded-xl px-7 transition-transform duration-300 hover:-translate-y-1"
              >
                Explore My Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
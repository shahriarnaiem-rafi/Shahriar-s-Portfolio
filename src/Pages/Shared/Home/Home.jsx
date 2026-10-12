import React from "react";
import "../../../index.css";

const Home = () => {
  const projects = [
    {
      title: "Hotel Management System",
      image: "https://i.postimg.cc/15kT6PWY/Screenshot-26.png",
      link: "https://grandpr0snr.netlify.app",
      number: "01",
    },
    {
      title: "Online Course Management System",
      image: "https://i.postimg.cc/JhPPTWq8/Screenshot-28.png",
      link: "https://onlinecoursebyme.netlify.app/",
      number: "02",
    },
    {
      title: "Courier Management System",
      image: "https://i.postimg.cc/QtYYMr9m/Screenshot-27.png",
      link: "http://shahriarn.iceiy.com/?i=1",
      number: "03",
    },
  ];

  const services = [
    {
      number: "01",
      icon: "fas fa-laptop-code",
      color: "text-cyan-400",
      title: "Front-End Development",
      description:
        "I create clean, responsive, and interactive user interfaces using HTML, CSS, JavaScript, and React.",
    },
    {
      number: "02",
      icon: "fas fa-server",
      color: "text-purple-400",
      title: "Back-End Development",
      description:
        "I develop server-side applications with PHP and Laravel, ensuring smooth data handling and secure user interactions.",
    },
    {
      number: "03",
      icon: "fas fa-database",
      color: "text-amber-400",
      title: "Database Management",
      description:
        "I am proficient in working with MySQL, building optimized databases to support web applications.",
    },
    {
      number: "04",
      icon: "fas fa-code-branch",
      color: "text-pink-400",
      title: "Full-Stack Development",
      description:
        "I combine front-end and back-end skills to deliver complete web solutions tailored to client needs.",
    },
  ];

  const skills = [
    {
      name: "JavaScript",
      icon: "fab fa-js-square",
      color: "text-yellow-400",
      description:
        "I create dynamic user experiences with JavaScript, including modern frameworks like React.",
    },
    {
      name: "React Js",
      icon: "fab fa-react",
      color: "text-cyan-400",
      description:
        "I build powerful user interfaces with React, creating responsive and interactive web applications.",
    },
    {
      name: "PHP",
      icon: "fab fa-php",
      color: "text-indigo-400",
      description:
        "I build server-side applications with PHP, ensuring secure and efficient back-end functionality.",
    },
    {
      name: "Laravel",
      icon: "fab fa-laravel",
      color: "text-red-400",
      description:
        "I use Laravel to create elegant and scalable back-end systems, delivering dynamic web solutions.",
    },
  ];

  const education = [
    {
      title: "BSC in Computer Science & Engineering",
      institution:
        "Bangladesh University of Business and Technology",
      duration: "2024 - Running...",
    },
    {
      title: "Diploma in Computer Science & Technology",
      institution: "Dhaka Polytechnic Institute",
      duration: "2019 - 2023",
    },
  ];

  const experience = [
    {
      title: "Trainee",
      institution: "IsDB-BISEW",
      duration: "2024 - 2025 (460 hours)",
      description:
        "I learned the following technologies during this field: Bootstrap, React.js, PHP, MySQL, Laravel.",
    },
    {
      title: "Intern in Java",
      institution: "Naztech.inc",
      duration: "2023 - 2024 (4 months)",
      description:
        "I learned the basics of Java programming in this company.",
    },
  ];

  return (
    <main className="bg-slate-950 text-white overflow-hidden">
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center py-24"
      >
        <div className="absolute top-10 right-0 w-80 h-80 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="absolute bottom-10 left-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-300 text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Welcome to my digital space
            </div>

            <p className="text-slate-400 uppercase tracking-[0.3em] text-sm mb-4">
              Hello, I'm
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              Shahriar
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Naiem Rafi
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-medium text-slate-300 mt-6">
              Full-Stack Web Developer
            </h2>

            <p className="text-slate-400 leading-8 mt-6 max-w-xl mx-auto lg:mx-0">
              Hello! I'm Shahriar Naiem Rafi, a passionate web developer. I
              specialize in building fast, responsive websites and web apps.
              Explore my work and feel free to get in touch!
            </p>

            <div className="flex flex-wrap gap-4 mt-9 justify-center lg:justify-start">
              <a
                href="mailto:shahriarnaiemrafi94@gmail.com"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 transition duration-300"
              >
                <i className="fas fa-paper-plane" />
                Hire Me
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-xl border border-slate-700 bg-slate-900/70 font-semibold hover:border-cyan-400 hover:text-cyan-300 hover:-translate-y-1 transition duration-300"
              >
                Explore Projects
                <i className="fas fa-arrow-down" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-10">
              {["React.js", "PHP", "Laravel", "MySQL"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm rounded-lg bg-white/5 border border-white/10 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 blur-2xl opacity-20" />

              <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500">
                <div className="w-full h-full rounded-full bg-slate-950 p-3">
                  <img
                    src="https://i.ibb.co/Y7sbTyL7/Shahriar.png"
                    alt="Shahriar Naiem Rafi"
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                </div>
              </div>

              <div className="absolute -bottom-3 -left-6 sm:left-0 bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 shadow-2xl">
                <p className="text-cyan-400 text-sm font-semibold">
                  <i className="fas fa-code mr-2" />
                  Building for the web
                </p>
              </div>

              <div className="absolute top-8 -right-3 sm:-right-8 bg-slate-900 border border-slate-700 rounded-2xl p-4 shadow-2xl">
                <i className="fas fa-laptop-code text-3xl text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              What I do
            </p>

            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Turning Ideas Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Digital Solutions
              </span>
            </h2>

            <p className="text-slate-400 leading-8">
              I specialize in building responsive and user-friendly websites
              and web applications using modern web technologies. With a
              strong foundation in both front-end and back-end development,
              I’m able to create dynamic, data-driven applications that are
              both visually appealing and functionally robust.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <article
                key={service.number}
                className="group p-7 sm:p-9 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-400/50 hover:-translate-y-2 transition duration-300"
              >
                <div className="flex justify-between items-start mb-7">
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center">
                    <i
                      className={`${service.icon} ${service.color} text-2xl`}
                    />
                  </div>

                  <span className="text-slate-700 text-3xl font-black">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-300 transition">
                  {service.title}
                </h3>

                <p className="text-slate-400 leading-7">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <p className="text-center text-slate-400 leading-8 max-w-3xl mx-auto mt-12">
            Whether you need a custom website, a web app, or help with an
            ongoing project, I’m ready to take on challenges and deliver
            high-quality results.
          </p>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              My tech stack
            </p>

            <h2 className="text-3xl sm:text-5xl font-bold">
              Technologies I Work With
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map((skill) => (
              <article
                key={skill.name}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-7 hover:bg-slate-900 hover:border-purple-400/50 transition duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  <i className={`${skill.icon} ${skill.color} text-4xl`} />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {skill.name}
                </h3>

                <p className="text-slate-400 text-sm leading-7">
                  {skill.description}
                </p>

                <div className="mt-6 w-full h-1 rounded-full bg-slate-800 overflow-hidden">
                  <div className="w-2/3 h-full bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-500" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESUME SECTION */}
      <section id="resume" className="py-24 bg-slate-900/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              My journey
            </p>

            <h2 className="text-3xl sm:text-5xl font-bold mb-5">
              A Summary of My Resume
            </h2>

            <p className="text-slate-400">
              My education and professional learning journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* EDUCATION */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                  <i className="fas fa-graduation-cap text-cyan-400" />
                </span>
                My Education
              </h3>

              <div className="relative border-l-2 border-slate-700 ml-3 space-y-8">
                {education.map((item) => (
                  <article key={item.title} className="relative pl-8">
                    <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-slate-900" />

                    <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-400/40 transition">
                      <span className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
                        {item.duration}
                      </span>

                      <h4 className="text-lg font-bold mt-3 mb-3">
                        {item.title}
                      </h4>

                      <p className="text-slate-400 text-sm leading-7">
                        {item.institution}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* EXPERIENCE */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-11 h-11 rounded-xl bg-purple-400/10 flex items-center justify-center">
                  <i className="fas fa-briefcase text-purple-400" />
                </span>
                My Experience
              </h3>

              <div className="relative border-l-2 border-slate-700 ml-3 space-y-8">
                {experience.map((item) => (
                  <article key={item.title} className="relative pl-8">
                    <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-purple-400 ring-4 ring-slate-900" />

                    <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-purple-400/40 transition">
                      <span className="text-xs font-semibold tracking-wider uppercase text-purple-400">
                        {item.duration}
                      </span>

                      <h4 className="text-lg font-bold mt-3 mb-2">
                        {item.title}
                      </h4>

                      <p className="text-slate-300 text-sm mb-3">
                        {item.institution}
                      </p>

                      <p className="text-slate-400 text-sm leading-7">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-14">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1bGcLc_4l3nRtEGIqWFIdCJ_z0N2sFIm1/view?usp=sharing"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold shadow-lg shadow-purple-500/20 hover:-translate-y-1 hover:shadow-purple-500/40 transition duration-300"
            >
              <i className="fas fa-download" />
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
                Selected work
              </p>

              <h2 className="text-3xl sm:text-5xl font-bold">
                My Projects
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  .
                </span>
              </h2>
            </div>

            <p className="text-slate-400 leading-7 max-w-md">
              A showcase of projects where I bring ideas to life through
              thoughtful design and development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-cyan-400/50 hover:-translate-y-2 transition duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-56 object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70" />

                  <span className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-slate-950/80 border border-white/10 text-cyan-300 text-sm font-semibold">
                    PROJECT {project.number}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-5 group-hover:text-cyan-300 transition">
                    {project.title}
                  </h3>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-cyan-400 font-semibold hover:text-purple-400 transition"
                  >
                    View Project
                    <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
};

export default Home;
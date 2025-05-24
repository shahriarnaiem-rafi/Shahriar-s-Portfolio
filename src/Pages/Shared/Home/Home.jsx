import React from "react";
import "../../../index.css";

const Home = () => {
  const projects = [
    {
      title: "Hotel Management System",
      image: "https://i.postimg.cc/15kT6PWY/Screenshot-26.png",
      link: "https://yourportfolio.com",
    },
    {
      title: "Online Course Management System",
      image: "https://i.postimg.cc/JhPPTWq8/Screenshot-28.png",
      link: "https://onlinecoursebyme.netlify.app/",
    },
    {
      title: "Courier Management System",
      image: "https://i.postimg.cc/QtYYMr9m/Screenshot-27.png",
      link: "http://shahriarn.iceiy.com/?i=1",
    },
  ];
  return (
    <>
      <section>
        <div className="hero bg-gradient-to-r from-teal-300 via-purple-300 to-pink-300 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse p-12 rounded-lg border-4 border-dashed animated-border">
            <div className="avatar">
              <div className="rounded-full">
                <img
                  src="https://i.ibb.co/Y7sbTyL7/Shahriar.png"
                  className="max-w-sm rounded-lg shadow-2xl my-img-style"
                />
              </div>
            </div>
            <div className="text-center lg:text-left max-w-lg">
              <h1 className="text-5xl font-bold mb-6">
                Welcome to My Portfolio!
              </h1>
              <p className="py-6">
                Hello! I'm Shahriar Naiem Rafi, a passionate web developer. I
                specialize in building fast, responsive websites and web apps.
                Explore my work and feel free to get in touch!
              </p>
              <a href="mailto:shahriarnaiemrafi94@gmail.com">
                <button className="btn btn-primary text-white py-2 px-6 mr-5 my-btn mb-2">
                  Hire Me
                </button>
              </a>
              <a href="/projects">
                {" "}
                <button className="btn btn-primary text-white py-2 px-6 my-btn">
                  See My Projects
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* skillls
       */}
      <section className="skills py-12">
        <h3 className="section-title text-center text-3xl font-semibold text-gray-800 mb-6">
          What I do
        </h3>
        <p className="section-description text-center text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
          I specialize in building responsive and user-friendly websites and web
          applications using modern web technologies. With a strong foundation
          in both front-end and back-end development, I’m able to create
          dynamic, data-driven applications that are both visually appealing and
          functionally robust.
        </p>
        <ul className="space-y-4 max-w-4xl mx-auto">
          <li className="skills text-lg text-gray-800 flex items-center space-x-3 transition transform hover:scale-105 hover:bg-gray-100 rounded-lg p-4">
            <i className="fas fa-laptop-code text-blue-600"></i>
            <strong className="font-semibold text-blue-600">
              Front-End Development:
            </strong>{" "}
            I create clean, responsive, and interactive user interfaces using
            HTML, CSS, JavaScript, and React.
          </li>
          <li className="skills text-lg text-gray-800 flex items-center space-x-3 transition transform hover:scale-105 hover:bg-gray-100 rounded-lg p-4">
            <i className="fas fa-server text-green-600"></i>
            <strong className="font-semibold text-blue-600">
              Back-End Development:
            </strong>{" "}
            I develop server-side applications with PHP and Laravel, ensuring
            smooth data handling and secure user interactions.
          </li>
          <li className="skills text-lg text-gray-800 flex items-center space-x-3 transition transform hover:scale-105 hover:bg-gray-100 rounded-lg p-4">
            <i className="fas fa-database text-orange-600"></i>
            <strong className="font-semibold text-blue-600">
              Database Management:
            </strong>{" "}
            I am proficient in working with MySQL, building optimized databases
            to support web applications.
          </li>
          <li className="skills text-lg text-gray-800 flex items-center space-x-3 transition transform hover:scale-105 hover:bg-gray-100 rounded-lg p-4">
            <i className="fas fa-code-branch text-purple-600"></i>
            <strong className="font-semibold text-blue-600">
              Full-Stack Development:
            </strong>{" "}
            I combine front-end and back-end skills to deliver complete web
            solutions tailored to client needs.
          </li>
        </ul>

        <p className="section-description text-center text-lg text-gray-600 mt-8 max-w-4xl mx-auto">
          Whether you need a custom website, a web app, or help with an ongoing
          project, I’m ready to take on challenges and deliver high-quality
          results.
        </p>

        <br />
        <div className="skills-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Skill 1: JavaScript */}
          <div className="skill text-center p-6 transition transform hover:scale-105 hover:bg-gray-100 rounded-lg shadow-md">
            <i className="fab fa-js-square text-yellow-600 text-5xl mb-4 "></i>{" "}
            {/* Font Awesome JS Icon */}
            <h4 className="skill-title text-xl font-semibold text-gray-900">
              JavaScript
            </h4>
            <p className="skill-description text-gray-600 text-sm">
              I create dynamic user experiences with JavaScript, including
              modern frameworks like React.
            </p>
          </div>
          {/* Skill 2: React */}
          <div className="skill text-center p-6 transition transform hover:scale-105 hover:bg-gray-100 rounded-lg shadow-md">
            <i className="fab fa-react text-blue-600 text-5xl mb-4"></i>{" "}
            {/* Font Awesome React Icon */}
            <h4 className="skill-title text-xl font-semibold text-gray-900">
              React Js
            </h4>
            <p className="skill-description text-gray-600 text-sm">
              I build powerful user interfaces with React, creating responsive
              and interactive web applications.
            </p>
          </div>
          {/* Skill 3: PHP */}
          <div className="skill text-center p-6 transition transform hover:scale-105 hover:bg-gray-100 rounded-lg shadow-md">
            <i className="fab fa-php text-blue-600 text-5xl mb-4"></i>{" "}
            {/* Font Awesome PHP Icon */}
            <h4 className="skill-title text-xl font-semibold text-gray-900">
              PHP
            </h4>
            <p className="skill-description text-gray-600 text-sm">
              I build server-side applications with PHP, ensuring secure and
              efficient back-end functionality.
            </p>
          </div>
          {/* Skill 4: Laravel */}
          <div className="skill text-center p-6 transition transform hover:scale-105 hover:bg-gray-100 rounded-lg shadow-md">
            <i className="fab fa-laravel text-red-600 text-5xl mb-4"></i>{" "}
            {/* Font Awesome Laravel Icon */}
            <h4 className="skill-title text-xl font-semibold text-gray-900">
              Laravel
            </h4>
            <p className="skill-description text-gray-600 text-sm">
              I use Laravel to create elegant and scalable back-end systems,
              delivering dynamic web solutions.
            </p>
          </div>
        </div>
      </section>

      {/* a summary of my resume  */}
      <section className="resume">
        <h3 className="section-title text-center text-3xl font-semibold text-gray-800 my-8">
          A summary of My Resume
        </h3>
        {/* Education Section */}
        <div className="resume-column max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg my-8">
          <h3 className="resume-column-title text-3xl font-semibold text-gray-800 mb-6">
            My Education
          </h3>
          {/* First Education Entry */}
          <div className="experience mb-6 p-4 bg-gray-50 rounded-lg shadow-md">
            <h4 className="experience-title text-2xl font-semibold text-gray-900">
              BSC in Computer Science &amp; Engineering
            </h4>
            <h5 className="experience-sub-title text-gray-600 text-sm mb-2">
              Bangladesh University of Business and Technology <br /> 2024 -
              Running...
            </h5>
          </div>
          {/* Second Education Entry */}
          <div className="experience mb-6 p-4 bg-gray-50 rounded-lg shadow-md">
            <h4 className="experience-title text-2xl font-semibold text-gray-900">
              Diploma in Computer Science &amp; Technology
            </h4>
            <h5 className="experience-sub-title text-gray-600 text-sm mb-2">
              Dhaka Polytechnic Institute <br /> 2019 - 2023
            </h5>
          </div>
        </div>
        <hr className="my-8 border-t-2 border-gray-300" />
        {/* Experience Section */}
        <div className="resume-column max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg my-8">
          <h3 className="resume-column-title text-3xl font-semibold text-gray-800 mb-6">
            My Experience
          </h3>
          {/* First Experience */}
          <div className="experience mb-6 p-4 bg-gray-50 rounded-lg shadow-md">
            <h4 className="experience-title text-2xl font-semibold text-gray-900">
              Trainee
            </h4>
            <h5 className="experience-sub-title text-gray-600 text-sm mb-2">
              IsDB-BISEW / 2024 - 2025 (460 hours)
            </h5>
            <div className="experience-description text-gray-700 text-base">
              I learned the following technologies during this field: Bootstrap,
              React.js, PHP, MySQL, Laravel.
            </div>
          </div>
          {/* Second Experience */}
          <div className="experience mb-6 p-4 bg-gray-50 rounded-lg shadow-md">
            <h4 className="experience-title text-2xl font-semibold text-gray-900">
              Intern in Java
            </h4>
            <h5 className="experience-sub-title text-gray-600 text-sm mb-2">
              Naztech.inc / 2023 - 2024 (4 months)
            </h5>
            <div className="experience-description text-gray-700 text-base">
              I learned the basics of Java programming in this company.
            </div>
          </div>
        </div>
        {/* CV Download Button Section */}
        <div className="text-center resume-download-cv my-8">
          <button className=" my-btn">
            
            <a
            target="_blank"
            className="btn "
            href="https://drive.google.com/file/d/1pNLJCq0xVTyraI6342Bf_dhEuVFFPGEy/view?usp=sharing"
          >
            Download CV
          </a>
          </button>
        </div>
      </section>

      <section>
        <section id="projects" className="bg-white dark:bg-gray-900 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                My Projects
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;

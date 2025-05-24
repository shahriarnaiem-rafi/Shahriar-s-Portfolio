import React from "react";

const Projects = () => {
  return (
    <>
      <section id="portfolio" className="py-16 bg-gray-100">
        <h3 className="section-title text-center text-3xl font-semibold text-gray-800 mb-6">
          My Projects
        </h3>
        <p className="section-description text-center text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
          Here are some of the projects I’ve worked on, showcasing my skills in
          web development and problem-solving.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Project 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <a
              href="https://i.ibb.co/wNs8nc55/Screenshot-5.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.ibb.co/wNs8nc55/Screenshot-5.png"
                alt="Online Course Management System"
                className="w-[300px] h-64 object-cover mx-auto"
              />
            </a>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Online Course Management System
              </h4>
              <p className="text-gray-600 mb-4">
                This is an online management system using Tailwind CSS and React
                js. I am currently working on this project and will integrate
                Laravel soon.
              </p>
              <a
                href="https://imagitechacademy.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                View Project
              </a>
            </div>
          </div>
          {/* Project 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <a
              href="https://i.ibb.co/RT7QzJbn/Screenshot-1.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.ibb.co/RT7QzJbn/Screenshot-1.png"
                alt="Hotel Management System"
                className="w-[300px] h-64 object-cover mx-auto"
              />
            </a>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Hotel Management System
              </h4>
              <p className="text-gray-600 mb-4">
                This is a hotel management system using React and Tailwind CSS.
                It is my latest project, and I will be adding Laravel
                integration soon.
              </p>
              <a
                href="https://grandpr0snr.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                View Project
              </a>
            </div>
          </div>
          {/* Project 3 */}
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            title="I do not upload this Project yet"
          >
            <a
              href="https://i.ibb.co/SX4snLQ6/Screenshot-6.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.ibb.co/SX4snLQ6/Screenshot-6.png"
                alt="Hotel2 Management System"
                className="w-[300px] h-64 object-cover mx-auto"
              />
            </a>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Hotel2 Management System
              </h4>
              <p className="text-gray-600 mb-4">
                A full-stack hotel management system using Laravel and Tailwind
                CSS. Admin and customer login details included for testing.
                user:admin@gmail.com pass:admin also for
                customer:customer@gmail.com pass: customer
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                View Project
              </a>
            </div>
          </div>
          {/* Project 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <a
              href="https://i.ibb.co/hJQ0zbQ5/Screenshot-2.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.ibb.co/hJQ0zbQ5/Screenshot-2.png"
                alt="Firsttrack Courier Service"
                className="w-[300px] h-64 object-cover mx-auto"
              />
            </a>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Firsttrack Courier Service
              </h4>
              <p className="text-gray-600 mb-4">
                This is a courier management system using Tailwind CSS,
                Bootstrap, JavaScript, MySQL, and PHP. You can track courier
                packages by ID (100).
              </p>
              <a
                href="http://shahriarn.iceiy.com/?i=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                View Project
              </a>
            </div>
          </div>
          {/* Project 5 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <a
              href="https://i.ibb.co/mrJWzd2L/Screenshot-3.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.ibb.co/mrJWzd2L/Screenshot-3.png"
                alt="Yammi Foods"
                className="w-[300px] h-64 object-cover mx-auto"
              />
            </a>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Yammi Foods
              </h4>
              <p className="text-gray-600 mb-4">
                A UI design for an e-commerce platform like TeastyTreats. Built
                with Tailwind CSS, Bootstrap, and JavaScript.
              </p>
              <a
                href="https://shahriarnaiem-rafi.github.io/Yammi-Foods/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                View Project
              </a>
            </div>
          </div>
          {/* Project 6 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <a
              href="https://i.ibb.co/k7Xyfhs/Screenshot-4.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.ibb.co/k7Xyfhs/Screenshot-4.png"
                alt="Donation For Flood"
                className="w-[300px] h-64 object-cover mx-auto"
              />
            </a>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Donation For Flood
              </h4>
              <p className="text-gray-600 mb-4">
                A donation website created for flood relief using Tailwind CSS
                and Bootstrap. Donations are tracked with an interactive UI.
              </p>
              <a
                href="https://shahriarnaiem-rafi.github.io/Donation-for-Flood/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

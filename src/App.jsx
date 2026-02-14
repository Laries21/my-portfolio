import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import profile from "./assets/ramesh.jpeg";
import projectImg from "./assets/project.png";

function App() {
  return (
    <div className="font-sans scroll-smooth">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-lg">Ramesh Balu</h1>
          <div className="hidden md:flex gap-6 text-gray-600">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a
              href="/Ramesh resume 2026_c.pdf"
              download
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <FaDownload /> Resume
            </a>


          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center bg-gradient-to-r from-blue-100 to-purple-200 pt-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
          <div>
            <span className="bg-blue-200 text-blue-800 px-4 py-1 rounded-full">
              Open to Full-time Opportunities
            </span>

            <h1 className="text-5xl font-bold mt-6">
              Ramesh Balu
            </h1>

            <h2 className="text-2xl text-gray-600 mt-3">
              Java Full Stack Developer (Fresher)
            </h2>

            <p className="text-gray-600 mt-4">
              Motivated and detail-oriented Btech Computer Science Engineering graduate seeking
              an entry-level opportunity to apply my knowledge in Java,
              Spring Boot, and Web Development.
            </p>

            <div className="flex gap-4 mt-6 items-center">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg"
              >
                Get in Touch
              </a>

              <a
                href="https://linkedin.com/in/rameshbalu21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={28} />
              </a>

              <a
                href="https://github.com/Laries21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={28} />
              </a>
            </div>

          </div>

          <motion.img
            initial={{ rotate: -5 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 1 }}
            src={profile}
            className="w-80 md:w-96 h-auto object-cover rounded-3xl shadow-2xl mx-auto md:mx-0"
          />
        </div>
      </section>
      {/* ================= ABOUT ================= */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-gray-500 mt-2">Get to know me better</p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left Side Text */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                I am a passionate fresher with a strong foundation in Java, SQL,
                HTML, CSS, and Spring Boot. I enjoy solving logical problems and
                building real-world applications.
              </p>

              <p>
                As a quick learner and self-motivated individual, I am eager to
                start my career in software development and contribute to a dynamic
                organization while continuously improving my technical skills.
              </p>

              <p>
                I believe in writing clean, efficient code and staying updated with
                the latest technologies and best practices in software development.
                I am excited to apply my academic knowledge to real-world projects
                and grow as a professional developer.
              </p>
            </div>

            {/* Right Side Cards */}
            <div className="space-y-6">

              {/* Career Objective */}
              <div className="bg-blue-100 p-6 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Career Objective</h3>
                <p className="text-gray-700 text-sm">
                  To obtain a challenging position as a Software Developer where I
                  can utilize my technical skills, enhance my knowledge, and grow
                  along with the organization.
                </p>
              </div>

              {/* Core Strengths */}
              <div className="bg-purple-100 p-6 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Core Strengths</h3>
                <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                  <li>Problem Solving & Logical Thinking</li>
                  <li>Quick Learner with Strong Fundamentals</li>
                  <li>Team Collaboration & Communication</li>
                  <li>Attention to Detail</li>
                </ul>
              </div>

              {/* Education */}
              <div className="bg-green-100 p-6 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Educational Background</h3>
                <p className="text-gray-700 text-sm">
                  Bachelor of Engineering in Computer Science with a strong
                  foundation in programming, data structures, and software
                  development principles.
                </p>
              </div>

            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">

            <div className="bg-blue-200 p-6 rounded-2xl">
              <h3 className="text-3xl font-bold text-blue-700">B.E.</h3>
              <p className="text-sm mt-2">Computer Science</p>
            </div>

            <div className="bg-purple-200 p-6 rounded-2xl">
              <h3 className="text-3xl font-bold text-purple-700">5+</h3>
              <p className="text-sm mt-2">Projects Completed</p>
            </div>

            <div className="bg-pink-200 p-6 rounded-2xl">
              <h3 className="text-3xl font-bold text-pink-600">8+</h3>
              <p className="text-sm mt-2">Technologies</p>
            </div>

            <div className="bg-green-200 p-6 rounded-2xl">
              <h3 className="text-3xl font-bold text-green-700">100%</h3>
              <p className="text-sm mt-2">Dedication</p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= EDUCATION ================= */}
      <section id="education" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Education</h2>
            <p className="text-gray-500 mt-2">My academic background</p>
          </div>

          {/* Degree Card */}
          <div className="bg-white p-8 rounded-2xl shadow-md border mb-12">

            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-4 rounded-xl">
                  🎓
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">
                    Bachelor of Engineering in Computer Science
                  </h3>
                  <p className="text-gray-500">Your College Name</p>
                </div>
              </div>

              <div className="text-gray-500 text-sm flex items-center gap-2">
                📅 2025
              </div>
            </div>

            <p className="text-gray-600 mb-4">
              Completed comprehensive coursework in programming, data structures,
              algorithms, database management, and software engineering principles.
            </p>

            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Strong foundation in Computer Science fundamentals</li>
              <li>Hands-on experience with Java and Web Development</li>
              <li>Completed various academic and personal projects</li>
              <li>Active participation in coding competitions and workshops</li>
            </ul>

          </div>

          {/* Bottom Two Cards */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Key Subjects */}
            <div className="bg-blue-50 p-8 rounded-2xl shadow-sm border">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  📘
                </div>
                <h3 className="text-xl font-semibold">Key Subjects</h3>
              </div>

              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Data Structures & Algorithms</li>
                <li>Object-Oriented Programming (Java)</li>
                <li>Database Management Systems</li>
                <li>Web Technologies</li>
                <li>Software Engineering</li>
              </ul>
            </div>

            {/* Technical Skills */}
            <div className="bg-purple-50 p-8 rounded-2xl shadow-sm border">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  🛠
                </div>
                <h3 className="text-xl font-semibold">Technical Skills Acquired</h3>
              </div>

              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Java Programming & OOP Concepts</li>
                <li>Spring Boot Framework</li>
                <li>SQL & Database Design</li>
                <li>Front-end Development (HTML, CSS, JS)</li>
                <li>Version Control (Git)</li>
              </ul>
            </div>

          </div>

        </div>
      </section>


      {/* ================= SKILLS ================= */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Title */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900">
              Skills & Expertise
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              Technologies and competencies I've developed
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Programming */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-6">
                Programming
              </h3>

              <SkillBar name="Java" level="85%" color="bg-blue-600" />
              <SkillBar name="OOP Concepts" level="80%" color="bg-blue-600" />
              <SkillBar name="Data Structures" level="75%" color="bg-blue-600" />
              <SkillBar name="JavaScript" level="70%" color="bg-blue-600" />
            </div>

            {/* Backend */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-6">
                Backend
              </h3>

              <SkillBar name="Spring Boot" level="80%" color="bg-purple-600" />
              <SkillBar name="REST API" level="78%" color="bg-purple-600" />
              <SkillBar name="JPA/Hibernate" level="75%" color="bg-purple-600" />
            </div>

            {/* Database */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-6">
                Database
              </h3>

              <SkillBar name="MySQL" level="82%" color="bg-green-600" />
              <SkillBar name="SQL Queries" level="85%" color="bg-green-600" />
              <SkillBar name="JDBC" level="78%" color="bg-green-600" />
            </div>

            {/* Frontend */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-pink-600 mb-6">
                Frontend
              </h3>

              <SkillBar name="HTML" level="85%" color="bg-pink-500" />
              <SkillBar name="CSS" level="80%" color="bg-pink-500" />
              <SkillBar name="JavaScript" level="70%" color="bg-pink-500" />
              <SkillBar name="Responsive Design" level="75%" color="bg-pink-500" />
            </div>

            {/* Tools */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-orange-600 mb-6">
                Tools
              </h3>

              <SkillBar name="Git" level="78%" color="bg-orange-500" />
              <SkillBar name="VS Code" level="85%" color="bg-orange-500" />
              <SkillBar name="Eclipse" level="80%" color="bg-orange-500" />
              <SkillBar name="Postman" level="75%" color="bg-orange-500" />
            </div>

            {/* Soft Skills */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-yellow-600 mb-6">
                Soft Skills
              </h3>

              <SkillBar name="Problem Solving" level="85%" color="bg-yellow-500" />
              <SkillBar name="Logical Thinking" level="82%" color="bg-yellow-500" />
              <SkillBar name="Quick Learner" level="90%" color="bg-yellow-500" />
              <SkillBar name="Team Collaboration" level="80%" color="bg-yellow-500" />
            </div>

          </div>
        </div>
      </section>


      {/* ================= FULL STACK COURSE ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-blue-50 p-8 rounded-2xl shadow-sm border">

            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <span className="text-blue-600 text-xl">💻</span>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Java Full Stack Development
                </h3>
                <p className="text-gray-500 text-sm">
                  Professional Training Program
                </p>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              Successfully completed full stack development training covering
              backend, frontend, and database technologies with hands-on project
              experience.
            </p>

            <div className="grid md:grid-cols-3 gap-8">

              <div>
                <h4 className="font-semibold mb-2">Backend</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Java Programming</li>
                  <li>Spring Boot Framework</li>
                  <li>REST API Development</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Frontend</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Database</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>MySQL</li>
                  <li>Database Design</li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </section>



      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-20 bg-gray-50">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
          <p className="text-gray-500 mt-3">
            Real-world applications I've built
          </p>
        </div>

        {/* Project Card */}
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

          <div className="grid md:grid-cols-2">

            {/* Left Image */}
            <div className="relative">
              <img
                src={projectImg}
                alt="Employee Management System"
                className="h-full w-full object-cover"
              />

              <span className="absolute bottom-4 left-4 bg-white px-4 py-1 rounded-full text-sm shadow">
                Web Application
              </span>
            </div>

            {/* Right Content */}
            <div className="p-10">

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Tattoo Shop Management System
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Developed a web-based Tattoo Shop Management System using Spring Boot and MySQL to manage customer bookings, artist schedules, and tattoo services.
                Implemented RESTful API architecture with JPA for smooth database integration and efficient appointment handling.
              </p>

              {/* Key Features */}
              <h4 className="font-semibold text-gray-700 mb-3">
                KEY FEATURES
              </h4>

              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ Add, Update, Delete Customer Bookings</li>
                <li>✓ Manage Tattoo Artists & Schedules</li>
                <li>✓ Service & Pricing Management</li>
                <li>✓ RESTful API Implementation</li>
                <li>✓ Database Integration using JPA</li>
                <li>✓ Input Validation & Error Handling</li>
              </ul>

              {/* Tech Stack */}
              <h4 className="font-semibold text-gray-700 mb-3">
                TECH STACK
              </h4>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">HTML</span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">CSS</span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">JavaScript</span>
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">Spring Boot</span>
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">Java</span>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">MySQL</span>
              </div>

              {/* Technologies */}
              <h4 className="font-semibold text-gray-700 mb-3">
                TECHNOLOGIES
              </h4>

              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">Spring Boot</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">MySQL</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">JPA</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">REST API</span>
                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">MVC</span>
              </div>

            </div>
          </div>
        </div>


        {/* GitHub Section */}
        <div className="max-w-4xl mx-auto mt-14 bg-blue-50 p-10 rounded-2xl text-center shadow">

          <p className="text-gray-700 mb-6">
            More projects and code samples available on my GitHub profile
          </p>

          <a
            href="https://github.com/Laries21"
            target="_blank"
            rel="noopener noreferrer"

            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            View GitHub Profile
          </a>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-100 to-purple-100">
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
            <p className="text-gray-600 mt-3">
              Let's connect and discuss opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT SIDE - CONTACT INFO */}
            <div className="space-y-8">

              <div>
                <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                <p className="text-gray-600">
                  I'm actively seeking entry-level opportunities in software development.
                  Feel free to reach out to discuss how I can contribute to your team.
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-4 rounded-xl">
                  📧
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:rameshbalu@gmail.com"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    rameshbalu@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-4 rounded-xl">
                  📞
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a
                    href="tel:+918943467149"
                    className="text-gray-600 hover:text-purple-600"
                  >
                    +91 8943467149
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="bg-pink-100 p-4 rounded-xl">
                  📍
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">Chennai,Tamil Nadu, India</p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-200 p-4 rounded-xl">
                  💼
                </div>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/rameshbalu21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    linkedin.com/in/rameshbalu21
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4">
                <div className="bg-gray-800 text-white p-4 rounded-xl">
                  🐱
                </div>
                <div>
                  <p className="font-semibold">GitHub</p>
                  <a
                    href="https://github.com/Laries21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    github.com/Laries21
                  </a>
                </div>
              </div>

              {/* Availability Card */}
              <div className="bg-white p-6 rounded-xl shadow-md mt-8">
                <h4 className="font-semibold mb-2">Availability</h4>
                <p className="text-gray-600">
                  Currently seeking full-time opportunities as a Java Full Stack Developer.
                </p>
                <p className="text-gray-500 mt-2">
                  Open to relocation • Available to join immediately
                </p>
              </div>

            </div>


            {/* RIGHT SIDE - CONTACT FORM */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">

              <form className="space-y-6">

                <div>
                  <label className="block mb-2 font-medium">Your Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Email Address</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    placeholder="Job Opportunity / Inquiry"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Tell me about the opportunity or your inquiry..."
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                >
                  ✈️ Send Message
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0b1c34] text-gray-300 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6">

          {/* Top Grid */}
          <div className="grid md:grid-cols-3 gap-12">

            {/* LEFT COLUMN */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-4">
                Ramesh Balu
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Java Full Stack Developer (Fresher) passionate about building
                scalable applications and continuously learning new technologies.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://github.com/Laries21"
                  target="_blank"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition"
                >
                  🐱
                </a>

                <a
                  href="https://linkedin.com/in/rameshbalu21"
                  target="_blank"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition"
                >
                  💼
                </a>

                <a
                  href="mailto:rameshbalu@gmail.com"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition"
                >
                  ✉️
                </a>

                <a
                  href="tel:+918943467149"
                  className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition"
                >
                  📞
                </a>

              </div>
            </div>

            {/* MIDDLE COLUMN */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#about" className="hover:text-white transition">About Me</a></li>
                <li><a href="#education" className="hover:text-white transition">Education</a></li>
                <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
                <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            {/* RIGHT COLUMN */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-4">
                Core Skills
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li>Java, advance Java & Spring Boot</li>
                <li>REST API Development</li>
                <li>MySQL & Database Design</li>
                <li>HTML, CSS, JavaScript</li>
                <li>Problem Solving</li>
                <li>Time management,quick learner,adaptability</li>
              </ul>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-10"></div>

          {/* Bottom Line */}
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2026 Ramesh Balu. All rights reserved.</p>
            <p>
              Made with <span className="text-red-500">❤️</span> by Ramesh Balu
            </p>

          </div>

        </div>
      </footer>


    </div>
  );
}
function SkillBar({ name, level, color }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span>{name}</span>
        <span>{level}</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${color} h-2 rounded-full`}
          style={{ width: level }}
        ></div>
      </div>
    </div>
  );
}

export default App;

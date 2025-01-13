const AboutMe = () => {
    return (
      <section id="about" className="py-16 bg-gray-900 text-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400">
            About Me
          </h2>
          <p className="mt-4 text-lg text-center text-gray-300">
            Hi! I'm Muhammad Umar Amjad, a passionate developer who designs and develops modern web and mobile applications.
          </p>
  
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-gray-100">
              <h3 className="text-xl font-semibold text-yellow-400">Skills</h3>
              <ul className="mt-4 space-y-2">
                <li>Frontend: React.js, Next.js, Tailwind CSS</li>
                <li>Backend: Node.js, Express.js, MongoDB</li>
                <li>Mobile Development: React Native, Expo</li>
                <li>Other Tools: Bubble.io, Flutterflow.io</li>
              </ul>
            </div>
  
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-gray-100">
              <h3 className="text-xl font-semibold text-yellow-400">What I Do</h3>
              <ul className="mt-4 space-y-2">
                <li>Build modern and scalable web applications with React.js and Next.js.</li>
                <li>Create cross-platform mobile apps using React Native and Expo.</li>
                <li>Design intuitive, responsive user interfaces with Tailwind CSS.</li>
                <li>Develop MVPs and deploy them on cloud platforms.</li>
              </ul>
            </div>
          </div>
  
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-yellow-400">Let's Work Together</h3>
            <p className="mt-4 text-lg text-gray-300">
              If you're looking for a developer to build something amazing, feel free to contact me. Let's bring your ideas to life!
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  
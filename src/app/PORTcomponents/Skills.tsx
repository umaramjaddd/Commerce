const Skills = () => {
    const skills = [
      { name: 'Next.js', description: 'Modern React framework for scalable web applications.' },
      { name: 'MERN Stack', description: 'Comprehensive solution for full-stack web development.' },
      { name: 'React Native', description: 'Build cross-platform mobile apps with React.' },
      { name: 'Bubble.io', description: 'Visual programming for web applications.' },
      { name: 'Flutterflow.io', description: 'Build beautiful apps with low-code tools.' },
    ];
  
    return (
      <section className="py-16 bg-gray-800 text-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400">
            My Expertise
          </h2>
          <p className="mt-4 text-lg text-center text-gray-300">
            Leveraging the latest tools and technologies to create impactful solutions.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 shadow-lg rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
              >
                <h3 className="text-2xl font-semibold">{skill.name}</h3>
                <p className="mt-2">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  
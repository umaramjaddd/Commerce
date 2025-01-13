const Projects = () => {
    const projects = [
      {
        title: 'Portfolio Website',
        description: 'A personal website to showcase my skills and projects.',
        link: 'https://example.com', // Replace with your actual portfolio link
        tools: ['Next.js', 'Tailwind CSS', 'TypeScript'],
        integrations: ['GitHub', 'Netlify'],
      },
      {
        title: 'E-commerce Store',
        description: 'An online store built with the MERN stack.',
        link: 'https://example.com',
        tools: ['React', 'Node.js', 'MongoDB', 'Express'],
        integrations: ['Stripe', 'PayPal'],
      },
      {
        title: 'Mobile App',
        description: 'A cross-platform mobile app built with React Native.',
        link: 'https://example.com',
        tools: ['React Native', 'Expo'],
        integrations: ['Firebase'],
      },
      {
        title: 'No-Code SaaS Application',
        description: 'A SaaS app built using Bubble.io, no-code platform.',
        link: 'https://example.com',
        tools: ['Bubble.io'],
        integrations: ['Zapier', 'Stripe'],
      },
    ];
  
    return (
      <section className="py-16 bg-gray-900 text-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-center text-gray-300">
            Explore some of the projects I've worked on, with detailed information on the technologies used and integrations.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-400 hover:text-gray-900"
              >
                <h3 className="text-2xl font-semibold text-gray-100 transition duration-300 ease-in-out transform group-hover:text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-300 group-hover:text-gray-900">{project.description}</p>
                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 underline"
                  >
                    Visit Project
                  </a>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">Tools Used:</h4>
                  <ul className="list-disc pl-6 text-gray-300 group-hover:text-gray-900">
                    {project.tools.map((tool, index) => (
                      <li key={index}>{tool}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold">Integrations:</h4>
                  <ul className="list-disc pl-6 text-gray-300 group-hover:text-gray-900">
                    {project.integrations.map((integration, index) => (
                      <li key={index}>{integration}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  
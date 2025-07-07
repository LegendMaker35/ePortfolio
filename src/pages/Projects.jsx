function Projects() {
  const projects = [
    {
      title: "Speed Typing Web App",
      description:
        "A responsive speed typing game built in JavaScript with real-time feedback, performance tracking, and Google Sign-In authentication.",
      tech: ["JavaScript", "HTML", "CSS", "Google Identity"],
      github: "https://github.com/LegendMaker35/speed-typing-game",
      demo: "https://speed-typing-game-fhra.onrender.com",
    },
    {
      title: "Java GUI + MySQL Client",
      description:
        "Multi-client GUI app using Java and JDBC, with role-based user auth, SQL execution, and detailed error handling.",
      tech: ["Java", "JDBC", "MySQL"],
      github: null,
      demo: null,
    },
    {
      title: "Personal Portfolio Website",
      description:
        "This very website! Built with React and Tailwind CSS, featuring routing, a live contact form connected to a Node.js + Express backend, and deployed using Vercel and Render.",
      tech: ["React", "Tailwind CSS", "Express", "Render", "Vercel"],
      github: {
        frontend: "https://github.com/LegendMaker35/eportfolio",
        backend: "https://github.com/LegendMaker35/eportfolio-api",
      },
      demo: "https://eportfolio-site.vercel.app",
    },
  ];

  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-mint mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-6 border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-mint mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-mint text-white text-sm px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap">
              {project.github &&
                typeof project.github === "string" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-mint hover:underline"
                  >
                    GitHub →
                  </a>
                )}
              {project.github &&
                typeof project.github === "object" && (
                  <>
                    <a
                      href={project.github.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-mint hover:underline"
                    >
                      Frontend →
                    </a>
                    <a
                      href={project.github.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-mint hover:underline"
                    >
                      Backend →
                    </a>
                  </>
                )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-mint hover:underline"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
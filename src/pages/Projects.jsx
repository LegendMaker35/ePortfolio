function Projects() {
  const projects = [
    {
      title: "Restaurant KPI Dashboard",
      description:
        "Designed an Excel-based dashboard simulating operational KPIs across multiple restaurant locations. Includes labor cost %, food cost %, transaction counts, and sales trends with actionable business insights.",
      tech: ["Excel", "Pivot Tables", "Charts", "KPI Analysis"],
      github: "https://github.com/LegendMaker35/Restaurant_KPI_Dashboard",
      demo: null,
    },
    {
      title: "Personal Portfolio Website",
      description:
        "This site. Custom-built with React and Tailwind CSS to present my resume, data background, and contact info. Includes a working contact form with backend email routing.",
      tech: ["React", "Tailwind CSS", "Express", "Render", "Vercel"],
      github: {
        frontend: "https://github.com/LegendMaker35/eportfolio",
        backend: "https://github.com/LegendMaker35/eportfolio-api",
      },
      demo: "https://e-portfolio-one-gold.vercel.app/",
    },
    {
      title: "SQL Access Platform (JSP + Tomcat)",
      description:
        "Designed a web-based SQL platform using JSP and Servlets, hosted on Apache Tomcat. Supported role-based access control, complex SQL execution with joins and limits, and business rule enforcement across multiple MySQL databases.",
      tech: ["Java", "JSP", "MySQL", "Tomcat", "SQL"],
      github: null,
      demo: null,
    },
    {
      title: "Speed Typing Performance Tracker",
      description:
        "A web app that tracks and displays real-time performance metrics (WPM, accuracy) using session data. Integrated Google authentication for personalized progress tracking.",
      tech: ["JavaScript", "HTML", "CSS", "Google Identity"],
      github: "https://github.com/LegendMaker35/speed-typing-game",
      demo: "https://speed-typing-game-fhra.onrender.com",
    },
    {
      title: "Multi-Client SQL Role System",
      description:
        "Built a multi-client Java GUI for role-based SQL access. Supported secure login, query execution, error handling, and business rule enforcement in MySQL.",
      tech: ["Java", "JDBC", "MySQL"],
      github: null,
      demo: null,
    },
  ];

  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-mint mb-6 text-center">Portfolio</h2>
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

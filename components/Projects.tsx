import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Portable AI Exercise Trainer",
      description:
        "Real-time AI fitness trainer using Computer Vision and Pose Estimation for form correction, repetition counting, and workout tracking.",
      tech: [
        "Python",
        "Streamlit",
        "OpenCV",
        "MediaPipe",
        "SQLite",
        "NumPy",
      ],
      github:
        "https://github.com/A471KK2/Portable-AI-Trainer",
      live: "https://a471kk2-portable-ai-trainer-main-5mewct.streamlit.app/",
    },

    {
      title: "AI Powered Creative Content Generator",
      description:
        "Generates AI text and AI images using Gemini and Stable Diffusion APIs with production-grade error handling.",
      tech: [
        "Python",
        "Streamlit",
        "Gemini",
        "Stable Diffusion",
        "Hugging Face",
      ],
      github:
        "https://github.com/A471KK2/AI-powered-creative-content-generator",
      live: "https://a471kk2-ai-powered-creative-content-generator-appui-yeq3m4.streamlit.app/",
    },
    
    {
      title: "BIReady Tally Data Processor",
      description:
        "Transform raw Tally ERP exports into clean, standardized and analytics-ready datasets. Automates data cleaning, anomaly detection, KPI generation and reporting workflows to accelerate business intelligence and reduce manual effort.",
      tech: [
        "Streamlit",
        "Pandas",
        "NumPy",
        "Plotly",
        "KPI Engine",
        "Anomaly Detection",
        "OpenPyXL",
        "AgGrid"
      ],
      github:
        "https://github.com/A471KK2/BIready-Tally",
      live:
        "https://biready-tally-saepmkusqmjbtcjh9km74p.streamlit.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-12">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border p-6"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-muted-foreground mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border px-3 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

                <div className="flex gap-4">
                    <a
                        href={project.github}
                        target="_blank"
                        className="flex items-center gap-2 border rounded-lg px-4 py-2"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                    {project.live !== "#" && (
                        <a
                            href={project.live}
                            target="_blank"
                            className="rounded-lg border px-4 py-2"
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        ))}
      </div>
    </section>
  );
}
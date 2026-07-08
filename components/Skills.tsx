export default function Skills() {
  const skillGroups = [
    {
      title: "AI-Assisted Development",
      skills: [
        "ChatGPT",
        "Claude",
        "Gemini",
        "Prompt Engineering",
        "AI Research",
        "AI Debugging",
      ],
    },

    {
      title: "Data & Analytics",
      skills: [
        "Excel",
        "Power BI",
        "Tableau",
        "Data Cleaning",
        "Data Visualization",
        "Reporting",
      ],
    },

    {
      title: "Application Building",
      skills: [
        "Python",
        "Streamlit",
        "GitHub",
        "Vercel",
        "Project Deployment",
      ],
    },

    {
      title: "Professional Skills",
      skills: [
        "Requirement Analysis",
        "Problem Solving",
        "Testing",
        "Documentation",
        "Rapid Prototyping",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-12">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-xl border p-6"
          >
            <h3 className="font-semibold text-xl mb-4">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border px-3 py-1 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
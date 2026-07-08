export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      specialization: "Computer Science Engineering (Data Science)",
      institution:
        "Shri Ramdeobaba College of Engineering and Management, Nagpur",
      status: "Completed",
      score: "CGPA: 7.84 / 10",
    },
    {
      degree: "Diploma",
      specialization: "Electronics and Telecommunication Engineering",
      institution: "G. H. Raisoni Polytechnic, MIDC, Nagpur",
      status: "Completed",
      score: "Percentage: 88.65%",
    },
    {
      degree: "Secondary School (10th)",
      specialization: "English Medium",
      institution:
        "Maharashtra State Board of Secondary and Higher Secondary Education",
      status: "Completed",
    },
  ];

  return (
    <section
      id="education"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-12">
        Education
      </h2>

      <div className="space-y-8">
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="rounded-2xl border p-6 hover:shadow-lg transition"
          >
            <div className="flex flex-col md:flex-row md:justify-between mb-3">
              <h3 className="text-2xl font-semibold">
                {edu.degree}
              </h3>

              <span className="text-muted-foreground">
                {edu.status}
              </span>
            </div>

            <p className="font-medium text-lg mb-2">
              {edu.specialization}
            </p>
            
            {edu.score && (
                <p className="font-semibold text-primary mb-3">
                    {edu.score}
                </p>
            )}
            <p className="text-muted-foreground">
              {edu.institution}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
// export default function Experience() {
//   const experiences = [
//     {
//       role: "Data Science Intern",
//       company: "Prodigy InfoTech",
//       duration: "Jun 2024 (1 Month)",

//       description: [
//         "Developed Python scripts for data preprocessing, validation, and transformation.",
//         "Wrote SQL queries and supported analytics workflows for business reporting.",
//         "Built dashboards and reports for data-driven decision-making insights.",
//         "Collaborated on troubleshooting data inconsistencies and workflow issues.",
//         "Translated business requirements into actionable technical solutions.",
//       ],

//       certificate:
//         "YOUR_CERTIFICATE_LINK",

//       credentials:
//         "YOUR_GOOGLE_DRIVE_FOLDER_LINK",
//     },
//   ];

//   return (
//     <section
//       id="experience"
//       className="max-w-6xl mx-auto px-6 py-24"
//     >
//       <h2 className="text-4xl font-bold mb-12">
//         Experience
//       </h2>

//       <div className="space-y-8">
//         {experiences.map((exp) => (
//           <div
//             key={exp.company}
//             className="rounded-2xl border p-8 hover:shadow-lg transition"
//           >
//             <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
//               <div>
//                 <h3 className="text-2xl font-semibold">
//                   {exp.role}
//                 </h3>

//                 <p className="text-lg text-muted-foreground">
//                   {exp.company}
//                 </p>
//               </div>

//               <span className="rounded-full border px-4 py-2 text-sm w-fit mt-3 md:mt-0">
//                 {exp.duration}
//               </span>
//             </div>

//             <ul className="list-disc pl-6 space-y-3 mb-8 text-muted-foreground">
//               {exp.description.map((item) => (
//                 <li key={item}>
//                   {item}
//                 </li>
//               ))}
//             </ul>

//             <div className="flex flex-wrap gap-4">

//               <a
//                 href={"https://drive.google.com/file/d/1zvAyk_k_m6kC1RE82D6AoY9BPxaEt2Bn/view?usp=sharing"}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="rounded-lg border px-4 py-2 hover:bg-muted transition"
//               >
//                 View Certificate
//               </a>

//               <a
//                 href={"https://drive.google.com/drive/folders/1pPiY3nFEQ-SG0v8M9bICPX2b3uo1bD3u?usp=sharing"}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="rounded-lg border px-4 py-2 hover:bg-muted transition"
//               >
//                 View Credentials
//               </a>

//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  status: string;
  description: string[];
  certificate?: string;
  credentials?: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: "AI & Business Analytics Intern",
      company: "Darwin MedTech",
      duration: "Jun 2026 – Present",
      status: "Ongoing",

      description: [
        "Currently working remotely as an AI & Business Analytics Intern.",
        "Contributing to AI-assisted business analytics and reporting activities under professional guidance.",
        "Developing practical experience with AI-assisted workflows, business analytics, and problem-solving.",
        "Specific project details will be shared after the internship concludes in accordance with company confidentiality policies.",
      ],

      certificate: "",
      credentials: "",
    },

    {
      role: "Data Science Intern",
      company: "Prodigy InfoTech",
      duration: "Jun 2024 (1 Month)",
      status: "Completed",

      description: [
        "Developed Python scripts for data preprocessing, validation, and transformation.",
        "Wrote SQL queries and supported analytics workflows for business reporting.",
        "Built dashboards and reports for data-driven decision-making insights.",
        "Collaborated on troubleshooting data inconsistencies and workflow issues.",
        "Translated business requirements into actionable technical solutions.",
      ],

      certificate:
        "https://drive.google.com/file/d/1zvAyk_k_m6kC1RE82D6AoY9BPxaEt2Bn/view?usp=sharing",

      credentials:
        "https://drive.google.com/drive/folders/1pPiY3nFEQ-SG0v8M9bICPX2b3uo1bD3u?usp=sharing",
    },
  ];

  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-12">
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <div
            key={`${exp.company}-${exp.role}`}
            className="rounded-2xl border p-8 hover:shadow-lg transition"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
              <div>
                <h3 className="text-2xl font-semibold">
                  {exp.role}
                </h3>

                <p className="text-lg text-muted-foreground">
                  {exp.company}
                </p>
              </div>

              <div className="text-left md:text-right mt-3 md:mt-0">
                <span className="rounded-full border px-4 py-2 text-sm">
                  {exp.status}
                </span>

                <p className="text-sm text-muted-foreground mt-2">
                  {exp.duration}
                </p>
              </div>
            </div>

            <ul className="list-disc pl-6 space-y-3 mb-8 text-muted-foreground">
              {exp.description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {(exp.certificate || exp.credentials) && (
              <div className="flex flex-wrap gap-4">
                {exp.certificate && (
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border px-4 py-2 hover:bg-muted transition"
                  >
                    View Certificate
                  </a>
                )}

                {exp.credentials && (
                  <a
                    href={exp.credentials}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border px-4 py-2 hover:bg-muted transition"
                  >
                    View Credentials
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
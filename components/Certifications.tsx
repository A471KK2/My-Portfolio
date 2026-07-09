export default function Certifications() {
  const certifications = [
    {
      title: "AWS Academy Cloud Virtual Internship",
      issuer: "AWS Academy",
      link: "https://drive.google.com/drive/folders/1KwrNdUtlfkTj3-YdLeY7wYbVXDzkscfZ?usp=sharing",
    },
    {
      title: "Google AI/ML Virtual Internship",
      issuer: "Google for Developers",
      link: "https://drive.google.com/file/d/1t5-ksQb_szFr5zgs-B-g_vyy4e9Fm4Ze/view?usp=sharing",
    },
    {
      title: "Altair Data Science Master Internship",
      issuer: "Altair",
      link: "https://drive.google.com/file/d/1i18c0OAmdKhRNLRu9OQQWMUNSizB5s82/view?usp=sharing",
    },
  ];

  const badges = [
    {
      title: "Credly Badges",
      description:
        "Professional credentials, certifications, and achievement badges.",
      link: "https://www.credly.com/users/kunal-kothe.7954d07e/badges/credly",
    },
    {
      title: "Salesforce Trailhead",
      description:
        "Trailhead badges, learning paths, and Salesforce achievements.",
      link: "https://www.salesforce.com/trailblazer/gd12txma46tbijsb5g",
    },
  ];

  return (
    <section
      id="certifications"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-12">
        Certifications & Badges
      </h2>

      {/* Certificates */}

      <h3 className="text-2xl font-semibold mb-6">
        Certifications
      </h3>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="rounded-2xl border p-6"
          >
            <h4 className="font-semibold mb-3">
              {cert.title}
            </h4>

            <p className="text-muted-foreground mb-4">
              {cert.issuer}
            </p>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg border px-4 py-2 text-sm"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>

      {/* Badges */}

      <h3 className="text-2xl font-semibold mb-6">
        Professional Profiles
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        {badges.map((badge) => (
          <div
            key={badge.title}
            className="rounded-2xl border p-6"
          >
            <h4 className="font-semibold mb-3">
              {badge.title}
            </h4>

            <p className="text-muted-foreground mb-4">
              {badge.description}
            </p>

            <a
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg border px-4 py-2 text-sm"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
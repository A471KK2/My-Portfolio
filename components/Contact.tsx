import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">
        Contact Me
      </h2>

      <div className="max-w-3xl mx-auto rounded-2xl border p-8">

        <p className="text-center text-muted-foreground mb-10">
          Interested in collaborating on AI, Machine Learning,
          Full Stack, or Freelance projects?
          Feel free to reach out.
        </p>

        <div className="space-y-6">

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=k2offiz@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Kunal,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border rounded-xl p-4 hover:bg-muted transition"
          >
            <Mail size={20} />
            <span>Email me</span>
          </a>

          <a
            href="https://www.linkedin.com/in/kunal-kothe-61a71a194/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border rounded-xl p-4 hover:bg-muted transition"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn Profile</span>
          </a>

          {/* <a
            href="https://github.com/A471KK2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border rounded-xl p-4 hover:bg-muted transition"
          >
            <FaGithub size={20} />
            <span>GitHub Profile</span>
          </a> */}

          <div className="flex items-center gap-4 border rounded-xl p-4">
            <MapPin size={20} />
            <span>Nagpur, Maharashtra, India</span>
          </div>

        </div>
      </div>
    </section>
  );
}
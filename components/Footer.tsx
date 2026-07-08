import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h3 className="font-bold text-xl">
              Kunal Kothe
            </h3>

            <p className="text-muted-foreground text-sm mt-2">
              Data Science Graduate • AI-Assisted Product Builder
            </p>
          </div>

          <div className="flex gap-6 text-muted-foreground">

            <a
              href="https://github.com/A471KK2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={35} />
            </a>

            {/* <a
              href="YOUR_LINKEDIN_URL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={22} />
            </a> */}

            {/* <a
              href="mailto:YOUR_EMAIL"
            >
              <Mail size={22} />
            </a> */}

          </div>

        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kunal Kothe. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
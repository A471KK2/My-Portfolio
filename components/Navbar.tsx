export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur border-b bg-background/80 z-50">
      <div className="w-full px-8 md:px-16 lg:px-24 h-20 flex items-center justify-between">

        <div className="font-black text-3xl">
          KK
        </div>

        <div className="flex gap-8 text-sm font-medium">

          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>

          <a href="#experience" className="hover:text-blue-400 transition">
            Experience
          </a>

          <a href="#skills" className="hover:text-blue-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>

          <a href="#education" className="hover:text-blue-400 transition">
            Education
          </a>

          <a
            href="#certifications"
            className="hover:text-blue-400 transition"
          >
            Certificates
          </a>

          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}
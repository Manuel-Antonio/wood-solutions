import { useEffect, useState } from "preact/hooks";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      class={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-colors duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div class="max-w-4xl xl:max-w-5xl mx-auto flex items-center justify-between">
        <a href="/" class="flex items-center">
          <img
            class={`w-32 h-auto transition-transform duration-300 ${
              isScrolled ? "scale-90" : "scale-100"
            }`}
            src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Horizontal_Logo.png"
            alt="Logo"
          />
        </a>

        <nav class="hidden md:flex space-x-8">
          <a href="/" class="nav-link">Hogar</a>
          <a href="/about" class="nav-link">Acerca</a>
          <a href="/services" class="nav-link">Servicios</a>
          <a href="/contact" class="nav-link">Contactar</a>
          <a href="/question" class="nav-link">FAQ</a>
          <a href="/projects" class="nav-link">Proyectos</a>
        </nav>

        <button
          id="menu-toggle"
          class="md:hidden flex items-center focus:outline-none"
          onClick={toggleMenu}
        >
          <i class="fa-solid fa-bars text-3xl text-gray-700"></i>
        </button>

        {isMenuOpen && (
          <div
            id="mobile-menu"
            class="fixed inset-0 bg-white shadow-lg py-4 px-6 flex flex-col items-center space-y-4 transition-transform duration-300 transform translate-y-0"
          >
            <button
              class="self-end text-3xl text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              <i class="fa-solid fa-times"></i>
            </button>
            <a href="/" class="nav-link" onClick={toggleMenu}>Hogar</a>
            <a href="/about" class="nav-link" onClick={toggleMenu}>Acerca</a>
            <a href="/services" class="nav-link" onClick={toggleMenu}>Servicios</a>
            <a href="/contact" class="nav-link" onClick={toggleMenu}>Contactar</a>
            <a href="/question" class="nav-link" onClick={toggleMenu}>FAQ</a>
            <a href="/projects" class="nav-link" onClick={toggleMenu}>Proyectos</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

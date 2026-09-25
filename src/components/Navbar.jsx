

function Navbar({ darkMode, setDarkMode }) {

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">

      <div className="nav-container">

        <div className="nav-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>

        </div>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
        >
          {darkMode ? "☀ Day Mode" : "🌙 Night Mode"}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
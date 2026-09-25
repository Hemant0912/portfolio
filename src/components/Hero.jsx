function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        {/* Left side */}
        <div className="hero-content">

          <p className="hero-greeting">
            Hi, I'm Hemant Vishwakarma
          </p>

          <h1>
  Software
  <br />
  <span>Engineer.</span>
</h1>

   <p className="hero-description">
  I build scalable and reliable software with a focus on clean
  architecture, performance, and real-world applications.
  I enjoy solving complex problems and turning ideas into
  efficient and maintainable digital experiences.
</p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              View My Work
              <span>→</span>
            </a>

            <a
  href="/resume.pdf"
  className="secondary-button"
  download="Hemant_Vishwakarma_Resume.pdf"
>
  Download Resume
</a>

          </div>
        </div>


        {/* Right side */}
        <div className="hero-visual">

          <div className="code-card">

            <div className="code-header">

              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <p>SoftwareEngineer.java</p>

            </div>


            <div className="code-content">

              <p>
                <span className="keyword">public</span>{" "}
                <span className="keyword">class</span>{" "}
                <span className="class-name">
  SoftwareEngineer
</span>{" "}
                {"{"}
              </p>

              <p className="indent">
  <span className="keyword">String</span>{" "}
  role ={" "}
  <span className="string">
    "Software Engineer"
  </span>
  ;
</p>

<p className="indent">
  <span className="keyword">String</span>{" "}
  focus ={" "}
  <span className="string">
    "Scalable Applications"
  </span>
  ;
</p>

<p className="indent">
  <span className="keyword">String</span>{" "}
  mindset ={" "}
  <span className="string">
    "Problem Solver"
  </span>
  ;
</p>

              <p className="indent">
                <span className="keyword">boolean</span>{" "}
                productionReady ={" "}
                <span className="boolean">
                  true
                </span>
                ;
              </p>

              <p>{"}"}</p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
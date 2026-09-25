function Experience() {
  return (
    <section id="experience" className="experience section">

      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">EXPERIENCE</p>

          <h2>
            Where I've
            <span> worked.</span>
          </h2>
        </div>


        {/* ================= IPSATOR ================= */}

        <div className="experience-card">

          <div className="experience-header">

            <div>
              <h3>Software Intern</h3>

              <a
                href="https://ipsator.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="company company-link"
              >
                Ipsator ↗
              </a>
            </div>

            <p className="experience-date">
              Aug 2025 – Aug 2026
            </p>

          </div>


          <p className="experience-description">
            Worked as a Java Backend Developer on the IRCTC
            Lakshadweep ticketing platform, contributing to
            production backend systems and APIs.
          </p>


          <ul className="experience-points">

            <li>
              Developed and maintained REST APIs using Java
              and Spring Boot.
            </li>

            <li>
              Worked with PostgreSQL and optimized database
              queries for application workflows.
            </li>

            <li>
              Contributed to booking, manual booking,
              waitlist, payment and reporting features.
            </li>

            <li>
              Implemented schedulers, migrations, validations
              and production bug fixes.
            </li>

            <li>
              Worked with Git, API testing and deployment
              workflows in a collaborative development
              environment.
            </li>

          </ul>


          <div className="experience-tech">

            <span className="tech-java">Java</span>
            <span className="tech-spring">Spring Boot</span>
            <span className="tech-postgres">PostgreSQL</span>
            <span className="tech-api">REST APIs</span>
            <span className="tech-git">Git</span>

          </div>

        </div>


        {/* ================= LAAT ================= */}

        <div className="experience-card">

          <div className="experience-header">

            <div>
              <h3>Analyst Intern</h3>

              <a
                href="https://www.laat.ac.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="company company-link"
              >
                London Academy For Applied Technology ↗
              </a>
            </div>

            <p className="experience-date">
              Jul 2024 – Aug 2024
            </p>

          </div>


          <p className="experience-description">
            Worked with a cross-functional development team
            on live software projects, contributing to
            module design, implementation and delivery.
          </p>


          <ul className="experience-points">

            <li>
              Collaborated with a cross-functional development
              team on module design and implementation.
            </li>

            <li>
              Supported module development and delivery
              coordination while working closely with the team.
            </li>

          </ul>


          <div className="experience-tech">

            <span className="tech-java">Java</span>
            <span className="tech-git">Git</span>
            <span className="tech-api">Development</span>
            <span className="tech-spring">Team Collaboration</span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;
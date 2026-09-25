function Projects() {
  return (
    <section id="projects" className="projects section">

      <div className="section-container">

        <div className="section-heading">

          <p className="section-label">
            PROJECTS
          </p>

          <h2>
            Things I've
            <span> built.</span>
          </h2>

        </div>


        <div className="projects-grid">


          {/* PROJECT 01 */}
          <article className="project-card">

            <div className="project-number">
              01
            </div>

            <h3>
              IRCTC Lakshadweep Ticketing Platform
            </h3>

            <p>
              Contributed to backend development of a production
              ticket booking platform, working on booking workflows,
              REST APIs, database operations, waitlist functionality,
              reports and payment-related services.
            </p>

            <div className="project-tech">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>PostgreSQL</span>
              <span>REST API</span>
            </div>

          </article>


          {/* PROJECT 02 */}
          <article className="project-card">

            <div className="project-number">
              02
            </div>

            <div className="project-type">
            </div>

            <h3>
              Scientific Engineering Works
            </h3>

            <p>
              Designed and developed a responsive business website
              with product information, contact details, catalogue
              access and interactive UI features for a real-world
              business.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Responsive Design</span>
            </div>

          </article>


          {/* PROJECT 03 */}
          <article className="project-card">

            <div className="project-number">
              03
            </div>

            <div className="project-type">
              PERSONAL PROJECT
            </div>

            <h3>
              AllergyLens — AI-Powered Food Allergy & Nutrition Analysis Platform
            </h3>

            <p>
              Architected an AI-powered food safety platform using
              Spring Boot 4, Java 21, PostgreSQL and Google Gemini AI.
              Built multi-image scanning, allergy detection, nutrition
              analysis, health scoring and an AI-powered food assistant.
            </p>

            <div className="project-tech">
              <span>Java</span>
              <span>Spring Boot 4</span>
              <span>Java 21</span>
              <span>PostgreSQL</span>
              <span>Google Gemini AI</span>
              <span>REST API</span>
            </div>

          </article>


          {/* PROJECT 04 */}
          <article className="project-card">

            <div className="project-number">
              04
            </div>

            <div className="project-type">
              PERSONAL PROJECT
            </div>

            <h3>
              E-commerce Backend System
            </h3>

            <p>
              Built a full-featured e-commerce backend using Java
              and Spring Boot with RESTful APIs for users, merchants,
              products and orders. Integrated Temporal for order
              processing, payment tracking and refund handling.
              Implemented Redis rate limiting, pagination and
              circuit breaker patterns.
            </p>

            <div className="project-tech">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>REST API</span>
              <span>PostgreSQL</span>
              <span>Temporal</span>
              <span>Redis</span>
            </div>

          </article>


        </div>

      </div>

    </section>
  );
}

export default Projects;
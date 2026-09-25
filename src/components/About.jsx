function About() {
  return (
    <section id="about" className="about section">

      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">ABOUT ME</p>

          <h2>
            Building software with
            <span> purpose.</span>
          </h2>
        </div>


        <div className="about-grid">

          <div className="about-text">

            <p>
              I'm Hemant Vishwakarma, a Computer Science graduate
              and Software Engineer with hands-on experience in
              Java backend development and production applications.
            </p>

            <p>
              During my internship at Ipsator, I worked on the
              IRCTC Lakshadweep ticketing platform, where I
              contributed to REST APIs, database operations,
              booking workflows, reports, schedulers, and
              production-focused backend features.
            </p>

            <p>
              I enjoy solving real-world engineering problems,
              improving application performance, and building
              reliable software that is easy to maintain.
            </p>

          </div>


          <div className="about-highlights">

            <div className="highlight-card">
              <span>01</span>
              <h3>Backend Development</h3>
              <p>
                Java, Spring Boot, REST APIs and database-driven
                applications.
              </p>
            </div>


            <div className="highlight-card">
              <span>02</span>
              <h3>Production Experience</h3>
              <p>
                Worked on real-world ticketing and booking
                systems.
              </p>
            </div>


            <div className="highlight-card">
              <span>03</span>
              <h3>Problem Solving</h3>
              <p>
                Focused on clean code, performance and
                maintainable solutions.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
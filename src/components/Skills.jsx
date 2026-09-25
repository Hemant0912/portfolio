function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "JavaScript", "Python"]
    },
    {
      title: "Backend & Frameworks",
      skills: [
        "Spring Boot",
        "Spring MVC",
        "REST APIs",
        "Node.js",
        "Express.js"
      ]
    },
    {
      title: "Web",
      skills: ["React.js", "HTML", "CSS"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "SQL"]
    },
    {
      title: "Cloud & Tools",
      skills: [
        "AWS",
        "Git",
        "GitHub",
        "IntelliJ IDEA",
        "VS Code",
        "Postman"
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">

      <div className="section-container">

        <div className="section-heading">

          <p className="section-label">
            SKILLS
          </p>

          <h2>
            My technical
            <span> toolkit.</span>
          </h2>

        </div>


        <div className="skills-categories">

          {skillCategories.map((category) => (

            <div className="skill-category" key={category.title}>

              <h3>
                {category.title}
              </h3>

              <div className="skill-items">

                {category.skills.map((skill) => (

                  <div
                    className="skill-card"
                    key={skill}
                  >
                    {skill}
                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;
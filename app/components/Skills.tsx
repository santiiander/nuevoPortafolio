export default function Skills() {
  const skills = [
    "Python",
    "Java",
    "JavaScript (Node.js)",
    "PHP",
    "C",
    "C#",
    "Flask",
    "Spring",
    "JDev",
    "MySQL",
    "MariaDB",
    "Scrum",
    "Kanban",
    "MVC",
    "Git",
    "GitHub",
    "APIs REST",
    "Optimización de código",
    "Integración de sistemas",
  ]

  return (
    <section id="skills" className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}


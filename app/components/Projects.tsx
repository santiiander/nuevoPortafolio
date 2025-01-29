import Image from "next/image"

const projects = [
  {
    title: "PaperK Store",
    description: "Galeria de proyectos de origami para descargar, con registro, validación y son la posibilidad de poder publicar proyectos propios",
    image: "2.PNG",
    link: "https://proyectpaperk.store/",
  },
  {
    title: "Pomos",
    description: "Pomodoro con multitarea",
    image: "3.PNG",
    link: "https://pomos-eight.vercel.app/",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mb-16">
      <h2 className="section-title">Proyectos</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
              Ver proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}


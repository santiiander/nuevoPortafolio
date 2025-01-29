import { GitlabIcon as GitHub, Mail, Phone, Video, FileText } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "CV.pdf"
    link.download = "Santiago_Andermatten_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <section className="text-center mb-16">
      <div className="mb-8">
        <Image
          src="IMG_20241207_201600396.JPG"
          alt="Santiago con su perrita y novia"
          width={300}
          height={300}
          className="rounded-full mx-auto border-4 border-primary"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4 text-primary">Santiago Andermatten</h1>
      <p className="text-xl mb-6 text-secondary-foreground">Full Stack Developer</p>
      <p className="mb-6">Villa María, Córdoba</p>
      <div className="flex justify-center space-x-4 mb-8">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center">
              <Video className="mr-2" /> Presentación
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="present.mp4"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </DialogContent>
        </Dialog>
        <Button variant="outline" className="flex items-center" onClick={handleDownloadCV}>
          <FileText className="mr-2" /> Descargar CV
        </Button>
      </div>
      <div className="flex justify-center space-x-4 mb-8">
        <a
          href="https://github.com/santiiander"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center btn"
        >
          <GitHub className="mr-2" /> GitHub
        </a>
        <a href="mailto:santiagoandermattendev@gmail.com" className="flex items-center btn">
          <Mail className="mr-2" /> Email
        </a>
        <a href="tel:+543472468850" className="flex items-center btn">
          <Phone className="mr-2" /> +54 3472 468850
        </a>
      </div>
      <p className="max-w-2xl mx-auto">
        Técnico en Electrónica y Técnico Superior en Programación con una sólida formación en desarrollo de software y
        sistemas informáticos. Especializado en la creación de arquitecturas backend escalables y eficientes,
        priorizando la documentación y la comprensión del código. Con interés en tecnologías frontend para el desarrollo
        integral de aplicaciones modernas.
      </p>
    </section>
  )
}


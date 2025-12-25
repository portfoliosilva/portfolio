import { Heart } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{"Sobre Mim"}</h2>

        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p className="text-lg leading-relaxed">
            {"Olá! Sou um programador apaixonado por tecnologia, com "}
            <strong className="text-foreground">{"5 anos de experiência em Lua"}</strong>
            {
              ". Moro em São Paulo, Brasil, e tenho dedicado minha carreira ao desenvolvimento de soluções criativas e eficientes."
            }
          </p>

          <p className="text-lg leading-relaxed">
            {"Minha jornada no mundo da programação me levou a trabalhar em projetos desafiadores, desde "}
            <strong className="text-foreground">{"AntiCheats para jogos famosos"}</strong>
            {" até o desenvolvimento de sites profissionais. Cada projeto é uma oportunidade de aprender e crescer."}
          </p>

          <div className="flex items-start gap-3 p-6 bg-accent/10 border-l-4 border-accent rounded-lg mt-8">
            <Heart className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <p className="text-lg leading-relaxed m-0">
              {"Sou evangélico e "}
              <strong className="text-foreground">{"amo Jesus Cristo"}</strong>
              {
                ". Minha fé guia não apenas minha vida pessoal, mas também minha ética profissional e a forma como me relaciono com as pessoas."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Briefcase, Code, Shield, ShoppingBag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    icon: Shield,
    title: "AntiCheats para Jogos",
    description:
      "Desenvolvimento de sistemas de segurança avançados para proteger jogos famosos contra hackers e cheaters.",
  },
  {
    icon: Code,
    title: "Desenvolvedor Roblox",
    description:
      "Trabalhei com equipes de desenvolvimento de jogos no Roblox, criando experiências envolventes e scripts complexos.",
  },
  {
    icon: Briefcase,
    title: "Semiwork (Jogo Repo)",
    description:
      "Prestei serviços para a empresa Semiwork, contribuindo para projetos de grande escala no universo dos jogos.",
  },
  {
    icon: ShoppingBag,
    title: "Loja de Importação",
    description:
      "Empreendi no ramo de importação de roupas das marcas NIKE, PUMA e ADIDAS, gerenciando todo o processo.",
  },
]

export function Experience() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{"Experiência"}</h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          {"Projetos e empresas com as quais trabalhei"}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <exp.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{exp.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-card border border-border rounded-lg">
          <h3 className="font-semibold text-xl mb-4">{"Habilidades Técnicas"}</h3>
          <div className="flex flex-wrap gap-3">
            {["Lua", "Web Development", "AntiCheat Systems", "Roblox Scripting", "Game Development", "E-commerce"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

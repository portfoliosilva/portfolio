import { Plane, MapPinned, Star } from "lucide-react"

export function Dreams() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{"Sonhos & Aspirações"}</h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">{"O futuro que estou construindo"}</p>

        <div className="space-y-6">
          <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
            <Plane className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-xl mb-2">{"Morar no Exterior"}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"Meu maior sonho é ir morar na "}
                <strong className="text-foreground">{"Irlanda ou nos Estados Unidos"}</strong>
                {", onde posso continuar crescendo profissionalmente e vivenciar novas culturas e oportunidades."}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
            <MapPinned className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-xl mb-2">{"Times Square, Nova York"}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"Um dos meus grandes desejos é "}
                <strong className="text-foreground">{"conhecer a Times Square"}</strong>
                {", o coração pulsante de Nova York, e sentir a energia dessa cidade incrível."}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
            <Star className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-xl mb-2">{"Atores Favoritos"}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {"Sou fã de "}
                <strong className="text-foreground">{"Matilda Lawler, Arián S. Cartaya e Clara Stack"}</strong>
                {". Seu talento e dedicação são inspiradores e mostram o que é possível alcançar com paixão."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Code2, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-8 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{"São Paulo, Brasil"}</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">silva777only</h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 text-balance">
          {"Lua Developer & Web Programmer"}
        </p>

        <div className="flex items-center justify-center gap-3 mb-12">
          <Code2 className="w-5 h-5 text-primary" />
          <span className="text-muted-foreground">{"5+ anos de experiência"}</span>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#contato"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            {"Entre em Contato"}
          </a>
          <a
            href="#sobre"
            className="px-8 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors"
          >
            {"Conheça Mais"}
          </a>
        </div>
      </div>
    </section>
  )
}

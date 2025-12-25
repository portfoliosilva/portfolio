export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">{"© 2025 silva777only. Todos os direitos reservados."}</p>

          <div className="flex items-center gap-6">
            <span className="text-muted-foreground text-sm">{"São Paulo, Brasil"}</span>
            <span className="text-muted-foreground text-sm">{"Lua Developer since 2020"}</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            {"Marcas favoritas: "}
            <span className="font-semibold text-foreground">{"NIKE"}</span>
            {" • "}
            <span className="font-semibold text-foreground">{"PUMA"}</span>
            {" • "}
            <span className="font-semibold text-foreground">{"ADIDAS"}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

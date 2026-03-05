export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border mt-24">
      <div className="container-wide py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Vänster */}
          <div>
            <p className="text-sm text-text-muted">
              Torbjörn Sandblad
            </p>
            <p className="text-sm text-text-subtle mt-1">
              Marknadsförare som bygger med AI
            </p>
          </div>

          {/* Höger */}
          <div className="text-sm text-text-subtle">
            <p>© {currentYear}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

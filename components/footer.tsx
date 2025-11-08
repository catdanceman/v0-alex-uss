export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Winter & Usselmann GbR. Alle Rechte vorbehalten.</p>
        <p className="text-sm opacity-70 mt-2">Design & Entwicklung mit ❤️</p>
      </div>
    </footer>
  )
}

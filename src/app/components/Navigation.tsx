export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Eojin Portfolio</h1>
          <div className="space-x-6">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
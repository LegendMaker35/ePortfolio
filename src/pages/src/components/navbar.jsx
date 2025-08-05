import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-mint text-white p-4 shadow-md">
      <ul className="flex space-x-6 justify-center">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/about" className="hover:underline">About</Link></li>
        <li><Link to="/projects" className="hover:underline">Projects</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
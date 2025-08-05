import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="p-8 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold text-mint mb-4">Hi, I'm Joshua Peters</h1>
      <p className="text-lg max-w-xl text-gray-700">
        Hello, I'm a knowledgeable and experienced <strong>Data Analyst</strong> and an intermediate <strong>Software Engineer</strong>, 
        with practice in Java, Javascript, Excel, Microsoft 365, Python, Cisco technologies, full stack development, version control,
        and network configuration. Driven by a desire to constantly be learning. 
      </p>
      <div className="mt-6 space-x-4">
        <Link to="/projects" className="bg-sky text-white px-4 py-2 rounded-xl shadow hover:bg-mint transition">
          View Projects
        </Link>
        <Link to="/contact" className="text-mint underline hover:text-sky">
          Contact Me
        </Link>
      </div>
    </section>
  )
}

export default Home;
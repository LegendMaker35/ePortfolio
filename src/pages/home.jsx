import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="p-8 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold text-mint mb-4">Hi, I'm Joshua Peters</h1>
      <p className="text-lg max-w-xl text-gray-700">
        I'm a data analyst with a strong background in business operations and technical systems.
        I specialize in turning raw data into clear, actionable insights using <strong>SQL</strong>, 
        <strong> Excel</strong>, and <strong>data visualization tools</strong>. With 10+ years of leadership experience 
        and a degree in IT, I thrive at the intersection of strategy and analysis. 
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
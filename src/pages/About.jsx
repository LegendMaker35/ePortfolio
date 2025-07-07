function About() {
  return (
    <section className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-mint mb-4">About Me</h2>
      <p className="mb-6 text-gray-700">
        I'm a fullstack web developer with a focus on clean design, performance, and accessibility. I love learning new technologies and building creative solutions.
      </p>

<div className="mb-6">
  <h3 className="text-xl font-semibold text-sky mb-2">Education</h3>
  <ul className="list-disc list-inside text-gray-800">
    <li>
      <strong>B.S. in Information Technology</strong> - University of Central Florida (2022-2025)
      <ul className="list-disc list-inside ml-6 mt-1">
        <li>President's Honor Roll - 2025</li>
      </ul>
    </li>
    <li><strong>A.A. in Computer Science</strong> - Valencia College (2013-2015)</li>
  </ul>
</div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-sky mb-2">Experience</h3>
        <ul className="list-disc list-inside text-gray-800">
          <li>Amazon Summer Internship - Cloud systems, AWS tools, and scalable infrastructure (2023)</li>
          <li>General Manager - Tijuana Flats (2015-2022)</li>
            <li>Olive Garden (2022-present)</li>
        </ul>
      </div>

      <a
        href="/JoshuaPeters_Resume.pdf"
        className="bg-mint text-white px-4 py-2 rounded-lg shadow hover:bg-sky transition"
        download
      >
        Download My Resume
      </a>
    </section>
  );
}

export default About;

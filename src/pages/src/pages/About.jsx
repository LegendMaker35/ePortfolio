function About() {
  return (
    <section className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-mint mb-4">About Me</h2>
      <p className="mb-6 text-gray-700">
        I'm a data analyst with a strong background in business operations and a passion for turning data into insight. 
        I bring over 10 years of leadership experience from fast-paced environments, now combined with technical skills 
        in SQL, Excel, data visualization, and cloud systems. I specialize in identifying trends, automating reporting, 
        and transforming raw data into clear, actionable strategies. Whether supporting marketing, operations, or finance, 
        I focus on using data to drive smarter decisions.
      </p>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-sky mb-2">Education</h3>
        <ul className="list-disc list-inside text-gray-800">
          <li>
            <strong>B.S. in Information Technology</strong> – University of Central Florida (2022–2025)
            <ul className="list-disc list-inside ml-6 mt-1">
              <li>President’s Honor Roll – 2025</li>
            </ul>
          </li>
          <li><strong>A.A. in Computer Science</strong> – Valencia College (2013–2015)</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-sky mb-2">Experience</h3>
        <ul className="list-disc list-inside text-gray-800">
          <li><strong>Data Analyst</strong> – Home Brew Tea Co. (2022–Present)</li>
          <li><strong>Cloud & Network Operations Intern</strong> – Amazon (Summer 2023)</li>
          <li><strong>Production Leader / Operations Trainer</strong> – Olive Garden (2022–Present)</li>
          <li><strong>General Manager</strong> – Tijuana Flats (2015–2022)</li>
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

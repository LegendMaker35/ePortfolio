function Contact() {
  return (
    <section className="p-8 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-mint mb-4">Contact Me</h2>
      <p className="text-gray-700 mb-6">
        If you're looking to reach out feel free to contact me through email or Github!
      </p>

      <div className="space-y-4 text-lg">
        <div>
          Email:{" "}
          <a
            href="mailto:jdpeters33@gmail.com"
            className="text-mint hover:underline"
          >
            jdpeters33@gmail.com
          </a>
        </div>
        <div>
          GitHub:{" "}
          <a
            href="https://github.com/LegendMaker35"
            target="_blank"
            rel="noopener noreferrer"
            className="text-mint hover:underline"
          >
            github.com/LegendMaker35
          </a>
        </div>
      </div>

      {/* Optional Contact Form (Uncomment to activate)
      <form className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-2 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border border-gray-300 p-2 rounded h-32"
        />
        <button
          type="submit"
          className="bg-mint text-white px-4 py-2 rounded shadow hover:bg-sky transition"
        >
          Send Message
        </button>
      </form>
      */}
    </section>
  );
}

export default Contact;
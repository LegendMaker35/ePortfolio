async function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  try {
    const res = await fetch("https://eportfolio-api-r4ze.onrender.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Failed to send: " + data.error);
    }
  } catch (err) {
    console.error(err);
    alert("An unexpected error occurred. Please try again later.");
  }
}
function Contact() {
  return (
    <section className="p-8 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-mint mb-4">Contact Me</h2>
      <p className="text-gray-700 mb-6">
        If you're looking to reach out feel free to contact me through email or Github! You can even fill out the contact form below and it will send it directly to my email!
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

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-4 text-left max-w-xl mx-auto"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 p-2 rounded h-32"
            />
            <button
              type="submit"
              className="bg-mint text-white px-4 py-2 rounded shadow hover:bg-sky transition"
            >
              Send Message
            </button>
          </form> 

    </section>
  );
}

export default Contact;
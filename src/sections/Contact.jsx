import emailjs from "@emailjs/browser";

function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mkjrjyp",
        "template_li5zdeq",
        e.target,
        {
          publicKey: "_WgZhn1NzggSPGWvl",
        }
      )
      .then(() => {
        alert("Message sent successfully ");
        e.target.reset();
      })
      .catch((error) => {
  console.log("Status:", error.status);
  console.log("Text:", error.text);
  console.log("Full Error:", error);

  alert(`Status: ${error.status}\n${error.text}`);
});
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-cyan-400 mb-4">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-10">
          Have a project in mind or want to connect?
          I'd love to hear from you.
        </p>

        <form 
          onSubmit={sendEmail}
          className="space-y-6"
        >

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 outline-none focus:border-cyan-400"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 outline-none focus:border-cyan-400"
            required
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 outline-none focus:border-cyan-400"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg font-semibold transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;
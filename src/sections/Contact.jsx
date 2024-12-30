import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_zhopy1j",
        "template_gshbz76",
        {
          from_name: form.name,
          to_name: "Mudit",
          from_email: form.email,
          to_email: "mudits798@gmail.com",
          message: form.message,
        },
        "BQxDw7NOFOOvVo57F"
      );
      setLoading(false);
      alert("Your message has been sent");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Something went wrong");
    }
  };
  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <h3 className="head-text absolute top-12 hidden sm:block  z-[12]">
          Contact Me
        </h3>
        <img
          src="/assets/terminal.svg"
          alt="terminal"
          className="absolute right-0 min-h-screen hidden sm:block"
        />
        <div className="absolute top-0 bg-black-600 w-full min-h-[800px] sm:hidden z-[10] rounded-xl p-4">
          <div className="flex justify-between items-center gap-2 max-w-[20%]">
            <div className="rounded-full bg-green-600 w-4 h-4"></div>
            <div className="rounded-full bg-yellow-600 w-4 h-4"></div>
            <div className="rounded-full bg-red-600 w-4 h-4"></div>
          </div>
          <div className="w-full border my-14 border-white-500"></div>
        </div>
        <div className="contact-container">
          <h3 className="head-text">Let's Talk </h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to Life, I'm here to help you
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Enter your name"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Enter your Email"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I wanna give you a job .... "
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

//service_zhopy1j

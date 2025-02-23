import { motion } from "framer-motion";
import { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Add form submission logic here.
  };

  return (
    <section
      id="contact"
      className="relative py-16 px-6 sm:px-8 md:px-16 text-white bg-[#121212] rounded-xl shadow-lg"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wide mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      {/* Contact Form */}
      <div className="max-w-lg mx-auto">
        <motion.form
          className="bg-[#1a1a1a] p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
        >
          {/* Floating Name Field */}
          <div className="relative mb-8">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              className="w-full p-4 bg-[#1e1e1e] rounded-lg border-2 border-transparent focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all ease-in-out duration-200"
              required
            />
            <label
              htmlFor="name"
              className={`absolute left-4 top-2 text-gray-400 text-lg transition-all duration-200 ${
                formData.name ? "scale-75 -top-6" : ""
              }`}
            >
              Your Name
            </label>
          </div>

          {/* Floating Email Field */}
          <div className="relative mb-8">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-4 bg-[#1e1e1e] rounded-lg border-2 border-transparent focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all ease-in-out duration-200"
              required
            />
          </div>

          {/* Floating Message Field */}
          <div className="relative mb-8">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              className="w-full p-4 bg-[#1e1e1e] rounded-lg border-2 border-transparent focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all ease-in-out duration-200 h-32"
              required
            />
            <label
              htmlFor="message"
              className={`absolute left-4 top-2 text-gray-400 text-lg transition-all duration-200 ${
                formData.message ? "scale-75 -top-6" : ""
              }`}
            >
              Your Message
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full py-4 mt-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactMe;

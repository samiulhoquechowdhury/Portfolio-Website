import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactMe() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative p-4">
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-5 right-5 px-6 py-3 text-lg font-semibold bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 flex items-center gap-2"
      >
        💬 Say Hello!
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-white text-gray-900 rounded-xl p-6 shadow-2xl w-full max-w-md border border-gray-200"
          >
            <h2 className="text-3xl font-bold text-center mb-4">Let's Chat!</h2>
            <p className="text-center text-gray-600 mb-4">
              I'd love to hear from you. Drop me a message below! 🚀
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <textarea
                placeholder="Type your message here..."
                className="w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none h-28"
              />
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gray-300 text-gray-800 hover:bg-gray-400 px-4 py-2 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-lg transition-transform duration-300 shadow-md">
                Send 🚀
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

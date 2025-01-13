const Contact = () => {
    return (
      <section id="contact" className="py-16 bg-gray-900 text-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400">
            Contact Me
          </h2>
          <p className="mt-4 text-lg text-center text-gray-300">
            Got a project in mind? I would love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
          </p>
  
          <div className="mt-10 flex justify-center">
            <form className="bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2">
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-semibold text-gray-100">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 mt-2 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your Name"
                />
              </div>
  
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-semibold text-gray-100">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 mt-2 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your Email"
                />
              </div>
  
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-semibold text-gray-100">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 mt-2 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your Message"
                />
              </div>
  
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  
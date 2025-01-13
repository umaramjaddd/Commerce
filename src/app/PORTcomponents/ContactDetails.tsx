const ContactDetails = () => {
    return (
      <section id="contact-details" className="py-16 bg-gray-900 text-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-400">
            Contact Information
          </h2>
          <p className="mt-4 text-lg text-center text-gray-300">
            Feel free to reach out to me through any of the following platforms:
          </p>
  
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300 ease-in-out">
              <a
                href="https://wa.me/1234567890" // Replace with your WhatsApp number link
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-100 hover:text-gray-900"
              >
                <i className="fab fa-whatsapp text-3xl text-green-500"></i>
                <span className="text-lg font-semibold">WhatsApp</span>
              </a>
            </div>
  
            <div className="flex items-center justify-center bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300 ease-in-out">
              <a
                href="https://www.linkedin.com/in/umar-amjad" // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-100 hover:text-gray-900"
              >
                <i className="fab fa-linkedin text-3xl text-blue-600"></i>
                <span className="text-lg font-semibold">LinkedIn</span>
              </a>
            </div>
  
            <div className="flex items-center justify-center bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300 ease-in-out">
              <a
                href="mailto:umar.amjad@example.com" // Replace with your email
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-100 hover:text-gray-900"
              >
                <i className="fas fa-envelope text-3xl text-red-500"></i>
                <span className="text-lg font-semibold">Email</span>
              </a>
            </div>
            <div className="flex items-center justify-center bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300 ease-in-out">
              <a
                href="mailto:umar.amjad@example.com" // Replace with your email
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-100 hover:text-gray-900"
              >
                <i className="fas fa-envelope text-3xl text-red-500"></i>
                <span className="text-lg font-semibold">Github</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactDetails;
  
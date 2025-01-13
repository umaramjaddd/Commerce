const integrations = [
    {
      name: "Stripe",
      description: "Integrated as a payment gateway for global transactions.",
    },
    {
      name: "Paystack",
      description: "Integrated as a payment gateway for businesses in Africa.",
    },
    {
      name: "Moyassar",
      description: "Integrated as a payment gateway in Saudi Arabia.",
    },
    {
      name: "Brevo (SendinBlue)",
      description: "Integrated as an email delivery service for transactional emails.",
    },
    {
      name: "Sendgrid",
      description: "Integrated as an email delivery service for transactional emails.",
    },
    {
      name: "Cloudinary",
      description: "Used for file storage and image cropping solutions.",
    },
    {
      name: "Hospitable",
      description: "Integrated to fetch listings from Airbnb for authenticated users.",
    },
    {
      name: "Firebase Cloud Messaging (FCM)",
      description: "Implemented for real-time push notifications.",
    },
    {
      name: "Agora",
      description: "Integrated for real-time video calling functionality.",
    },
    {
      name: "Zoom",
      description: "Integrated for scheduling and cancelling meetings in Zoom.",
    },
  ];
  
  const Integrations = () => {
    return (
      <section id="integrations" className="py-16 bg-gray-800 text-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-yellow-400 mb-12">Integrations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300"
              >
                <h4 className="text-xl font-semibold text-yellow-400">{integration.name}</h4>
                <p className="mt-2 text-gray-300">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Integrations;
  
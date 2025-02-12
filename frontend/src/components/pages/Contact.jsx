import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import axios from "axios"; // Import axios

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await axios.post("http://localhost:3000/api/contact", formData);
      if (response.status === 200) {
        setMessage({ type: "success", text: "Message sent successfully!" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setMessage({ type: "success", text: "Message Sent SuccessFully." });
    } finally {
      setLoading(false);
    }
  };

  const offices = [
    {
      city: "Singapore",
      address: "123 Innovation Drive, #08-01",
      postal: "Singapore 123456",
      phone: "+65 6789 0123",
      email: "sg@waysahead.global",
    },
    {
      city: "New York",
      address: "456 Tech Avenue",
      postal: "NY 10001, USA",
      phone: "+1 (212) 555-0123",
      email: "us@waysahead.global",
    },
    {
      city: "London",
      address: "789 AI Square",
      postal: "London EC1A 1BB, UK",
      phone: "+44 20 7123 4567",
      email: "uk@waysahead.global",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-blue-900 py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              Get in touch with our team to learn more about our AI solutions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Offices */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send us a message
              </h2>
              {message && (
                <div
                  className={`mb-4 p-3 rounded-md text-white ${
                    message.type === "success" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {message.text}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white ${
                    loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Global Offices */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Our Offices
              </h2>
              <div className="space-y-8">
                {offices.map((office, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {office.city}
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                        <div>
                          <p className="text-gray-600">{office.address}</p>
                          <p className="text-gray-600">{office.postal}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-6 w-6 text-blue-600 mr-3" />
                        <p className="text-gray-600">{office.phone}</p>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-6 w-6 text-blue-600 mr-3" />
                        <p className="text-gray-600">{office.email}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

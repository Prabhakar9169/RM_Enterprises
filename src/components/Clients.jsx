import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function Clients() {
  // Client categories
  const clientCategories = [
    {
      title: "Government & Public Sector",
      clients: [
        "Indian Railways",
        "Lucknow Metro Rail Corporation",
        "Central Public Works Department (CPWD)",
        "Uttar Pradesh Power Corporation Ltd (UPPCL)",
        "DC Handicraft Kendri Bhawan, Aliganj, Lucknow",
      ],
    },
    {
      title: "Hotels & Retail",
      clients: [
        "Ginger Hotel Lucknow",
        "Lulu mall Lucknow",
        "Halwasiya Groups Lucknow",
        "Visa Facilitation Services Global (VFS Global) PAN India",
        "Fresh Air Flow Hazratganj, Lucknow",
      ],
    },
    {
      title: "Corporate & Construction",
      clients: [
        "IDI Designs pvt. Ltd Gurgaon",
        "M/S Shetty Projects and Services Pvt, Ltd Mumbai",
        "Horcomp Airflex Pvt, Ltd (NOIDA)",
        "Stambh Solutions Lucknow",
        "Awadh Developers Lucknow",
      ],
    },
    {
      title: "Healthcare & Infra",
      clients: [
        "Ranchi Cancer Hospital and Research Centre (RCHRC by TATA)",
        "Maa Vaishnav Infra contract [I] Pvt. Ltd.",
        "Vindhya Telelinks Limited. Lucknow (M.P. Birla Group)",
      ],
    },
    {
      title: "Technology & Enterprises",
      clients: [
        "Ankur traders and manufacturers Lucknow",
        "Wipzo Enterprises",
        "Mensa Eco Tech Innovation Pvt Ltd",
        "Planet PCI",
      ],
    },
    {
      title: "Construction & Design",
      clients: ["Vedang Construction", "Pixel Associates", "Ankia Construction"],
    },
  ];

  // Active accordion index
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section id="clients" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Our Clients</h2>

          <div className="max-w-3xl mx-auto">
            {clientCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
                <button
                  className="w-full p-4 text-left font-bold text-blue-800 flex justify-between items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{category.title}</span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index 
                      ? "max-h-96 opacity-100" 
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 pb-4">
                    <ul className="space-y-2">
                      {category.clients.map((client, clientIndex) => (
                        <li key={clientIndex}>{client}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Clients;
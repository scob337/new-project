import { useState } from "react";

const faqs = [
  {
    question: " What is your return policy?",
    answer:
      "We offer a 30-day money-back guarantee if you're not satisfied with your purchase.",
  },
  {
    question: " Do you provide international shipping?",
    answer:
      "Yes, we ship worldwide with additional shipping charges based on location.",
  },
  {
    question: " What payment methods do you accept?",
    answer: "We accept Visa, MasterCard, PayPal, and Apple Pay.",
  },
  {
    question: " How can I contact support?",
    answer:
      "You can contact our support team via email at rajesh@maheshwari.com.",
  },
];

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full  p-8 bg-white shadow-xl rounded-lg   ">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden "
            >
              <button
                className="w-full cursor-pointer flex justify-between items-center p-5 text-lg font-medium bg-gray-100 hover:bg-gray-200 transition-all"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-gray-800 ">{faq.question}</span>
                <span className="text-xl font-bold cursor-pointer ring-1  ring-black flex justify-center items-center rounded-full w-5 h-5">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`bg-white p-5 text-gray-700 transition-all ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;

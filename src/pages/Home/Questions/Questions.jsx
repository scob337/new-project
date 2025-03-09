import { useState } from "react";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day money-back guarantee if you're not satisfied with your purchase.",
  },
  {
    question: "Do you provide international shipping?",
    answer:
      "Yes, we ship worldwide with additional shipping charges based on location.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Visa, MasterCard, PayPal, and Apple Pay.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact our support team via email at support@example.com.",
  },
];

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(0); // السؤال الأول مفتوح افتراضيًا

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full p-8 bg-white shadow-xl rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-1 flex flex-col gap-5 max-md:items-center max-md:text-center">
            <h1 className="text-[20px] uppercase font-semibold text-[#00000069] ">
              FAQ’S
            </h1>

            <h2 className="text-3xl font-semibold text-gray-800  lg:text-left font-[coolvetica] lg:w-[20%]">
              Frequently Asked <br />{" "}
              <span className="text-[#9188F1]">Questions</span>
            </h2>
            <div>
              <p className="text-[14px]  text-gray-400">Ask any questions</p>
              <p className="text-[#9188F1] text-[14px]">
                Cadonizer@support.com
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-5 text-lg font-medium bg-gray-100 transition-all cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-gray-800">{faq.question}</span>
                  <span className="text-xl font-bold flex justify-center items-center rounded-full w-5 h-5">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`bg-white px-5 text-gray-700 transition-all duration-300 ease-in-out overflow-hidden ${
                    activeIndex === index ? "max-h-[200px] py-3" : "max-h-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;

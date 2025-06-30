function Faqs() {
  const faqs = [
    {
      question:
        "What makes Dentoo different from other dental practices?",
      answer:
        "We offer a truly personalized approach, combining advanced technology and gentle techniques with a compassionate team, ensuring your comfort and delivering exceptional, lasting results for your smile.",
    },
    {
      question: "What types of dental services do you offer?",
      answer:
        "We provide a full spectrum of general, cosmetic, and restorative dental services, including routine check-ups, cleanings, teeth whitening, veneers, crowns, implants, and more, for patients of all ages.",
    },
    {
      question: "Do you cater to patients with dental anxiety?",
      answer:
        "Absolutely. We prioritize your comfort with a gentle approach, sedation options, and a relaxing environment. Our team is trained to help you feel at ease throughout your visit.",
    },
    {
      question: "How often should I visit the dentist for a check-up?",
      answer:
        "For most patients, we recommend routine check-ups and cleanings every six months to maintain optimal oral health and detect any issues early. Your dentist will advise based on your specific needs.",
    },
  ];

  return (
    <section>
      <div className="bg-gray-800 py-8 p-4 md:p-8">
        <h2 className="text-center pb-2">
          <span className="text-3xl font-bold text-white text-start py-4">
            Frequently Asked Questions
          </span>
        </h2>
      </div>
      <div className="join join-vertical bg-base-100 w-screen max-w-4xl mx-auto my-8 p-4 md:p-8 flex justify-center">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="collapse collapse-arrow join-item border-base-300 border"
          >
            <input
              type="radio"
              name="my-accordion-4"
              defaultChecked={idx === 0}
            />
            <div className="collapse-title font-semibold">{faq.question}</div>
            <div className="collapse-content text-sm">{faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faqs;

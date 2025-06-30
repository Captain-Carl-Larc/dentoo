import Banner from "./banner";

function SocialProof() {
  const testimonials = [
    {
      quote: `“I used to dread dental visits, but [Your Clinic Name] changed everything. Their incredibly gentle approach and calming atmosphere made me feel completely at ease. My cleanings are now stress-free and genuinely comfortable!”`,
      name: "Sarah M.",
    },
    {
      quote: `“My smile transformation here has been absolutely life-changing! The team truly listened to my goals, and now I feel so much more confident both personally and professionally. The results are simply amazing and truly natural-looking.”`,
      name: "David K.",
    },
    {
      quote: `“This is by far the best dental clinic for our entire family. From my children’s first check-ups to my own routine care, the staff is always incredibly kind, highly professional, and exceptionally thorough. We highly recommend them to everyone!”`,
      name: "Jessica P.",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-16 bg-white">
      <h2 className="text-3xl font-bold text-blue-700 text-center py-4">
        What Our Happy Patients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 flex flex-col items-start text-gray-700 bg-white hover:bg-fuchsia-100"
          >
            <p className="mb-6">{testimonial.quote}</p>
            <div className="flex items-center w-full mt-auto">
              <div>
                <div className="font-bold">{testimonial.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Banner
        title="Ready for Your Healthiest, Most Confident Smile?"
        description="Take the first step towards personalized care, gentle treatments, and a stunning new smile. Your journey to lasting oral health and renewed confidence begins today."
        buttonText="Schedule Your Visit Today"
      />
    </section>
  );
}

export default SocialProof;

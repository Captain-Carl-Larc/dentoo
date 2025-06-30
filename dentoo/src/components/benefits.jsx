function Benefits() {
  return (
    <section className="bg-gray-100 py-8 p-4 md:p-8">
      <div className="benefit-1 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="benefit-text-container">
          <h2 className="text-3xl font-bold mb-4  text-gray-900">
            Experience Unparalleled Comfort and Renewed Confidence at Every
            Dental Visit.
          </h2>
          <p className="text-gray-700 ">
            We understand that visiting the dentist can be daunting. Our
            compassionate team, combined with state-of-the-art technology and a
            genuinely soothing environment, is dedicated to making your comfort
            our top priority.
          </p>
          <p className="text-gray-700 mb-4">
            Say goodbye to dental fear and embrace a stress-free path to optimal
            oral health.
          </p>
          <button className="bg-blue-500  text-gray-900 px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 font-bold">
            Discover Our Gentle Approach
          </button>
        </div>
        <div className="benefit-image-container max-w-md">
          <img
            src="https://images.pexels.com/photos/7155530/pexels-photo-7155530.jpeg"
            className="w-full h-auto rounded-lg shadow-lg"
            alt="Placeholder banner"
          />
        </div>
      </div>
      <div className="benefit-2 grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-12 md:mt-20">
        <div className="benefit-image-container order-2 md:order-1 max-w-md">
          <img
            src="https://images.pexels.com/photos/7155530/pexels-photo-7155530.jpeg"
            alt="Benefit Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="benefit-text-container md:order-1">
          <h2 className="text-3xl font-bold mb-4  text-gray-900">
            Partner with Us to Achieve a Lifetime of Optimal Oral Health and
            Confidently Radiant Smiles.
          </h2>
          <p className="text-gray-700 mb-4">
            Beyond just treatments, we partner with you for sustained oral
            well-being. Our comprehensive care, preventative strategies, and
            transformative cosmetic solutions empower you to maintain a vibrant,
            confident smile that truly lasts for years to come.
          </p>
          <button className="bg-blue-500 font-bold  text-gray-900 px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
            Explore Our Smile Solutions
          </button>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
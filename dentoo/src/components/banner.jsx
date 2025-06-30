function Banner({ title, description, buttonText }) {
  return (
    <div className="call-to-action bg-gray-800 p-8 mt-12 rounded-lg shadow-lg">
      <h3 className="text-2xl text-white font-bold text-center mt-8 mb-4">
        {title || "Join Our Community Today!"}
      </h3>
      <p className="text-center text-white mb-6">
        {description ||
          "Sign up now to start sharing your videos and connecting with others!"}
      </p>
      <div className="flex justify-center">
        <button className="bg-blue-500 text-white px-6 py-3 font-bold rounded hover:bg-blue-600 cursor-pointer transition duration-300">
          {buttonText || "Sign Up Now"}
        </button>
      </div>
    </div>
  );
}

export default Banner;

//imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTooth,
  faMicrochip,
  faStarOfDavid,
} from "@fortawesome/free-solid-svg-icons";
function Features() {
  return (
    <section>
      <div className="container mx-auto px-4 pt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          What Makes Our Clinic Exceptional
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="feature-item bg-white hover:bg-fuchsia-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col gap-2 md:gap-x-4  items-start md:items-start justify-start ">
              <FontAwesomeIcon
                icon={faTooth}
                className=" text-white text-xl p-2 bg-blue-600 rounded-full"
              />

              <h3 className="text-xl font-semibold mb-2   text-blue-600">
                Comprehensive Family Care
              </h3>
            </div>
            <p className="text-gray-700">
              From your child's first visit to senior dental care, we provide a
              full spectrum of general and preventative services for every
              member of your family, ensuring healthy and happy smiles for all
              ages.
            </p>
          </div>
          <div className="feature-item bg-white hover:bg-fuchsia-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col gap-2 md:gap-x-4  items-start md:items-start  justify-start ">
              <FontAwesomeIcon
                icon={faMicrochip}
                className=" text-white text-xl p-2 bg-blue-600 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2  text-blue-600">
                Advanced Technology, Gentle Care
              </h3>
            </div>
            <p className="text-gray-700">
              We utilize the latest dental innovations, including digital X-rays
              and pain-minimizing techniques, to ensure precise diagnoses,
              efficient treatments, and a remarkably comfortable and
              anxiety-free experience for you.
            </p>
          </div>
          <div className="feature-item bg-white hover:bg-fuchsia-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col gap-2 md:gap-x-4  items-start md:items-start  justify-start ">
              <FontAwesomeIcon
                icon={faStarOfDavid}
                className=" text-white text-xl p-2 bg-blue-600 rounded-full"
              />
              <h3 className="text-xl font-semibold  text-blue-600 mb-2">
                Cosmetic & Restorative Transformations
              </h3>
            </div>
            <p className="text-gray-700">
              Achieve the smile you've always dreamed of with our expert
              cosmetic <b>(whitening, veneers) </b>and restorative{" "}
              <b>(implants, crowns)</b> treatments, designed to boost your
              confidence and oral health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

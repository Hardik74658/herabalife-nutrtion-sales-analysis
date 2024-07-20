
import { CEOs } from "./CEOs";

function Footer() {
    return (
      <footer className=" bg-transparent dark:text-white text-gray-800 py-12 bg-white bg-opacity-60 rounded">
          <CEOs className="mb-8"/>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-gray-800 bg-white bg-opacity-60 dark:text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4 text-justify bg-white bg-opacity-60 rounded-lg p-1">
            We provide insightful analysis of Herbalife Nutrition sales data, using Power BI and SQL. Our site offers valuable visualizations and metrics to enhance your understanding of sales trends and customer behavior.
            </p>
          </div>
          <div className="">
            <h2 className="text-gray-800 dark:text-white text-lg bg-white bg-opacity-60 font-semibold mb-4">Quick Links</h2>
            <ul className="text-gray-600 dark:text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-black  hover:dark:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-black hover:dark:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-black hover:dark:text-white transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-black hover:dark:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-gray-800 dark:text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4 text-gray-600 dark:text-gray-300">
              <a
                href="#"
                className="hover:text-black hover:dark:text-white transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="#"
                className="hover:text-black hover:dark:text-white transition-colors duration-300"
              >
                Twitter
              </a>
              <a
                href="#"
                className="hover:text-black hover:dark:text-white transition-colors duration-300"
              >
                Instagram
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-gray-800 dark:text-white text-lg font-semibold mb-4">Contact Us</h2>
            <p>Ahmedabad, 380006</p>
            <p>Gujarat, India</p>
            <p>Email: info@neighbourlyconnect.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          </div>
          <p className="text-center text-xs pt-8">© 2024 Herbalife Nutrition Sales. All rights reserved.</p>
      </footer>
    )
  }
  
  export default Footer
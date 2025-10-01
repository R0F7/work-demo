import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 text-sm text-[#2A2F32]">
        {/* Logo & Social */}
        <div>
          <h2 className="text-[32px] font-bold mb-6">Business Logo</h2>
          <div className="flex gap-4 mb-6 text-xl">
            <a href="#" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-sky-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="flex gap-6 md:gap-20 flex-col md:flex-row">
          {/* Our Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-600">
                  Plumbing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600">
                  Drainage
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600">
                  Bathrooms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-600">
                  Commercial
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-semibold mb-4">Useful Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-600">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600">
                    Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600">
                    Rates
                  </a>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-600">
                    Customer Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600">
                    Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600">
                    Locations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-600">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-4 font-semibold">
            <li className="flex items-start gap-3">
              <FaLocationDot className="mt-1 text-gray-500" />
              <span>1 Sail Street, London, SE11 6NQ</span>
            </li>
            <li className="flex items-start gap-3">
              <MdEmail className="mt-1 text-gray-500" />
              <a
                href="mailto:enquiries@PlumbingPros.com"
                className="hover:text-gray-600"
              >
                enquiries@PlumbingPros.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FiPhone className="mt-1 text-gray-500" />
              <a href="tel:02045276474" className="hover:text-gray-600">
                020 4527 6474
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t text-xs text-gray-500 py-4 px-6 flex flex-col md:flex-row items-center justify-between">
        <p>© Plumbing Pros. All Rights Reserved</p>
        <p className="mt-2 md:mt-0">Website by IH Adventure And Creative</p>
      </div>
    </footer>
  );
}

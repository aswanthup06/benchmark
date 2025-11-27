import Link from "next/link";
import ArrowIcon from "@/components/Icons/ArrowIcon";

const footerMenus = [
  {
    title: "Our Services",
    items: [
      "Indian Holidays",
      "International Holidays",
      "MICE",
      "Group Tours",
      "Visa",
      "Travel insurance",
      "Gift Cards",
    ],
  },
  {
    title: "Luxury Tours",
    items: [
      "Family Holidays",
      "Honeymoon Specials",
      "Luxury Vacations",
      "All Inclusive Holidays",
      "On Arrival Visa Holidays",
      "Seasonal Offers",
      "Women’s Special",
      "Cruise Holidays",
    ],
  },
  {
    title: "About Benchmark",
    items: [
      "About Us",
      "Contact Us",
      "Guest Experiences",
      "Photo Gallery",
      "Franchise",
      "Careers",
      "Privacy Policy",
      "Paynow",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {footerMenus.map((menu, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-4 relative inline-block">
              {menu.title}
              <span className="block w-14 h-0.5 bg-yellow-400 mt-2"></span>
            </h3>

            <ul className="space-y-3 text-sm">
              {menu.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <ArrowIcon className="w-4 h-4 text-yellow-400" />
                  <Link
                    href="/"
                    className="hover:text-yellow-400 transition-all duration-400 ease-in-out hover:translate-x-1"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* ✅ CONTACT SECTION - NO CHANGES */}
        <div>
          <h3 className="text-xl font-semibold mb-4 relative inline-block">
            Contact
            <span className="block w-14 h-0.5 bg-yellow-400 mt-2"></span>
          </h3>

          <ul className="space-y-3 text-sm">
            <li>Email: info@benchmarkholidays.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Calicut, Kerala</li>
          </ul>
        </div>
      </div>
      <div className="text-center py-4 text-sm font-light bg-white/4">
        © Copyright {new Date().getFullYear()}{" "}
        <span className="text-yellow-400">
          Benchmark Incentive And Leisure{" "}
        </span>
        Travels Pvt Ltd | All Rights Reserved | Web Design Company
        <span className="text-yellow-400"> Nextwebi.com</span>
      </div>
    </footer>
  );
}

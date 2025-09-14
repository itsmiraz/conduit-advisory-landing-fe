import logo from "@/assets/images/logo.svg?url";
import Phone from "@/assets/icons/Phone.svg";
import Location from "@/assets/icons/Location.svg";
import Message from "@/assets/icons/Message.svg";

export default function Footer() {
  const data = [
    {
      id: "menus",
      title: "Menus",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/team" },
        { label: "Services", href: "/services" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      id: "services",
      title: "Services",
      items: [
        { label: "Law Firms", href: "/services/law-firms" },
        {
          label: "Institutional Investment Firms",
          href: "/services/institutional-investment-firms",
        },
        {
          label: "Real Estate Advisors & Brokers",
          href: "/services/real-estate-advisors-brokers",
        },
        {
          label: "Real Estate Lending Banks",
          href: "/services/real-estate-lending-banks",
        },
        {
          label: "Trustee & Financial Services",
          href: "/services/trustee-financial-services",
        },
        { label: "One-to-One Coaching", href: "/services/one-to-one-coaching" },
      ],
    },
    {
      id: "contact",
      title: "Contact Info",
      items: [
        {
          type: "address",
          label: "Conduit Advisors\nMayfair London W1J 8LQ",
          href: "https://maps.google.com/?q=Conduit%20Advisors%20Mayfair%20London%20W1J%208LQ",
        },
        {
          type: "email",
          label: "info@conduitadvisors.co.uk",
          href: "mailto:info@conduitadvisors.co.uk",
        },
        {
          type: "phone",
          label: "+ (255) 325-1113",
          href: "tel:+2553251113",
        },
      ],
    },
  ];

  const brand = {
    tagline:
      "Your strategic advisory firm bridging traditional finance and Web3.",
    phoneHref: "tel:+2553251113",
    mapHref:
      "https://maps.google.com/?q=Conduit%20Advisors%20Mayfair%20London%20W1J%208LQ",
    mailHref: "mailto:info@conduitadvisors.co.uk",
  };

  return (
    <footer className="w-full footerDropShadow ">
      {/* Top section */}
      <div className="max-w-[1441px] mx-auto px-5 md:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr,1fr,1fr,1.2fr] gap-10 md:gap-12">
          {/* Brand block */}
          <div className="">
            <div className=" flex items-start justify-start">
              <img src={logo} alt="Conduit" className="-translate-x-8" />
            </div>
            <p className=" text-sm leading-6 text-neutral-700 max-w-xs">
              {brand.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={brand.phoneHref}
                aria-label="Call"
                className="h-10 w-10 rounded-full bg-neutral-200 hover:bg-neutral-300 transition flex items-center justify-center"
              >
                <Phone />
              </a>
              <a
                href={brand.mapHref}
                aria-label="Location"
                className="h-10 w-10 rounded-full bg-neutral-200 hover:bg-neutral-300 transition flex items-center justify-center"
              >
                <Location />
              </a>
              <a
                href={brand.mailHref}
                aria-label="Email"
                className="h-10 w-10 rounded-full bg-neutral-200 hover:bg-neutral-300 transition flex items-center justify-center"
              >
                <Message />
              </a>
            </div>
          </div>

          {/* Map the three right columns */}
          {data.map((group) => (
            <div key={group.id}>
              <h4 className="text-base font-semibold text-neutral-900">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {group.items.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="text-neutral-700 hover:text-neutral-900"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#B7924B]">
        <div className="max-w-[1441px] mx-auto px-5 md:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-900">
          <p>© 2025 Commercial Real Estate Consulting</p>
          <a href="#" className="mt-2 md:mt-0 hover:underline">
            Powered by Vortexpert
          </a>
        </div>
      </div>
    </footer>
  );
}

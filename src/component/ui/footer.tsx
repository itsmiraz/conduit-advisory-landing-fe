import { motion } from "framer-motion";
import Logo from "@/assets/images/logo.svg";
import PhoneLogo from "@/assets/icons/phoneLogo.svg";
import Phone from "@/assets/icons/Phone.svg";
import Location from "@/assets/icons/Location.svg";
import Message from "@/assets/icons/Message.svg";

export default function Footer() {
  const data = [
    {
      id: "menus",
      title: "Menus",
      items: [
        { label: "About Us", href: "#about" },
        { label: "Our Team", href: "#team" },
        { label: "Services", href: "#services" },
        { label: "Contact Us", href: "#contact" },
      ],
    },
    // {
    //   id: "services",
    //   title: "Services",
    //   items: [
    //     { label: "Law Firms", href: "/services/law-firms" },
    //     {
    //       label: "Institutional Investment Firms",
    //       href: "/services/institutional-investment-firms",
    //     },
    //     {
    //       label: "Real Estate Advisors & Brokers",
    //       href: "/services/real-estate-advisors-brokers",
    //     },
    //     {
    //       label: "Real Estate Lending Banks",
    //       href: "/services/real-estate-lending-banks",
    //     },
    //     {
    //       label: "Trustee & Financial Services",
    //       href: "/services/trustee-financial-services",
    //     },
    //     { label: "One-to-One Coaching", href: "/services/one-to-one-coaching" },
    //   ],
    // },
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
        { type: "phone", label: "+ (255) 325-1113", href: "tel:+2553251113" },
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

  // Motion variants
  const grid = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const col = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };
  const listItem = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <footer className="w-full footerDropShadow">
      {/* Top section */}
      <div className="max-w-[1441px] mx-auto px-5 md:px-6 lg:px-8 py-10 md:py-12">
        <motion.div
          className="grid grid-cols-1 place-items-center text-center md:text-start md:place-items-start md:grid-cols-[1.2fr,1fr,1.2fr] gap-10 md:gap-12"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Brand block */}
          <motion.div variants={col} className="">
            <div className="flex items-center md:items-start justify-center md:justify-start">
              {/* <img src={logo} alt="Conduit" className="" /> */}
              <div className="hidden md:block md:-translate-x-8 translate-y-3">
                <Logo />
              </div>
              <div className="md:hidden block">
                <PhoneLogo />
              </div>
            </div>
            <p className="text-sm leading-6 text-neutral-700 max-w-xs ">
              {brand.tagline}
            </p>

            {/* <div className="mt-6 flex justify-center md:justify-start items-center gap-3">
              {[
                { href: brand.phoneHref, label: "Call", Icon: Phone },
                { href: brand.mapHref, label: "Location", Icon: Location },
                { href: brand.mailHref, label: "Email", Icon: Message },
              ].map(({ href, label, Icon }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-10 w-10 rounded-full bg-neutral-200 hover:bg-neutral-300 transition flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-neutral-400"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div> */}
          </motion.div>

          {/* Right columns */}
          {data.map((group) => (
            <motion.div key={group.id} variants={col}>
              <h4 className="text-base font-semibold text-neutral-900">
                {group.title}
              </h4>
              <motion.ul
                className="mt-4 space-y-3"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.06 } },
                }}
              >
                {group.items.map((item, idx) => (
                  <motion.li key={idx} variants={listItem}>
                    <a
                      href={item.href}
                      className="text-neutral-700 hover:text-neutral-900 transition-colors"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        className="bg-[#B7924B]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
      >
        <div className="max-w-[1441px] mx-auto px-5 md:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-900">
          <p>
            © 2025 Conduit Advisors instead of Commercial Real Estate Consulting
          </p>
          <a href="#" className="mt-2 md:mt-0 hover:underline">
            Powered by Vortexpert
          </a>
        </div>
      </motion.div>
    </footer>
  );
}

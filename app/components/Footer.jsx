import { Typography } from "@material-tailwind/react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const SITEMAP = [
  {
    title: "Contact",
    links: ["tinyuh.project@gmail.com", "(+62) 895-2466-9313", "@tiny_uh"],
  },
  {
    title: "About",
    links: [""],
  },
  {
    title: "Gallery",
    links: [""],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer id="footer" className="relative w-full bg-[#DBC7A1]">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="small"
                color="black"
                className="mb-4 font-bold uppercase opacity-50"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography
                    key={key}
                    as="li"
                    color="black"
                    className="font-normal"
                  >
                    <a
                      href="#"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-gray-800 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-black md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">tiny-UH</a>. All Rights
            Reserved.
          </Typography>
          <div className="flex gap-4 text-black sm:justify-center">
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <FaInstagram />
            </Typography>
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <FaFacebook />
            </Typography>
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <FaTiktok />
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 px-14  flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-44">
      <Typography as="li" className="p-1 font-normal text-sm uppercase">
        <Link href="#" className="flex items-center">
          About
        </Link>
      </Typography>
      <Typography as="li" className="p-1 font-normal text-sm uppercase">
        <Link href="#" className="flex items-center">
          Gallery
        </Link>
      </Typography>
      <Typography as="li" className="p-1 font-normal text-sm uppercase">
        <Link href="#" className="flex items-center">
          Contact
        </Link>
      </Typography>
      <Typography as="li" className="p-1 font-normal text-sm uppercase">
        <Link href="#" className="flex items-center">
          Upeti
        </Link>
      </Typography>
    </ul>
  );

  return (
    <>
      <nav className="sticky top-0 z-50 h-max max-w-full mx-auto rounded-none py-2 px-6 lg:px-16 lg:py-4 bg-[#17181A] border-b border-b-[#DBC7A1]">
        <div className="flex mx-auto items-center justify-between">
          <Image
            src="/logo.png"
            width="35"
            alt="logo"
            height="35"
            className="w-auto h-auto"
          />
          <div className=" hidden lg:block">{navList}</div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>{navList}</Collapse>
      </nav>
    </>
  );
}

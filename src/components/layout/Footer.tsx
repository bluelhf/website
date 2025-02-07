import Link from "next/link";

import LogoMarkerDark from "@/assets/brand/logo-marker-dark.svg";

const Footer = () => (
  <footer className="bg-background-dark-80 py-12 mt-8">
    <div className="max-w-7xl m-auto px-4">
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-sm text-white">
        <div>
          <span className="font-semibold">Getting Started</span>
          <ul className="mt-4 leading-5 text-gray-400 space-y-2">
            <li>
              <Link href="/downloads">Downloads</Link>
            </li>
            <li>
              <a
                href="https://docs.papermc.io"
                target="_blank"
                rel="noreferrer"
              >
                Documentation
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span className="font-semibold">Community</span>
          <ul className="mt-4 leading-5 text-gray-400 space-y-2">
            <li>
              <Link href="/community">Our Community</Link>
            </li>
            <li>
              <a
                href="https://github.com/PaperMC"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/papermc"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href="https://forums.papermc.io/"
                target="_blank"
                rel="noreferrer"
              >
                Forums
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/PaperPowered"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span className="font-semibold">PaperMC</span>
          <ul className="mt-4 leading-5 text-gray-400 space-y-2">
            <li>
              <Link href="/team">Our Team</Link>
            </li>
            <li>
              <Link href="/contribute">Contribute</Link>
            </li>
            <li>
              <Link href="/sponsors">Sponsors</Link>
            </li>
            <li>
              <a
                href="https://hangar.papermc.io"
                target="_blank"
                rel="noreferrer"
              >
                Hangar
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2 border-t border-gray-600/50 mt-8 pt-10">
        <LogoMarkerDark className="h-12 cursor-pointer" alt="PaperMC" />
        <div className="flex-1" />
        <span className="text-gray-300 text-sm">
          © {new Date().getFullYear()} The PaperMC Team
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;

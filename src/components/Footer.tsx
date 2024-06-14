import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white py-10 text-center">
      <div className="flex gap-5 justify-center my-5">
        <Link href="#footer" className="text-white">
          <span className="sr-only">Facebook</span>
          <FaFacebook size={20} />
        </Link>
        <Link href="#footer" className="text-white">
          <span className="sr-only">Twiter</span>
          <FaTwitter size={20} />
        </Link>
        <Link href="#footer" className="text-white">
          <span className="sr-only">Instagram</span>
          <FaInstagram size={20} />
        </Link>
      </div>
      <p className="text-sm">
        &copy; NFT Gallery 2021-2025 All rights reserved
      </p>
    </footer>
  );
};

export default Footer;

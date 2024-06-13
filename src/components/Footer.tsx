import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white py-10 text-center">
      <div className="flex gap-5 justify-center my-5">
        <a href="#footer" className="text-white">
          <FaFacebook size={20} />
        </a>
        <a href="#footer" className="text-white">
          <FaTwitter size={20} />
        </a>
        <a href="#footer" className="text-white">
          <FaInstagram size={20} />
        </a>
      </div>
      <p className="text-sm">
        &copy; NFT Gallery 2021-2025 All rights reserved
      </p>
    </footer>
  );
};

export default Footer;

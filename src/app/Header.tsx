import Image from "next/image";
import Link from "next/link";
import { FiTwitter, FiInstagram } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <nav className="py-6 container mx-auto flex items-center px-4 max-w-screen-xl">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/app_icon.png"
            alt="Fantasy AI App Icon"
            width={56}
            height={56}
            className="flex-1 object-cover rounded-xl"
          />
          <div className="max-sm:hidden">
            <p className="text-xl font-bold">Fantasy AI</p>
            <p className="text-zinc-400">AI Artwork Generator</p>
          </div>
        </Link>

        <div className="flex-1 justify-end flex items-center">
          <div className="flex items-center gap-8">
            <Link target="_blank" href="https://twitter.com/fantasyai_app">
              <FiTwitter className="text-2xl" />
            </Link>
            <Link target="_blank" href="https://instagram.com/fantasy.app">
              <FiInstagram className="text-2xl" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

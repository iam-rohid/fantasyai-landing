import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container py-4 max-w-screen-xl px-4 flex items-center mx-auto">
      <div className="flex items-center justify-center flex-wrap gap-8 flex-1">
        <p className="text-zinc-400">© Fantasy AI 2023</p>
        <p className="text-zinc-400">
          By{" "}
          <Link
            href="https://rohid.dev"
            target="_blank"
            className="hover:text-white font-medium"
          >
            Rohid
          </Link>
        </p>
        <Link
          href="https://playense.com/privacy-policy"
          target="_blank"
          className="text-zinc-400 hover:text-white font-medium"
        >
          Privicy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

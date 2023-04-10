import Link from "next/link";
import { ReactNode } from "react";

const StoreButton = ({
  storeName,
  subtitle,
  icon,
  link,
}: {
  icon: ReactNode;
  storeName: string;
  subtitle: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="flex items-center gap-4 lg:gap-6 px-6 py-2 lg:py-2.5 border border-zinc-700 hover:border-zinc-600 w-fit rounded-xl"
    >
      <span className="text-2xl lg:text-3xl">{icon}</span>
      <div>
        <p className="text-sm text-zinc-400">{subtitle}</p>
        <p className="text-lg lg:text-xl font-medium">{storeName}</p>
      </div>
    </Link>
  );
};

export default StoreButton;

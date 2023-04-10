import { FaApple, FaGooglePlay } from "react-icons/fa";
import StoreButton from "./StoreButton";
import Image from "next/image";

const Page = () => {
  return (
    <main>
      <section className="container max-w-screen-xl mx-auto px-4 min-h-[700px] flex items-center max-xl:flex-col gap-16 py-16">
        <div className="flex-1">
          <h1 className="text-4xl lg:text-5xl font-black leading-tight lg:leading-tight max-xl:text-center">
            Generate AI Artworks From Simple Text
          </h1>

          <div className="flex gap-4 mt-16 max-xl:justify-center flex-wrap">
            <StoreButton
              link="https://apps.apple.com/us/app/fantasy-ai-artwork-generator/id6444262223"
              icon={<FaApple />}
              subtitle="Download on the"
              storeName="App Store"
            />
            <StoreButton
              link="https://play.google.com/store/apps/details?id=dev.rohid.fantasyai"
              icon={<FaGooglePlay />}
              subtitle="GET IT ON"
              storeName="Google Play"
            />
          </div>
        </div>

        <Image
          src="/mockup.png"
          alt="Fantasy AI Mockup"
          width={1336}
          height={1468}
          className="max-w-xl max-sm:max-w-full"
        />
      </section>
    </main>
  );
};

export default Page;

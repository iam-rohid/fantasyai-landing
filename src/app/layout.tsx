import Footer from "./Footer";
import Header from "./Header";
import "./globals.css";

export const metadata = {
  title: "Fantasy AI",
  description:
    "Fantasy AI is an app built on top of Stable Diffusion that enables users to generate photorealistic images from text prompts. With this powerful tool, you can create stunning visuals that blend the boundaries between art and technology. Utilize the app’s full range of creative tools to bring your ideas to life, and express yourself in ways never before possible. Publish your artwork within the app, gain followers, and like other’s creations – become a part of the Fantasy AI community!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

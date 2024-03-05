import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import MainIcon from "@/Components/MainIcon";
import Video from "@/Components/Video";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Video />
      </div>
      <div className="relative z-10">
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">
            <MainIcon />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

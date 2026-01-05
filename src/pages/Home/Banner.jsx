import React from "react";
import PrimaryBtn from "../../components/btn/PrimaryBtn";
import OutlineBtn from "../../components/btn/OutlineBtn";
import bannerImg from "../../assets/images/banner/banner.png";
import bannerBgImg from "../../assets/images/banner/banner-bg.png";
import BannerCard from "../../components/card/BannerCard";
import { bannerData } from "../../assets/mock/homeData";
import { useScrollAnimation } from "../../components/hooks/use-scroll-animation";

const Banner = () => {
  const textRef = useScrollAnimation("fadeUp", { duration: 1.2 });
  const imageRef = useScrollAnimation("scale", { duration: 1.2 });
  const cardsRef = useScrollAnimation("fadeUp", {
    duration: 1,
    scrollTrigger: { start: "top 95%" },
  });

  return (
    <div id="home" className="min-h-[80vh] relative w-full">
      <div className="container w-11/12 xl:w-full mx-auto mt-8 lg:mt-16 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* text section  */}
          <div ref={textRef} className="w-full lg:w-6/12">
            <h1 className="text-[25px] lg:text-[35px] text-white font-sofia-semibold">
               <span className="text-primary">AUREX The Future of Hybrid Digital Finance</span>{" "}
              <br />
               Where {" "}
              <span className="text-primary">Real Assets, AI Intelligence, and Blockchain Utility</span> come together.  
            </h1>
            <p className="mt-3 text-[16px] lg:text-[20px] text-[#FAFAFB] font-sofia-normal">
              AUREX introduces a next-generation ecosystem Creating a stable, long-term digital economy backed by real value.
            </p>
            <div className="flex items-center gap-5 mt-10">
              <PrimaryBtn title="Join Whitelist" />
              <OutlineBtn title="Buy Token" />
            </div>
          </div>
          {/* img section  */}
          <div ref={imageRef} className="w-full lg:w-6/12">
            <img
              src={bannerImg}
              alt=""
              className="w-full h-[300px] lg:h-[500px] object-contain"
            />
          </div>
        </div>
        <div
          ref={cardsRef}
          className="mt-5 lg:mt-10 grid grid-cols-1 lg:grid-cols-5 gap-5"
        >
          {bannerData.map((item) => (
            <BannerCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <img
        src={bannerBgImg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default Banner;

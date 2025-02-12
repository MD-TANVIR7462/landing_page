"use client";

import Image from "next/image";
import YouTube from "react-youtube";
import GreenSection from "./GreenSection";

const Banner = () => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <section className="relative  py-16">
      <div className="mx-auto">
        <div className="flex flex-col items-center mb-12">
          <Image
            src="/premium-collagen-coffee-logo.png"
            alt="Premium Collagen Coffee"
            width={150}
            height={150}
            className="mb-8"
          />
          <GreenSection
            text={
              " আপনি জানেন কি? শরীরের অভিরক্ত মেদ ভুঁড়ি কমাতে কোলাজেন কফিটি সর্বাধিক কাজে করে। আমাদের পণ্যটি সম্পর্কে বিস্তারিত জানতে নিচের দেয়া ভিডিওটি প্লে করুন।"
            }
          />
          <div className="w-full  mx-auto rounded-lg overflow-hidden shadow-2xl ring-4 ring-lime-600">
            <YouTube videoId="U9JMdmQaDOg" opts={opts} className="aspect-video w-full " />
          </div>
        </div>
        <GreenSection
          text={
            "সারাদিন রোজা রাখার কারণে যেহেতু আপনি ১০-১২ ঘন্টা না খেয়ে থাকেন তা প্রাকৃতিকভাবেই একটি ডায়েট হিসেবে কাজ করে । পাশাপাশি আপনি কোলাজেন কফি সেবন করলে এই রমজানেই ৫ থেকে ১০ কেজি ওজন কমিয়ে ফেলা সম্ভব।"
          }
        />
        <div className="text-center  mx-auto mb-8">
          <div className="bg-[#4a7a4a] text-white p-6 rounded-lg shadow-lg mb-8">
            <p className="text-2xl leading-relaxed">
              <b>Premium Collagen Coffee</b> এর উপকারীতা
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

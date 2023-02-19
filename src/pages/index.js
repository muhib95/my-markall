import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "Components/Header/Header";
import market1 from "../../public/Marketing 1.png";
import Audiance from "Components/Audiance/Audiance";
import Automation1 from "../../public/Automation 1.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="max-w-[1440px] bg-white mx-auto">
      <div>
        <div className="bg-[#1E1E1E] h-[1024px] rounded-bl-[100px]">
          <Header></Header>
          <div className="grid grid-cols-2 mt-4 ">
            <div className="text-left p-8">
              <h1 className="text-[70px] font-bold">
                Reach your -{" "}
                <span className="border-double border-b-4 border-[#FFFFFF]">
                  audience
                </span>{" "}
                & convert your leads
              </h1>
              <p className="text-[25px] font-normal">
                Get your customers with SEO, rank your business with email
                marketing, build sales leads
              </p>
              <div>
                <button className="btn btn-success mr-6">Get Started</button>
                <button className="btn btn-outline">Watch Demo</button>
              </div>
            </div>
            <div className="p-8">
              <Image
                className="w-[578px] h-[386px] relative z-10"
                src={market1}
                alt="Picture of the author"
              />
              <div className="w-[552px] h-[371px] border-2 border-sky-500 absolute bottom-[166px] right-[210px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white text-black">
        <div className="w-[1372px] h-[950px] grid-rows-2 m-0 mx-auto">
          <div>
            <Audiance></Audiance>
          </div>
          <div className="w-[1372px] h-[488px] bg-[#F1F1F1] border border-[#EBEBEB] rounded-[20px]">
            <div className="grid grid-cols-2">
              <div className="p-28">
                <h1 className="font-bold text-4xl">
                  Save precious time with automation
                </h1>
                <p className="font-normal text-3xl">
                  Lorem ipsum dolor sit amet consectetur. Sed id luctus posuere
                  massa leo purus cras commodo. Volutpat massa fusce sit libero
                  ut mollis risus.
                </p>
                <button className="text-3xl font-medium">Learn More</button>
              </div>
              <div className="py-[68px] pr-[44px]">
                <Image
                  className="w-[528px] h-[352px] relative "
                  src={Automation1}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

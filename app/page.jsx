"use client";
import Image from "next/image";
import Content from "./components/Content";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <Content>
      {/* hero */}
      <div className="justify-between lg:flex block mx-auto p-10 lg:mx-7 my-16 container">
        <div className="my-auto">
          <h1 className="lg:text-[90px] text-[50px]">
            tiny<span className="uppercase font-bold ">uh.</span>
          </h1>
          <hr className="border-2 border-[#DBC7A1] my-8" />
          <p>
            Majalengka, West Java <br /> Indonesia.
          </p>
        </div>
        <div>
          <Image
            src={"/hero-tinyuh-2.png"}
            width={"500"}
            height={"500"}
            alt="hero"
            priority
            className="w-auto h-auto object-contain"
          />
        </div>
      </div>
      {/* end hero */}

      {/* about */}
      <div className="static lg:mt-48" id="about">
        <div className="absolute w-full left-[-150px] top-[1280px] -z-50">
          <Image
            alt="about"
            src={"/about-bg.png"}
            height={"1000"}
            width={"1000"}
            className="opacity-10"
          />
        </div>
        <h1 className="font-bold lg:text-[80px] text-4xl  p-10 mx-7">About.</h1>
        <hr className="absolute w-full left-0  border border-[#DBC7A1]" />
        <div className="grid grid-cols-3 gap-5 p-10 lg:mx-7 mx-3">
          <div className="lg:col-span-2 col-span-3 my-12">
            <p className="leading-7 font-bold lg:text-2xl text-sm">
              tinyUH means brew in Sundanese, while there is a small word
              &apos;tiny&apos; whose members consist of small entrepreneurs who
              live in a small city in Indonesia called Majalengka. tinyUH are
              collective of small entrepreneurs of coffee, tea and spices, as
              well as terracotta tableware, while playing their brewed
              compositions solemnly as daily ritual. In addition to playing
              musical compositions, tinyUH also plays economic activities as
              part of the show. tinyUH reconstructs the whole atmosphere of
              taste, visual, aroma, sound, up to the trading process, based on
              the long history of colonialism in Indonesia that intersects
              through spices, coffee, tea and clay.
            </p>
          </div>
          <div className="block lg:hidden col-span-3">
            <Image
              src={"/about-image1.jpeg"}
              width={"600"}
              height={"600"}
              alt="About Image"
            />
          </div>
          <div className="block lg:hidden col-span-3">
            <Image
              src={"/about-image2.jpeg"}
              width={"600"}
              height={"600"}
              alt="About Image"
            />
          </div>
          <div className="hidden mx-auto lg:block">
            <Image
              src={"/about-image1.jpeg"}
              width={"600"}
              height={"600"}
              alt="About Image"
              className="h-auto w-full"
            />
            <Image
              src={"/about-image2.jpeg"}
              width={"600"}
              height={"600"}
              alt="About Image"
              className="h-auto w-full my-4 "
            />
          </div>
          <p className="col-span-3 font-bold leading-7 lg:text-2xl text-sm mt-16">
            We are often presented with various food and beverage products that
            are instant, practical and ready to serve. Are we really set up to
            not be able to know or witness the process of making drinks until
            they are ready to be served? In some cultures such as the Tea
            Ceremony in Japan, we witness a ritual that is considered sacred
            because there are special rules that have certain meanings during
            the brewing process that we can enjoy as an art and even spiritual.
            With that in mind, we are inspired and offer a performance on how
            the process of making and serving food or beverages for us to
            realize that it is a performance art that we can enjoy aesthetically
            audio (sound) visual (movement, appearance) and once ready to serve
            we enjoy with the senses of smell (fragrance) and taste (flavor).
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mx-7 my-16">
          <div className="bg-[#242629] p-7">
            <Image
              src={"/about-img1.jpeg"}
              height={"600"}
              width={"600"}
              alt="about"
              className="mx-auto w-full h-auto"
            />
            <h4 className="font-bold text-center mt-10">Yussan AF</h4>
            <h6 className="font-normal text-center">as Tea Brewer</h6>
          </div>
          <div className="bg-[#242629] p-7">
            <Image
              src={"/about-img2.jpeg"}
              height={"600"}
              width={"600"}
              alt="about"
              className="mx-auto w-full h-auto"
            />
            <h4 className="font-bold text-center mt-10">Alfi Syahrian</h4>
            <h6 className="font-normal text-center">as Coffee Brewer</h6>
          </div>
          <div className="bg-[#242629] p-7">
            <Image
              src={"/about-img3.jpeg"}
              height={"600"}
              alt="about"
              width={"600"}
              className="mx-auto w-full h-auto"
            />
            <h4 className="font-bold text-center mt-10">Arman Knaci</h4>
            <h6 className="font-normal text-center">as Spice Brewer</h6>
          </div>
          <div className="bg-[#242629] p-7">
            <Image
              src={"/about-img4.jpeg"}
              height={"600"}
              alt="about"
              width={"600"}
              className="mx-auto w-full h-auto"
            />
            <h4 className="font-bold text-center mt-10">Aldizar Ahmad</h4>
            <h6 className="font-normal text-center">as Serving Introduction</h6>
          </div>
        </div>
      </div>
      {/* end about */}
      {/* gallery */}
      <div className="static mt-24 overflow-hidden" id="gallery">
        <div className="absolute top-[3200px] right-0 -z-50">
          <Image
            src={"/gallery-bg.png"}
            height={"1000"}
            alt="gallery"
            width={"1000"}
            className="opacity-10"
          />
        </div>
        <h1 className="font-bold lg:text-[80px] text-4xl p-10 mx-7">
          Gallery.
        </h1>
        <hr className="absolute w-full left-0  border border-[#DBC7A1]" />

        <div className="text-center my-28 lg:mx-7 mx-3">
          <h1 className="text-[30px] lg:text-[50px] font-extralight">
            Opening Act
          </h1>
          <h1 className="text-[30px] lg:text-[50px] font-bold">
            Senyawa <br /> &rdquo;Nirantara Tour&rdquo;
          </h1>
        </div>
        <div className="flex overflow-x-auto z-10">
          <Image
            src={"/gallery1.jpeg"}
            width={"600"}
            height={"600"}
            alt="gallery"
            className="w-auto h-auto"
          />
          <Image
            src={"/gallery2.jpeg"}
            width={"600"}
            height={"600"}
            alt="gallery"
            className="w-auto h-auto"
          />
          <Image
            src={"/gallery3.jpeg"}
            width={"600"}
            height={"600"}
            alt="gallery"
            className="w-auto h-auto"
          />
          <Image
            src={"/gallery4.jpeg"}
            width={"600"}
            height={"600"}
            alt="gallery"
            className="w-auto h-auto"
          />
          <Image
            src={"/gallery5.jpeg"}
            width={"600"}
            height={"600"}
            alt="gallery"
            className="w-auto h-auto"
          />
          <Image
            src={"/gallery6.jpeg"}
            width={"600"}
            height={"600"}
            alt="gallery"
            className="w-auto h-auto"
          />
        </div>
        <p className="lg:float-right text-center my-12">
          Photo Taken By @alma.noxa
        </p>
        <div className="text-center my-40 lg:mx-7 mx-3">
          <h1 className="text-[30px] lg:text-[50px] font-extralight">
            Musik Harmonisasi Alam X Tiba-Tiba Manggung
          </h1>
          <h1 className="text-[30px] lg:text-[50px] font-bold mb-12">
            &rdquo;SWARA LEMBAH&rdquo; <br /> 2023
          </h1>
          <div className="flex overflow-x-auto z-10">
            <Image
              src={"/gallery_1.jpeg"}
              width={"600"}
              height={"600"}
              alt="gallery"
              className="w-auto h-auto"
            />
            <Image
              src={"/gallery_2.jpeg"}
              width={"600"}
              height={"600"}
              alt="gallery"
              className="w-auto h-auto"
            />
            <Image
              src={"/gallery_3.jpeg"}
              width={"600"}
              height={"600"}
              alt="gallery"
              className="w-auto h-auto"
            />
            <Image
              src={"/gallery_4.jpeg"}
              width={"600"}
              height={"600"}
              alt="gallery"
              className="w-auto h-auto"
            />
            <Image
              src={"/gallery_5.jpeg"}
              width={"600"}
              height={"600"}
              alt="gallery"
              className="w-auto h-auto"
            />
          </div>
          <p className="lg:float-right text-center my-12">
            Photo Taken By @alma.noxa
          </p>
        </div>
        <div className="text-center my-40 lg:mx-7 mx-3">
          <h1 className="text-[30px] lg:text-[50px] font-extralight">
            KONNECT ASEAN
          </h1>
          <h1 className="text-[30px] lg:text-[50px] font-bold mb-12">
            &rdquo;External Assesment Summer School&rdquo; <br /> 2023
          </h1>
          <div className="flex overflow-x-auto z-10">
            <Image
              src={"/konnect-asean-1.png"}
              width={"600"}
              height={"600"}
              alt="gallery"
              className="w-auto h-auto"
            />
            <Image
              src={"/konnect-asean-2.png"}
              width={"600"}
              height={"600"}
              alt="gallery"
              className="w-auto h-auto"
            />
            <Image
              src={"/konnect-asean-3.png"}
              width={"600"}
              height={"600"}
              alt="gallery"
              className="w-auto h-auto"
            />
            <Image
              src={"/konnect-asean-4.png"}
              width={"600"}
              height={"600"}
              alt="gallery"
              className="w-auto h-auto"
            />
            <Image
              src={"/konnect-asean-5.png"}
              width={"600"}
              height={"600"}
              alt="gallery"
              className="w-auto h-auto"
            />
            <Image
              src={"/konnect-asean-6.png"}
              width={"600"}
              height={"600"}
              alt="gallery"
              className="w-auto h-auto"
            />
          </div>
          <p className="lg:float-right text-center my-12">
            Photo Taken By @alma.noxa
          </p>
        </div>
      </div>
      {/* end Asean */}
      {/* about */}
      <div className="static lg:mt-48" id="works">
        <h1 className="font-bold lg:text-[80px] text-4xl  p-10 mx-7">
          tiny Works.
        </h1>
        <hr className="absolute w-full left-0  border border-[#DBC7A1]" />
        <div className="text-center my-28 lg:mx-7 mx-3">
          <h1 className="text-[30px] lg:text-[50px] font-extralight">Album</h1>
          <h1 className="text-[30px] lg:text-[50px] font-bold">
            &rdquo;150616841696&rdquo; <br /> 2023
          </h1>
          <div>
            <Image
              className="w-auto h-auto mx-auto my-6"
              src="/album.png"
              height="300"
              width="300"
              alt="album"
            />
            <h1 className="text-[30px] lg:text-[50px] font-extralight">
              Link Bandcam
            </h1>

            <a href="https://tinyuh.bandcamp.com/album/150616841696">
              https://tinyuh.bandcamp.com/album/150616841696
            </a>
          </div>
        </div>
      </div>
      {/* end about */}
      {/* about */}
      <div className="static my-48" id="store">
        <h1 className="font-bold lg:text-[80px] text-4xl  p-10 mx-7">
          tiny Store.
        </h1>
        <hr className="absolute w-full left-0  border border-[#DBC7A1]" />

        <div className="text-center">
          <div className="flex items-center justify-center gap-6 mt-28 lg:mx-7 mx-3">
            <Image
              className="my-6"
              src="/tokped.png"
              height="50"
              width="50"
              alt="tokped"
            />
            <h1 className="text-[30px] lg:text-[50px] font-extralight">
              TOKOPEDIA
            </h1>
          </div>
          <a
            href="https://www.tokopedia.com/tinyuhstore"
            className="text-[12px] md:text-[20px] lg:text-[50px] font-extralight"
          >
            https://www.tokopedia.com/tinyuhstore
          </a>
        </div>
      </div>
      {/* end about */}
      <hr className="absolute w-full left-0  border border-[#DBC7A1]" />
      <div className="mx-auto text-center lg:p-12">
        <div className="grid grid-cols-3 lg:mx-[200px] mx-8 gap-8">
          <div>
            <a
              href="https://drive.google.com/file/d/16AA83k6okge5LmJyRmHWCNoVRwDvQzES/view?usp=drive_link"
              className="font-bold text-2xl underline"
            >
              Logo
            </a>
            <Image
              src="/BC1.png"
              width="100"
              height="100"
              alt="albm"
              className="w-auto h-auto mx-auto"
            />
          </div>
          <div>
            <a
              href="https://drive.google.com/drive/folders/1JqkcXMjIBAAwMK4AQs3iJkC-oPJcZlKc?usp=drive_link"
              className="font-bold text-2xl underline"
            >
              Photo
            </a>
            <Image
              src="/BC1.png"
              width="100"
              height="100"
              alt="albm"
              className="w-auto h-auto mx-auto"
            />
          </div>
          <div>
            <a href="" className="font-bold text-2xl underline">
              Tech Riders
            </a>
            <Image
              src="/BC1.png"
              width="100"
              height="100"
              alt="albm"
              className="w-auto h-auto mx-auto"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 lg:mx-[200px] mx-8 mt-12 gap-4">
          <div className="mx-auto ">
            <div className="bg-white rounded-full p-3">
              <a href="" className="m-auto ">
                <FaYoutube color="black" size="35" />
              </a>
            </div>
          </div>
          <div className="mx-auto ">
            <div className="bg-white rounded-full p-3">
              <a href="" className="m-auto ">
                <FaFacebook color="black" size="35" />
              </a>
            </div>
          </div>
          <div className="mx-auto ">
            <div className="bg-white rounded-full p-3">
              <a href="" className="m-auto ">
                <FaInstagram color="black" size="35" />
              </a>
            </div>
          </div>
          <div className="mx-auto ">
            <div className="bg-white rounded-full p-3">
              <a href="" className="m-auto ">
                <Image
                  src="/BCBlack.png"
                  width="35"
                  height="35"
                  alt="albm"
                  className="w-[35px] h-[35px] mx-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
}

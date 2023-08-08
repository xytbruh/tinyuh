"use client";
import Image from "next/image";
import Content from "./components/Content";

export default function Home() {
  return (
    <Content>
      {/* hero */}
      <div className="justify-between lg:flex block mx-auto p-10 lg:mx-7 my-16 container">
        <div className="my-auto">
          <h1 className="text-[90px]">
            tiny<span className="uppercase font-bold ">uh.</span>
          </h1>
          <hr className="border-2 border-[#DBC7A1] my-8" />
          <p>
            Majalengka, West Java <br /> Indonesia.
          </p>
        </div>
        <div>
          <Image
            src={"/hero-tinyuh.png"}
            width={"285"}
            height={"285"}
            alt="hero"
            className="w-auto h-auto"
          />
        </div>
      </div>
      {/* end hero */}

      {/* about */}
      <div className="static lg:mt-48">
        <div className="absolute w-full left-[-150px] top-[1280px] -z-50">
          <Image
            src={"/about-bg.png"}
            height={"1000"}
            width={"1000"}
            className="opacity-10"
          />
        </div>
        <h1 className="font-bold lg:text-[80px] text-4xl  p-10 mx-7">About.</h1>
        <hr className="absolute w-full left-0  border border-[#DBC7A1]" />
        <div className="grid grid-cols-3 gap-5 p-10 mx-7">
          <div className="lg:col-span-2 col-span-3">
            <p className="leading-7 font-bold lg:text-2xl text-sm">
              Tiny uh is a banquet ceremony that conceptualizes the performing
              arts of the sense of hearing, sense of sight, sense of smell and
              sense of taste consisting of a banquet of tea, coffee and spices.
              these three elements are superior commodities found in Majalengka
              Regency and in Indonesia. <br />
              <br />
              The beginning of Tiny-Uh began with an art event held by a
              collaboration of artists from Jatiwangi Art Factory and Artists
              from Japan. Aldizar (JaF) & Gakuji Masui (Japan) presented a joint
              work resulting from a 1-month residency. They made a banquet and
              presentation about pottery/ceramic art entitled "Jawara Kawara".
              In the event, each of us did a presentation on what was presented.
              Alfi Syahrian (Kasungka Coffee) explained about coffee and his
              interest in coffee research in the Majalengka region. Arman Knaci
              (Rempah Embassy) as a spice concoction also presented spice
              stories and their intersections in the history of the archipelago.
              Yussan AF, meanwhile, did a performative presentation, playing the
              sounds of tea brewing equipment. After the event, Yussan AF
              thought of inviting Arman and Alfi to create a group (ensemble) of
              brewers who process sounds and brew performatively.
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

          <div className=" col-span-3 text-center mt-16">
            <h3 className="lg:text-[40px] text-[25px]">
              tiny<span className="uppercase font-bold ">uh.</span>
            </h3>

            <p className="font-bold leading-7 lg:text-2xl text-sm mt-12">
              Taken from the word tinyuh in Sundanese which means Brew.
              Processed into Tiny-Uh which can also be interpreted as into
              English &rdquo;Tiny&rdquo; small and &rdquo;Uh&rdquo; expression of something
              extraordinary. It can be interpreted as something small but
              capable of expressing something extraordinary.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 mx-7 my-16">
          <div className="bg-[#242629] p-7">
            <Image
              src={"/about-img1.jpeg"}
              height={"600"}
              width={"600"}
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
              className="mx-auto w-full h-auto"
            />
            <h4 className="font-bold text-center mt-10">Alfi Syahrian</h4>
            <h6 className="font-normal text-center">as Coffe Brewer</h6>
          </div>
          <div className="bg-[#242629] p-7">
            <Image
              src={"/about-img3.jpeg"}
              height={"600"}
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
      <div className="static mt-24 overflow-hidden">
        <div className="absolute top-[3200px] right-0 -z-50">
          <Image
            src={"/gallery-bg.png"}
            height={"1000"}
            width={"1000"}
            className="opacity-10"
          />
        </div>
        <h1 className="font-bold lg:text-[80px] text-4xl p-10 mx-7">
          Gallery.
        </h1>
        <hr className="absolute w-full left-0  border border-[#DBC7A1]" />

        <div className="text-center my-28">
          <h1 className="text-[30px] lg:text-[50px] font-extralight">
            Opening Act
          </h1>
          <h1 className="text-[30px] lg:text-[50px] font-bold">
            Senyawa <br /> "Nirantara Tour"
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
        <div className="text-center my-40">
          <h1 className="text-[30px] lg:text-[50px] font-extralight">
            Musik Harmonisasi Alam X Tiba-Tiba Manggung
          </h1>
          <h1 className="text-[30px] lg:text-[50px] font-bold mb-12">
            “ SWARA LEMBAH “ <br /> 2023
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
        </div>
      </div>
      {/* end gallery */}
    </Content>
  );
}

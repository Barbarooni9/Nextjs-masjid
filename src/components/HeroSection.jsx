import Link from "next/link";


export default function HeroBorder() {
  return (
    <div className=" hero-section grid lg:grid-cols-2 items-center rounded-2xl overflow-hidden pl-6 gap-6">
      {/* Text section */}
      <div className="space-y-6 pt-16 mt-16">

        <img className="absolute top-70 left-30 overflow-hidden" src="/images/moske-pattern-bg.svg" alt="patter"
          width={660} 
        />

        <h1 className="text-4xl lg:text-4xl font-bold leading-tight text-white">
          Välkomen Till Alvesta Moske 
        </h1>

        <p className="text-lg text-white" >
          Lorem ipsum odor amet, lorem lorem lorem
          ermentum magnis potenti massa
          donec habitant porta.
        </p>

        {/* Buttons */}
        <div className="flex gap-8 pt-5 ">
          <Link href="/about">
            <button className="bg-white text-#146C20  px-8 py-3 rounded-lg text-lg  shadow hover:bg-primary/90 transition cursor-pointer">
              Böntider
            </button>
          </Link>

          <Link href="/">
            <button className="border  bg-white border-#146C20 px-8 py-3 rounded-lg text-lg  text-#146C20 hover:bg-green-500 transition cursor-pointer">
              Stöd Moske
            </button>
          
          </Link>
        </div>
      </div>

      {/* Image section */}
      <div className="lg:col-span-1">
        <img
          src="/images/front-image.svg"
          alt="Example hero"
          className="rounded-xl shadow-lg w-full object-cover"
        />
      </div>
    </div>
  );
}

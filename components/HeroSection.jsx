import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="text-center text-neutral-500 text-lg mt-10  max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <Link
          href=""
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-2 mx-3  rounded-md"
        >
          Start for free
        </Link>
        <Link href="" className="border py-3 px-4 mx-3 rounded-md">
          Documentation
        </Link>
      </div>
    </section>
  );
};
export default HeroSection;

import { testimonials } from "@/constants";
import Image from "next/image";
const Testimonial = () => {
  return (
    <section className="mt-20 tracking-wide">
      <h2 className="text-3xl md:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are saying
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  justify-center">
        {testimonials.map((test, index) => (
          <div key={index} className="px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{test.text}</p>
              <div className="flex mt-8 items-start">
                <Image
                  src={test.image}
                  width={50}
                  height={50}
                  className="mr-6 rounded-full border border-neutral-300"
                />
                <div>
                  <h6>{test.user}</h6>
                  <p className="text-sm font-normal  text-neutral-600">
                    {test.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Testimonial;

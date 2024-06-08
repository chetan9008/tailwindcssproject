import Image from "next/image";
import code from "@/public/code.jpg";
import { checklistItems } from "@/constants";
import { CheckCircle2 } from "lucide-react";
const WorkFlow = () => {
  return (
    <section className="mt-20">
      <h1 className="text-3xl md:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
          coding workflow.
        </span>
      </h1>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 p-2">
          <Image src={code} alt="code" />
        </div>
        <div className="w-full lg:w-1/2 pt-12">
          {checklistItems.map((item, index) => (
            <div className="flex mb-12" key={index}>
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h1 className="mt-1 mb-2 text-xl">{item.title}</h1>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WorkFlow;

import React from "react";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa6";

const GetInTouch = () => {
  return (
    <div className="bg-[#0058FF] text-white rounded-3xl p-4 md:p-10 lg:p-20 space-y-4 md:space-y-6 lg:space-y-8 w-[358px] md:w-[688px] lg:w-[1360px] mx-auto text-center">
      <h1 className="text-2xl md:text-[32px] lg:text-5xl font-bold">
        Get In Touch
      </h1>
      <p className="w-full md:w-[608px] lg:w-[1000px] text-sm lg:text-lg text-center mx-auto">
        Contact us now to enquire our plumbing services, whether you have a
        commercial project that requires support, or a domestic plumbing task
        that needs the attention of a trusted professional.
      </p>
      <Button className="w-[260px] md:w-[299px] h-[40px] md:h-[50px] lg:h-[62px] text-[#0058FF] bg-white font-bold">
        Book a Professional Plumber <FaArrowRight />
      </Button>
    </div>
  );
};

export default GetInTouch;

import Image from "next/image";
import React from "react";

const ContactNow = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-green-100 flex flex-col items-center text-left">
        <div className="pt-[123px] pb-[123px] pl-[182px]">
          <h1>Call us</h1>
          <p>+91 93545 66860</p>

          <h1>Location</h1>
          <p>Ghaziabad, Uttar Pradesh</p>

          <h1>Mail us</h1>
          <p>info@markall.in</p>
        </div>
      </div>
      <div className="bg-green-100 relative">
        <div className="bg-white w-[715px] h-[811px]  absolute left-[-88px] top-[-80px] shadow-lg shadow-indigo-500/40">
          <div className="text-justify w-2/3 mx-auto mt-40">
            <h1>Contact Now</h1>
            <p>
              In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum
              viverra sed nibh amet. Nunc, et pharetra, duis tortor dictum nisl.
              Id vestibulum tincidunt adipiscing gravida risus.
            </p>
          </div>
          <div>
            <form className="flex flex-col w-1/2 mx-auto mt-4">
              <input
                type="text"
                id="name"
                name="name"
                className="bg-white text-black border-b-4 border-indigo-500 my-2"
                placeholder="Name"
              />
              <input
                type="email"
                id="email"
                name="email"
                className="bg-white text-black border-b-4 border-indigo-500 my-2"
                placeholder="Email"
              />
              <input
                type="tel"
                id="phone"
                name="phone"
                className="bg-white text-black border-b-4 border-indigo-500 my-2"
                placeholder="Phone"
              />
              <input
                type="text"
                id="message"
                name="message"
                className="bg-white text-black border-b-4 border-indigo-500 my-2"
                placeholder="Message"
              />
              <button type="submit" className="btn bg-blue-600 text-white mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactNow;

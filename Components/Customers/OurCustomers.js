import React from "react";

const OurCustomers = () => {
  return (
    <div className="grid grid-cols-2  w-[1440px] h-[700px]">
      <div className="flex items-start justify-center">
        <div className="p-16">
          <h1>OUR HAPPY CUSTOMERS</h1>
          <h1>What our customers say about us</h1>
        </div>
      </div>
      <div>
        <div className="flex items-end justify-center">
          <div className="p-16">
            <p>
              Lorem ipsum dolor sit amet consectetur. In praesent ac sit
              scelerisque lacus. Faucibus tincidunt commodo mi.
            </p>
            <h1>Jane Doe</h1>
            <p>Product Specialist, Lorem Co.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCustomers;

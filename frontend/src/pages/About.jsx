import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-10 lg:gap-16 items-center">
        <img
          className="w-full sm:max-w-[400px] md:max-w-[450px] mx-auto"
          src={assets.about_img}
          alt=""
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever is a modern e-commerce platform designed to provide
            customers with a seamless and enjoyable online shopping experience.
            We offer a wide range of high-quality products across multiple
            categories, ensuring that every customer can find exactly what they
            need.
          </p>

          <p>
            Our mission is to combine quality, affordability, and convenience
            while delivering exceptional service and fast, reliable delivery.
            Customer satisfaction is at the heart of everything we do, and we
            continuously strive to improve our platform to make online shopping
            easier and more enjoyable for everyone.
          </p>

          <b className="text-gray-800">Our Mission</b>

          <p>
            At Forever, we aim to redefine online shopping by offering a trusted
            platform where customers can discover quality products at
            competitive prices. We are committed to innovation, reliability, and
            providing an exceptional shopping experience from browsing to
            delivery.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We carefully select our products to ensure they meet high standards
            of quality and reliability.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Our platform is designed to provide a smooth and hassle-free
            shopping experience for all customers.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our support team is dedicated to helping customers and ensuring a
            satisfying shopping journey.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;

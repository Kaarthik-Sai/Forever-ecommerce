import React, { useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { Navigate, useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const [method, setMethod] = useState("razorpay");
  const navigate = useNavigate();
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* --------------Left Side ------------------ */}

      <div className="flex flex-col gap-4 w-full The class `sm:max-w-[480px]` can be written as `sm:max-w-120`">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"Delivery"} text2={"Information"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <input
          type="text"
          placeholder="Street"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="State"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Zip Code"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Country"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          type="number"
          placeholder="Phone"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
      </div>
      {/* --------------Right Side ------------------ */}

      <div className="mt-8">
        <div className="min-w-80 mt-8">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"Payment"} text2={"Method"} />

          <div className="flex flex-col lg:flex-row gap-3 mt-5">
            {/* Stripe */}
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-4 cursor-pointer min-w-[180px]"
            >
              <div
                className={`w-4 h-4 border rounded-full flex items-center justify-center ${
                  method === "stripe" ? "border-green-500" : ""
                }`}
              >
                {method === "stripe" && (
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                )}
              </div>

              <img src={assets.stripe_logo} alt="Stripe" className="h-5" />
            </div>

            {/* Razorpay */}
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-4 cursor-pointer min-w-[180px]"
            >
              <div
                className={`w-4 h-4 border rounded-full flex items-center justify-center ${method === "razorpay" ? "border-green-500" : ""}`}
              >
                {method === "razorpay" && (
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                )}
              </div>

              <img src={assets.razorpay_logo} alt="Razorpay" className="h-5" />
            </div>

            {/* COD */}
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-4 cursor-pointer min-w-[180px]"
            >
              <div
                className={`w-4 h-4 border rounded-full flex items-center justify-center ${
                  method === "cod" ? "border-green-500" : ""
                }`}
              >
                {method === "cod" && (
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                )}
              </div>

              <p className="text-sm text-gray-500 uppercase">
                Cash On Delivery
              </p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button
              onClick={() => navigate("/orders")}
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

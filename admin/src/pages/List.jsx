import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");

      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        {
          id,
        },
        { headers: { token } },
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-5">All Products</h2>

      <div className="flex flex-col gap-2">
        {/* Table Header */}
        <div className="hidden md:grid md:grid-cols-[0.8fr_2.5fr_1fr_1fr_0.5fr] items-center px-4 py-3 bg-gray-100 border rounded-md font-semibold text-gray-700">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p className="text-center">Action</p>
        </div>

        {/* Product List */}
        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[0.8fr_2fr_1fr] md:grid-cols-[0.8fr_2.5fr_1fr_1fr_0.5fr] items-center gap-3 px-4 py-3 border rounded-md bg-white hover:shadow-md transition-all duration-200"
          >
            {/* Image */}
            <img
              src={item.image[0]}
              alt={item.name}
              className="w-14 h-14 object-cover rounded-md"
            />

            {/* Name */}
            <p className="font-medium text-gray-800 truncate">{item.name}</p>

            {/* Category */}
            <p className="text-gray-600">{item.category}</p>

            {/* Price */}
            <p className="hidden md:block font-semibold">
              {currency} {item.price}
            </p>

            {/* Delete */}
            <button
              onClick={() => removeProduct(item._id)}
              className="hidden md:flex justify-center items-center w-8 h-8 mx-auto rounded-full text-red-500 hover:bg-red-100 hover:text-red-700 transition"
            >
              ✕
            </button>
          </div>
        ))}

        {list.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No products found.
          </div>
        )}
      </div>
    </div>
  );
};

export default List;

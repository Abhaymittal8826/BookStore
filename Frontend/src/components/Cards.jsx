import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card group bg-base-100 overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl dark:bg-slate-800 dark:text-white border-0">
        <figure className="relative overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </figure>
        <div className="card-body p-4">
          <div className="flex items-center justify-between">
            <h2 className="card-title text-lg font-bold">{item.name}</h2>
            <div className="badge badge-secondary bg-gradient-to-r from-pink-500 to-purple-500 border-0 text-white">
              {item.category}
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{item.title}</p>
          <div className="card-actions justify-between items-center mt-4">
            <div className="text-lg font-bold text-pink-500">${item.price}</div>
            <button className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium transform transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const items = useSelector((state) => state.cartSlice.items)
  console.log(items)
  return (
    <div className=" fixed flex justify-around bg-slate-100 w-full p-4">
      <div className="font-bold">
        <img
          className="h-8"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        />
      </div>
      <div className="flex">
        <div>
          <a href="/" className="font-bold">
            menu
          </a>
        </div>

        <li class="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
          <a href="#" role="button" class="relative flex">
            <svg className="flex-1 w-8 h-8 fill-current">
              <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
            </svg>
            <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
            
              {items.length} 
            </span>
          </a>
        </li>
      </div>
    </div>
  );
};

export default Header;

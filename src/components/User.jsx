import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import '../index.css'

const Content = ({ user }) => {
  const [toggle, setToggle] = useState(false);
  const [info, setInfo] = useState([]);

  const showDetails = async (id) => {     // function for fetching the information of single user
    setToggle(!toggle);
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setInfo(response.data);
  };


  return (
<div  key={user.id}>
    <div
      className="list-none sm:flex p-2 border border-black sm:justify-between sm:items-center sm:h-[150px] bg-white mb-2 shadow-2xl rounded-lg flex flex-col lg:flex-row sm:flex-row"
    >
      <li className="font-bold m-2 sm:w-[20%] text-center">{user.company.name}</li>
      <li className="font-bold sm:w-[20%]">
        <h1>Contact </h1>
        <span className="font-semibold">{user.name}</span>
      </li>
      <li className="font-bold sm:w-[20%]">
        <h1>City</h1>
        <span className="font-semibold">{user.address.city}</span>
      </li>
      <li className="font-bold sm:w-[20%]">
        <h1>Website</h1>
        <span className="font-semibold">{user.website}</span>
      </li>
      <button
        onClick={() => {
          showDetails(user.id);
        }}
        className="sm:w-[10%] border-2 p-[5px] rounded-2xl bg-orange-400 hover:bg-white hover:text-black hover:border-orange-400 transition-all ease-out duration-500 "
      >
        {toggle ? "hide details" : "view details"}
      </button>
    </div>

// description section

    {toggle && 
    <div className="bg-white rounded-lg border border-black mb-3 pl-1 sm:pl-3 animation " >
        <div>
            <span className="font-bold">Description</span>
            <p className="font-light font-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, saepe?</p>
        </div>
        <div className="flex justify-between ">
        <div className="list-none sm:w-[30%]">
            <li>
                <span className="font-bold">Contact Person</span>
                <p>{user.name}</p>
            </li>
            <li>
                <span className="font-bold">Email</span>
                <p>{user.email}</p>
            </li>
            <li>
                <span className="font-bold">Phone</span>
                <p>{user.phone.slice(0,14)}</p>
            </li>
            <li>
                <span className="font-bold">Website</span>
                <p>{user.website}</p>
            </li>
            </div>
            <div className="list-none sm:w-[70%]">
            <li>
                <span className="font-bold">Address</span>
                <p>{user.address.street}</p>
            </li>
            <li>
                <span className="font-bold">City</span>
                <p>{user.address.city}</p>
            </li>
            <var><li>
                <span className="font-bold">Zipcode</span>
                <p>{user.address.zipcode}</p>
            </li></var>
        </div>
        </div>
    </div>
    }
</div>
  );
};

export default Content;

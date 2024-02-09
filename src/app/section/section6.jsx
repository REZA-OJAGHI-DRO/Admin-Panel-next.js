"use client";
import "../globals.css";
import {useState, useRef ,useEffect } from "react";
import Image from "next/image";
export default function S6() {
  const x = useRef();
  function para1(e) {
    if (e.target.getAttribute("data-status") == "off") {
      x.current.style.display = "flex";
      e.target.setAttribute("data-status", "on");
    } else {
      x.current.style.display = "none";
      e.target.setAttribute("data-status", "off");
    }
  }
  return (
    <section className="w-[100%] h-[550px] hidden p-4 md:flex justify-center xl:justify-between items-center">
      <article className="w-[100%] h-[100%] bg-[rgba(0,0,0,0.45)] p-4 rounded-xl">
        <div className="w-[100%] h-[10%] flex border-b-[.05px] border-[rgba(147,146,146,0.34)]">
          <div className="w-[50%] h-[100%] flex items-center">
            <p className="w-[100%] text-[1.4rem] font-bold">Orders Summary</p>
          </div>
          <div className="w-[50%] h-[100%] text-[1.8rem] relative flex justify-end items-center">
            <i
              data-status="off"
              onClick={() => para1(event)}
              className="cursor-pointer bi bi-three-dots"
            ></i>
            <ul
              ref={x}
              className="bg-black w-[180px] p-2 px-3 text-zinc-300 absolute top-[70%] hidden flex-wrap text-[1rem] rounded-xl "
            >
              <li className="w-[100%] h-[30px]">action</li>
              <li className="w-[100%] h-[30px]">another</li>
              <li className="w-[100%] h-[30px] py-3 my-3 border-t border-zinc-400">
                something else here
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[100%] h-[90%] pt-2">
          <ul className="w-[100%] h-[7%] cursor-pointer *:text-[1rem] font-bold *:h-[100%] *:flex *:items-center  bg-[rgba(255,255,255,.15)] flex justify-between capitalize">
            <li className="w-[10%] justify-start">Order id</li>
            <li className="w-[30%] justify-start">Product</li>
            <li className="w-[10%] justify-start">Customer</li>
            <li className="w-[10%] justify-start">Date</li>
            <li className="w-[10%] justify-start">Price</li>
            <li className="w-[10%] justify-start">Status</li>
            <li className="w-[20%] flex justify-center items-center">
              Action
            </li>
          </ul>
          <Ul/>
        </div>
      </article>
    </section>
  );
}

function Ul() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const x = await fetch("https://65c1ee91f7e6ea59682a15d9.mockapi.io/admin");
      const y = await x.json();
      setData(y);
    }
    getData();
  }, []);
  const data1 = data.slice(12, 19);
  return (
    <ul className="w-[100%] h-[100%] pt-2">
      {data1 &&
        data1.map((val) => {
          return (
            <li className="w-[100%] h-[13.28%] border-b-[.05px] border-[rgba(147,146,146,0.34)]">
              <ul className="w-[100%] h-[100%] flex">
                <li className="w-[10%] justify-start flex items-center">{val.orderId}</li>
                <li className="w-[30%] justify-start flex items-center">
                    <div className="w-[2.5rem] h-[3rm] flex justify-center items-center rounded-lg mx-1 cursor-pointer border-[.05px] border-[rgba(147,146,146,0.34)] bg-[rgba(255,255,255,.15)]">
                  <Image
                    src={val.img}
                    alt="Picture of the author"
                    width={35}
                    height={35}
                    style={{
                        width: "2rem",
                        height: "2rem",
                        objectFit: "cover",
                        borderRadius: "50%",
                        marginRight: "5px",
                    }}
                    />
                    </div>
                    <div className="flex flex-wrap content-center items-center">
                    <p className="text-[1rem]">{val.title}</p>
                </div>
                </li>
                <li className="w-[10%] justify-start flex items-center">{val.Customer}</li>
                <li className="w-[10%] justify-start flex items-center">{val.date}</li>
                <li className="w-[10%] justify-start flex items-center">{val.price}</li>
                <li className="w-[10%] justify-start flex items-center"><span className="ani1 w-[.8rem] h-[.8rem] me-2 border-2 rounded-full flex justify-center items-center"><span className="w-[.4rem] h-[.4rem] bg-white rounded-full "></span></span> {val.Status}</li>
                <li className="w-[20%] flex justify-center items-center">
                    <i className="bi bi-gear bg-[rgba(255,255,255,.15)] text-[1rem] w-[2rem] h-[2rem] flex justify-center items-center rounded-lg mx-1 cursor-pointer border-[.05px] border-[rgba(147,146,146,0.34)]"></i>
                    <i className="bi bi-arrow-down-short bg-[rgba(255,255,255,.15)] text-[1rem] w-[2rem] h-[2rem] flex justify-center items-center rounded-lg mx-1 cursor-pointer border-[.05px] border-[rgba(147,146,146,0.34)]"></i>
                </li>
              </ul>
            </li>
          );
        })}
    </ul>
  );
}

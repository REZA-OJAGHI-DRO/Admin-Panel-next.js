"use client"
import {useState, useRef ,useEffect } from "react";
import Image from "next/image"; 

export default function S6(){
    return(
        <section className="w-[100%] h-[70vh] p-4 hidden lg:flex">
            <article className="w-[100%] h-[100%] rounded-lg p-4 bg-[rgba(0,0,0,0.45)]">
                <ul className="w-[100%] h-[7.5%] border-b-[.05px] border-[rgba(147,146,146,0.34)] bg-[rgba(255,255,255,.15)]">
                    <li className="w-[100%] h-[100%] flex justify-between *:text-[.8rem] *:xl:text-[1rem]">
                        <div className="h-[100%] flex justify-start px-2 items-center w-[30%]">Potential Leads</div>
                        <div className="h-[100%] flex justify-start px-2 items-center w-[5%]">Diposit</div>
                        <div className="h-[100%] flex justify-start px-2 items-center w-[27%]">Progress</div>
                        <div className="h-[100%] flex justify-start px-2 items-center w-[10%]">Last Update</div>
                        <div className="h-[100%] flex justify-start px-2 items-center w-[18%]">Status</div>
                    </li>
                </ul>
                <Ul/>
            </article>
        </section>
    )
}

function Ul(){
     const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const x = await fetch("https://65c1ee91f7e6ea59682a15d9.mockapi.io/admin");
      const y = await x.json();
      setData(y);
    }
    getData();
  }, []);
  const data1 = data.slice(0, 6);
    return(
        <ul className="w-[100%] h-[92.5%]">
            {data1 && data1.map((val , index)=>{
                return(
                <li key={index} className="w-[100%] h-[16%]">
                <ul className="w-[100%] h-[100%] cursor-pointer text-[.8rem] xl:text-[1rem] *:h-[100%] *:flex *:justify-start *:items-center  border-b-[.05px] border-[rgba(147,146,146,0.34)] flex justify-around capitalize">
                    <li className="w-[30%] px-3 flex">
                        <input type="checkbox" className="w-[1rem] h-[1rem] me-2"/>
                        <Image
                        src={val.img}
                        alt="Picture of the author"
                        width={35}
                        height={35}
                        style={{
                          width: "3rem",
                          height: "3rem",
                          objectFit: "cover",
                          borderRadius: "50%",
                          marginRight:'5px',
                        }}
                        />
                        <div className="flex flex-wrap content-center">
                            <p className="w-[100%] text-[.8rem] xl:text-[1rem]">{val.orderId}</p>
                            <p className="w-[100%] text-[.8rem] xl:text-[1rem] text-zinc-400">Lead Designers</p>
                        </div>
                    </li>
                    <li className="w-[5%] flex justify-center text-[.8rem] xl:text-[1rem]">$97,420</li>
                    <li className="w-[27%] flex justify-center">
                        <div className="w-[100%] h-[.3rem] bg-[rgba(255,255,255,.2)] rounded-full">
                        <div className="w-[70%] h-[.3rem] bg-[rgba(255,255,255,.9)] rounded-full"></div>
                        </div>
                        </li>
                    <li className="w-[10%] flex justify-center text-[.8rem] xl:text-[1rem]">{val.date}</li>
                    <li className="w-[18%] flex justify-center text-[.8rem] xl:text-[1rem]">{val.cc}</li>
                </ul>
            </li>
            )
            })}
        </ul>
    )
}
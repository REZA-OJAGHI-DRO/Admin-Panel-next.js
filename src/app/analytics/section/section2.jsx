"use client"
import { useRef } from "react";
export default function S2(){
    return(
        <section className="w-[100%] h-[100vh] md:h-[50vh] xl:h-[25vh] p-4 flex flex-wrap justify-between">
            <Ar1/>
            <Ar2/>
            <Ar3/>
            <Ar4/>
        </section>
    )
}

function Ar1(){
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
    return(
        <article className="w-[100%] md:w-[48%] xl:w-[23%] h-[23%] md:h-[48%] xl:h-[100%] p-3 rounded-lg bg-[rgba(0,0,0,0.45)] flex flex-wrap">
            <div className="w-[100%] flex h-[40%]">
          <div className="w-[70%] h-[100%] ">
            <p className="w-[100%] text-[1rem] text-zinc-400 font-bold">Total Users</p>
            <p className="w-[100%] text-[1.3rem] flex gap-2">
            85,028
            </p>
          </div>
          <div className="w-[30%] h-[100%] text-[1.8rem] relative flex justify-end items-center">
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
        <div className="w-[100%] h-[50%]">
        <SimpleBarChart/>
        </div>
        </article>
    )
}
function Ar2(){
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
    return(
        <article className="w-[100%] md:w-[48%] xl:w-[23%] h-[23%] md:h-[48%] xl:h-[100%] p-3 rounded-lg bg-[rgba(0,0,0,0.45)] flex flex-wrap">
            <div className="w-[100%] flex h-[40%]">
          <div className="w-[70%] h-[100%] ">
            <p className="w-[100%] text-[1rem] text-zinc-400 font-bold">Page Views</p>
            <p className="w-[100%] text-[1.3rem] flex gap-2">
            42,892
            </p>
          </div>
          <div className="w-[30%] h-[100%] text-[1.8rem] relative flex justify-end items-center">
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
        <div className="w-[100%] h-[60%]">
        <SimpleBarChart/>
        </div>
        </article>
    )
}
function Ar3(){
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
    return(
        <article className="w-[100%] md:w-[48%] xl:w-[23%] h-[23%] md:h-[48%] xl:h-[100%] p-3 rounded-lg bg-[rgba(0,0,0,0.45)] flex flex-wrap">
            <div className="w-[100%] flex h-[40%]">
          <div className="w-[70%] h-[100%] ">
            <p className="w-[100%] text-[1rem] text-zinc-400 font-bold">Avg. Session Duration</p>
            <p className="w-[100%] text-[1.3rem] flex gap-2">
            00:03:20
            </p>
          </div>
          <div className="w-[30%] h-[100%] text-[1.8rem] relative flex justify-end items-center">
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
        <div className="w-[100%] h-[60%]">
        <SimpleBarChart/>
        </div>
        </article>
    )
}
function Ar4(){
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
    return(
        <article className="w-[100%] md:w-[48%] xl:w-[23%] h-[23%] md:h-[48%] xl:h-[100%] p-3 rounded-lg bg-[rgba(0,0,0,0.45)] flex flex-wrap">
            <div className="w-[100%] flex h-[40%]">
          <div className="w-[70%] h-[100%] ">
            <p className="w-[100%] text-[1rem] text-zinc-400 font-bold">Bounce Rate</p>
            <p className="w-[100%] text-[1.3rem] flex gap-2">
            51.46%
            </p>
          </div>
          <div className="w-[30%] h-[100%] text-[1.8rem] relative flex justify-end items-center">
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
        <div className="w-[100%] h-[60%]">
        <SimpleBarChart/>
        </div>
        </article>
    )
}

import React from 'react';
import { BarChart, Bar, XAxis, PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SimpleBarChart = () => {
    const data = [
      { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
      { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
      { name: 'Mar', uv: 2000, pv: 5800, amt: 2290 },
      { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
      { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
      { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
      { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
      { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
      { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
      { name: 'Mar', uv: 2000, pv: 5800, amt: 2290 },
      { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
      { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
      { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
      { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
    ];
  
    return (
      <ResponsiveContainer width="100%" height='100%'>
        <BarChart
          data={data}
          margin={{ top: 5, right:0, left: 0, bottom: 0 }}
          barGap={1}
          barSize={10}
        >
          <Tooltip 
          
            width={50}
            height={20}
          
          itemStyle={{
              color:'rgb(0,0,0)',
              width:'5rem',
              height:'1rem',
              margin:0,
              padding:0,
          }}
          />

          <Bar dataKey="pv" fill="rgb(255,255,255)" />

        </BarChart>
      </ResponsiveContainer>
    );
  };
  
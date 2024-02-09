"use client";
import "../globals.css";
import { useRef } from "react";
export default function S4() {
  return (
    <section className="w-[100%] h-[1560px] md:h-[1040px] xl:h-[520px] px-4 gap-4 flex flex-wrap justify-center xl:justify-between items-center">
      <Ar1 />
      <Ar2/>
      <Ar3/>
    </section>
  );
}

function Ar1() {
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
    <article className="w-[100%] md:w-[48%] xl:w-[32%] h-[32%] md:h-[48%] xl:h-[100%] bg-[rgba(0,0,0,0.45)] p-4 rounded-xl">
        <div className="w-[100%] h-[10%] flex">
            <div className="w-[50%] h-[100%] flex items-center">
              <p className="w-[100%] text-[1.4rem] font-bold">Top Categories</p>
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
        <div className="w-[100%] h-[60%] pb-2">
            <SimpleDoughnutChart/>
        </div>
        <div className="w-[100%] h-[30%]">
             <ul className="w-[100%] h-[100%] flex flex-wrap *:capitalize *:w-[100%] *text-[1rem] *:h-[25%]">
                <li className="border-b-[.05px] px-4 border-[rgba(147,146,146,0.34)] flex justify-between items-center">
                    <p>Kids</p>
                    <p>25</p>
                </li>
                <li className="border-b-[.05px] px-4 border-[rgba(147,146,146,0.34)] flex justify-between items-center">
                    <p>Women</p>
                    <p>10</p>
                </li>
                <li className="border-b-[.05px] px-4 border-[rgba(147,146,146,0.34)] flex justify-between items-center">
                    <p>Men</p>
                    <p>65</p>
                </li>
                <li className="flex justify-between items-center px-4">
                    <p>Furniture</p>
                    <p>14</p>
                </li>
            </ul>
        </div>
    </article>
  );
}

function Ar2(){
    return(
        <article className="w-[100%] md:w-[48%] xl:w-[32%] h-[32%] md:h-[48%] xl:h-[100%] bg-[rgba(0,0,0,0.45)] p-4 rounded-xl">
           <div className="w-[100%] h-[15%]">
            <p className="text-[1rem] flex items-center text-zinc-400">Visitors</p>
            <p className="text-[1.7rem] flex items-center gap-3">43,540 <span className="flex items-center text-[1rem] text-zinc-400">4.4 <i className="bi bi-arrow-up-short"></i></span></p>
           </div>
           <div className="w-[100%] h-[85%]">
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
        <article className="w-[100%] md:w-[48%] xl:w-[32%] h-[32%] md:h-[48%] xl:h-[100%] bg-[rgba(0,0,0,0.45)] p-4 rounded-xl">
            <div className="w-[100%] h-[10%] flex">
            <div className="w-[50%] h-[100%] flex items-center">
              <p className="w-[100%] text-[1.4rem] font-bold">Top Categories</p>
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
            <div className="w-[100%] h-[80%] flex justify-center items-center">
                <SimpleGaugeChart />
            </div>
            <div className="w-[100%] h-[10%] flex justify-between">
                <div className="w-[20%] h-[100%] flex flex-wrap justify-center content-center">
                    <p className="text-[1rem]">$289.42</p>
                    <p className="text-[1rem] text-zinc-400">Last Week</p>
                </div>
                <div className="w-[20%] h-[100%] flex flex-wrap justify-center content-center">
                    <p className="text-[1rem]">$856.14</p>
                    <p className="text-[1rem] text-zinc-400">Last Month</p>
                </div>
                <div className="w-[20%] h-[100%] flex flex-wrap justify-center content-center">
                    <p className="text-[1rem]">$987,25</p>
                    <p className="text-[1rem] text-zinc-400">Last Year</p>
                </div>
            </div>
        </article>
    )
}

import React from 'react';
import { BarChart, Bar, XAxis, PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SimpleDoughnutChart = () => {
  const data = [
    { name: 'Kids', value: 25 ,fill:'rgba(255,255,255,.6)'},
    { name: 'Furniture', value: 14 ,fill:'rgba(255,255,255,.3)'},
    { name: 'Women', value: 10 ,fill:'rgba(255,255,255,.6)'},
    { name: 'Men', value: 65 ,fill:'rgb(255,255,255)'},
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}

          label
        />
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};



const SimpleBarChart = () => {
  const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <ResponsiveContainer width="100%" height='100%'>
      <BarChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        barGap={5}
        barSize={20}
      >
        <XAxis dataKey="name" />

        <Tooltip 
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


import {
  RadialBarChart,
  RadialBar,
} from "recharts";

const data = [
  { name: "Last Week", value: 20 },
  { name: "Last Month", value: 40 },
  { name: "Last Year", value: 60 },
];

const SimpleGaugeChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        innerRadius="20%"
        outerRadius="80%"
        data={data}
        startAngle={90}
        endAngle={-270}
      >
        <RadialBar
          background
          clockWise
          dataKey="value"
          cornerRadius="10px"
          fill="rgba(200,100,100,.6)"
        />
        <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" align="bottom" />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

























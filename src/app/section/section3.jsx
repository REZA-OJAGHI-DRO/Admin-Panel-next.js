"use client"
import { useEffect, useRef, useState } from "react";

export default function S3(){
    return(
        <section className="w-[100%] h-[650px] md:h-[1300px] xl:h-[650px] p-4 py-5 gap-4 flex flex-wrap justify-between items-center">
            <article className="hidden md:flex w-[100%] xl:w-[63%] h-[63%] xl:h-[100%] bg-[rgba(0,0,0,0.45)] rounded-xl">
           <Pag/>
            </article>
            <article className="w-[100%] xl:w-[35%] h-[100%] md:h-[35%] xl:h-[100%] flex content-between flex-wrap gap-4">
                <div className="w-[100%] md:w-[48%] xl:w-[100%] h-[30%] md:h-[48%] xl:h-[30%] rounded-xl bg-[rgba(0,0,0,0.45)]">
                    <div className="w-[100%] h-[40%] flex p-3">
                        <div className="w-[50%] h-[100%] flex justify-start content-center flex-wrap">
                            <p className="w-[100%] text-zinc-300 text-[1rem]">Bounce Rate</p>
                            <p className="w-[100%] text-[1.7rem] font-bold">48.32%</p>
                        </div>
                        <div className="w-[50%] h-[100%] flex justify-end content-center flex-wrap">
                            <p className="w-[100%] flex justify-end text-[.9rem]">+12.34 Increase</p>
                            <p className="w-[100%] flex justify-end text-[.9rem] text-zinc-300">From Last Week</p>
                        </div>
                    </div>
                    <div className="w-[100%] h-[60%]">
                        <SimpleLineChart/>
                    </div>
                </div>
                <div className="w-[100%] md:w-[48%] xl:w-[100%] h-[30%] md:h-[48%] xl:h-[30%] rounded-xl bg-[rgba(0,0,0,0.45)]">
                    <div className="w-[100%] h-[40%] flex p-3">
                        <div className="w-[50%] h-[100%] flex justify-start content-center flex-wrap">
                            <p className="w-[100%] text-zinc-300 text-[1rem]">Pageviews</p>
                            <p className="w-[100%] text-[1.7rem] font-bold">52.64%</p>
                        </div>
                        <div className="w-[50%] h-[100%] flex justify-end content-center flex-wrap">
                            <p className="w-[100%] flex justify-end text-[.9rem]">+21.34 Increase</p>
                            <p className="w-[100%] flex justify-end text-[.9rem] text-zinc-300">From Last Week</p>
                        </div>
                    </div>
                    <div className="w-[100%] h-[60%]">
                    <SimpleLineChart/>
                    </div>
                </div>
                <div className="w-[100%] md:w-[48%] xl:w-[100%] h-[30%] md:h-[48%] xl:h-[30%] rounded-xl bg-[rgba(0,0,0,0.45)]">
                    <div className="w-[100%] h-[40%] flex p-3">
                        <div className="w-[50%] h-[100%] flex justify-start content-center flex-wrap">
                            <p className="w-[100%] text-zinc-300 text-[1rem]">New Sessions</p>
                            <p className="w-[100%] text-[1.7rem] font-bold">68.23%</p>
                        </div>
                        <div className="w-[50%] h-[100%] flex justify-end content-center flex-wrap">
                            <p className="w-[100%] flex justify-end text-[.9rem]">+18.42 Increase</p>
                            <p className="w-[100%] flex justify-end text-[.9rem] text-zinc-300">From Last Week</p>
                        </div>
                    </div>
                    <div className="w-[100%] h-[60%]">
                    <SimpleLineChart/>
                    </div>
                </div>
            </article>
        </section>
    )
}

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Page A", uv: 4000, pv: 5400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 3398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 2800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 8800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 9800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 5300, amt: 2100 },
    { name: "Page H", uv: 4490, pv: 4300, amt: 2100 },
    { name: "Page L", uv: 3490, pv: 3300, amt: 2100 },
    { name: "Page M", uv: 3490, pv: 7300, amt: 2100 },
];

const SimpleLineChart = () => {
    return (
        <ResponsiveContainer  width="100%" height="100%">
        <LineChart data={data}>

          <Tooltip
            contentStyle={{
                backgroundColor: "rgba(0,0,0,.5)",
                fontWeight: "bold",
                width: "4rem",
                height: "4rem",
                fontSize: ".8rem",
            }}
            />
   
          <Line type="Area" dataKey="pv" stroke="white" strokeWidth={5} />
      
        </LineChart>
      </ResponsiveContainer>
    );
};


import Image from "next/image";
function Pag(){
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

    function upDown(y,e) {
        if (e.target.getAttribute("data-status") == "off") {
        e.target.children[0].style.color = "#acacac";
        e.target.children[1].style.color = "white";
        e.target.setAttribute("data-status", "on");
    } else {
        e.target.children[0].style.color = "white";
        e.target.children[1].style.color = "#acacac";
        e.target.setAttribute("data-status", "off");
      }
    }
    return(
        <section className="w-[100%] h-[100%] flex flex-wrap p-4">
            <article className="w-[100%] h-[12%] flex">
            <div className="w-[50%] h-[100%] ">
              <p className="w-[100%] text-[1.5rem] font-bold">Transaction History</p>
              <p className="w-[100%] text-[.9rem] text-zinc-300 flex gap-2">
                <i className="bi bi-calendar2-week-fill"></i> in last 30 days revenue
              </p>
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
            </article>
            <article className="w-[100%] h-[88%] ">
                <ul className="w-[100%] h-[7%] cursor-pointer *:text-[1rem] font-bold *:h-[100%] *:flex *:justify-start *:items-center  bg-[rgba(255,255,255,.15)] flex justify-around capitalize">
                    <li className="w-[40%] px-3">payment name</li>
                    <li onClick={()=>upDown(1,event)} data-status='off' className="w-[20%] flex justify-center"><i className="bi bi-arrow-up"></i><i className="bi bi-arrow-down text-[#acacac] me-2"></i> date & time</li>
                    <li onClick={()=>upDown(2,event)} data-status='off' className="w-[20%] flex justify-center"><i className="bi bi-arrow-up"></i><i className="bi bi-arrow-down text-[#acacac] me-2"></i> amount</li>
                    <li onClick={()=>upDown(3,event)} data-status='off' className="w-[20%] flex justify-center"><i className="bi bi-arrow-up"></i><i className="bi bi-arrow-down text-[#acacac] me-2"></i> status</li>
                </ul>
                <Ul/>
            </article>
        </section>
    )
}

function Ul(){
   const[data,setData]=useState([]) 
   const[page,setPage]=useState(1)
   const [post, setPost] = useState(6);
   useEffect(()=>{
    async function getData(){
        const x=await fetch('https://65c1ee91f7e6ea59682a15d9.mockapi.io/admin')
        const y=await x.json()
        setData(y)
    }
    getData()
   },[]);
   
   const lastPage= page * post;
   const firstPage=lastPage - post;
   const data1=data.slice(0,12)
   const currentPost=data1.slice(firstPage,lastPage);
   const x2=useRef()
   const x3=useRef()
   const x4=useRef()
   const x5=useRef()
   const para=(x,e)=>{
       setPage(x)
       
    if(x==1){
        x2.current.style.background='rgba(29,29,29,0.44)'
        x3.current.style.background='rgba(255,255,255,.15)'
        x4.current.style.background='rgba(239,238,238,0.43)'
        x5.current.style.background='rgba(255,255,255,.15)'
    }else if(x==2){
        x2.current.style.background='rgba(255,255,255,.15)'
        x3.current.style.background='rgba(29,29,29,0.44)'
        x4.current.style.background='rgba(255,255,255,.15)'
        x5.current.style.background='rgba(239,238,238,0.43)'
    }

}
   return(
        <ul className="w-[100%] h-[86%]">
            {currentPost.map((val )=>{
                return(
                    <>
                    <li key={val.id} className="w-[100%] h-[16%]">
                        <ul className="w-[100%] h-[100%] cursor-pointer *:text-[1rem] *:h-[100%] *:flex *:justify-start *:items-center  border-b-[.05px] border-[rgba(147,146,146,0.34)] flex justify-around capitalize">
                            <li className="w-[40%] px-3">
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
                                    <p className="text-[1rem]">{val.orderId}</p>
                                    <p className="text-[1rem] text-zinc-400">{val.title}</p>
                                </div>
                            </li>
                            <li className="w-[20%] flex justify-center">{val.date}</li>
                            <li className="w-[20%] flex justify-center">{val.Customer}</li>
                            <li className="w-[20%] flex justify-center">{val.cc}</li>
                        </ul>
                    </li>
                    </>
                )
            })
                
            }
            <li className="w-[100%] text-[1.5rem] h-[15%] flex *:capitalize items-center justify-end *:border-[.05px] *:border-[rgba(147,146,146,0.34)]">
                <button ref={x4} onClick={()=>para(1,event)} className="w-[8%] flex items-center justify-center rounded-s-lg bg-[rgba(239,238,238,0.43)]">prev</button>
                <button ref={x2} onClick={()=>para(1,event)} className="w-[4%] bg-[rgba(29,29,29,0.44)]">1</button>
                <button ref={x3} onClick={()=>para(2,event)} className="w-[4%] bg-[rgba(255,255,255,.15)]">2</button>
                <button ref={x5} onClick={()=>para(2,event)} className="w-[8%] flex items-center justify-center rounded-e-lg bg-[rgba(255,255,255,.15)]">next</button>
            </li>
        </ul>
    )
}
  
 

  


'use client'
import Image from "next/image"
export default function S4() {
    return(
        <section className='w-[100%] h-[140vh] lg:h-[70vh] p-4 gap-4 flex flex-wrap'>
            <Ar1/>
            <Ar2/>
        </section>
    )
}

function Ar1(){
    return(
        <article className="w-[100%] lg:w-[59%] h-[49%] lg:h-[100%] flex justify-center items-center">
                          
                          <X/>
        </article>
    )
}
function Ar2(){
    return(
        <article className="w-[100%] lg:w-[39%] h-[49%] lg:h-[100%] overflow-hidden">
            <div className="w-[100%] h-[15%] flex justify-between items-center">
                <p className="text-[1.5rem]">Top countries</p>
                <p className="text-[1rem]">Total Visits: <span className="text-[2rem]">9587</span></p>
            </div>
            <ul className="w-[calc(100%+17px)] h-[85%] overflow-y-scroll flex flex-wrap px-5 gap-4 *:rounded-xl *:bg-[rgba(255,255,255,.15)]">
                <li className="w-[100%] flex justify-between items-center h-[7vh] px-4">
                    <div className="w-[50%] h-[100%] flex justify-start items-center">
                        <Image
                        src='/county/02.png'
                        alt="Picture of the author"
                        width={20}
                        height={20}
                        style={{
                          width: "2rem",
                          height: "2rem",
                          objectFit: "cover",
                        }}
                        />
                        <p className="text-[1rem] ms-2">IRAN</p>
                    </div>
                    <div className="w-[50%] h-[100%] flex justify-end items-center">
                        <p className="text-[1rem]">647</p>
                    </div>
                </li>
                <li className="w-[100%] flex justify-between items-center h-[7vh] px-4">
                    <div className="w-[50%] h-[100%] flex justify-start items-center">
                    <Image
                        src='/county/01.png'
                        alt="Picture of the author"
                        width={20}
                        height={20}
                        style={{
                          width: "2rem",
                          height: "2rem",
                          objectFit: "cover",
                        }}
                        />
                           <p className="text-[1rem] ms-2">CANADA</p>
                    </div>
                    <div className="w-[50%] h-[100%] flex justify-end items-center">
                        <p className="text-[1rem]">435</p>
                    </div>
                </li>
                <li className="w-[100%] flex justify-between items-center h-[7vh] px-4">
                    <div className="w-[50%] h-[100%] flex justify-start items-center">
                    <Image
                        src='/county/03.png'
                        alt="Picture of the author"
                        width={20}
                        height={20}
                        style={{
                          width: "2rem",
                          height: "2rem",
                          objectFit: "cover",
                        }}
                        />
                        <p className="text-[1rem] ms-2">GERMANY</p>
                    </div>
                    <div className="w-[50%] h-[100%] flex justify-end items-center">
                        <p className="text-[1rem]">287</p>
                    </div>
                </li>
                <li className="w-[100%] flex justify-between items-center h-[7vh] px-4">
                    <div className="w-[50%] h-[100%] flex justify-start items-center">
                    <Image
                        src='/county/04.png'
                        alt="Picture of the author"
                        width={20}
                        height={20}
                        style={{
                          width: "2rem",
                          height: "2rem",
                          objectFit: "cover",
                        }}
                        />
                           <p className="text-[1rem] ms-2">FRANCE</p>
                    </div>
                    <div className="w-[50%] h-[100%] flex justify-end items-center">
                        <p className="text-[1rem]">432</p>
                    </div>
                </li>
                <li className="w-[100%] flex justify-between items-center h-[7vh] px-4">
                    <div className="w-[50%] h-[100%] flex justify-start items-center">
                    <Image
                        src='/county/05.png'
                        alt="Picture of the author"
                        width={20}
                        height={20}
                        style={{
                          width: "2rem",
                          height: "2rem",
                          objectFit: "cover",
                        }}
                        />
                           <p className="text-[1rem] ms-2">UNITED STATES</p>
                    </div>
                    <div className="w-[50%] h-[100%] flex justify-end items-center">
                        <p className="text-[1rem]">542</p>
                    </div>
                </li>
                <li className="w-[100%] flex justify-between items-center h-[7vh] px-4">
                    <div className="w-[50%] h-[100%] flex justify-start items-center">
                    <Image
                        src='/county/06.png'
                        alt="Picture of the author"
                        width={20}
                        height={20}
                        style={{
                          width: "2rem",
                          height: "2rem",
                          objectFit: "cover",
                        }}
                        />
                           <p className="text-[1rem] ms-2">CHINESE</p>
                    </div>
                    <div className="w-[50%] h-[100%] flex justify-end items-center">
                        <p className="text-[1rem]">345</p>
                    </div>
                </li>
                <li className="w-[100%] flex justify-between items-center h-[7vh] px-4">
                    <div className="w-[50%] h-[100%] flex justify-start items-center">
                    <Image
                        src='/county/07.png'
                        alt="Picture of the author"
                        width={20}
                        height={20}
                        style={{
                          width: "2rem",
                          height: "2rem",
                          objectFit: "cover",
                        }}
                        />
                         <p className="text-[1rem] ms-2">SWEDEN</p>
                    </div>
                    <div className="w-[50%] h-[100%] flex justify-end items-center">
                        <p className="text-[1rem]">147</p>
                    </div>
                </li>
                <li className="w-[100%] flex justify-between items-center h-[7vh] px-4">
                    <div className="w-[50%] h-[100%] flex justify-start items-center">
                    <Image
                        src='/county/08.png'
                        alt="Picture of the author"
                        width={20}
                        height={20}
                        style={{
                          width: "2rem",
                          height: "2rem",
                          objectFit: "cover",
                        }}
                        />
                         <p className="text-[1rem] ms-2">INDIA</p>
                    </div>
                    <div className="w-[50%] h-[100%] flex justify-end items-center">
                        <p className="text-[1rem]">210</p>
                    </div>
                </li>
            </ul>
        </article>
    )
}


import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
function X(){
const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]
return(
<AreaChart width={800} height={400} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="rgba(255,255,255,.5)" stopOpacity={0.9}/>
      <stop offset="95%" stopColor="rgba(0,0,0,.9)" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="rgba(255,255,255,.8)" stopOpacity={0.9}/>
      <stop offset="95%" stopColor="rgba(255,200,200,.8)" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  {/* <CartesianGrid strokeDasharray="3 3" /> */}
  <Tooltip 
        contentStyle={tooltipStyle}
        labelStyle={{ color: "#fff" }}
        itemStyle={{ color: "#fff" }}
        />
  <Area type="monotone" dataKey="uv" stroke="rgba(255,255,255,.5)" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="rgba(255,255,255,.5)" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
)
}

const tooltipStyle = {
    backgroundColor: "rgba(0,0,0,0.8)", 
    border: "1px solid #333",
    borderRadius: "5px",
    padding: "10px",
    color: "#fff",
  };




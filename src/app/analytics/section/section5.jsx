"use client"

export default function S5(){
    return(
        <section className='w-[100%] h-[210vh] md:h-[140vh] xl:h-[70vh] p-4 gap-4 flex justify-center xl:justify-between flex-wrap'>
            <Ar1/>
            <Ar2/>
            <Ar3/>
        </section>
    )
}

function Ar1(){
    return(
        <article className="w-[100%] md:w-[49%] xl:w-[32%] h-[32%] md:h-[49%]  xl:h-[100%] bg-[rgba(0,0,0,0.45)] rounded-xl p-3">
            <p className='w-[100%] h-[10%] flex justify-center items-center text-[1.5rem]'>Visitor by Gender</p>
            <StackedHorizontalBarChart/>
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
        <article className="w-[100%] md:w-[49%] xl:w-[32%] h-[32%] md:h-[49%]  xl:h-[100%] bg-[rgba(0,0,0,0.45)] rounded-xl p-3">
              <div className="w-[100%] h-[10%] flex">
            <div className="w-[50%] h-[100%] flex items-center">
              <p className="w-[100%] text-[1.4rem] font-bold">Browser Statistics</p>
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
            <PieChartExample/>
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
        <article className="w-[100%] md:w-[49%] xl:w-[32%] h-[32%] md:h-[49%]  xl:h-[100%] bg-[rgba(0,0,0,0.45)] rounded-xl p-3">
                  <div className="w-[100%] h-[10%] flex">
            <div className="w-[50%] h-[100%] flex items-center">
              <p className="w-[100%] text-[1.4rem] font-bold">Social Traffic</p>
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
        <div className='w-[100%] h-[10%] flex'>
            <p className='text-[1rem] me-2'><span className='text-[2rem]'>89,421</span>Total Visits</p>
        </div>
        <div className='w-[100%] h-[2%] bg-white rounded-full my-4'></div>
        <ul className='w-[100%] h-[70%] my-4 *:w-[100%] *:h-[20%] *:flex *:justify-between *:items-center *:border-b-[.05px] *:border-[rgba(147,146,146,0.34)]'>
            <li>
                <div className='flex items-center'><input type="checkbox" className='w-[1rem] h-[1rem] me-2'/><p className='text-[1rem]'>Facebook</p></div>
                <p className='text-[1rem]'>46 Visits</p>
                <p className='text-[1rem]'>33%</p>
            </li>
            <li>
                <div className='flex items-center'><input type="checkbox" className='w-[1rem] h-[1rem] me-2'/><p className='text-[1rem]'>YouTube</p></div>
                <p className='text-[1rem]'>12 Visits</p>
                <p className='text-[1rem]'>17%</p>
            </li>
            <li>
                <div className='flex items-center'><input type="checkbox" className='w-[1rem] h-[1rem] me-2'/><p className='text-[1rem]'>Linkedin</p></div>
                <p className='text-[1rem]'>29 Visits</p>
                <p className='text-[1rem]'>21%</p>
            </li>
            <li>
                <div className='flex items-center'><input type="checkbox" className='w-[1rem] h-[1rem] me-2'/><p className='text-[1rem]'>Twitter</p></div>
                <p className='text-[1rem]'>34 Visits</p>
                <p className='text-[1rem]'>23%</p>
            </li>
            <li>
                <div className='flex items-center'><input type="checkbox" className='w-[1rem] h-[1rem] me-2'/><p className='text-[1rem]'>Dribbble</p></div>
                <p className='text-[1rem]'>28 Visits</p>
                <p className='text-[1rem]'>19%</p>
            </li>
        </ul>
        </article>
    )
}


import React, { useRef } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
  LabelList,
} from 'recharts';

const StackedHorizontalBarChart = () => {
  const data = [
    { category: 'Jan', value1: 100, value2: 200, value3: 300 },
    { category: 'Feb', value1: 150, value2: 250, value3: 350 },
    { category: 'Mar', value1: 200, value2: 300, value3: 400 },
    { category: 'Apr', value1: 250, value2: 350, value3: 450 },
    { category: 'May', value1: 250, value2: 350, value3: 450 },
  ];

  const colors = ['rgb(255,255,255)', 'rgba(255,255,255,.8)', 'rgba(255,255,255,.5)'];

  const xAxisProps = {
    type: 'number',
    tick: { fontSize: 12 },
    colors:'rgb(255,255,255)',
    axisLine: { stroke: 'rgb(255,255,255)' },
    tickLine: false,
    interval: 100,
  };

  const yAxisProps = {
    dataKey: 'category',
    type: 'category',
    width: 30,
    tick: { fontSize: 12 },
    colors:'rgb(255,255,255)',
    axisLine: { stroke: 'rgb(255,255,255)' },
    tickLine: false,
  };

  const tooltipProps = {
    cursor: { fill: 'transparent' },
    contentStyle: {
      background: 'rgba(0,0,0,0.8)',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
  };

  const legendProps = {
    wrapperStyle: { fontSize: 14 },
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <XAxis {...xAxisProps} />
        <YAxis {...yAxisProps} />
        <Tooltip {...tooltipProps} />
        <Legend {...legendProps} />
        {colors.map((color, index) => (
          <Bar
            key={index}
            dataKey={`value${index + 1}`}
            fill={color}
            label={{ position: 'insideTop', fill: '#fff' }}
          >
            <LabelList dataKey={`value${index + 1}`} content={<CustomizedLabel />} />
          </Bar>
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

const CustomizedLabel = (props) => {
  const { x, y, value } = props;
  return <Label x={x} y={y} dy={-15} fill="#fff">{value}</Label>;
};



import { PieChart, Pie } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const PieChartExample = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          startAngle={360}
          endAngle={0}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="rgba(255,255,255,.5)"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
};





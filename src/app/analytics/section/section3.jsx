'use client'
import { useState } from 'react';
export default function S3(){
    return(
        <section className="w-[100%] h-[120vh] lg:h-[60vh] flex flex-wrap px-4 gap-4 justify-between">
            <Ar1/>
            <Ar2/>
        </section>
    )
}

function Ar1(){
    return(
        <article className="w-[100%] lg:w-[49%] overflow-hidden  h-[59%] lg:h-[100%] flex rounded-lg bg-[rgba(0,0,0,0.45)]">
            <BarChartExample/>
        </article>
    )
}
function Ar2(){
    return(
        <article className="w-[100%] lg:w-[49%] h-[39%] lg:h-[100%] flex rounded-lg bg-[rgba(0,0,0,0.45)]">
            <PieChartExample/>
        </article>
    )
}



import { PieChart, Pie, Sector } from 'recharts';

const data1 = [
  { name: 'Desktop', value: 500 },
  { name: 'Mobile', value: 300 },
  { name: 'Tablet', value: 200 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill={fill} />
      <Sector cx={cx} cy={cy} startAngle={startAngle} endAngle={endAngle} innerRadius={outerRadius + 6} outerRadius={outerRadius + 10} fill={fill} />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1)  * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">{`(Rate ${(percent * 100).toFixed(2)}%)`}</text>
    </g>
  );
};

const PieChartExample = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data1}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={100}
          fill="rgba(255,255,255,.4)"
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};




import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
 
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
 
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const BarChartExample = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 10,
          right:30,
          left: 20,
          bottom: 5,
        }}
        barSize={70}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 50, right: 50 }} />
        <YAxis />
        <Tooltip 
        contentStyle={tooltipStyle}
        labelStyle={{ color: "#fff" }}
        itemStyle={{ color: "#fff" }}
        />
        {/* <Legend /> */}
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <Bar dataKey="pv" fill="rgba(255,255,255,.8)" background={{ fill: 'rgba(255,255,255,.1)' }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

const tooltipStyle = {
    backgroundColor: "rgba(0,0,0,0.8)", 
    border: "1px solid #333",
    borderRadius: "5px",
    padding: "10px",
    color: "#fff",
  };
  














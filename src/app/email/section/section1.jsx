"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./../../globals.css";

export default function S1() {
  const x = useRef();
  function para() {
    const x1 = x.current.children[1].children[1].children[1];
    x1.style.display = "block";   
  }
  function list(){
    const x2=x.current.children[2]
    x2.style.display='block'
  }
  function close(){
    const x2=x.current.children[2]
    x2.style.display='none'
  }
  return (
    <section className="w-[100%] h-[220vh] xl:h-[110vh] p-6 py-20">
      <section
        ref={x}
        className="w-[100%] h-[100%] bg-[rgba(0,0,0,0.45)] rounded-xl overflow-hidden flex relative"
      >
        <Ar1 para={para} />
        <Ar2 list={list}/>
        <Ar11 para={para} close={close}/>
      </section>
    </section>
  );
}

function Ar1({ para }) {
  return (
    <article className="w-[17%] hidden lg:block h-[100%] border-r-[1px] border-[rgba(147,146,146,0.34)] absolute top-0 left-0">
      <Ar1Div1 para={para} />
      <Ar1Div2 />
      <Ar1Div3 />
      <Ar1Div4 />
    </article>
  );
}
function Ar11({para,close}){
  return (
    <article className="w-[300px] hidden lg:hidden bg-black h-[50%] border-r-[1px] border-[rgba(147,146,146,0.34)] absolute top-0 left-0">
      <Ar1Div1 para={para} close={close}/>
      <Ar1Div2 />
      <Ar1Div3 />
      <Ar1Div4 />
    </article>
  );
}
function Ar2({list}) {
  return (
    <article className="w-[100%] lg:w-[83%] h-[100%] absolute top-0 right-0">
      <Ar2Div1 list={list}/>
      <Ar2Div2 />
    </article>
  );
}

function Ar1Div1({ para ,close }) {
  return (
    <div className="w-[100%] h-[10%] p-3 border-b-[1px] flex border-[rgba(147,146,146,0.34)]">
      <button
        onClick={para}
        className="w-[80%] xl:w-[100%] h-[100%] bg-[rgba(255,255,255,.2)] rounded-lg border-[.05px] border-[rgba(147,146,146,0.34)] text-[1.3rem]"
      >
        + new message
      </button>
      <button className="xl:hidden w-[20%] h-[100%] flex justify-center items-center"><i
            onClick={() => close(event)}
            className="cursor-pointer text-[1.5rem] bi bi-x-circle"
          ></i></button>
    </div>
  );
}
function Ar1Div2() {
  return (
    <div className="w-[100%] h-[55%] border-b-[1px] border-[rgba(147,146,146,0.34)] overflow-hidden">
      <ul className="w-[calc(100%+17px)] h-[100%] *:w-[100%] *:h-[7vh] *:capitalize *:cursor-pointer *:flex *:items-center *:px-5 overflow-y-scroll">
        <li className="bg-[rgba(255,255,255,.2)] flex gap-4">
          <i className="bi bi-inbox-fill"></i> inbox
        </li>
        <li className="hover:bg-[rgba(255,255,255,.2)] transition-all duration-300 flex gap-4">
          <i className="bi bi-star-fill"></i> starred
        </li>
        <li className="hover:bg-[rgba(255,255,255,.2)] transition-all duration-300 flex gap-4">
          <i className="bi bi-alarm-fill"></i> snoozed
        </li>
        <li className="hover:bg-[rgba(255,255,255,.2)] transition-all duration-300 flex gap-4">
          <i className="bi bi-send-fill"></i> sent
        </li>
        <li className="hover:bg-[rgba(255,255,255,.2)] transition-all duration-300 flex gap-4">
          <i className="bi bi-file-earmark-fill"></i> drafts
        </li>
        <li className="hover:bg-[rgba(255,255,255,.2)] transition-all duration-300 flex gap-4">
          <i className="bi bi-bookmark-fill"></i> important
        </li>
        <li className="hover:bg-[rgba(255,255,255,.2)] transition-all duration-300 flex gap-4">
          <i className="bi bi-wechat"></i> chats
        </li>
        <li className="hover:bg-[rgba(255,255,255,.2)] transition-all duration-300 flex gap-4">
          <i className="bi bi-envelope-arrow-down-fill"></i> scheduled
        </li>
        <li className="hover:bg-[rgba(255,255,255,.2)] transition-all duration-300 flex gap-4">
          <i className="bi bi-envelope-open-fill"></i> all mail
        </li>
        <li className="hover:bg-[rgba(255,255,255,.2)] transition-all duration-300 flex gap-4">
          <i className="bi bi-info-circle"></i> spam
        </li>
        <li className="hover:bg-[rgba(255,255,255,.2)] transition-all duration-300 flex gap-4">
          <i className="bi bi-trash-fill"></i> trash
        </li>
      </ul>
    </div>
  );
}
function Ar1Div3() {
  return (
    <div className="w-[100%] h-[25%] py-4 border-b-[1px] border-[rgba(147,146,146,0.34)]">
      <ul className="w-[calc(100%)] h-[100%] *:w-[100%] *:h-[33%] *:capitalize *:cursor-pointer *:flex *:items-center *:px-5">
        <li className="bg-[rgba(255,255,255,.2)] flex gap-4"> meet</li>
        <li className="hover:bg-[rgba(255,255,255,.2)] transition-all duration-300 flex gap-4">
          <i className="bi bi-camera-video-fill"></i> start a meeting
        </li>
        <li className="hover:bg-[rgba(255,255,255,.2)] transition-all duration-300 flex gap-4">
          <i className="bi bi-people-fill"></i> join a meeting
        </li>
      </ul>
    </div>
  );
}
function Ar1Div4() {
  return (
    <div className="w-[100%] h-[10%] bg-[rgba(255,255,255,.2)] flex items-center justify-between px-5">
      <Image
        src="/1/img2_prev_ui.png"
        alt="Picture of the author"
        width={35}
        height={35}
        style={{
          width: "3rem",
          height: "3rem",
          objectFit: "cover",
          borderRadius: "50%",
          marginRight: "5px",
        }}
      />
      <p>REZA OJAGHI</p>
      <i className="bi bi-plus-lg"></i>
    </div>
  );
}

function Ar2Div1({list}) {
  function reLode(){
    window.location.reload()
  }
  return (
    <div className="w-[100%] h-[10%] px-4 border-b-[1px] border-[rgba(147,146,146,0.34)] flex flex-wrap">
      <div className="w-[100%] xl:w-[25%] h-[33%] xl:h-[100%] flex items-center justify-between">
        <button className="w-[3rem] xl:hidden h-[2.5rem] bg-[rgba(255,255,255,.2)] border-[1px] border-[rgba(147,146,146,0.34)] rounded-lg flex justify-center items-center">
        <i onClick={list} className="bi bi-list"></i>
        </button>
        <button className="w-[3rem] h-[2.5rem] bg-[rgba(255,255,255,.2)] border-[1px] border-[rgba(147,146,146,0.34)] rounded-lg flex justify-center items-center">
          <input type="checkbox" className="w-[1rem] h-[1rem]" />
        </button>
        <button className="w-[3rem] h-[2.5rem] bg-[rgba(255,255,255,.2)] border-[1px] border-[rgba(147,146,146,0.34)] rounded-lg flex justify-center items-center">
          <i onClick={reLode} className="bi bi-repeat"></i>
        </button>
        <button className="w-[3rem] h-[2.5rem] bg-[rgba(255,255,255,.2)] border-[1px] border-[rgba(147,146,146,0.34)] rounded-lg flex justify-center items-center">
          <i className="bi bi-arrow-down-square"></i>
        </button>
        <button className="w-[3rem] h-[2.5rem] bg-[rgba(255,255,255,.2)] border-[1px] border-[rgba(147,146,146,0.34)] rounded-lg flex justify-center items-center">
          <i className="bi bi-file-earmark-text"></i>
        </button>
        <button className="w-[3rem] h-[2.5rem] bg-[rgba(255,255,255,.2)] border-[1px] border-[rgba(147,146,146,0.34)] rounded-lg flex justify-center items-center">
          <i className="bi bi-trash"></i>
        </button>
      </div>
      <div className="w-[100%] xl:w-[55%] h-[33%] xl:h-[100%] flex items-center justify-center px-4">
        <button className="text-white w-[8%] h-[60%] text-[1rem] bg-[rgba(0,0,0,.3)] border-[.05px] border-[rgba(147,146,146,0.34)] flex justify-center items-center">
          <i className="bi bi-search"></i>
        </button>
        <input
          type="text"
          placeholder="  search email"
          className="text-white flex items-center w-[92%] h-[60%] text-[1rem] bg-[rgba(0,0,0,.3)] border-[.05px] border-[rgba(147,146,146,0.34)]"
        />
      </div>
      <div className="w-[100%] xl:w-[20%] h-[33%] xl:h-[100%] flex items-center justify-around">
        <button className="w-[7rem] h-[2rem] bg-[rgba(255,255,255,.2)] border-[1px] border-[rgba(147,146,146,0.34)] rounded-lg flex justify-center items-center">
          1-50 of 8,740
        </button>
        <button className="w-[3rem] h-[2.5rem] bg-[rgba(255,255,255,.2)] border-[1px] border-[rgba(147,146,146,0.34)] rounded-lg flex justify-center items-center">
          <i className="bi bi-chevron-left"></i>
        </button>
        <button className="w-[3rem] h-[2.5rem] bg-[rgba(255,255,255,.2)] border-[1px] border-[rgba(147,146,146,0.34)] rounded-lg flex justify-center items-center">
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
function Ar2Div2() {
  const inp = useRef();
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  function close(e) {
    e.target.parentElement.parentElement.style.display = "none";
  }
  function _send() {
    const y = inp.current.children;
    const y1 = y[0].value;
    const y2 = y[1].value;
    const y3 = y[2].value;
    const y4=new Date()
    const newTask = {
      to: y1,
      email: y2,
      tt: y3,
      date:y4,
    };
    fetch("https://65c1ee91f7e6ea59682a15d9.mockapi.io/email", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      // Send your data in the request body as JSON
      body: JSON.stringify(newTask),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((task) => {
        // do something with the new task
        alert("your message is resived!");
      })
      .catch((error) => {
        // handle error
        alert("adam bash");
      });
  }

  function inp1(e) {
    const x = e.target.value;
    setValue1(x);
  }
  function inp2(e) {
    const x = e.target.value;
    setValue2(x);
  }
  function inp3(e) {
    const x = e.target.value;
    setValue3(x);
  }
  function _del() {
    setValue1("");
    setValue2("");
    setValue3("");
  }
  return (
    <div className="w-[100%] relative h-[90%]">
      <Ul />
      <div className="w-[100%] h-[50%] xl:h-[100%] absolute bg-[#2b2b2b] hidden">
        <div className="w-[100%] h-[10%] bg-[rgb(0,0,0)] flex justify-between items-center px-10">
          <p className="text-[1.5rem] capitalize">new message</p>
          <i
            onClick={() => close(event)}
            className="cursor-pointer text-[1.5rem] bi bi-x-circle"
          ></i>
        </div>
        <div
          ref={inp}
          className="w-[100%] h-[90%] flex justify-between content-between flex-wrap p-5 px-10"
        >
          <input
            value={value1}
            onChange={() => inp1(event)}
            type="text"
            placeholder=" name"
            className="text-[1.3rem] w-[100%] h-[10%] bg-[rgba(255,255,255,.2)] border-[.05px] border-[rgba(147,146,146,0.34)]"
          />
          <input
            value={value2}
            onChange={() => inp2(event)}
            type="email"
            placeholder=" email"
            className="text-[1.3rem] w-[100%] h-[10%] bg-[rgba(255,255,255,.2)] border-[.05px] border-[rgba(147,146,146,0.34)]"
          />
          <textarea
            value={value3}
            onChange={() => inp3(event)}
            name=""
            id=""
            cols="30"
            rows="5"
            className="text-[1.3rem] w-[100%] h-[50%] bg-[rgba(255,255,255,.2)]"
          ></textarea>
          <button
            onClick={_send}
            className="w-[10%] h-[10%] rounded-lg border-[.05px] border-[rgba(147,146,146,0.34)] bg-[rgba(255,255,255,.2)] text-[1.5rem] hover:bg-[rgba(255,255,255,.4)] transition-all duration-300"
          >
            send
          </button>
          <button className="w-[10%] h-[10%] rounded-lg border-[.05px] border-[rgba(147,146,146,0.34)] bg-[rgba(255,255,255,.2)] text-[1.5rem] hover:bg-[rgba(255,255,255,.4)] transition-all duration-300">
            <i onClick={_del} className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

function Ul() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const x = await fetch(
        'https://65c1ee91f7e6ea59682a15d9.mockapi.io/email'
      );
      const y =await x.json();
      setData(y);
      console.log(data);
    }
    getData();
  }, []);

  return (
    <ul className="w-[100%] absolute h-[100%]">
      {data && data.map((val) => {
        function _del2(e,x){ 
              e.target.parentElement.parentElement.remove()
                fetch('https://65c1ee91f7e6ea59682a15d9.mockapi.io/email/' + x, {
                    method: 'DELETE',
                }).then(res => {
                    if (res.ok) {
             
                        return res.json();
                    }
                  
                }).then(task => {
                  
                    alert('user by id ' + x + ' deleted!')
                    location.reload()
                }).catch(error => {
                    
                })
     
        }
          return (
            <li key={val.id} className="w-[100%] h-[14vh] xl:h-[7vh] border-b-[.05px] border-[rgba(147,146,146,0.34)] hover:bg-[rgba(255,255,255,.2)] transition-all duration-300">
              <ul className="w-[100%] h-[100%] flex flex-wrap">
                <li className="w-[15%] xl:w-[5%] h-[50%] xl:h-[100%] flex justify-center items-center">
                  <i className="bi bi-star"></i>
                </li>
                <li className="w-[30%] xl:w-[15%] h-[50%] xl:h-[100%] flex justify-center items-center">{val.to}</li>
                <li className="w-[55%] h-[50%] xl:h-[100%] flex justify-center items-center"><p className=" overflow-hidden  text-nowrap t1">{val.tt}</p></li>
                <li className="w-[50%] xl:w-[20%] h-[50%] xl:h-[100%] flex justify-center items-center">{val.date}</li>
                <li className="w-[50%] xl:w-[5%] h-[50%] xl:h-[100%] flex justify-center items-center "><i data-status='off'  onClick={()=>_del2(event,val.id)} className="bi bi-trash cursor-pointer"></i></li>
              </ul>
            </li>
          );
        })}
    </ul>
  );
}

"use client";
import useStore from './store'
export default function S1() {
  return (
    <section className="w-[100%] h-[100%] flex justify-center items-center p-6">
      <section className="w-[100%] lg:w-[50%] h-[100%] bg-[rgba(0,0,0,0.45)] rounded-xl flex flex-wrap shadow-black shadow-lg">
        <Ar1 />
        <Ar2 />
        <Ar3 />
      </section>
    </section>
  );
}

function Ar1() {
    const x=useStore((state)=>state.x)
  return (
    <article className="w-[100%] h-[20%] md:h-[25%] flex justify-center px-2 items-center border-b-[2px] border-[rgba(147,146,146,0.34)]">
      <div className="w-[100%] lg:w-[70%] h-[70%] bg-[rgba(0,0,0,0.45)] rounded-xl shadow-black shadow-lg text-[3rem] px-4 flex items-center">{x}</div>
    </article>
  );
}
function Ar2() {
    const x1=useStore((state)=>state.x1)
    const x2=useStore((state)=>state.x2)
    const x3=useStore((state)=>state.x3)
    const x4=useStore((state)=>state.x4)
    const x5=useStore((state)=>state.x5)
    const x6=useStore((state)=>state.x6)
    const x7=useStore((state)=>state.x7)
    const x8=useStore((state)=>state.x8)
    const x9=useStore((state)=>state.x9)
    const x0=useStore((state)=>state.x0)
    const xm=useStore((state)=>state.xm)
    const xa=useStore((state)=>state.xa)
  return (
    <article className="w-[100%] md:w-[60%] h-[50%] md:h-[75%] flex justify-center items-center flex-wrap gap-6 p-4 *:shadow-lg *:shadow-black ">
      <button onClick={x1} className="w-[25%] h-[20%] bg-[rgba(255,255,255,.5)] rounded-xl text-[2rem] hover:shadow-none hover:scale-95">
        1
      </button>
      <button onClick={x2} className="w-[25%] h-[20%] bg-[rgba(255,255,255,.5)] rounded-xl text-[2rem] hover:shadow-none hover:scale-95">
        2
      </button>
      <button onClick={x3} className="w-[25%] h-[20%] bg-[rgba(255,255,255,.5)] rounded-xl text-[2rem] hover:shadow-none hover:scale-95">
        3
      </button>
      <button onClick={x4} className="w-[25%] h-[20%] bg-[rgba(255,255,255,.5)] rounded-xl text-[2rem] hover:shadow-none hover:scale-95">
        4
      </button>
      <button onClick={x5} className="w-[25%] h-[20%] bg-[rgba(255,255,255,.5)] rounded-xl text-[2rem] hover:shadow-none hover:scale-95">
        5
      </button>
      <button onClick={x6} className="w-[25%] h-[20%] bg-[rgba(255,255,255,.5)] rounded-xl text-[2rem] hover:shadow-none hover:scale-95">
        6
      </button>
      <button onClick={x7} className="w-[25%] h-[20%] bg-[rgba(255,255,255,.5)] rounded-xl text-[2rem] hover:shadow-none hover:scale-95">
        7
      </button>
      <button onClick={x8} className="w-[25%] h-[20%] bg-[rgba(255,255,255,.5)] rounded-xl text-[2rem] hover:shadow-none hover:scale-95">
        8
      </button>
      <button onClick={x9} className="w-[25%] h-[20%] bg-[rgba(255,255,255,.5)] rounded-xl text-[2rem] hover:shadow-none hover:scale-95">
        9
      </button>
      <button onClick={xa} className="w-[25%] h-[20%] bg-[rgba(255,255,255,.5)] rounded-xl text-[2rem] hover:shadow-none hover:scale-95">
        .
      </button>
      <button onClick={x0} className="w-[25%] h-[20%] bg-[rgba(255,255,255,.5)] rounded-xl text-[2rem] hover:shadow-none hover:scale-95">
        0
      </button>
      <button onClick={xm} className="w-[25%] h-[20%] bg-[rgba(255,255,255,.5)] rounded-xl text-[2rem] hover:shadow-none hover:scale-95">
        -+
      </button>
    </article>
  );
}
function Ar3() {
    const x=useStore((state)=>state.x)
    const xt=useStore((state)=>state.xt)
    const xc=useStore((state)=>state.xc)
    const xce=useStore((state)=>state.xce)
    const xp=useStore((state)=>state.xp)
    const xmm=useStore((state)=>state.xmm)
    const xd=useStore((state)=>state.xd)
    const xz=useStore((state)=>state.xz)
    const p1=useStore((state)=>state.p1)
    const d=useStore((state)=>state.d)
    function xtt(){
        if(d==1){
            const j=+p1+ +x
            xt(j)
        }else if(d==2){
            const j=+p1 - +x
            xt(j)
        }else if(d==3){
            const j=+p1 / +x
            xt(j)
        }else if(d==4){
            const j=+p1 * +x
            xt(j)
        }
    }
  return (
    <article className="w-[100%] md:w-[40%] h-[30%] md:h-[75%] flex justify-center content-center md:items-center flex-wrap gap-6 p-10 md:p-4 *:shadow-lg *:shadow-black">
      <button onClick={xc} className="w-[19%] md:w-[35%] h-[46%] md:h-[20%] bg-[rgba(255,255,255,.5)] rounded-xl text-[2rem] hover:shadow-none hover:scale-95">c</button>
      <button onClick={xce} className="w-[19%] md:w-[35%] h-[46%] md:h-[20%] bg-[rgba(255,255,255,.5)] rounded-xl text-[2rem] hover:shadow-none hover:scale-95">ce</button>
      <button onClick={xp} className="w-[19%] md:w-[35%] h-[46%] md:h-[20%] bg-[rgba(255,255,255,.5)] rounded-xl text-[2rem] hover:shadow-none hover:scale-95">+</button>
      <button onClick={xmm} className="w-[19%] md:w-[35%] h-[46%] md:h-[20%] bg-[rgba(255,255,255,.5)] rounded-xl text-[2rem] hover:shadow-none hover:scale-95">-</button>
      <button onClick={xz} className="w-[19%] md:w-[35%] h-[46%] md:h-[20%] bg-[rgba(255,255,255,.5)] rounded-xl text-[2rem] hover:shadow-none hover:scale-95">*</button>
      <button onClick={xd} className="w-[19%] md:w-[35%] h-[46%] md:h-[20%] bg-[rgba(255,255,255,.5)] rounded-xl text-[2rem] hover:shadow-none hover:scale-95">/</button>
      <button onClick={xtt} className="w-[40%] md:w-[80%] h-[46%] md:h-[20%] bg-[rgba(255,255,255,.5)] rounded-xl text-[2rem] hover:shadow-none hover:scale-95">=</button>
    </article>
  );
}

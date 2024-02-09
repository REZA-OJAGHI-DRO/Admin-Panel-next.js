import "../globals.css";
import localFont from "next/font/local";
const myFont = localFont({
  src: "../font/Exo2-VariableFont_wght.ttf",
  display: "swap",
});

import S1 from "./section/section1";

export default function Email(){
    return(
        <section className={myFont.className}>
        <section className="w-[100%] h-[91.5vh] lg:h-[83vh] overflow-hidden">
          <section className="w-[calc(100%+17px)] overflow-y-scroll h-[91.5vh] lg:h-[83vh] flex flex-wrap">
            <S1 />
            <div className="w-[100%] h-[4.7vh] grid">
              <div className="w-[100%] h-[100%] gridArea g1"></div>
              <footer className="w-[100%] h-[100%] gridArea flex border-t-[.05px] border-[rgba(147,146,146,0.34)] justify-center items-center">
                <p>Copyright © 2024. All right reserved.</p>
              </footer>
            </div>
          </section>
        </section>
      </section>
    )
}
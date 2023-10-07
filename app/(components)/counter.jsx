"use client";

import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { useEffect, useRef } from "react";
import { useCountUp } from "react-countup";

const Counter = ({ children, title, number, symbol }) => {
  // const Icon = icon ? icon : <HiOutlineQuestionMarkCircle />;
  const countupRef = useRef(null);
  let countUpAnim;

  useEffect(() => {
    initCountUp();
  }, []);

  async function initCountUp() {
    const countUpModule = await import("countup.js");
    countUpAnim = new countUpModule.CountUp(countupRef.current, number);
    if (!countUpAnim.error) {
      countUpAnim.start();
    } else {
      console.error(countUpAnim.error);
    }
  }

  return (
    <div className="flex cursor-pointer flex-col items-center py-12 hover:text-foreground/90">
      {children}
      <h4 className="text-md hidden font-bold drop-shadow-sm md:block">
        {title}
      </h4>
      <h5 className="text-md font-medium drop-shadow-sm">
        <span ref={countupRef}>0</span>
        {symbol}
      </h5>
    </div>
  );
};

export default Counter;

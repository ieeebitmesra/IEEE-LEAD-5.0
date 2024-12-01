import React from "react";

const btt = () => {
  return (
    <div>
      <button className="relative inline-flex h-10 overflow-hidden rounded-3xl p-[1px]  hover:shadow-3xl">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#d8f7d4_0%,#7be46d_50%,#207015_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Resume
        </span>
      </button>
    </div>
  );
};

export default btt;

import React from "react";

export default function BranchInfo() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="20"
        viewBox="0 0 17 20"
        fill="none"
      >
        <path
          d="M2 20C0.89543 20 0 19.1046 0 18V7.63981C0 7.02548 0.282332 6.44523 0.76572 6.0661L7.26572 0.968062C7.99042 0.399672 9.00958 0.399672 9.73428 0.968063L16.2343 6.0661C16.7177 6.44523 17 7.02548 17 7.63981V18C17 19.1046 16.1046 20 15 20H11.5625C10.4579 20 9.5625 19.1046 9.5625 18V14.3958C9.5625 13.809 9.0868 13.3333 8.5 13.3333C7.9132 13.3333 7.4375 13.809 7.4375 14.3958V18C7.4375 19.1046 6.54207 20 5.4375 20H2Z"
          fill="#FFE5DC"
        />
      </svg>

      <div className="ml-3 -mt-0.5 font-medium text-sd-menu-t-active-white">
        Agrabad Branch
      </div>
    </>
  );
}

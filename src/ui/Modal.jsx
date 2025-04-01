"use client"

import { CircleX } from "lucide-react";

function Modal({setisopen, title, isopen,children}) {
  if (!isopen) return null;
  return (
    <div className="backdrop">
      <div className="modal">
        <div className="modal__header">
          <h2 className="title">{title}</h2>
          <button className="cursor-pointer" onClick={() => setisopen(false)}>
          <CircleX />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal

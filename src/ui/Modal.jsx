"use client"
function Modal({setisopen, title, isopen,children}) {
  if (!isopen) return null;
  return (
    <div className="backdrop">
      <div className="modal">
        <div className="modal__header">
          <h2 className="title">{title}</h2>
          <button className="cursor-pointer" onClick={() => setisopen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal

const varientColor = {
  search:
    "bg-amber-300 rounded-full flex items-center justify-center p-3 text-white absolute -top-5 ",
  header: "bg-white rounded-2xl p-2 flex items-center justify-center ",
};

function Button({children, varient, onclick}) {
  return (
    <button onClick={onclick} className={`  ${varientColor[varient]} cursor-pointer`}>
      {children}
    </button>
  );
}

export default Button;

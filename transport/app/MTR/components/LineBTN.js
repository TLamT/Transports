const LineBtn = ({ text, bgColor, active, onLineBTNClick }) => {
 
  return (
  
    <div className="">
      
           <button className="border-2 rounded-md pointer text-2xl"
      style={{
        backgroundColor:  bgColor,
        color: active ? "#000000" : "#ffffff",
      }}
      onClick={onLineBTNClick}
    >
      {text}
    </button>
      
    </div>
  );
};

export default LineBtn;
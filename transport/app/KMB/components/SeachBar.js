
export const SearchBar=({Search,setSearch})=>{
   
    const handleOnSearch = (e) => {
        setSearch(e.target.value);
        
    };
    
    return(
       
        <div className="flex justify-center gap-2 mt-10">
        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
         placeholder="請輸入車站名稱"
         type="text"
         value={Search}
         onChange={(e)=>setSearch(e.target.value)}
         />
        <button className="border-2 border-black px-5 rounded-lg" 
        onClick={handleOnSearch}>搜尋</button>
       
        </div>
        
    )
}
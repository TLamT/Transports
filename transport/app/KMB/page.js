"use client"
import Link from "next/link";
import { useState } from 'react';
import { ChoosingRoute } from './components/ChoosingRoute';
import { SearchBar } from './components/SeachBar';
function App() {
  const [Search, setSearch] = useState('');
  return(
    <>
    <div className="flex justify-center gap-6">
    <Link className="hover:underline hover:text-red-600" href="/">首頁</Link>
      <Link className="mb-4 hover:underline hover:text-red-600" href="./MTR">MTR</Link>
    </div>
    <div className="flex justify-center">
    <img className="w-1/4" src="https://cdn.coupert.com/ccsimg/dcs/img_tools/dcs_img_6b623e19ba5f026e5a5da48c3191f7a5.webp"/>
    </div>
    <SearchBar Search={Search} setSearch={setSearch}/>
    <ChoosingRoute Search={Search}/>
    </>
  )
}

export default App;

import React from 'react';
import line from './data';
const Station = ({ upline, downline }) => {
  const stationArr = Object.values(line).flatMap(lineItem => lineItem.sta);
  return (
    <div className='w-full h-full flex gap-2'>
      <div className='flex flex-col justify-center gap-2 border-2 bg-gray-200 w-1/2'>
      {upline &&
  upline.map((sta, index) => (
    <div className='text-center border-2 border-black' key={index}>
      {sta?.Info?.time && (
        <>
          <div className='text-xl'>
            {sta?.name} to {stationArr.find(item => item.code === sta?.Info?.dest)?.name || sta?.Info?.dest}
          </div>
          <div>
            下班列車到站時間 :
            {sta?.Info?.time.split(" ")[1].substring(0, 5)}
          </div>
          <div>月台 : {sta?.Info?.plat || 'N/A'}</div>
        </>
      )}
    </div>
  ))}
      </div>
      <div className='flex flex-col justify-center gap-2 border-2 bg-gray-200  w-1/2'>
     
      {downline &&
  downline.map((sta, index) => {
    // 根據奇偶性選擇顏色
    const color = index % 2 === 0 ? 'blue' : 'green'; // 偶數行藍色，奇數行綠色

    return (
      <div className={`text-center border-2 border-black `}  key={index}>
        {sta?.Info?.time && (
          <>
            <div className='text-xl'>
              {sta?.name} to {stationArr.find(item => item.code === sta?.Info?.dest)?.name || sta?.Info?.dest}
            </div>
            <div>
              下班列車到站時間 :
              {sta?.Info?.time.split(" ")[1].substring(0, 5)}
            </div>
            <div>月台 : {sta?.Info?.plat || 'N/A'}</div>
          </>
        )}
      </div>
    );
  })}
      </div>
    </div>
  );
};

export default Station;
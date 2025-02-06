"use client";
import { useState } from "react";

export const ChoosingRoute = ({ Search, allLineData, setChosenRoute }) => {
  const [selectedRoute, setSelectedRoute] = useState(null);

  // 檢查 Search 和 allLineData 的有效性
  if (!Search || !Array.isArray(allLineData)) return null;

  const searchedRoute = allLineData.filter((line) =>
    line.route.includes(Search)
  );

  function handleEnteredRoute(route, index) {
    setChosenRoute(route);
    setSelectedRoute(index);
  }

  return (
    <div className="routeContainer">
      {searchedRoute.length === 0 ? (
        <div>請輸入正確的巴士資訊</div>
      ) : (
        searchedRoute.map((x, index) => {
          const isSelected = selectedRoute === index;

          return (
            <div
              key={index}
              className={`routes ${isSelected ? "selected" : ""}`}
              onClick={() => handleEnteredRoute(x.route, index)} // 確保傳遞正確的路由
            >
              {`${x.route} ${x.orig_tc} to ${x.dest_tc}`}
            </div>
          );
        })
      )}
    </div>
  );
};
    
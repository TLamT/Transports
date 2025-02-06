"use client";
import { useEffect, useState } from "react";
import { fetchBusStopData } from "../fetchFunction";

function ShowingStopsAndTime({ choosedRoute }) {
  const [busStopData, setBusStopData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      if (choosedRoute.route) {
        const data = await fetchBusStopData(
          choosedRoute.route,
          choosedRoute.bound === "I" ? "inbound" : "outbound",
          choosedRoute.service_type
        );
        setBusStopData(data || []); // 確保設置為空數組
      }
    };
    fetch();
  }, [choosedRoute]);

  if (!choosedRoute.route) return null;

  return (
    <div className="allDataContainer">
      <div className="routeInfo">{`${choosedRoute.route} - ${choosedRoute.orig_tc} to ${choosedRoute.dest_tc}`}</div>
      <div className="busDataContainer">
        {busStopData.length === 0 ? (
          <div>No Bus Stop Data Available</div>
        ) : (
          busStopData.map((busStop, index) => (
            <div className="buses" key={index}>
              <div>{`${index + 1}. ${busStop[0]?.name || "Unknown Stop"}`}</div>
              <div className="firstBus">
                <div className="busTime">
                  {busStop[0]?.time ? busStop[0].time : "No Bus Is Available"}
                </div>
                <div className="busTrips">
                  {busStop[0]?.trips || ""}
                </div>
              </div>
              <div className="secondBus">
                <div className="busTime">
                  {busStop[1]?.time ? busStop[1].time : "No Bus Is Available"}
                </div>
                <div className="busTrips">
                  {busStop[1]?.trips || ""}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ShowingStopsAndTime;
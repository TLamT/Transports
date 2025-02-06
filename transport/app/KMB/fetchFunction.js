
const api = "https://data.etabus.gov.hk/v1/transport/kmb/";
const fetchBusData = async (path) => {
    try {
        const url = `${generalApi}${path}`;
        const res = await fetch(url);
        const dataFile = await res.json();
        return dataFile.data;
      } catch (err) {
        return null;
      }
    }
    
    export const fetchAllLineData = async () => {
      const data = await fetchBusData("route");
      return data;
    };
    
    export const fetchBusStopData = async (route, direction, service_type) => {
      const nameData = await fetchBusData(
        `route-stop/${route}/${direction}/${service_type}`
      );
      const stop_id = nameData.map((busStop) => busStop.stop);
      const timeData = await Promise.all(
        stop_id.map(async (stop_id) => {
          const timeData = await fetchBusStopTime(stop_id, route, service_type);
          return timeData;
        })
      );
      return timeData;
    };
    
    const fetchBusStopTime = async (stop_id, route, service_type) => {
      const nameData = await fetchBusData(`stop/${stop_id}`);
      const timeData = await fetchBusData(`eta/${stop_id}/${route}/${service_type}`);
      const firstBusData = {
        name: nameData.name_tc,
        time: moment(timeData[0]?.eta).format("hh:mm:ss a"),
        trips: timeData[0]?.rmk_tc,
      };
      const secondBusData = {
        time: moment(timeData[1]?.eta).format("hh:mm:ss a"),
        trips: timeData[1]?.rmk_tc,
      };
      return [firstBusData, secondBusData];
};

export default fetchBusData;
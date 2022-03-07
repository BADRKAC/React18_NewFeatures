
import React, { useEffect, useState, useData, Suspense } from "react";

function cityList(displayCount) {
  const [cityId, setCityId] = useState();
  function RenderComponent() {
    const [data] = useData(`/api/cities?count=${displayCount}`);
    //   const [data, setData] = useState([]);
    //   const [isLoading, setIsLoading] = useState(true);

    //   useEffect(() => {
    //     setIsLoading(true);
    //     fetch(`/api/cities?count=${displayCount}`).then((records) => {
    //       setData(records);
    //       setIsLoading(false);
    //     });
    //   }, displayCount);

    //   if (isLoading) return <div>Loading...</div>;

    return (
      <ul>
        {data.slice(0, displayCount).map((record) => (
          <li
            key={record.id}
            onClick={() => {
              setCityId(record.id);
            }}
          >
            {record.name}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <Suspense fallback={<div>Loading Cities...</div>}>
      <RenderComponent />
      <hr />
      <Citydetails cityId={cityId} />
    </Suspense>
  );
}
function Citydetails({ cityId }) {
  const [cityData] = useData(`api/cityDetails?id=${cityId}`);
  return (
    <div>
      {cityData.cityName} Population:${cityData.population}
    </div>
  );
}
export default cityList;

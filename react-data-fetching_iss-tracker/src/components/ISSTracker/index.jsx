import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {
  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  const fetcher = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    // setCoords({ longitude: data.longitude, latitude: data.latitude });

    if (!response.ok) {
      const error = new Error("An error occurred while fetching the data.");
      // Attach extra info to the error object.
      error.info = data;
      error.status = response.status;
      throw error;
    }

    return data;
  };

  const {
    data: coordsData,
    error,
    isLoading,
    mutate,
  } = useSWR(URL, fetcher, { refreshInterval: 5000 });

  // console.log("coordsData:", coordsData);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // if (isValidating) {
  //   return <h1>Trying to find Data...</h1>;
  // }

  if (error) {
    return <h1>Error appeared by loading joke</h1>;
  }

  return (
    <main>
      <Map longitude={coordsData.longitude} latitude={coordsData.latitude} />
      <Controls
        longitude={coordsData.longitude}
        latitude={coordsData.latitude}
        onRefresh={mutate}
      />
    </main>
  );
}

console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  console.log(data.results);

  const results = data.results;

  results.forEach((result) => {
    console.log(result.name);
    if (result.name === "R2-D2") {
      console.log("eye color: ", result.eye_color);
    }
  });
}

fetchData(url);

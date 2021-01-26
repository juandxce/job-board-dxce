import config from '../config'

async function getJobs(searchStr = "", filters = {}) {
  try {
    const result = await fetch(`${config.apiurl}/api/jobs`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ searchStr, filters }),
    });
    const response = await result.json();
    return response;
  } catch (err) {
    console.log("getJobs API failed with:", err);
  }
}

async function getFilters() {
  try {
    const result = await fetch(`${config.apiurl}/api/filters`);
    const response = await result.json();
    return response;
  } catch (err) {
    console.log("getFilters API failed with:", err);
  }
}

export { getJobs, getFilters };

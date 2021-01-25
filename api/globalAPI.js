
const URL = "http://localhost:3000";

async function getJobs(searchStr = "") {
    try {
        const result = await fetch(`${URL}/api/jobs`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ searchStr }),
        });
        const response = await result.json();
        return response;
    } catch (err) {
        console.log("getJobs API failed with:", err)
    }
}

async function getFilters() {
    try {
        const result = await fetch(`${URL}/api/filters`);
        const response = await result.json();
        return response;
    } catch (err) {
        console.log("getFilters API failed with:", err)
    }
}

export { getJobs, getFilters };
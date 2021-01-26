import jobs from "../../data/jobs";

export default async (req, res) => {
  res.statusCode = 200;
  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));
  const { searchStr, filters } = req.body;

  const filteredJobs = jobs
    .map((job) => {
      const newJob = { ...job };
      const newJobItems = job.items.filter(
        (jobPosting) =>
          Object.keys(filters).every((filterKey) => {
            if (filterKey !== "department") {
              jobPosting[filterKey] === filters[filterKey];
            }
            return jobPosting[filterKey].includes(filters[filterKey]);
          }) // match ALL the selected filters
      );
      newJob.items = newJobItems;
      return newJob;
    })
    .filter((job) => !!job.items.length);

  res.json({
    jobs: filteredJobs.filter((job) => {
      return JSON.stringify(job)
        .toLowerCase()
        .includes(searchStr.toLowerCase());
    }), // string search. easy to implement, bad performance.
  });
};

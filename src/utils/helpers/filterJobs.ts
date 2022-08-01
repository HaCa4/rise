import { Job } from "../types";

export function filterJobs(jobList: Job[], searchValue: string, searchCategory: string): Job[] {
  if ((!searchValue || searchValue?.length === 0) && (!searchCategory || searchCategory === "0")) {
    return jobList;
  }
  if ((searchValue || searchValue?.length !== 0) && (!searchCategory || searchCategory === "0")) {
    return jobList.filter((job) => {
      return job.name.includes(searchValue);
    });
  }
  if ((!searchValue || searchValue?.length === 0) && (searchCategory || searchCategory !== "0")) {
    return jobList.filter((job) => {
      return job.category === searchCategory;
    });
  }
  if ((searchValue || searchValue?.length !== 0) && (searchCategory || searchCategory !== "0")) {
    return jobList
      .filter((job) => {
        return job.category === searchCategory;
      })
      .filter((job) => {
        return job.name.includes(searchValue);
      });
  }
  return jobList;
}

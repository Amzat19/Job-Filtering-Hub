import axios from "axios";

const url = 'https://jobs-data-server.herokuapp.com/jobs';

export const fetchJobs = () => axios.get(url);
export const createJob = (newJob) => axios.post(url, newJob);
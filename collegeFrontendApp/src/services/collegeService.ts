import axios from "axios";

export const fetchCollegeRanks = (collegeId: string) => {
  return axios.get("http://ai-college.local:8080/api/college/ranks", {
    params: { college: collegeId }
  });
};
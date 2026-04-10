import { useState, useEffect } from "react";
import { fetchCollegeRanks } from "../services/collegeService";
import type { CollegeRank } from "../models/college";

const useCollegeRanks = (collegeId: string) => {
  const [rows, setRows] = useState<CollegeRank[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!collegeId) return;

    setLoading(true);
    setError("");
    setRows([]);

    fetchCollegeRanks(collegeId)
      .then((res) => {
        const mapped: CollegeRank[] = res.data.map((item: any, index: number) => ({
          id: index,
          quota: item.quota,
          category: item.category,
          minRank: item.minRank,
          maxRank: item.maxRank,
        }));
        setRows(mapped);
      })
      .catch(() => setError("Failed to load data. Please try again."))
      .finally(() => setLoading(false));

  }, [collegeId]);

  return { rows, loading, error };
};

export default useCollegeRanks;
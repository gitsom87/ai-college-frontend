import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";

interface Rank {
  id: number;
  quota: string;
  category: string;
  rank: number;
}

export default function CollegeRankGrid() {
  const [rows, setRows] = useState<Rank[]>([]);

  useEffect(() => {
    axios
      .get("http://ai-college.local:8080/api/college/ranks?college=901637")
      .then((res) => {
        const mapped = res.data.map((item: any, index: number) => ({
            id: index,
            quota: item.quota,    
            category: item.category,
            minRank: item.minRank,
            maxRank: item.maxRank
        }));
        setRows(mapped);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

//   const columns: GridColDef[] = [
//     { field: "quota", headerName: "Quota", width: 150 },
//     { field: "category", headerName: "Category", width: 150 },
//     { field: "rank", headerName: "Rank", width: 120 },
//   ];

const columns: GridColDef[] = [
  { field: "quota", headerName: "Quota", width: 180 },
  { field: "category", headerName: "Category", width: 150 },
  { field: "minRank", headerName: "Min Rank", width: 120 },
  { field: "maxRank", headerName: "Max Rank", width: 120 },
];

  return (
    <div style={{ height: 400 }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import useCollegeRanks from "../../hooks/useCollegeRanks";

const columns: GridColDef[] = [
  { field: "quota", headerName: "Quota", width: 180 },
  { field: "category", headerName: "Category", width: 150 },
  { field: "minRank", headerName: "Min Rank", width: 120 },
  { field: "maxRank", headerName: "Max Rank", width: 120 },
];

interface Props {
  collegeId: string;
}

export default function CollegeRankGrid({ collegeId }: Props) {
  const { rows, loading, error } = useCollegeRanks(collegeId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <p style={{ marginBottom: 8, color: "#555" }}>
        Showing results for: <strong>{collegeId}</strong>
      </p>
      <div style={{ height: 400 }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}
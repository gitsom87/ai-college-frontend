import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CollegeRankGrid from "../grid/CollegeRankGrid";

export default function CollegeSearch() {
  const [collegeId, setCollegeId] = useState("");
  const [submittedId, setSubmittedId] = useState("");
  const [error, setError] = useState("");

  const sanitise = (value: string) => {
    // allow only numbers, strip everything else
    return value.replace(/[^0-9]/g, "");
  };

  const validate = (value: string): boolean => {
    if (!value.trim()) {
      setError("College ID is required.");
      return false;
    }
    if (!/^\d+$/.test(value)) {
      setError("College ID must contain numbers only.");
      return false;
    }
    if (value.length < 4) {
      setError("College ID must be at least 4 digits.");
      return false;
    }
    if (value.length > 10) {
      setError("College ID must not exceed 10 digits.");
      return false;
    }
    setError("");
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitised = sanitise(e.target.value);
    setCollegeId(sanitised);
    if (error) validate(sanitised); // live re-validate if error already shown
  };

  const handleSearch = () => {
    if (!validate(collegeId)) return;
    setSubmittedId(collegeId.trim());
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: 2,
          mb: 3,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            label="College ID"
            placeholder="e.g. 901632"
            variant="outlined"
            size="small"
            value={collegeId}
            onChange={handleChange}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            error={!!error}
            helperText={error}
            slotProps={{ htmlInput: { maxLength: 8 } }}
            sx={{ width: 280 }}
          />
        </Box>
        <Button
          variant="contained"
          size="medium"
          startIcon={<SearchIcon />}
          onClick={handleSearch}
          sx={{ mt: 0.3 }}
        >
          Search
        </Button>
      </Box>

      {submittedId && <CollegeRankGrid collegeId={submittedId} />}
    </Box>
  );
}
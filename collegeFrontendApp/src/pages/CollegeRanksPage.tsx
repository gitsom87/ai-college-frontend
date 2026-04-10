import { Box, Typography } from "@mui/material";
import CollegeSearch from "../components/search/CollegeSearch";

export default function CollegeRanksPage() {
  return (
    <Box sx={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px" }}>
      <Typography variant="h4" sx={{ fontWeight: 600 }} gutterBottom>
        College Rankings
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Enter a college ID to view its rank data
      </Typography>
      <CollegeSearch />
    </Box>
  );
}
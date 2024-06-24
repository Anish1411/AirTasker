import React from "react";
import {
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Timings = ({ schedule }) => {
  return (
    <Box mt={4} sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#333", marginRight: 2 }}
      >
        {schedule.title}
      </Typography>
      <List sx={{ color: "#333", flexGrow: 1 }}>
        {schedule.service_time.map((slot, index) => (
          <ListItem key={index}>
            <ListItemText
              primaryTypographyProps={{
                sx: { fontWeight: "bold" },
              }}
              primary={slot.time}
              secondary={slot.day}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary">
        Book Service
      </Button>
    </Box>
  );
};

export default Timings;

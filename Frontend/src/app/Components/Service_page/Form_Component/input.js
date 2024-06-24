"use client";

import {
  Typography,
  Box,
  TextField,
} from "@mui/material";

const Input = ({ inputData }) => {
  console.log(inputData);
  return (
    <Box mb={4}>
      {inputData?.map((field, index) => {
        return (
          <Box key={index} mb={2}>
            <Typography sx={{ fontWeight: "bold", color: "#333", marginTop: "30px" }}>{field.title}</Typography>
            <TextField
              key={index}
              fullWidth
              variant="outlined"
              margin="normal"
              placeholder={field.emailPlaceHolder}
              multiline={field.title === "Message"}
              rows={field.title === "Message" ? 4 : 1}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default Input;

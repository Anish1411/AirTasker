"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Typography,
  Box,
  Button,
  TextField,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import Input from "./input";

const Form = ({ data }) => {
  console.log(data);
  return (
    <Box mb={4}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#333", marginTop: "30px" }}
      >
        {data?.heading}
      </Typography>
      <Typography variant="h6" gutterBottom >
        {data?.description}
      </Typography>

      <Input inputData={data.form} />

      <Button variant="contained" color="primary">
        Post Comment
      </Button>
    </Box>
  );
};

export default Form;

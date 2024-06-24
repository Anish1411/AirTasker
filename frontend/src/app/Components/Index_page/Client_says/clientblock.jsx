"use client";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export default function ClientBlock({ img, text, name }) {
  return (
    <Block>
      <Box className="card">
        <Box className="image">
          <img src={img} alt="Client" />
        </Box>
        <Typography className="text">{text}</Typography>
        <Typography className="name">{name}</Typography>
      </Box>
    </Block>
  );
}

const Block = styled(Box)`
  .card {
    background: #fff;
    box-shadow: 0px 10px 20px -5px rgba(76, 64, 237, 0.08);
    padding: 1.5rem;
    text-align: center;
    margin: 60px 0px 24px;
  }
  .image {
    display: block;
    width: 110px;
    height: 110px;
    overflow: hidden;
    border-radius: 50%;
    margin: -83px auto 20px;
    font-size: 16px;
    @media (max-width: 991px) {
      width: 100px;
      height: 100px;
    }
    @media (max-width: 767px) {
      width: 90px;
      height: 90px;
    }
    @media (max-width: 414px) {
      width: 80px;
      height: 80px;
    }
  }
  .image img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .text {
    color: #74788d;
    @media (max-width: 991px) {
      font-size: 15px;
    }
    @media (max-width: 767px) {
      font-size: 14px;
    }
    @media (max-width: 414px) {
      font-size: 13px;
    }
  }
  .name {
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
    font-weight: 600;
    width: 100%;
    @media (max-width: 991px) {
      font-size: 18px;
    }
    @media (max-width: 767px) {
      font-size: 16px;
    }
    @media (max-width: 414px) {
      font-size: 14px;
    }
  }
`;

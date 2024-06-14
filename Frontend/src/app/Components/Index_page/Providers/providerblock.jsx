"use client";

import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export default function ProviderBlock({ img, name, email }) {
  return (
    <Block>
      <Box className="blockcard">
        <Box className="image">
          <img src={img} alt="Provider" />
        </Box>
        <Typography className="name">{name}</Typography>
        <Typography className="email">{email}</Typography>
      </Box>
    </Block>
  );
}

const Block = styled(Box)`
  .blockcard {
    border: 2px solid #f5f5f5;
    border-radius: 10px;
    padding: 18px;
    position: relative;
    top: 0;
    transition: all 0.5s;
    background: #fff;
  }
  .image {
    height: 268px;
    margin-bottom: 18px;
  }
  .blockcard img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .name {
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 600;
    @media (max-width: 767px) {
      font-size: 16px;
    }
    @media (max-width: 414px) {
      font-size: 16px;
    }
  }
  .name:hover {
    color: #4c40ed;
  }
  .email {
    margin-bottom: 8px;
    color: #74788d;
    font-weight: 500;
    font-size: 16px;
    @media (max-width: 767px) {
      font-size: 14px;
    }
    @media (max-width: 414px) {
      font-size: 14px;
    }
  }
  .email:hover {
    color: #4c40ed;
  }
`;

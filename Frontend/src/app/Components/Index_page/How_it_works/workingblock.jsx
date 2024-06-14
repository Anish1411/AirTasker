"use client";
import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";
export default function WorkBlock({ number, icon, title, text }) {
  return (
    <Work>
      <Box className="cardBLOCK">
        <Typography className="numbertag">{number}</Typography>
        <img src={icon} alt="icon" className="svgicon" />
        <Typography className="title">{title}</Typography>
        <Typography className="text">{text}</Typography>
      </Box>
    </Work>
  );
}

const Work = styled(Box)`
  .cardBLOCK {
    background-color: #fff;
    border: 1px solid #f5f5f5;
    box-shadow: 0px 10px 20px -5px rgba(76, 64, 237, 0.08);
    border-radius: 20px;
    padding: 30px;
    text-align: center;
    margin-bottom: 24px;
    position: relative;
    @media (max-width: 991px) {
      padding: 25px;
    }
    @media (max-width: 767px) {
      padding: 20px;
    }
    @media (max-width: 441px) {
      padding: 20px;

    }
  }
  .numbertag {
    font-weight: 600;
    font-size: 60px;
    color: #edecf8;
    margin-bottom: 0;
    position: absolute;
    top: -24px;
    left: 0;
    @media (max-width: 991px) {
      font-size: 40px;
      top: -16px;
    }
    @media (max-width: 767px) {
      font-size: 40px;
      top: -16px;
    }
    @media (max-width: 441px) {
      font-size: 30px;
      top: -11px;
    }
  }
  .svgicon {
    width: 85px;
    height: 85px;
    background-color: #f7f7ff;
    border-radius: 10px;
    display: flex;
    padding: 17px;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 16px;
    @media (max-width: 991px) {
      width: 75px;
      height: 75px;
      padding: 16px;
      margin: 0 auto 15px;
    }
    @media (max-width: 767px) {
      width: 70px;
      padding: 12px;
      height: 70px;
      margin: 0 auto 10px;
    }
    @media (max-width: 441px) {
      padding: 17px;
      width: 65px;
      height: 65px;
      margin: 0 auto 10px;
    }
  }
  .title {
    font-family: "Roboto", sans-serif;
    color: #28283c;
    font-weight: 600;
    margin: 0 0 15px;
    font-size: 19px;
    @media (max-width: 991px) {
      font-size: 16px;
      margin: 0 0 10px;
    }
    @media (max-width: 767px) {
      font-size: 16px;
      margin: 0 0 10px;
    }
    @media (max-width: 441px) {
      margin: 0 0 10px;
      font-size: 13px;
    }
  }
  .text {
    color: #74788d;
    font-weight: 500;
    @media (max-width: 991px) {
      font-size: 15px;
    }
    @media (max-width: 767px) {
      font-size: 14px;
    }
    @media (max-width: 441px) {
      font-size: 13px;
    }
  }
`;

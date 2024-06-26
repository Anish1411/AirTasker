"use client";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import styled from "styled-components";
import { FaRegCalendarMinus } from "react-icons/fa";
export default function BlogBlock({ img, profile, profilename, date, text }) {
  return (
    <Blogs>
      <Box className="card">
        <Box className="cardimg">
          <img src={img} alt="img" />
        </Box>
        <Box className="card-details">
          <Box className="profile">
            <img src={profile} alt="profile" />
            <Typography className="name">{profilename}</Typography>
          </Box>
          <Box>
            <Typography className="date">
              <FaRegCalendarMinus
                color="#4c40ed"
                size="0.9rem"
                style={{ marginRight: "10px", fontWeight: "400" }}
              />
              {date}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="h3" className="text">
            {text}
          </Typography>
        </Box>
      </Box>
    </Blogs>
  );
}

const Blogs = styled(Box)`
  .card {
    background-color: #fff;
    border: 2px solid #f5f5f5;
    border-radius: 10px;
    margin-bottom: 24px;
    position: relative;
    overflow: hidden;
    padding: 20px;
    @media (max-width: 991px) {
      padding: 10px;
    }
    @media (max-width: 767px) {
      padding: 7px;
    }
    @media (max-width: 414px) {
      padding: 5px;
    }
    transition: all 0.3s ease 0s;
  }
  .card:hover {
    box-shadow: 0px 10px 20px -5px rgb(76 64 237 / 8%);
  }
  .cardimg {
    position: relative;
    height: 170px;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    margin-bottom: 20px;
  }
  .cardimg img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translateZ(0);
    transition: all 2000ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
  }
  .cardimg:hover img {
    transform: scale(1.15);
  }
  .card-details {
    align-items: center;
    display: flex;
  }
  .profile {
    display: flex;
    margin-right: 25px;
    @media (max-width: 991px) {
      margin-right: 20px;
    }
    @media (max-width: 767px) {
      margin-right: 10px;
    }
    @media (max-width: 414px) {
      margin-right: 10px;
    }
    align-items: center;
  }
  .profile img {
    border-radius: 25px;
    margin-right: 10px;
    @media (max-width: 991px) {
      height: 15px;
      width: 15px;
      margin-right: 7px;
    }
    @media (max-width: 767px) {
      height: 15px;
      width: 15px;
      margin-right: 7px;
    }
    @media (max-width: 414px) {
      height: 15px;
      width: 15px;
      margin-right: 7px;
    }
  }
  .name {
    color: #74788d;
    @media (max-width: 991px) {
      font-size: 14px;
    }
    @media (max-width: 767px) {
      font-size: 13px;
    }
    @media (max-width: 414px) {
      font-size: 12px;
    }
  }
  .date {
    color: #74788d;
    display: flex;
    align-content: center;
    align-items: center;
    @media (max-width: 991px) {
      font-size: 14px;
    }
    @media (max-width: 767px) {
      font-size: 13px;
    }
    @media (max-width: 414px) {
      font-size: 12px;
    }
  }
  .text {
    font-size: 20px;
    font-weight: 600;
    margin-top: 10px;
    color: #28283c;
    margin: 10px 0;
    @media (max-width: 991px) {
      font-size: 20px;
      margin: 10px 0;
    }
    @media (max-width: 767px) {
      font-size: 18px;
      margin: 8px 0;
    }
    @media (max-width: 400px) {
      font-size: 16px;
      margin: 6px 0;
    }
  }
  .text:hover {
    color: #4c40ed;
  }
`;

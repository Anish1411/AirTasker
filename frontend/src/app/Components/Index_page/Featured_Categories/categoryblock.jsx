import { Box, Typography } from "@mui/material";
import Link from "next/link";
import styled from "styled-components";

export default function Block({ imageUrlsvg1, imageUrl, text }) {
  return (
    <FeaturedCategories>
      <Link href="#" className="block">
        <img src={imageUrlsvg1} alt="" className="svg" />
        <Typography className="text">{text}</Typography>
        <div className="animationimg">
          <img src={imageUrl} alt="" width="100%" height="100%" />
        </div>
      </Link>
    </FeaturedCategories>
  );
}

const FeaturedCategories = styled(Box)`
  z-index: 1;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 30px;

  .block {
    text-decoration: none;
    position: relative;
    height: 175px;
    @media (max-width: 991px) {
      height: 155px;
    }
    @media (max-width: 767px) {
      height: 145px;
    }
    @media (max-width: 414px) {
      height: 135px;
    }
  }
  .svg {
    height: 94px;
    width: 94px;
    padding: 0 20px;
    background: #f7f7ff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 auto 20px;
    margin-bottom: 15px;
    @media (max-width: 991px) {
      padding: 0 17px;
      height: 84px;
      margin-bottom: 13px;
      width: 84px;
    }
    @media (max-width: 767px) {
      padding: 0 13px;
      height: 74px;
      margin-bottom: 11px;
      width: 74px;
    }
    @media (max-width: 414px) {
      margin-bottom: 9px;
      padding: 0 10px;
      height: 64px;
      width: 64px;
    }
  }
  .text {
    font-weight: 600;
    margin: 0 0 15px;
    color: black;
    text-align: center;
    font-size: 20px;
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

  .block:hover .animationimg {
    z-index: 1;
    opacity: 1;
    left: 0;
  }

  .block:hover {
    z-index: -1;
  }

  .block {
    background-color: #fff;
    padding: 25px;
    text-align: center;
    border-radius: 10px;
    position: relative;
    display: block;
    z-index: 1;
    overflow: hidden;
  }

  .animationimg {
    opacity: 0;
    position: absolute;
    top: 0;
    left: -100%;
    transition: 0.7s;
    width: 100%;
    z-index: -1 !important;
    height: 100%;
    background-color: #000;
    border-radius: 10px;
    overflow: hidden;
  }
  .animationimg img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.6;
  }
  .block:hover .animationimg {
    opacity: 1;
    left: 0;
  }
  .block:hover .text {
    color: white;
  }
`;

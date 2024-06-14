"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Heading() {
  return (
    <Main className="main">
      <Box className="container">
        <Container>
          <Box className="block">
            <Grid xs={6} md={12} lg={7} xl={7}>
              <Box className="info">
                <Typography component={"h1"} className="heading">
                  Professional Services For <br></br> Your Home &amp; Commercial
                </Typography>
                <Typography className="paragraph">
                  Search From 100 Awesome Verified Ads
                </Typography>

                <Box className="searchbar">
                  <Box className="searchbyinput borderline">
                    <Box className="logobox1">
                      <FaSearch
                        className="logo1"
                        size="1.3rem"
                        color="#4c40ed"
                      />
                    </Box>
                    <Box className="searchcard">
                      <label htmlFor="">What are you looking for?</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="What are you looking for?"
                      />
                    </Box>
                  </Box>

                  <Box className="searchbyinput">
                    <Box className="logobox1">
                      <FaLocationDot
                        className="logo1"
                        size="1.3rem"
                        color="#4c40ed"
                      />
                    </Box>
                    <Box className="searchcard">
                      <label htmlFor="">Location</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Location"
                      />
                    </Box>
                  </Box>

                  <Box className="button">
                    <Button variant="contained" className="searchbutton">
                      <FaSearch style={{ marginRight: "5px" }} />
                      Search
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid xs={6} md={12} lg={5} xl={5}>
              <Box className="banner-imgs">
                <Box className="banner-1 shape-1">
                  <img
                    decoding="async"
                    class="img-fluid"
                    alt="banner"
                    src="/assets/banner1-1.png"
                  />
                </Box>
                <Box className="banner-2 shape-3">
                  <img
                    decoding="async"
                    class="img-fluid"
                    alt="banner"
                    src="/assets/banner2.png"
                  />
                </Box>
                <Box className="banner-3 shape-3">
                  <img
                    decoding="async"
                    class="img-fluid"
                    alt="banner"
                    src="/assets/banner3-1.png"
                  />
                </Box>
                <Box className="banner-4 shape-2">
                  <img
                    decoding="async"
                    class="img-fluid"
                    alt="banner"
                    src="/assets/banner4-1-1.png"
                  />
                </Box>
              </Box>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Main>
  );
}
const Main = styled(Box)`
  .info br {
    @media (max-width: 767px) {
      display: none;
    }
  }
  .searchbutton {
    background-color: #4c40ed;
    color: white;
    align-items: center;
    font-weight: bolder;
    font-size: 16px;
    padding: 10px 13px;
    border-radius: 6px;
    text-transform: none;
  }
  .searchbutton:hover {
    background-color: #28283c;
  }
  .block {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-right: -15px;
    margin-left: -15px;
    padding-right: 15px;
    padding-left: 15px;
    @media (max-width: 1160px) {
      width: 80%;
      margin: 0 auto;
    }
    @media (max-width: 991px) {
      width: 85%;
    }
    @media (max-width: 767px) {
      width: 97%;
    }
    @media (max-width: 441px) {
      width: 97%;
    }
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 680px;
    background: url(/assets/bg-banner.png), url(/assets/bg-banner.png);
    background-repeat: no-repeat;
    background-position: left top, left bottom;
    position: relative;
    @media (max-width: 1160px) {
      min-height: 530px;
    }
    @media (max-width: 767px) {
      min-height: 380px;
    }
    @media (max-width: 441px) {
      min-height: 350px;
    }
  }
  .container:before {
    content: "";
    background-image: url(/assets/banner-right.png);
    background-repeat: no-repeat;
    background-position: 100% 0;
    height: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    top: 0;
  }
  .info {
    position: relative;
    z-index: 9;
    max-width: 710px;
    @media (max-width: 1220px) {
      max-width: 1220px;
    }
    @media (max-width: 1160px) {
      max-width: 1160px;
    }
    @media (max-width: 441px) {
      max-width: 441px;
    }
  }
  .heading {
    line-height: 60px;
    margin-bottom: 20px;
    font-size: 50px;
    font-weight: 600;
    @media (max-width: 1220px) {
      font-size: 40px;
    }
    @media (max-width: 767px) {
      line-height: normal;
      font-size: 26px;
      margin-bottom: 10px;
    }
    @media (max-width: 441px) {
      font-size: 24px;
      line-height: normal;
    }
  }
  .paragraph {
    font-size: 18px;
    font-weight: 550;
    color: #74788d;
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
  .searchbar {
    display: flex;
    max-width: 690px;
    background: #fff;
    border: 1px solid #f0f0f0;
    box-shadow: 0px 3px 53px rgba(197, 197, 197, 0.27);
    border-radius: 10px;
    padding: 15px;
    margin-top: 48px;
    align-items: center;
    align-content: center;
    @media (max-width: 767px) {
      display: block;
    }
    @media (max-width: 1160px) {
      margin-top: 18px;
    }
  }
  .searchcard label {
    font-weight: 600;
    color: #28283c;
    font-size: 16px;
    margin-bottom: 2px;
  }
  .searchbyinput.borderline {
    width: 42%;
    flex: 0 0 42%;
    border-right: solid 2px #f2f2f2;
    margin-right: 25px;
    @media (max-width: 767px) {
      border: none;
    }
  }
  .searchbyinput {
    width: 32%;
    flex: 0 0 32%;
    display: flex;
    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }
  .logobox1 {
    width: 43px;
    height: 43px;
    background: #f2f2ff;
    flex: 0 0 43px;
    border-radius: 50%;
    margin-right: 15px;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .logo1 {
    width: 20px;
    display: block;
  }
  .searchcard .form-control {
    border: none;
    margin-top: 6px;
    padding: 0;
    outline: none;
    height: auto;
    line-height: normal;
    border-radius: 0;
    font-size: 14px;
  }
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  .button {
    display: flex;
    align-items: center;
    position: absolute;
    right: 15px;
    @media (max-width: 767px) {
      position: initial;
      justify-content: center;
    }
  }
  .searchbutton {
    @media (max-width: 767px) {
      width: 100%;
    }
  }
  .banner-imgs {
    padding: 65px 0 0;
    position: relative;
    height: 100%;
    min-height: 540px;
    min-width: 430px;
    @media (max-width: 1220px) {
      min-width: 450px;
    }
    @media (max-width: 1160px) {
      display: none;
    }
  }
  .banner-imgs .banner-1 {
    position: absolute;
    z-index: 2;
    top: 50px;
    left: -10px;
    max-width: 203px;
    max-height: 203px;
  }
  .banner-imgs .banner-2 {
    position: absolute;
    z-index: 2;
    max-width: 350px;
    top: 0;
    right: -50px;
  }
  .banner-imgs .banner-3 {
    position: absolute;
    z-index: 2;
    max-width: 300px;
    bottom: -60px;
    left: -35px;
  }
  .banner-imgs .banner-3:before {
    position: absolute;
    content: "";
    background: url(/assets/banner-arrow.svg);
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    left: -100px;
    z-index: -1;
  }
  .banner-imgs .banner-4 {
    position: absolute;
    z-index: 2;
    max-width: 145px;
    bottom: 20px;
    right: 20px;
  }
  .shape-1 {
    animation: hero-thumb-animation 2.5s linear infinite alternate;
  }
  .shape-2 {
    animation: hero-thumb1-animation 2.5s linear infinite alternate;
  }
  .shape-3 {
    animation: hero-thumb2-animation 2.5s linear infinite alternate;
  }
  @keyframes hero-thumb-animation {
    0% {
      transform: translateY(-20px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes hero-thumb1-animation {
    0% {
      transform: translateY(-20px) translateX(50px);
    }
    to {
      transform: translateY(-20px) translateX(0);
    }
  }
  @keyframes hero-thumb2-animation {
    0% {
      transform: translateY(-50px);
    }
    to {
      transform: translateY(0);
    }
  }
`;

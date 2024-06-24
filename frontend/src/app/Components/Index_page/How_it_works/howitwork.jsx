"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import styled from "styled-components";
import WorkBlock from "./workingblock";

export default function Howitwork({details}) {
  const token = process.env.NEXT_PUBLIC_STRAPI_URL;
  return (
    <Howitworkcontainer>
      <Container>
        <Box className="offerbox">
          <Box className="offerimg">
            <img src="/assets/offer-image.png" alt="offer" />
          </Box>
          <Box className="offerdetails">
            <Typography className="offerheading">
              {details.offerheading}
            </Typography>
            <Typography className="offertext">
              {details.OfferDetails}
            </Typography>
            <Button className="offerbutton" variant="contained">
              {details.Button.title}
            </Button>
          </Box>
        </Box>

        <Box className="workbox">
          <Box className="workdetails">
            <Typography className="workheading">{details.title}</Typography>
            <Typography className="worktext">
              {details.subtitle}
            </Typography>
          </Box>

          <Box className="workcards">
            <Box className="card">
              {details.workingBlock.map((work, index) => (
                <WorkBlock
                  key={index}
                  number={work.Number}
                  icon={`${token}${work.svgImageLogo.data.attributes.url}`}
                  title={work.title}
                  text={work.description}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Howitworkcontainer>
  );
}

const Howitworkcontainer = styled(Box)`
  padding: 90px 0;
  @media (max-width: 991px) {
    padding: 70px 0;
  }
  @media (max-width: 767px) {
    padding: 50px 0;
  }
  @media (max-width: 441px) {
    padding: 30px 0;
  }
  background: url(/assets/work-bg1.png), url(/assets/work-bg2.png), #f7f7ff;
  background-repeat: no-repeat;
  background-position: left center, right 0 bottom 25%;
  .offerbox {
    background-color: #4c40ed;
    border-radius: 50px;
    position: relative;
    background-size: cover;
    display: flex;
    align-items: center;
    z-index: 1;
    @media (max-width: 991px) {
      padding: 30px;
      text-align: center;
      border-radius: 15px;
    }
    @media (max-width: 441px) {
      padding: 15px;
      border-radius: 15px;
    }
  }
  .offerbox:after {
    position: absolute;
    content: "";
    background: url(/assets/offer-bg.png) no-repeat 0 0 / 100%;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .offerimg {
    flex: 0 0 auto;
    @media (max-width: 991px) {
      display: none;
    }
  }
  .offerdetails {
    padding-left: 35px;
    padding-right: 35px;
    @media (max-width: 991px) {
      padding-left: 0;
      padding-right: 0;
    }
  }
  .offerheading {
    color: #fff;
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 15px;
    @media (max-width: 991px) {
      font-size: 30px;
    }
    @media (max-width: 767px) {
      font-size: 22px;
    }
    @media (max-width: 441px) {
      font-size: 20px;
    }
  }
  .offertext {
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    @media (max-width: 991px) {
      font-size: 14px;
    }
    @media (max-width: 767px) {
      font-size: 13px;
    }
    @media (max-width: 441px) {
      font-size: 12px;
    }
  }
  .offerbutton {
    background-color: #fff;
    color: #28283c;
    font-weight: 600;
    border: 1px solid #fff;
    padding: 12px 20px;
    display: inline-flex;
    align-items: center;
    font-size: 15px;
    border-radius: 8px;
    text-transform: none;
    @media (max-width: 991px) {
      font-size: 13px;
    }
  }
  .workbox {
    padding-top: 90px;
    @media (max-width: 991px) {
      padding-top: 70px;
    }
    @media (max-width: 767px) {
      padding-top: 50px;
    }
    @media (max-width: 441px) {
      padding-top: 30px;
    }
  }
  .workdetails {
    text-align: center;
    padding-bottom: 30px;
    @media (max-width: 991px) {
      padding-bottom: 20px;
    }
    @media (max-width: 767px) {
      padding-bottom: 20px;
    }
    @media (max-width: 441px) {
      padding-bottom: 10px;
    }
  }
  .workheading {
    font-size: 40px;
    font-weight: 600;
    @media (max-width: 991px) {
      font-size: 30px;
    }
    @media (max-width: 767px) {
      font-size: 30px;
    }
    @media (max-width: 441px) {
      font-size: 20px;
    }
  }
  .worktext {
    margin: 0 0 15px;
    font-weight: 520;
    color: #74788d;
    font-size: 16px;
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
  .card {
    column-gap: 30px;
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    @media (max-width: 991px) {
      grid-template-columns: auto auto auto;
    }
    @media (max-width: 767px) {
      grid-template-columns: auto;
    }
    @media (max-width: 441px) {
      grid-template-columns: auto;
    }
  }
`;

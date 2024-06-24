"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import Block from "./categoryblock";
import styled from "styled-components";

export default function Categories({ details }) {
  const token = process.env.NEXT_PUBLIC_STRAPI_URL;
  return (
    <Category>
      <Container>
        <Box className="container">
          <Box className="main-heading">
            <Typography className="heading">{details.title}</Typography>
            <Typography className="subheading">{details.subtitle}</Typography>
          </Box>

          <Box className="blocks">
            {details.categories.data.map((category, index) => (
              <Block
                key={index}
                imageUrlsvg1={`${token}${category.attributes.svgImage.data.attributes.url}`}
                text={category.attributes.title}
                imageUrl={`${token}${category.attributes.mainImage.data.attributes.url}`}
              />
            ))}
          </Box>

          <Box className="Button">
            <Button variant="contained" className="view-all">
              View All
            </Button>
          </Box>
        </Box>
      </Container>
    </Category>
  );
}

const Category = styled(Box)`
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
  background: url(/assets/feature-bg1.png), url(/assets/feature-bg2.png),
    #f7f7ff;
  background-repeat: no-repeat;
  background-position: left center, right center;

  .main-heading {
    padding-bottom: 60px;
    @media (max-width: 991px) {
      padding-bottom: 30px;
    }
    @media (max-width: 767px) {
      padding-bottom: 20px;
    }
    @media (max-width: 441px) {
      padding-bottom: 10px;
    }
  }
  .heading {
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
  .subheading {
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
  .blocks {
    column-gap: 30px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    align-items: center;
    
    @media (max-width: 767px) {
      grid-template-columns: auto auto;
    }
    @media (max-width: 441px) {
      grid-template-columns: auto auto;
    }
  }
  .Button {
    text-align: center;
    margin: 10px 0;
  }
  .view-all {
    background-color: #4c40ed;
    color: white;
    padding: 10px;
    font-weight: 600;
    text-transform: none;
    font-size: 16px;
  }
  .view-all:hover {
    background-color: #28283c;
  }
`;

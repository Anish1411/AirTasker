"use client";
import React from "react";
import Slider from "react-slick";
import { Box, Container, Typography } from "@mui/material";
import styled from "styled-components";
import ClientBlock from "./clientblock";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Client({details}) {
  const token = process.env.NEXT_PUBLIC_STRAPI_URL;
  var settings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: <FaAngleLeft />,
    nextArrow: <FaAngleRight />,
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Clientpage>
      <Container>
        <Box className="main-heading">
          <Typography className="heading">{details.title}</Typography>
          <Typography className="subheading">
            {details.subtitle}
          </Typography>
        </Box>

        <Slider {...settings}>
          {details.client_says.data.map((client, index) => (
            <ClientBlock
              key={index}
              img={`${token}${client.attributes.image.data.attributes.url}`}
              text={client.attributes.description}
              name={client.attributes.name}
            />
          ))}
        </Slider>
      </Container>
    </Clientpage>
  );
}

const Clientpage = styled(Box)`
  padding: 90px 0;
  @media (max-width: 991px) {
    padding: 70px 0;
  }
  @media (max-width: 767px) {
    padding: 50px 0;
  }
  @media (max-width: 414px) {
    padding: 30px 0;
  }
  background: url(/assets/testimonial-bg.png), url(/assets/testimonial-bg1.png),
    #f9f9f9;
  background-repeat: no-repeat;
  background-position: left center, right bottom;
  .main-heading {
    text-align: center;
    padding-bottom: 50px;
    @media (max-width: 991px) {
      padding-bottom: 30px;
    }
    @media (max-width: 767px) {
      padding-bottom: 20px;
    }
    @media (max-width: 414px) {
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
    @media (max-width: 414px) {
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
    @media (max-width: 414px) {
      font-size: 13px;
    }
  }
  .slick-prev,
  .slick-next {
    color: #74788d;
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 25px;
    box-shadow: 0 1px 4px black;
    height: 30px;
    width: 30px;
  }
  .slick-next {
    right: -50px;
    top: 50%;

    @media (max-width: 1300px) {
      z-index: 9;
      right: -10px;
    }
    @media (max-width: 991px) {
      z-index: 9;
      right: -10px;
    }
    @media (max-width: 767px) {
      z-index: 9;
      right: -20px;
    }
    @media (max-width: 414px) {
      z-index: 9;
      right: -20px;
    }
  }
  .slick-prev {
    left: -50px;
    top: 50%;

    @media (max-width: 1300px) {
      z-index: 9;
      left: -10px;
    }
    @media (max-width: 991px) {
      z-index: 9;
      left: -10px;
    }
    @media (max-width: 767px) {
      left: -20px;
      z-index: 9;
    }
    @media (max-width: 414px) {
      z-index: 9;
      left: -20px;
    }
  }
  .slick-list {
    margin: 0 -15px;
  }
  .slick-slide > div {
    padding: 0 15px;
  }
`;

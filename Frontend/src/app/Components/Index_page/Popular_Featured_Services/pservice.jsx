"use client";
import React from "react";
import Slider from "react-slick";
import { Box, Button, Container, Typography } from "@mui/material";
import styled from "styled-components";
import { popularServiceBlock } from "@/utils";
import Block from "./pserviceblock";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function PopularServices() {
  var settings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: <FaAngleLeft />,
    nextArrow: <FaAngleRight />,
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
  };
  return (
    <Service>
      <Container>
        <Box className="container">
          <Box className="main-heading">
            <Typography className="heading">Most Popular Services</Typography>
            <Typography className="subheading">
              Explore the greates our services. You won &apos;t be disappointed
            </Typography>
          </Box>

          <Slider {...settings}>
            {popularServiceBlock.map((service, index) => (
              <Block
                key={index}
                category={service.category}
                rating={service.rating}
                imageUrl={service.imageUrl}
                title={service.title}
                location={service.location}
                price={service.price}
              />
            ))}
          </Slider>
        </Box>
      </Container>
    </Service>
  );
}

const Service = styled(Box)`
  padding-bottom: 90px;
  @media (max-width: 991px) {
    padding-bottom: 70px;
  }
  @media (max-width: 767px) {
    padding-bottom: 50px;
  }
  @media (max-width: 441px) {
    padding-bottom: 30px;
  }
  .main-heading {
    padding-bottom: 50px;
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
  .slick-prev,
  .slick-next {
    right: 20px !important;
    top: -70px !important;
    color: #74788d;
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 25px;
    box-shadow: 0 1px 4px black;
    height: 30px;
    width: 30px;
  }
  .slick-prev {
    right: 50px !important;
    left: initial !important;
    margin-right: 12px;
  }
  .slick-list {
    margin: 0 -15px;
  }
  .slick-slide > div {
    padding: 0 15px;
  }
`;

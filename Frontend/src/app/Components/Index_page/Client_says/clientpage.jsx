"use client";
import React from "react";
import Slider from "react-slick";
import { clientdetails } from "@/utils";
import { Box, Button, Container, Typography } from "@mui/material";
import styled from "styled-components";
import ClientBlock from "./clientblock";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Client() {
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
          <Typography className="heading">What Our Client Says</Typography>
          <Typography className="subheading">
            Lorem ipsum dolor sit amet, consectetur elit
          </Typography>
        </Box>

        <Slider {...settings}>
          {clientdetails.map((client, index) => (
            <ClientBlock
              key={index}
              img={client.img}
              text={client.text}
              name={client.name}
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
    left: 1175px;
  }
  .slick-prev {
    left: -50px;
  }
  .slick-list {
    margin: 0 -15px;
  }
  .slick-slide > div {
    padding: 0 15px;
  }
`;

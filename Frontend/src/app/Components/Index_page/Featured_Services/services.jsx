import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Box, Container, Typography } from "@mui/material";
import styled from "styled-components";
import Block from "./serviceblock";
import { serviceBlock } from "@/utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Services({ initialData }) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1336/api/services?populate=*"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const newData = await response.json();
        console.log(newData.data);
        setData(newData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Service>
      <Container>
        <Box className="container">
          <Box className="main-heading">
            <Typography className="heading">Featured Services</Typography>
            <Typography className="subheading">
              Explore the greatest services. You won't be disappointed.
            </Typography>
          </Box>

          <Slider {...settings}>
            {data?.map((service, index) => (
              <Block
                key={index}
                category={service.category}
                rating={service.rating}
                imageUrl={service?.attributes?.image?.data?.attributes?.name}
                title={service.attributes.name}
                location={service.attributes.location}
                price={service.attributes.price}
              />
            ))}
          </Slider>
        </Box>
      </Container>
    </Service>
  );
}

const Service = styled(Box)`
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

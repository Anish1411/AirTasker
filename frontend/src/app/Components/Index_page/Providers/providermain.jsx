"use client";
import { Box, Container, Typography } from "@mui/material";
import styled from "styled-components";
import ProviderBlock from "./providerblock";

export default function Provider({details}) {
  const token = process.env.NEXT_PUBLIC_STRAPI_URL;
  return (
    <Providers>
      <Container>
        <Box className="container">
          <Box className="main-heading">
            <Typography className="heading">{details.title}</Typography>
            <Typography className="subheading">{details.subtitle}</Typography>
          </Box>

          <Box className="block">
            {details.providers.data.map((provider, index) => (
              <ProviderBlock
                key={index}
                img={`${token}${provider.attributes.providerImage.data.attributes.url}`}
                name={provider.attributes.name}
                email={provider.attributes.email}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Providers>
  );
}

const Providers = styled(Box)`
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
  .main-heading {
    padding-bottom: 60px;
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
  .block {
    column-gap: 30px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    align-items: center;
    @media (max-width: 991px) {
      grid-template-columns: auto auto;
    }
    @media (max-width: 767px) {
      grid-template-columns: auto;
    }
    @media (max-width: 414px) {
      grid-template-columns: auto;
    }
  }
`;

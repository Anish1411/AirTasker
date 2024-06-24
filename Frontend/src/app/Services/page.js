"use client";
import { useState, useEffect } from "react";
import { Box, Typography, Breadcrumbs, Link as MUILink } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import ServiceCards from "../Components/Service_page/service_card";

export default function Service() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:1336/api/service-page?populate=*`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const newData = await response.json();
        setData(newData.data);
        console.log(newData.data.attributes.ArticlesPerPage);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledServiceContainer>
      <StyledTypography variant="h3" gutterBottom>
        {data && data.attributes?.Header?.title}
      </StyledTypography>
      <BreadcrumbContainer>
        <Breadcrumbs aria-label="breadcrumb" separator="•">
          <Link href="/" passHref>
            Home
          </Link>
          <Typography color="textPrimary">
            {data && data.attributes?.Header?.title}
          </Typography>
        </Breadcrumbs>
      </BreadcrumbContainer>
      <ServiceCards articlesPerPage={data?.attributes?.ArticlesPerPage} />
    </StyledServiceContainer>
  );
}

const StyledServiceContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  .MuiBreadcrumbs-separator {
    color: blue;
    font-size: 30px;
  }
`;

const BreadcrumbContainer = styled(Box)`
  margin-bottom: 80px;
`;

const StyledTypography = styled(Typography)`
  font-weight: bold;
  color: black;
  margin: 20px 0;
`;

const StyledLink = styled(MUILink)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

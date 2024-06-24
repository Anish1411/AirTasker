"use client";
import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import ServiceCard from "../../Index_page//Featured_Services/serviceblock";
import React from "react";

const RelatedService = ({ relatedData }) => {
  console.log(relatedData, "related service");
  const [pageIndex, setPageIndex] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  return (
    <ServiceCardsContainer>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#333", marginTop: "30px" }}
      >
        Related Services
      </Typography>
      <ServiceGrid>
        {relatedData?.services?.data?.map((service) => (
          <ServiceContainer key={service.id}>
            <Link href={`Services/${service?.attributes?.slug}`}>
              <ServiceCard
                category={service?.attributes?.category?.data?.attributes?.name}
                imageUrl={service?.attributes?.image?.data?.attributes?.name}
                title={service.attributes.name}
                location={service?.attributes?.place?.data?.attributes?.title}
                price={service.attributes.price}
              />
            </Link>
          </ServiceContainer>
        ))}
      </ServiceGrid>
      {/* <PaginationContainer>
        <Button
          variant="contained"
          color="primary"
          disabled={pageIndex === 1}
          //   onClick={handlePreviousClick}
        >
          Previous
        </Button>
        {Array.from({ length: pageCount }, (_, index) => (
          <PageButton
            key={index + 1}
            // onClick={() => handlePageClick(index + 1)}
            selected={pageIndex === index + 1}
          >
            {index + 1}
          </PageButton>
        ))}
        <Button
          variant="contained"
          color="primary"
          disabled={pageIndex === pageCount}
          //   onClick={handleNextClick}
        >
          Next
        </Button>
      </PaginationContainer> */}
    </ServiceCardsContainer>
  );
};

const ServiceCardsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const ServiceGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
`;

const ServiceContainer = styled(Box)`
  padding: 20px;
`;

const PaginationContainer = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-top: 20px;
`;

const PageButton = styled(Button)`
  ${({ selected }) =>
    selected
      ? {
          backgroundColor: "blue",
          color: "white",
        }
      : {
          backgroundColor: "white",
          color: "black",
        }};
`;

export default RelatedService;

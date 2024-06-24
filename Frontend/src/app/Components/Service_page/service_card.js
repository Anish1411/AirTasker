"use client";
import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import ServiceCard from "../Index_page/Featured_Services/serviceblock";

export default function ServiceCards({ articlesPerPage }) {
  console.log(articlesPerPage, "ServiceCards");
  const [pageIndex, setPageIndex] = useState(1);
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:1336/api/services?pagination[page]=${pageIndex}&pagination[pageSize]=${articlesPerPage}&populate=image&populate=category&populate=place`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const newData = await response.json();
        setData(newData.data);
        setPageCount(newData.meta.pagination.pageCount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pageIndex, articlesPerPage]);

  const handlePageClick = (page) => {
    setPageIndex(page);
  };

  const handlePreviousClick = () => {
    setPageIndex(pageIndex - 1);
  };

  const handleNextClick = () => {
    setPageIndex(pageIndex + 1);
  };

  return (
    <ServiceCardsContainer>
      <ServiceGrid>
        {data.map((service) => (
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
      <PaginationContainer>
        <Button
          variant="contained"
          color="primary"
          disabled={pageIndex === 1}
          onClick={handlePreviousClick}
        >
          Previous
        </Button>
        {Array.from({ length: pageCount }, (_, index) => (
          <PageButton
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            selected={pageIndex === index + 1}
          >
            {index + 1}
          </PageButton>
        ))}
        <Button
          variant="contained"
          color="primary"
          disabled={pageIndex === pageCount}
          onClick={handleNextClick}
        >
          Next
        </Button>
      </PaginationContainer>
    </ServiceCardsContainer>
  );
}

const ServiceCardsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ServiceGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
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

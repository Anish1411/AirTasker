"use client";
import { blogdetails } from "@/utils";
import { Box, Container, Typography } from "@mui/material";
import styled from "styled-components";
import BlogBlock from "./blogblock";
export default function Blog() {
  return (
    <Blogs>
      <Container>
        <Box className="container grid_container">
          <Box className="blogdetails">
            <Typography className="blogheading">Latest Blog</Typography>
            <Typography className="blogtext">
              Lorem ipsum dolor sit amet, consectetur elit
            </Typography>
          </Box>

          <Box className="card">
            {blogdetails.map((blog, index) => (
              <BlogBlock
                key={index}
                img={blog.img}
                profile={blog.profile}
                profilename={blog.profilename}
                date={blog.date}
                text={blog.text}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Blogs>
  );
}

const Blogs = styled(Box)`
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
  .blogdetails {
    padding-bottom: 50px;
    text-align: center;
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
  .blogheading {
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
  .blogtext {
    margin: 0 0 15px;
    font-weight: 550;
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
  .grid_container > .card {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 30px;
    @media (max-width: 991px) {
      grid-template-columns: auto auto auto;
    }
    @media (max-width: 767px) {
      grid-template-columns: auto;
    }
    @media (max-width: 414px) {
      grid-template-columns: auto;
    }
  }
`;

"use client";
import { Box, Container, Typography } from "@mui/material";
import styled from "styled-components";
import BlogBlock from "./blogblock";
import { format } from 'date-fns';
export default function Blog({details}) {
  const token = process.env.NEXT_PUBLIC_STRAPI_URL;
  return (
    <Blogs>
      <Container>
        <Box className="container grid_container">
          <Box className="blogdetails">
            <Typography className="blogheading">{details.title}</Typography>
            <Typography className="blogtext">
              {details.subtitle}
            </Typography>
          </Box>

          <Box className="card">
            {details.blogs.data.map((blog, index) => (
              <BlogBlock
                key={index}
                img={`${token}${blog.attributes.image.data.attributes.url}`}
                profile={`${token}${blog.attributes.blogerProfile.data.attributes.url}`}
                profilename={blog.attributes.BlogBy}
                date={format(new Date(blog.attributes.date), 'MMMM dd, yyyy')}
                text={blog.attributes.heading}
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

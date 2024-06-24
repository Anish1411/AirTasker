"use client";
import { Box, Container, Typography } from "@mui/material";
import styled from "styled-components";
import { format } from "date-fns";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FetchAPI } from "@/utils/fetchApi";
import MainBlogBlock from "../Components/blog_page/mainblogpageBlock";

export default function BlogPage() {
  const [sections, setSections] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const path = "/blog-page";
        const urlobject = {
          pagination: {
            page: 1,
            pageSize: 6,
          },
          populate: {
            blogs: {
              populate: {
                image: {
                  fields: ["url"],
                },
                blogerProfile: {
                  fields: ["url"],
                },
                categories: {
                  populate: true,
                },
              },
            },
          },
        };

        const response = await FetchAPI(path, urlobject, {});
        const data = response.data.attributes;
        setSections(data);
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchData();
  }, []);

  const token = process.env.NEXT_PUBLIC_STRAPI_URL;
  return (
    <Blogs>
      <Box className="bannerBlock innerBanner">
        <Container>
          <Box>
            <Typography className="heading">{sections.title}</Typography>
            <Box className="breadcrumb">
              <Typography className="title first">
                <Link href="#" className="bannerlink">
                  Home
                </Link>
              </Typography>
              <Typography className="title second">{sections.title}</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box className="container grid_container">
          <Box className="card">
            {sections?.blogs?.data?.map((blog, index) => {
              return (
                <MainBlogBlock
                  key={index}
                  img={`${token}${blog.attributes.image.data.attributes.url}`}
                  profile={`${token}${blog.attributes.blogerProfile.data.attributes.url}`}
                  profilename={blog.attributes.BlogBy}
                  date={format(new Date(blog.attributes.date), "MMMM dd, yyyy")}
                  text={blog.attributes.heading}
                  category={
                    blog.attributes.categories.data[0]?.attributes?.title
                  }
                  description={blog.attributes.description}
                  id={blog.attributes.Slug}
                />
              );
            })}
          </Box>
        </Box>
      </Container>
    </Blogs>
  );
}

const Blogs = styled(Box)`
  .heading {
    font-size: 50px;
    font-weight: 600;
    margin: 0 0 5px;
    @media (max-width: 991px) {
      font-size: 35px;
    }
    @media (max-width: 767px) {
      font-size: 26px;
    }
    @media (max-width: 414px) {
      font-size: 20px;
    }
  }
  .container {
    padding-top: 60px;
    padding-bottom: 60px;
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
  .innerBanner {
    background: #f7f7ff url(/assets/innerBanner.png) no-repeat center center;
    text-align: center;
    position: relative;
    padding: 50px 0;
    min-height: auto;
  }
  .bannerBlock.innerBanner:before {
    display: none;
  }
  .breadcrumb {
    padding: 0;
    background-color: transparent;
    border-radius: 0;
    justify-content: center;
    margin: 0;
    display: flex;
  }
  .breadcrumb .title {
    font-weight: 400;
    color: #74788d;
    line-height: 1.2;
    font-size: 17px;
  }
  .bannerlink {
    color: #28283c;
    text-decoration: none;
  }
  .breadcrumb .title:before {
    content: "";
    width: 6px;
    height: 6px;
    background: #4c40ed;
    border-radius: 50px;
    margin: -2px 15px 0;
    padding: 0;
    display: inline-block;
    vertical-align: middle;
    float: none;
  }
  .breadcrumb .title.first:before {
    display: none;
  }
`;

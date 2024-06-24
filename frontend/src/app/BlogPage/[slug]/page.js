"use client";
import {
  Box,
  Container,
  Typography,
  FormControl,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import Link from "next/link";
import styled from "styled-components";
import { useParams } from "next/navigation";
import { LuSend } from "react-icons/lu";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FetchAPI } from "@/utils/fetchApi";
import { FaRegCalendarMinus } from "react-icons/fa";

export default function BlogDetail() {
  const router = useRouter();
  const [sections, setSections] = useState({});
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const path = "/blogs";
        const urlobject = {
          filters: {
            Slug: {
              $eq: params.slug,
            },
          },
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
        };

        const response = await FetchAPI(path, urlobject, {});
        const data = await response.data[0]?.attributes;
        setSections(data);
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchData();
  }, []);

  console.log("DatatDatatDatatDatat", sections);
  const dateObject = new Date(sections.date);
  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedDateArchives = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
  const token = process.env.NEXT_PUBLIC_STRAPI_URL;
  return (
    <Blogs>
      <Box className="bannerBlock innerBanner">
        <Container>
          <Box>
            <Typography className="heading">Blog</Typography>
            <Box className="breadcrumb">
              <Typography className="title first">
                <Link href="#" className="bannerlink">
                  Home
                </Link>
              </Typography>
              <Typography className="title second">
                {sections.heading}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box className="container">
          <Box className="left">
            <Box className="categorylink">
              <Box className="tagbox">
                {sections.categories?.data?.map((category, index) => (
                  <Link key={index} href="#" className="category">
                    {category.attributes.title}
                  </Link>
                ))}
              </Box>
            </Box>
            <Box>
              <Typography variant="h3" className="text">
                {sections.heading}
              </Typography>
            </Box>
            <Box className="card-details">
              <Box className="profile">
                <img
                  src={`${token}${sections?.blogerProfile?.data?.attributes?.url}`}
                  alt="profile"
                />
                <Typography className="name">{sections.BlogBy}</Typography>
              </Box>
              <Box>
                <Typography className="date">
                  <FaRegCalendarMinus
                    color="#4c40ed"
                    size="0.9rem"
                    style={{ marginRight: "10px", fontWeight: "400" }}
                  />
                  {formattedDate}
                </Typography>
              </Box>
            </Box>
            <Box className="blogimg">
              <img
                src={`${token}${sections?.image?.data?.attributes?.url}`}
                alt="profile"
              />
            </Box>
            <Typography className="description">
              {sections.completeDescription}
            </Typography>
            <Typography className="tags">Tags</Typography>
            <Box className="categorylink">
              <Box className="tagbox">
                {sections.categories?.data?.map((category, index) => (
                  <Link key={index} href="#" className="category">
                    {category.attributes.title}
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
          <Box className="right">
            <Box className="emailBox">
              <FormControl
                sx={{ m: 1, width: "25ch" }}
                variant="outlined"
                className="email-box"
              >
                <OutlinedInput
                  placeholder="Enter your email"
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end">
                      <LuSend size="1.3rem" cursor="pointer" />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Box className="categoryBlock">
              <Typography className="tags">Blog Categories</Typography>
              <Box className="categorylink">
                <Box className="categories">
                  {sections.categories?.data?.map((category, index) => (
                    <Link key={index} href="#" className="Blogcategory">
                      {category.attributes.title}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box className="categoryBlock">
              <Typography className="tags">Latest News</Typography>
              <Box></Box>
            </Box>
            <Box className="categoryBlock">
              <Typography className="tags">Tags</Typography>
              <Box className="categorylink">
                <Box className="tagbox">
                  {sections.categories?.data?.map((category, index) => (
                    <Link key={index} href="#" className="categorytags">
                      {category.attributes.title}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box className="categoryBlock">
              <Typography className="tags">Archives</Typography>
              <Box className="categorylink">
                <Typography className="archivetext">
                  {formattedDateArchives}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Blogs>
  );
}
const Blogs = styled(Box)`
  .tagbox {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
  .categories {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
  }
  .archivetext {
    color: #74788d;
    font-size: 16px;
  }
  .Blogcategory {
    text-decoration: none;
    color: #74788d;
    font-size: 16px;
  }
  .categorytags {
    text-decoration: none;
    color: #74788d;
    padding: 5px 10px;
    font-size: 16px;
    background-color: white;
    border-radius: 5px;
  }
  .categoryBlock {
    background-color: #f7f7ff;
    border-radius: 8px;
    padding: 25px;
    position: relative;
    margin-bottom: 24px;
  }
  .email-box {
    width: 100%;
    margin: 0 !important;
    background-color: white;
  }
  .emailBox {
    background-color: #f7f7ff;
    border-radius: 8px;
    padding: 25px;
    position: relative;
    margin-bottom: 24px;
  }
  .right {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    padding-left: 15px;
  }
  .tags {
    font-size: 26px;
    font-weight: 600;
    @media (max-width: 991px) {
      font-size: 22px;
      margin: 10px 0;
    }
    @media (max-width: 767px) {
      font-size: 20px;
      margin: 8px 0;
    }
    @media (max-width: 400px) {
      font-size: 18px;
      margin: 6px 0;
    }
  }
  .description {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #74788d;
    margin: 20px 0;
    @media (max-width: 991px) {
      font-size: 16px;
      margin: 10px 0;
    }
    @media (max-width: 767px) {
      font-size: 14px;
      margin: 8px 0;
    }
    @media (max-width: 400px) {
      font-size: 13px;
      margin: 6px 0;
    }
  }
  .blogimg {
    margin: 20px 0;
    margin-bottom: 20px;
  }
  .blogimg img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .card-details {
    align-items: center;
    display: flex;
  }
  .profile {
    display: flex;
    margin-right: 25px;
    @media (max-width: 991px) {
      margin-right: 20px;
    }
    @media (max-width: 767px) {
      margin-right: 10px;
    }
    @media (max-width: 414px) {
      margin-right: 10px;
    }
    align-items: center;
  }
  .profile img {
    border-radius: 25px;
    margin-right: 10px;
    width: 32px;
    height: 32px;
    @media (max-width: 991px) {
      height: 15px;
      width: 15px;
      margin-right: 7px;
    }
    @media (max-width: 767px) {
      height: 15px;
      width: 15px;
      margin-right: 7px;
    }
    @media (max-width: 414px) {
      height: 15px;
      width: 15px;
      margin-right: 7px;
    }
  }
  .name {
    color: #74788d;
    @media (max-width: 991px) {
      font-size: 14px;
    }
    @media (max-width: 767px) {
      font-size: 13px;
    }
    @media (max-width: 414px) {
      font-size: 12px;
    }
  }
  .date {
    color: #74788d;
    display: flex;
    align-content: center;
    align-items: center;
    @media (max-width: 991px) {
      font-size: 14px;
    }
    @media (max-width: 767px) {
      font-size: 13px;
    }
    @media (max-width: 414px) {
      font-size: 12px;
    }
  }
  .text {
    font-size: 36px;
    font-weight: 600;
    color: #28283c;
    margin: 15px 0;
    @media (max-width: 991px) {
      font-size: 20px;
      margin: 10px 0;
    }
    @media (max-width: 767px) {
      font-size: 18px;
      margin: 8px 0;
    }
    @media (max-width: 400px) {
      font-size: 16px;
      margin: 6px 0;
    }
  }
  .text:hover {
    color: #4c40ed;
  }
  .left {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
    padding-right: 15px;
  }
  .categorylink {
    margin: 16px 0;
  }
  .category {
    text-decoration: none;
    color: #4c40ed;
    padding: 5px 10px;
    font-size: 14px;
    background-color: #f7f7ff;
    border-radius: 5px;
  }
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
    display: flex;
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

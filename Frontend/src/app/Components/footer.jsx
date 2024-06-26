"use client";
import * as React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import {
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
  ListItem,
  Typography,
  Container,
} from "@mui/material";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { TEXT1, TEXT2, quickLinks, contactus } from "@/utils";
import * as IMAGES from "@/utils/IMAGES";

export default function Footer() {
  return (
    <Box>
      <Foot>
        <Container>
          <Box className="footer">
            <Box className="footeritems logo">
              <img src={IMAGES.LOGO} height="40px" width="200px" alt="img" />
              <p className="text1">{TEXT1}</p>
              <p className="text2">{TEXT2}</p>
            </Box>

            <Box className="footeritems links">
              <h2 className="heading">Quick Links </h2>
              {quickLinks.map((links) => (
                <ListItem key={links}>
                  <Link href="#" className="quick-links">
                    <Typography variant="body1" className="contact-text">
                      {links}
                    </Typography>
                  </Link>
                </ListItem>
              ))}
            </Box>

            <Box className="footeritems contact">
              <h2 className="heading">Contact Us </h2>
              {contactus.map((contact, index) => (
                <ListItem key={index}>
                  <Link href="#" className="contact-links">
                    <div className="contact-icons">{contact.icon}</div>
                    <Typography variant="body1" className="contact-text">
                      {contact.title}
                    </Typography>
                  </Link>
                </ListItem>
              ))}
            </Box>

            <Box className="  follow-us">
              <h2 className="heading">Follow Us </h2>
              <Box className="follow-all-logos">
                <FaFacebookF className="follow-logo" size="2.5rem " />
                <FaTwitter className="follow-logo" size="2.5rem " />
                <FaInstagram className="follow-logo" size="2.5rem " />
                <FaLinkedinIn className="follow-logo" size="2.5rem " />
              </Box>

              <h2 className="heading">Newsletter Signup</h2>
              <FormControl
                sx={{ m: 1, width: "25ch" }}
                variant="outlined"
                className="newsletter-box"
              >
                <OutlinedInput
                  placeholder="Enter Your email"
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end">
                      <LuSend size="1.3rem" cursor="pointer" />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
          </Box>
        </Container>
      </Foot>

      <Terms>
        <Container>
          <Box className="terms-and-condition">
            <Typography className="conditions">
              © 2024 Truelysell. All rights reserved.
            </Typography>
            <Box>
              <Link href="#" className="terms">
                Terms and Conditions
              </Link>
              <Link href="#" className="privacy">
                Privacy
              </Link>
            </Box>
          </Box>
        </Container>
      </Terms>
    </Box>
  );
}

const Terms = styled(Box)`
  border-top: 1px solid #f5f5f5;
  padding: 30px 0px;
  @media (max-width: 767px) {
    padding: 10px 0px;
    text-align: center;
  }
  .terms-and-condition {
    color: #74788d;
    display: flex;
    justify-content: space-between;
    @media (max-width: 767px) {
      display: block;
    }
  }
  .terms {
    text-decoration: none;
    color: #74788d;
    padding-right: 20px;
    @media (max-width: 991px) {
      font-size: 14px;
    }
  }
  .conditions {
    @media (max-width: 991px) {
      font-size: 14px;
    }
    @media (max-width: 767px) {
      font-size: 14px;
      padding-bottom: 10px;
    }
  }
  .terms:hover {
    color: #4c40ed;
  }
  .privacy:hover {
    color: #4c40ed;
  }
  .privacy {
    text-decoration: none;
    color: #74788d;
    @media (max-width: 991px) {
      font-size: 14px;
    }
  }
`;

const Foot = styled(Box)`
  border-top: 1px solid #f5f5f5;
  .footer {
    display: flex;
    width: 100%;
    padding-top: 60px;
    padding-bottom: 60px;
    @media (max-width: 767px) {
      display: block;
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }
  .text1 {
    padding-bottom: 20px;
    padding-top: 20px;
    color: #74788d;
    max-width: 300px;
    @media (max-width: 991px) {
      font-size: 14px;
    }
    @media (max-width: 767px) {
      max-width: 100%;
      font-size: 14px;
    }
  }
  .text2 {
    padding-bottom: 20px;
    color: #74788d;
    max-width: 300px;
    @media (max-width: 991px) {
      font-size: 14px;
    }
    @media (max-width: 767px) {
      max-width: 100%;
      font-size: 14px;
    }
  }
  .follow-us {
    padding-top: 20px;
    width: 25.5%;
    @media (max-width: 767px) {
      width: 100%;
    }
  }
  .contact {
    padding-top: 20px;
    width: 24.5%;
    @media (max-width: 767px) {
      width: 100%;
    }
  }
  .links {
    padding-top: 20px;
    width: 17%;
    @media (max-width: 767px) {
      width: 100%;
    }
  }
  .logo {
    width: 33%;
    @media (max-width: 767px) {
      width: 100%;
    }
  }
  .heading {
    font-size: 20px;
    align-items: left;
    padding-bottom: 15px;
    @media (max-width: 991px) {
      font-size: 16px;
    }
    @media (max-width: 767px) {
      font-size: 16px;
      padding-bottom: 10px;
    }
  }
  .contact-links {
    text-decoration: none;
    color: #74788d;
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .contact-text:hover,
  .quick-links:hover {
    color: #4c40ed;
  }
  .quick-links {
    text-decoration: none;
    color: #74788d;
    display: flex;
    justify-content: flex-start;
  }
  .links li,
  .contact li {
    padding-left: 0 !important;
  }
  .follow-logo {
    border-radius: 50%;
    color: #74788d;
    background-color: #eaeaea;
    padding: 8px;
    margin-right: 10px;
  }
  .follow-logo:hover {
    background-color: #4c40ed;
    color: white;
    cursor: pointer;
  }
  .follow-all-logos {
    padding-top: 10px;
    padding-bottom: 30px;
  }
  .contact-icons {
    display: flex;
  }
  .contact-text {
    @media (max-width: 991px) {
      font-size: 14px;
    }
  }
  .newsletter-box {
    width: 100%;
    margin: 0 !important;
  }
`;

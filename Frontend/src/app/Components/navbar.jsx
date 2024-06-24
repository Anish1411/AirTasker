"use client";
import * as React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { IoIosMenu } from "react-icons/io";
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { FaRegUserCircle } from "react-icons/fa";
import { pages } from "@/utils";
import * as IMAGES from "@/utils/IMAGES";

export default function Navbar() {
  return (
    <Nav>
      <Container>
        <Box className="navigation">
          <Box>
            <img
              src={IMAGES.LOGO}
              height="40px"
              width="200px"
              alt="img"
              className="mainlogo"
            />
          </Box>

          <List className="navitems">
            {pages.map((page) => (
              <ListItem key={page} className="navitem-items">
                <Link href={`/${page}`} underline="none" className="link">
                  <Typography variant="body1" className="navitems-name">
                    {page}
                  </Typography>
                </Link>
              </ListItem>
            ))}
          </List>
          <Box className="loginandregister">
            <Button className="register" size="medium">
              Register
            </Button>
            <Button className="login" variant="contained" size="medium">
              <FaRegUserCircle className="user" />
              Login
            </Button>
          </Box>

          <Box className="menulogo">
            <IoIosMenu size="2.5rem" />
          </Box>
        </Box>

        <Box className="navitems-responsive">
          {pages.map((page) => (
            <Box className="items">
              <Link
                key={page}
                href="#"
                underline="none"
                className="items-responsive"
              >
                <Typography className="item-name">{page}</Typography>
              </Link>
            </Box>
          ))}

          <Box className="items">
            <Typography className="item-name">Register</Typography>
          </Box>
          <Box className="items">
            <Typography className="item-name">Login</Typography>
          </Box>
        </Box>
      </Container>
    </Nav>
  );
}

const Nav = styled(Box)`
  .menulogo {
    display: none;
    @media (max-width: 991px) {
      display: block;
      text-align: center;
    }
  }
  .navitems-responsive {
    display: none;
    text-align: center;
    text-align: center;
    position: fixed;
    top: 64px;
    left: 0;
    width: 100%;
    z-index: 9999;
    padding-top: 30px;
    overflow-y: auto;
    background-color: white;
    box-shadow: inset 0px 30px 30px rgba(202, 202, 202, 0.2);
    height: calc(100% - 60px) !important;
  }
  .items {
    border-bottom: 1px solid #e1e2e5;
  }
  .item-name {
    font-size: 16px;
    text-transform: uppercase;
    padding: 15px 15px;
  }
  .items-responsive {
    color: black;
    text-decoration: none;
  }
  .navigation {
    display: flex !important;
    align-items: center;
    padding: 5px 0px;
    box-shadow: 0px 10px 40px rgba(202, 202, 202, 0.2);
    justify-content: space-between;
    background-color: white;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1001;
    width: 100%;
    @media (max-width: 991px) {
      padding: 15px 0;
    }

    .navitems {
      display: flex;
      margin-left: 25px;
      font-weight: bolder;
      @media (max-width: 991px) {
        display: none;
      }
    }
    .link :hover {
      color: #4c40ed;
    }
    .link {
      text-decoration: none;
      display: block;
      padding: 10px 0;
      color: #28283c;
    }
    .navitem-items {
      width: auto;
    }
    .navitems-name {
      font-weight: 700;
    }
    .loginandregister {
      display: flex;
      @media (max-width: 991px) {
        display: none;
      }
    }
    .login {
      background-color: #4c40ed;
      color: white;
      align-items: center;
      font-weight: bolder;
      font-size: 15px;
      border-radius: 6px;
      padding: 10px;
      text-transform: none;
    }
    .login:hover {
      background-color: #28283c;
    }
    .register {
      color: black;
      align-content: center;
      font-weight: bolder;
      padding: 10px;
      background-color: white;
      padding-right: 20px;
      font-size: 15px;
      text-transform: none;
    }
    .user {
      padding-right: 5px;
      align-items: center;
      font-size: x-large;
    }
  }
`;

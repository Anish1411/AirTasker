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

export default function Navbar({details}) {
  const token = process.env.NEXT_PUBLIC_STRAPI_URL;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const handlemenu = () => {
    setMenuOpen(!menuOpen);
  };
  console.log(details.NavItems)
  return (
    <Nav>
      <Container>
        <Box className="navigation">
          <Box>
            <img
              src={`${token}${details.navLogo.logoImg.data.attributes.url}`}
              height="40px"
              width="200px"
              alt="img"
              className="mainlogo"
            />
          </Box>

          <List className="navitems">
            {details.NavItems.map((page) => (
              <ListItem className="navitem-items">
                <Link key={page.id} href={page.href || "#"} underline="none" className="link">
                  <Typography variant="body1" className="navitems-name">
                    {page.label}
                  </Typography>
                </Link>
              </ListItem>
            ))}
          </List>
          <Box className="loginandregister">
            <Button className="register" size="medium">
              {details.Button[0].title}
            </Button>
            <Button className="login" variant="contained" size="medium">
              <FaRegUserCircle className="user" />
              {details.Button[1].title}
            </Button>
          </Box>

          <Box className="menulogo">
            <IoIosMenu size="2.5rem" color="#4c40ed" onClick={handlemenu} />
          </Box>
        </Box>

        {menuOpen && (
          <Box className="navitems-responsive">
            {details.NavItems.map((page) => (
              <Box className="items">
                <Link
                  key={page}
                  href="#"
                  underline="none"
                  className="items-responsive"
                >
                  <Typography className="item-name">{page.label}</Typography>
                </Link>
              </Box>
            ))}

            <Box className="items">
              <Typography className="item-name">{details.Button[0].title}</Typography>
            </Box>
            <Box className="items">
              <Typography className="item-name">{details.Button[1].title}</Typography>
            </Box>
          </Box>
        )}
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
    @media (max-width: 991px) {
      display: block;
    }
    
    text-align: center;
    position: fixed;
    top: 64px;
    left: 0;
    width: 100%;
    display: none ;
    z-index: 9999;
    padding-top: 30px;
    overflow-y: auto;
    margin-top: 10px;
    background-color: white;
    box-shadow: inset 0px 30px 30px rgba(202, 202, 202, 0.2);
    height: calc(100% - 70px) !important;
    /* transition: all 0.3s ease;-moz-transition: all 0.3s ease; */
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

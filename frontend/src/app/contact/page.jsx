"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Map from "../Components/Map";
import {
  Box,
  styled,
  Button,
  Typography,
  TextField,
  Grid,
  Link,
  TextareaAutosize,
  Container,
} from "@mui/material";
import CustomBreadcrumbs from "../Components/breadcrumbs";
import StrapiImage from "../image/strapiImage";
import { validateForm } from "@/utils/Validator";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [contactData, setContactData] = useState([]);
  const [formValues, setFormValues] = useState({});

  console.log(contactData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1336/api/contact-uses?populate[cards][populate][number][populate][image][fields][0]=url&populate[cards][populate][email][populate][image][fields][0]=url&populate[cards][populate][address][populate][image][fields][0]=url&populate[form_component][populate][image][fields][0]=url&populate[form_component][populate][input][populate]=true"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const newData = await response.json();
        newData?.data?.map((data) => {
          setContactData(data?.attributes);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    setValidationErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully", formData);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.Name) {
      errors.Name = "Name is required";
    }
    if (!data.email) {
      errors.email = "Email is required";
    }
    if (!data.phoneNo) {
      errors.phoneNo = "Phone number is required";
    }
    if (!data.message) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const ContactCard = ({ card }) => {
    return errors;
  };

  const myLoader = ({ src }) => {
    return `${API}/user/photo/${blog.postedBy.username}`;
  };

  return (
    <MainBox>
      <Box sx={{ flexGrow: 1 }}>
        <CustomBreadcrumbs pageTitle="Contact Us" currentPage="Contact Us" />
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {contactData?.cards?.map((card, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={12}
                className="contactCard"
              >
                <Box className="contactBox">
                  <div className="contact_child">
                    <StrapiImage
                      src={card?.number?.image?.data?.attributes?.url}
                      width={40}
                      height={40}
                      alt="Card Image"
                    />
                    <div className="contact_sub_child">
                      <Typography className="contactType" variant="h6">
                        {card?.number?.heading}
                      </Typography>
                      <Typography
                        style={{
                          textDecoration: "none",
                          color: "#74788d",
                          fontWeight: "400",
                        }}
                      >
                        {card?.number?.text1}
                      </Typography>
                      <Typography
                        style={{
                          textDecoration: "none",
                          color: "#74788d",
                          fontWeight: "400",
                        }}
                      >
                        {card?.number?.text2}
                      </Typography>
                    </div>
                  </div>
                  <div className="contact_child">
                    <StrapiImage
                      loader={() => src}
                      src={card?.email?.image?.data?.attributes?.url}
                      width={40}
                      height={40}
                      alt="Card Image"
                    />
                    <div className="contact_sub_child">
                      <Typography className="contactType" variant="h6">
                        {card?.email?.heading}
                      </Typography>
                      <Typography
                        style={{
                          textDecoration: "none",
                          color: "#74788d",
                          fontWeight: "400",
                        }}
                      >
                        {card?.email?.text1}
                      </Typography>
                      <Typography
                        style={{
                          textDecoration: "none",
                          color: "#74788d",
                          fontWeight: "400",
                        }}
                      >
                        {card?.email?.text2}
                      </Typography>
                    </div>
                  </div>
                  <div className="contact_child">
                    <StrapiImage
                      src={card?.address?.image?.data?.attributes?.url}
                      width={40}
                      height={40}
                      alt="Card Image"
                    />
                    <div className="contact_sub_child">
                      <Typography className="contactType" variant="h6">
                        {card?.address?.heading}
                      </Typography>
                      <Typography
                        style={{
                          textDecoration: "none",
                          color: "#74788d",
                          fontWeight: "400",
                        }}
                      >
                        {card?.address?.text1}
                      </Typography>
                      <Typography
                        style={{
                          textDecoration: "none",
                          color: "#74788d",
                          fontWeight: "400",
                        }}
                      >
                        {card?.address?.text2}
                      </Typography>
                    </div>
                  </div>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={2} justifyContent="center" sx={{ py: 10 }}>
            {contactData?.form_component?.map((card, index) => (
              <>
                <Grid key={index} item xs={12} md={6}>
                  <StrapiImage
                    src={card?.image?.data?.attributes?.url}
                    width={500}
                    height={500}
                    alt="Card Image"
                  />
                  `
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box>
                    <Typography
                      style={{
                        fontSize: "40px",
                        color: "#212529",
                        fontWeight: "600",
                      }}
                      variant="h2"
                    >
                      {" "}
                      {card?.heading}
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "16px",
                        color: "#74788D",
                        fontWeight: "600",
                        marginTop: "15px",
                      }}
                    >
                      {card?.subHeading}
                    </Typography>
                  </Box>
                  <Grid
                    container
                    justifyContent="center"
                    className="Form"
                    sx={{ mt: "40px" }}
                  >
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        {card?.input?.map((input, index) => (
                          <Grid item xs={12} sm={input?.grid} key={index}>
                            <Typography className="TypoFirstName">
                              {input.label}
                            </Typography>
                            <TextField
                              autoComplete="off"
                              fullWidth
                              margin="normal"
                              type={input.type || "text"}
                              name={input.label}
                              value={formValues[input.label] || ""}
                              error={!!validationErrors[input.label]}
                              helperText={validationErrors[input.label]}
                              onChange={handleInputChange}
                              className="formInput"
                              placeholder={input.placeholder}
                              multiline={input.label === "Message"}
                              rows={input.label === "Message" ? 3 : 1}
                            />
                          </Grid>
                        ))}

                        <Grid item xs={12} sm={4}>
                          <Button
                            type="submit"
                            variant="contained"
                            e
                            color="primary"
                            fullWidth
                            className="SubmitButton"
                            sx={{ mt: 2 }}
                          >
                            Send Message
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
              </>
            ))}
          </Grid>
        </Container>
      </Box>
      <Map />
    </MainBox>
  );
};

export default ContactPage;

const MainBox = styled(Grid)`
  max-width: 100vw;
  .contactCardParent {
    padding-top: 60px;
  }

  .contactInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
  }

  .contactType {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 20px;
    color: #28283c;
    margin: 0 0 8px;
  }

  .parentBox {
    width: 100%;
    background-color: #fff;
    padding: 13px;
  }

  .contactBox {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .contact_child {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    border: 1px solid #f5f5f5;
    border-radius: 10px;
  }

  .contact_sub_child {
    margin-left: 2rem;
    display: flex;
    align-items: start;
    flex-direction: column;
  }

  .css-mhc70k-MuiGrid-root {
    margin: 5rem 0 5rem 0;
  }

  .iconTagcard {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #f7f7ff;
    margin-right: 16px;
  }

  .img-Content {
    padding: 80px 16px;
  }

  .formInput .MuiTextField-root {
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: #74788d;
    background: #fff;
    border-radius: 6px;
    border: 1px solid #dfdfdf;
    outline: none;
  }

  .SubmitButton {
    text-align: center;
    padding: 0px 15px;
    background-color: #4c40ed;
    border: solid 1px #4c40ed;
    border-radius: 6px;
    height: 46px;
    line-height: 46px;
    color: #fff;
    outline: none;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 500;
    display: inline-block;
    text-transform: none;
  }
`;

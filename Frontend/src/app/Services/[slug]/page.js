"use client";
import { useState, useEffect } from "react";
import { Container, Typography, Box, Button, Breadcrumbs } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import StrapiImage from "@/app/Components/Images/strapiImage";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import RelatedService from "@/app/Components/Service_page/Related_Services/relatedService";
import Form from "@/app/Components/Service_page/Form_Component/Form";
import Timings from "@/app/Components/Service_page/Service_Availability/timings";

const CategoryTag = styled(Button)`
  background-color: white;
  color: blue;
  margin: 4px;
  &:hover {
    background-color: blue;
    color: white;
  }
`;

const ServiceDetail = ({ params }) => {
  const [data, setData] = useState(null);
  const { slug } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:1336/api/services/?filters[slug][$eq]=${slug}&populate[image][fields][0]=url&populate[image][fields][1]=name&populate[blocks][populate][services][populate][image][fields][0]=url&populate[blocks][populate][services][populate][image][fields][1]=name&populate[blocks][populate][services][populate][category][populate]=true&populate[blocks][populate][services][populate][place][populate]=true&populate[blocks][populate][service_time][populate]=true&populate[blocks][populate][form][populate]=true&populate[provider][populate][Provider_Image][fields][0]=url&populate[provider][populate][Provider_Image][fields][1]=name&populate[place][populate]=true&populate[video][populate]=true&populate[category][populate]=true`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const newData = await response.json();
        setData(newData.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [slug]);

  if (!data) {
    return <Typography variant="h6">Service not found</Typography>;
  }

  const formComponent = data?.attributes?.blocks?.find(
    (block) => block.__component === "shared.reply-section"
  );
  const relatedServicesComponent = data?.attributes?.blocks?.find(
    (block) => block.__component === "sections.related-services"
  );
  const serviceAvailabilityComponent = data?.attributes?.blocks?.find(
    (block) => block.__component === "sections.service-availabilty"
  );

  return (
    <Container>
      <StyledServiceContainer>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", color: "#333" }}
        >
          Service Details
        </Typography>
        <BreadcrumbContainer>
          <Breadcrumbs aria-label="breadcrumb" separator="•">
            <Link href="/" passHref>
              Home
            </Link>
            <Typography color="textPrimary">
              {data && data.attributes.name}
            </Typography>
          </Breadcrumbs>
        </BreadcrumbContainer>
      </StyledServiceContainer>

      <Box display="grid" gridTemplateColumns="2fr 1fr" gap={4}>
        <Box>
          <Box mb={2}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#333" }}
            >
              {data.attributes.name}
            </Typography>
            <CategoryTag>
              {data.attributes.category.data.attributes.name}
            </CategoryTag>
          </Box>
          <FlexContainer>
            <Box sx={{ display: "flex", alignItems: "center", width: "50%" }}>
              <LocationOnIcon sx={{ marginRight: 1 }} />
              <Typography variant="body1" color="textSecondary">
                {data.attributes.place.data.attributes.title}
              </Typography>
            </Box>
            <Box sx={{ width: "50%", textAlign: "right" }}>
              <Button variant="contained" color="primary">
                Login To Favourite
              </Button>
            </Box>
          </FlexContainer>
          <Box mb={4} sx={{ borderRadius: "30px", overflow: "hidden" }}>
            <StrapiImage
              alt="Background"
              src={data.attributes.image.data.attributes.url}
              height={500}
              width={750}
            />
          </Box>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#333" }}
          >
            Service Details
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: "#333" }}>
            {data.attributes.description}
          </Typography>

          <Box mb={4}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#333" }}
            >
              Service Provider
            </Typography>
          </Box>

          <Box>
            <Box
              display="flex"
              justifyContent=" space-between"
              marginBottom="15px"
            >
              <Box display="flex" alignItems="center">
                <Box
                  sx={{
                    borderRadius: "50%",
                    overflow: "hidden",
                    marginRight: "5px",
                    height: "40px",
                    width: "40px",
                  }}
                >
                  <StrapiImage
                    alt="Provider"
                    src={
                      data.attributes.provider.data.attributes.Provider_Image
                        .data.attributes.url
                    }
                    height={100}
                    width={100}
                  />
                </Box>
                <Box ml={2}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Provider
                  </Typography>
                  <Typography variant="body1">
                    {data.attributes.provider.data.attributes.name}
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center">
                <EmailIcon fontSize="small" />
                <Box ml={2}>
                  <Typography variant="body1">Email</Typography>
                  <Typography variant="body1">
                    {data.attributes.provider.data.attributes.email}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <PhoneIcon />
                <Box ml={2}>
                  <Typography variant="body1">phone</Typography>
                  <Typography variant="body1">
                    {data.attributes.provider.data.attributes.phone}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box display="flex" justifyContent=" space-between">
              <Box display="flex" alignItems="center" ml={1}>
                <EventNoteIcon />
                <Box ml={2}>
                  <Typography variant="body1">Member Since </Typography>
                  <Typography variant="body1">
                    {data?.attributes?.provider?.data?.attributes?.Member_Since}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" mr={5}>
                <LocationOnIcon />
                <Box ml={2}>
                  <Typography variant="body1">Address </Typography>
                  <Typography variant="body1">
                    {data?.attributes?.provider?.data?.attributes?.address}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" mr={3}>
                <StarIcon />
                <Box ml={2}>
                  <Typography variant="body1">Reviews </Typography>
                  <Typography variant="body1">
                    {data?.attributes?.provider?.data?.attributes?.reviews}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box mt={5}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#333" }}
            >
              Video
            </Typography>
            <iframe
              width="800"
              height="450"
              src={data?.attributes?.video?.data?.attributes?.name}
              title="YouTube video"
            ></iframe>
          </Box>

          {formComponent && <Form data={formComponent} />}
          {relatedServicesComponent && (
            <RelatedService relatedData={relatedServicesComponent} />
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            top: "7rem",

            right: "3rem",
            width: "20rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              height: "auto",
              marginBottom: "30px",
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#333" }}
            >
              {data.attributes.price}
            </Typography>
            <Box
              sx={{
                borderRadius: "50%",
                overflow: "hidden",
                height: "50px",
                width: "50px",
              }}
            >
              <StrapiImage
                alt="Provider"
                src={
                  data.attributes.provider.data.attributes.Provider_Image.data
                    .attributes.url
                }
                height={100}
                width={100}
              />
            </Box>
          </Box>
          <Box>
            {serviceAvailabilityComponent && (
              <Timings schedule={serviceAvailabilityComponent} />
            )}
          </Box>
        </Box>
        {/* </Box> */}
      </Box>
    </Container>
  );
};

const StyledServiceContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  padding: 20px;
  .MuiBreadcrumbs-separator {
    color: blue;
    font-size: 30px;
  }
`;

const FlexContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const BreadcrumbContainer = styled(Box)`
  margin-bottom: 5px;
`;

export default ServiceDetail;

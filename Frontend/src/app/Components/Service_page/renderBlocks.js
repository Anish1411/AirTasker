import React from "react";
import Form from "./Form_Component/Form";
import RelatedService from "./Related_Services/relatedService";
import Timings from "./Service_Availability/timings";
import { Grid, Box } from "@mui/material";

export default function RenderBlocks({ data }) {
  return (
    <Grid container spacing={2}>
      {/* Left side with form and related services */}
      <Grid item xs={8}>
        {data?.map((block) => {
          switch (block.__component) {
            case "shared.reply-section":
              return (
                <Box mb={2} key={block.id}>
                  <Form data={block} />
                </Box>
              );

            case "sections.related-services":
              return (
                <Box mb={2} key={block.id}>
                  <RelatedService relatedData={block} />
                </Box>
              );

            default:
              return null;
          }
        })}
      </Grid>

      <Grid item xs={4}>
        <Box position="sticky" top={20}>
          {data?.map((block) => {
            if (block.__component === "sections.service-availabilty") {
              return <Timings key={block.id} schedule={block} />;
            }
            return null;
          })}
        </Box>
      </Grid>
    </Grid>
  );
}

"use client"
import { useEffect, useState } from "react";
import { FetchAPI } from "@/utils/fetchApi"; 

const useHomePageData = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const path = "/home-page";
        const urlobject = {
          populate: {
            sections: {
              populate: {
                categories: {
                  populate: {
                    mainImage: {
                      fields: ["url"],
                    },
                    svgImage: {
                      fields: ["url"],
                    },
                  },
                },
                services: {
                  populate: {
                     serviceInformation:{
                        populate: {
                           mainImage: {
                             fields: ["url"],
                           },
                           },
                       },
                  },
               },
               popularservices: {
                  populate: {
                     serviceInformation:{
                        populate: {
                           mainImage: {
                             fields: ["url"],
                           },
                           },
                       },
                  },
               },
                workingBlock: {
                  populate: {
                    svgImageLogo: {
                      fields: ["url"],
                    },
                  },
                },
                Button: {
                  populate: true,
                },
                providers: {
                  populate: {
                    providerImage: {
                      fields: ["url"],
                    },
                  },
                },
                client_says: {
                  populate: {
                    image: {
                      fields: ["url"],
                    },
                  },
                },
                blogs : {
                  populate: {
                    image: {
                      fields: ["url"],
                    },
                    blogerProfile: {
                      fields: ["url"],
                    },
                  },
                },
              },
            },
          },
        };

        const response = await FetchAPI(path, urlobject, {});
        const data = response.data.attributes.sections;
        // console.log("Fetched sections data:", data);
        setSections(data);
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchData();
  }, []);

  return sections;
};

export default useHomePageData;

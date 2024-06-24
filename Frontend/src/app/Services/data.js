import { useEffect, useState } from "react";
import { FetchAPI } from "../../utils/fetchApi";

const serviceDetails = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const path = "/Services";

        const urlObject = {
          populate: {
            image: {
              fields: ["name"],
            },
            blocks: {
              populate: {
                services: {
                  populate: {
                    image: {
                      fields: ["name"],
                    },
                  },
                },
                service_time: {
                  populate: true,
                },
                form: {
                  populate: true,
                },
              },
            },
            providers: {
              populate: {
                Provider_Image: {
                  fields: ["name"],
                },
              },
            },
            place: {
              populate: true,
            },
            video: {
              populate: true,
            },
            category: {
              populate: true,
            },
          },
        };

        const response = await FetchAPI(path, urlObject);
        const data = response.data.attributes.sections;
        console.log("Fetched sections data:", data);
        setSections(data);
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchData();
  }, []);

  return sections;
};

export default serviceDetails;

import { FetchAPI } from "@/utils/fetchApi";

export const useGlobalPageData = async () => {
  try {
    const path = "/global-page";
    const urlobject = {
      populate: {
        sections: {
          populate: {
            navLogo: {
              populate: {
                logoImg: {
                  fields: ["url"],
                },
              },
            },
            NavItems: {
              populate: true,
            },
            Button: {
              populate: true,
            },
            Description: {
              populate: {
                Logo: {
                  populate: {
                    logoImg: {
                      fields: ["url"],
                    },
                  },
                },
              },
            },
            ContactUs: {
              populate: {
                ContactUs: {
                  populate: {
                    contactLogo: {
                      fields: ["url"],
                    },
                  },
                },
              },
            },
            FollowUs: {
              populate: true,
            },
            quickLinks: {
              populate: {
                quickLinks: {
                  populate: true,
                },
              },
            },
            Newsletter: {
              populate: true,
            },
          },
        },
      },
    };

    const response = await FetchAPI(path, urlobject, {});
    const data = response.data.attributes.sections;

    return data;
  } catch (error) {
    console.error("Error fetching sections:", error);
  }

  return [];
};

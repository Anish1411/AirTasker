"use client";
import React from "react";
import Blog from "./Components/Index_page/Blogs/blogpage";
import Client from "./Components/Index_page/Client_says/clientpage";
import Categories from "./Components/Index_page/Featured_Categories/categories";
import Services from "./Components/Index_page/Featured_Services/services";
import Heading from "./Components/Index_page/Heading/heading";
import Howitwork from "./Components/Index_page/How_it_works/howitwork";
import PopularServices from "./Components/Index_page/Popular_Featured_Services/pservice";
import Provider from "./Components/Index_page/Providers/providermain";
import "./globals.css";
import useHomePageData from "@/utils/IndexSectionCompnents";

export default function Index() {
  const sections = useHomePageData();
  // console.log("sections?????????", sections);

  const getSectionComponent = (section, index) => {
    switch (section.__component) {
      case "home-page-sections.main-section":
        return <Heading key={index} details={section} />;
      case "home-page-sections.featured-categories":
        return <Categories key={index} details={section} />;
      case "home-page-sections.featured-services":
        return <Services key={index} details={section} />;
      case "home-page-sections.popular-service":
        return <PopularServices key={index} details={section} />;
      case "home-page-sections.how-it-work":
        return <Howitwork key={index} details={section} />;
      case "home-page-sections.top-providers":
        return <Provider key={index} details={section} />;
      case "home-page-sections.client-says":
        return <Client key={index} details={section} />;
      case "home-page-sections.blogs":
        return <Blog key={index} details={section} />;
      default:
        return null;
    }
  };

  return (
    <>
      {sections.map((section, index) => (
        getSectionComponent(section, index)
      ))}
    </>
  );
}

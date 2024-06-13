import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsCategoryCard extends Schema.Component {
  collectionName: 'components_elements_category_cards';
  info: {
    displayName: 'Category Card';
    description: '';
  };
  attributes: {
    bg_Img: Attribute.Media<'images'>;
    logo: Attribute.Media<'images'>;
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface ElementsFooter1 extends Schema.Component {
  collectionName: 'components_elements_footer_1s';
  info: {
    displayName: 'Footer-1';
  };
  attributes: {
    footer_logo: Attribute.Component<'layout.logo'>;
    description: Attribute.Text;
  };
}

export interface ElementsFooter2 extends Schema.Component {
  collectionName: 'components_elements_footer_2s';
  info: {
    displayName: 'Footer-2';
  };
  attributes: {
    heading: Attribute.String;
    quick_links_btn: Attribute.Component<'links.page-button', true>;
  };
}

export interface ElementsFooter3 extends Schema.Component {
  collectionName: 'components_elements_footer_3s';
  info: {
    displayName: 'Footer-3';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    contact_sub_component: Attribute.Component<
      'elements.footer-contact-sub-component',
      true
    >;
  };
}

export interface ElementsFooter4 extends Schema.Component {
  collectionName: 'components_elements_footer_4s';
  info: {
    displayName: 'Footer-4';
    description: '';
  };
  attributes: {
    Footer_social_media: Attribute.Component<'elements.social-media-component'>;
    Footer_newsLetter: Attribute.Component<'elements.newsletter-form'>;
  };
}

export interface ElementsFooterContactSubComponent extends Schema.Component {
  collectionName: 'components_elements_footer_contact_sub_components';
  info: {
    displayName: 'Footer-contact-sub-component';
  };
  attributes: {
    icon: Attribute.Media<'images'>;
    text: Attribute.Text;
  };
}

export interface ElementsNewsletterForm extends Schema.Component {
  collectionName: 'components_elements_newsletter_forms';
  info: {
    displayName: 'Newsletter Form';
  };
  attributes: {
    title: Attribute.String;
    emailPlaceHolder: Attribute.String;
    submit_icon: Attribute.Media<'images' | 'files'>;
  };
}

export interface ElementsServiceCard extends Schema.Component {
  collectionName: 'components_elements_service_cards';
  info: {
    displayName: 'Service Card';
  };
  attributes: {
    service_tag: Attribute.String;
    rating: Attribute.String;
    bg_IMG: Attribute.Media<'images'>;
    service_title: Attribute.String;
    location: Attribute.String;
    price: Attribute.String;
    book_now: Attribute.Component<'links.button-link'>;
  };
}

export interface ElementsSocialMediaComponent extends Schema.Component {
  collectionName: 'components_elements_social_media_components';
  info: {
    displayName: 'Social Media Component';
  };
  attributes: {
    title: Attribute.String;
    social_icons: Attribute.Component<'links.social-link', true>;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    Footer_logo_description: Attribute.Component<'elements.footer-1'>;
    Footer_Quick_links: Attribute.Component<'elements.footer-2'>;
    Footer_Contact_us: Attribute.Component<'elements.footer-3'>;
    Footer_social_newsLetter: Attribute.Component<'elements.footer-4'>;
  };
}

export interface LayoutLogo extends Schema.Component {
  collectionName: 'components_layout_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    logoImg: Attribute.Media<'images'>;
    logoTitle: Attribute.String;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    Navbar_Logo: Attribute.Component<'layout.logo'>;
    Navbar_page_route: Attribute.Component<'links.page-button', true>;
    Navbar_auth_button: Attribute.Component<'links.button-link', true>;
  };
}

export interface LinksButtonLink extends Schema.Component {
  collectionName: 'components_links_button_links';
  info: {
    displayName: 'Button Link';
  };
  attributes: {
    url: Attribute.String;
    newTab: Attribute.Boolean;
    text: Attribute.String;
    type: Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface LinksPageButton extends Schema.Component {
  collectionName: 'components_links_page_buttons';
  info: {
    displayName: 'Page Button';
  };
  attributes: {
    url: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
  };
}

export interface LinksSocialLink extends Schema.Component {
  collectionName: 'components_links_social_links';
  info: {
    displayName: 'Social Link';
  };
  attributes: {
    url: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
    social: Attribute.Enumeration<
      ['Facebook', 'Twitter', 'Instagram ', 'LinkedIn']
    >;
  };
}

export interface MetaMetaData extends Schema.Component {
  collectionName: 'components_meta_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
  };
}

export interface SectionsBannerComponent extends Schema.Component {
  collectionName: 'components_sections_banner_components';
  info: {
    displayName: 'Banner Component';
  };
  attributes: {
    title: Attribute.Text;
    description: Attribute.Text;
  };
}

export interface SectionsFeaturedCategoryComponent extends Schema.Component {
  collectionName: 'components_sections_featured_category';
  info: {
    displayName: 'Featured Category';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    categories: Attribute.Component<'elements.category-card', true>;
    View_all_btn: Attribute.Component<'links.button-link'>;
  };
}

export interface SectionsFeaturedService extends Schema.Component {
  collectionName: 'components_sections_featured_services';
  info: {
    displayName: 'Featured Service';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    View_all_btn: Attribute.Component<'links.button-link'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.category-card': ElementsCategoryCard;
      'elements.footer-1': ElementsFooter1;
      'elements.footer-2': ElementsFooter2;
      'elements.footer-3': ElementsFooter3;
      'elements.footer-4': ElementsFooter4;
      'elements.footer-contact-sub-component': ElementsFooterContactSubComponent;
      'elements.newsletter-form': ElementsNewsletterForm;
      'elements.service-card': ElementsServiceCard;
      'elements.social-media-component': ElementsSocialMediaComponent;
      'layout.footer': LayoutFooter;
      'layout.logo': LayoutLogo;
      'layout.navbar': LayoutNavbar;
      'links.button-link': LinksButtonLink;
      'links.page-button': LinksPageButton;
      'links.social-link': LinksSocialLink;
      'meta.meta-data': MetaMetaData;
      'sections.banner-component': SectionsBannerComponent;
      'sections.featured-category-component': SectionsFeaturedCategoryComponent;
      'sections.featured-service': SectionsFeaturedService;
    }
  }
}

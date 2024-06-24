import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentServiceInformation extends Schema.Component {
  collectionName: 'components_component_service_informations';
  info: {
    displayName: 'serviceInformation';
    description: '';
  };
  attributes: {
    location: Attribute.String;
    price: Attribute.String;
    description: Attribute.Text;
    subTitle: Attribute.String;
    mainImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    rating: Attribute.Integer;
  };
}

export interface ElementsHowItWorkBlock extends Schema.Component {
  collectionName: 'components_elements_how_it_work_blocks';
  info: {
    displayName: 'HowItWorkBlock';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    svgImageLogo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Number: Attribute.String;
  };
}

export interface GlobalelementsBlock1 extends Schema.Component {
  collectionName: 'components_globalelements_block1s';
  info: {
    displayName: 'Block1';
  };
  attributes: {
    Logo: Attribute.Component<'globalelements.logo'>;
    Text1: Attribute.Text;
    Text2: Attribute.Text;
  };
}

export interface GlobalelementsBlock2 extends Schema.Component {
  collectionName: 'components_globalelements_block2s';
  info: {
    displayName: 'Block2';
  };
  attributes: {
    title: Attribute.String;
    quickLinks: Attribute.Component<'globalelements.navitems', true>;
  };
}

export interface GlobalelementsBlock3 extends Schema.Component {
  collectionName: 'components_globalelements_block3s';
  info: {
    displayName: 'Block3';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    ContactUs: Attribute.Component<'globalelements.navitems', true>;
  };
}

export interface GlobalelementsBlock4 extends Schema.Component {
  collectionName: 'components_globalelements_block4s';
  info: {
    displayName: 'Block4';
  };
  attributes: {
    title: Attribute.String;
    followLogo: Attribute.Component<'globalelements.logo', true>;
  };
}

export interface GlobalelementsBlock5 extends Schema.Component {
  collectionName: 'components_globalelements_block5s';
  info: {
    displayName: 'Block5';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    LabelText: Attribute.String;
    SendLogo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GlobalelementsFooter extends Schema.Component {
  collectionName: 'components_globalelements_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    Description: Attribute.Component<'globalelements.block1'>;
    quickLinks: Attribute.Component<'globalelements.block2'>;
    ContactUs: Attribute.Component<'globalelements.block3'>;
    FollowUs: Attribute.Component<'globalelements.block4'>;
    Newsletter: Attribute.Component<'globalelements.block5'>;
  };
}

export interface GlobalelementsLogo extends Schema.Component {
  collectionName: 'components_globalelements_logos';
  info: {
    displayName: 'logo';
    description: '';
  };
  attributes: {
    logoImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logoUrl: Attribute.String;
    navigateToNewTab: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface GlobalelementsNavigation extends Schema.Component {
  collectionName: 'components_header_navigations';
  info: {
    displayName: 'Navigation';
    description: '';
  };
  attributes: {
    navLogo: Attribute.Component<'globalelements.logo'>;
    NavItems: Attribute.Component<'globalelements.navitems', true>;
    Button: Attribute.Component<'shared.button', true>;
  };
}

export interface GlobalelementsNavitems extends Schema.Component {
  collectionName: 'components_globalelements_navitems';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    contactLogo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomePageSectionsBlogs extends Schema.Component {
  collectionName: 'components_home_page_sections_blogs';
  info: {
    displayName: 'Blogs';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    blogs: Attribute.Relation<
      'home-page-sections.blogs',
      'oneToMany',
      'api::blog.blog'
    >;
  };
}

export interface HomePageSectionsClientSays extends Schema.Component {
  collectionName: 'components_home_page_sections_client_says';
  info: {
    displayName: 'clientSays';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    client_says: Attribute.Relation<
      'home-page-sections.client-says',
      'oneToMany',
      'api::client-say.client-say'
    >;
  };
}

export interface HomePageSectionsFeaturedCategories extends Schema.Component {
  collectionName: 'components_home_page_sections_featured_categories';
  info: {
    displayName: 'FeaturedCategories';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    categories: Attribute.Relation<
      'home-page-sections.featured-categories',
      'oneToMany',
      'api::category.category'
    >;
  };
}

export interface HomePageSectionsFeaturedServices extends Schema.Component {
  collectionName: 'components_home_page_sections_featured_services';
  info: {
    displayName: 'FeaturedServices';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    services: Attribute.Relation<
      'home-page-sections.featured-services',
      'oneToMany',
      'api::service.service'
    >;
  };
}

export interface HomePageSectionsHowItWork extends Schema.Component {
  collectionName: 'components_home_page_sections_how_it_works';
  info: {
    displayName: 'HowItWork';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text;
    workingBlock: Attribute.Component<'elements.how-it-work-block', true>;
    offerheading: Attribute.String;
    OfferDetails: Attribute.String;
    Button: Attribute.Component<'shared.button'>;
  };
}

export interface HomePageSectionsMainSection extends Schema.Component {
  collectionName: 'components_home_page_sections_main_sections';
  info: {
    displayName: 'MainSection';
    description: '';
  };
  attributes: {
    title1: Attribute.String & Attribute.Required;
    title2: Attribute.String;
    subtitle: Attribute.String;
  };
}

export interface HomePageSectionsPopularService extends Schema.Component {
  collectionName: 'components_home_page_sections_popular_services';
  info: {
    displayName: 'PopularService';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    popularservices: Attribute.Relation<
      'home-page-sections.popular-service',
      'oneToMany',
      'api::service.service'
    >;
  };
}

export interface HomePageSectionsTopProviders extends Schema.Component {
  collectionName: 'components_home_page_sections_top_providers';
  info: {
    displayName: 'TopProviders';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    providers: Attribute.Relation<
      'home-page-sections.top-providers',
      'oneToMany',
      'api::provider.provider'
    >;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.Text;
    IsnewTab: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.service-information': ComponentServiceInformation;
      'elements.how-it-work-block': ElementsHowItWorkBlock;
      'globalelements.block1': GlobalelementsBlock1;
      'globalelements.block2': GlobalelementsBlock2;
      'globalelements.block3': GlobalelementsBlock3;
      'globalelements.block4': GlobalelementsBlock4;
      'globalelements.block5': GlobalelementsBlock5;
      'globalelements.footer': GlobalelementsFooter;
      'globalelements.logo': GlobalelementsLogo;
      'globalelements.navigation': GlobalelementsNavigation;
      'globalelements.navitems': GlobalelementsNavitems;
      'home-page-sections.blogs': HomePageSectionsBlogs;
      'home-page-sections.client-says': HomePageSectionsClientSays;
      'home-page-sections.featured-categories': HomePageSectionsFeaturedCategories;
      'home-page-sections.featured-services': HomePageSectionsFeaturedServices;
      'home-page-sections.how-it-work': HomePageSectionsHowItWork;
      'home-page-sections.main-section': HomePageSectionsMainSection;
      'home-page-sections.popular-service': HomePageSectionsPopularService;
      'home-page-sections.top-providers': HomePageSectionsTopProviders;
      'shared.button': SharedButton;
    }
  }
}

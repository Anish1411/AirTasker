import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsAddress extends Schema.Component {
  collectionName: 'components_elements_addresses';
  info: {
    displayName: 'Address';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Attribute.String;
    text1: Attribute.String;
    text2: Attribute.String;
  };
}

export interface ElementsButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    theme: Attribute.Enumeration<['primary', 'secondary', 'muted']>;
    link: Attribute.Component<'shared.link'>;
  };
}

export interface ElementsContactInformation extends Schema.Component {
  collectionName: 'components_elements_contact_informations';
  info: {
    displayName: 'contact_information';
  };
  attributes: {
    number: Attribute.Component<'elements.phone'>;
    email: Attribute.Component<'elements.email-address'>;
    address: Attribute.Component<'elements.address'>;
  };
}

export interface ElementsContactPage extends Schema.Component {
  collectionName: 'components_elements_contact_pages';
  info: {
    displayName: 'ContactPage';
  };
  attributes: {
    Tittle: Attribute.Blocks & Attribute.Required;
  };
}

export interface ElementsEmailAddress extends Schema.Component {
  collectionName: 'components_elements_email_addresses';
  info: {
    displayName: 'EmailAddress';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Attribute.String;
    text1: Attribute.String;
    text2: Attribute.String;
  };
}

export interface ElementsFormComponent extends Schema.Component {
  collectionName: 'components_elements_form_components';
  info: {
    displayName: 'formComponent';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    heading: Attribute.String;
    subHeading: Attribute.String;
    input: Attribute.Component<'elements.inputfield', true>;
  };
}

export interface ElementsInfo extends Schema.Component {
  collectionName: 'components_elements_infos';
  info: {
    displayName: 'info';
  };
  attributes: {
    phonenumber: Attribute.Component<'elements.phone', true>;
    email: Attribute.Component<'elements.email-address'>;
    address: Attribute.Component<'elements.address', true>;
  };
}

export interface ElementsInputfield extends Schema.Component {
  collectionName: 'components_elements_inputfields';
  info: {
    displayName: 'inputfield';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    input: Attribute.String;
    placeholder: Attribute.String;
    type: Attribute.String;
    grid: Attribute.Integer;
  };
}

export interface ElementsMap extends Schema.Component {
  collectionName: 'components_elements_maps';
  info: {
    displayName: 'map';
  };
  attributes: {
    url: Attribute.JSON;
  };
}

export interface ElementsPhone extends Schema.Component {
  collectionName: 'components_elements_phones';
  info: {
    displayName: 'Phone';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Attribute.String;
    text1: Attribute.String;
    text2: Attribute.String;
  };
}

export interface SectionForm extends Schema.Component {
  collectionName: 'components_section_forms';
  info: {
    displayName: 'form';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    heading: Attribute.String;
    subheading: Attribute.String;
    input: Attribute.Component<'elements.inputfield', true>;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Attribute.String;
    label: Attribute.String;
    target: Attribute.Enumeration<['_blank']>;
    isExternal: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.address': ElementsAddress;
      'elements.button': ElementsButton;
      'elements.contact-information': ElementsContactInformation;
      'elements.contact-page': ElementsContactPage;
      'elements.email-address': ElementsEmailAddress;
      'elements.form-component': ElementsFormComponent;
      'elements.info': ElementsInfo;
      'elements.inputfield': ElementsInputfield;
      'elements.map': ElementsMap;
      'elements.phone': ElementsPhone;
      'section.form': SectionForm;
      'shared.link': SharedLink;
    }
  }
}

import { FaLocationDot } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import * as IMAGES from "@/utils/IMAGES";

/* Navbar*/
export const pages = ["Home", "About Us", "Services", "Blog", "Contact Us"];

/* Footer*/
const lorem =
  "Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod tempor commodo consequat";
export const TEXT1 = [lorem];
export const TEXT2 = [lorem];
export const quickLinks = [
  "About Us",
  "Categories",
  "Services",
  "Blog Grid",
  "Contact Us",
];
export const contactus = [
  { title: "367 Hillcrest Lane, Irvine, California, United States",icon: <FaLocationDot size="1.5rem"/>},
  { title: "321 546 8764", icon: <IoCallOutline size="1.5rem" /> },
  { title: "truelysell@example.com", icon: <MdEmail size="1.5rem" /> },
  { title: "www.example.com", icon: <CiGlobe size="1.5rem" /> },
];

/* index page -- category box -- data*/
export const categoryImg = [
  {imageUrlsvg:IMAGES.SVG1, imageAltsvg:"Svgimg", heading:"Car Wash", img:IMAGES.FCIMG1, imgalttext:"Car "},
  {imageUrlsvg:IMAGES.SVG2, imageAltsvg:"Svgimg", heading:"Carpentry",  img:IMAGES.FCIMG2, imgalttext:"Car"},
  {imageUrlsvg:IMAGES.SVG3, imageAltsvg:"Svgimg", heading:"Cleaning",  img:IMAGES.FCIMG3, imgalttext:"Car"},
  {imageUrlsvg:IMAGES.SVG4, imageAltsvg:"Svgimg", heading:"Computer",  img:IMAGES.FCIMG4, imgalttext:"Car"},
  {imageUrlsvg:IMAGES.SVG5, imageAltsvg:"Svgimg", heading:"Construction",  img:IMAGES.FCIMG5, imgalttext:"Car"},
  {imageUrlsvg:IMAGES.SVG6, imageAltsvg:"Svgimg", heading:"Electrical",  img:IMAGES.FCIMG6, imgalttext:"Car"},
  {imageUrlsvg:IMAGES.SVG7, imageAltsvg:"Svgimg", heading:"Interior",  img:IMAGES.FCIMG7, imgalttext:"Car"},
  {imageUrlsvg:IMAGES.SVG8, imageAltsvg:"Svgimg", heading:"Plumbing",  img:IMAGES.FCIMG8, imgalttext:"Car"},
]

/* index page -- Service box -- data*/
export const serviceBlock = [
  {category:"Interior", rating:"0", imageUrl:IMAGES.service1, title:"Interior Design", location:"Hanvoer Maryland", price:"$500"},
  {category:"Interior", rating:"0", imageUrl:IMAGES.service2, title:"Interior Design", location:"Hanvoer Maryland", price:"$500"},
  {category:"Interior", rating:"0", imageUrl:IMAGES.service3, title:"Interior Design", location:"Hanvoer Maryland", price:"$500"},
  {category:"Interior", rating:"0", imageUrl:IMAGES.service4, title:"Interior Design", location:"Hanvoer Maryland", price:"$500"},
  {category:"Interior", rating:"0", imageUrl:IMAGES.service5, title:"Interior Design", location:"Hanvoer Maryland", price:"$500"},
  {category:"Interior", rating:"0", imageUrl:IMAGES.service6, title:"Interior Design", location:"Hanvoer Maryland", price:"$500"},
]

/* index page -- popular box -- data*/
export const popularServiceBlock = [
  {category:"Interior", rating:"0", imageUrl:IMAGES.fservice1, title:"Interior Design", location:"Hanvoer Maryland", price:"$500"},
  {category:"Interior", rating:"0", imageUrl:IMAGES.fservice2, title:"Interior Design", location:"Hanvoer Maryland", price:"$500"},
  {category:"Interior", rating:"0", imageUrl:IMAGES.fservice3, title:"Interior Design", location:"Hanvoer Maryland", price:"$500"},
  {category:"Interior", rating:"0", imageUrl:IMAGES.fservice4, title:"Interior Design", location:"Hanvoer Maryland", price:"$500"},
  {category:"Interior", rating:"0", imageUrl:IMAGES.fservice5, title:"Interior Design", location:"Hanvoer Maryland", price:"$500"},
  {category:"Interior", rating:"0", imageUrl:IMAGES.fservice6, title:"Interior Design", location:"Hanvoer Maryland", price:"$500"},
]

/* INDEX PAGE -- HOW IT WORKS*/
export const workDetails = [
  {number:"01", icon:IMAGES.work1, title:"Choose What To Do", text:"Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet."},
  {number:"02", icon:IMAGES.work1, title:"Find What You Want", text:"Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet."},
  {number:"03", icon:IMAGES.work1, title:"Amazing Places", text:"Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet."},
]

/* INDEX PAGE -- Providers*/
export const providerDetails = [
  {profile:IMAGES.provider1, name:"David Morrison", email:"davidmorrison@example.com"},
  {profile:IMAGES.provider2, name:"Linda Brooks", email:"lindabrooks@example.com"},
  {profile:IMAGES.provider3, name:"Maritza Wasson", email:"davidmorrison@example.com"},
  {profile:IMAGES.provider4, name:"Provider Demo", email:"provider@example.com"},
]

/* INDEX PAGE -- blog*/
export const clientdetails = [
  {img:IMAGES.client1, text:"Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet. Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet.", name:"Tom Baker"},
  {img:IMAGES.client2, text:"Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet. Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet.", name:"Jack Paden"},
  {img:IMAGES.client3, text:"Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet. Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet.", name:"Jennie Smith"},
]

/* INDEX PAGE -- blog*/
export const blogdetails = [
  {img:IMAGES.blogimg1, profile:IMAGES.profile1, profilename:"Admin", date:"January 1, 2024", text:"The standard chunk of lorem Ipsum used reasonable."},
  {img:IMAGES.blogimg2, profile:IMAGES.profile2, profilename:"Admin", date:"January 1, 2024", text:"It is a long established fact that a reader will be."},
  {img:IMAGES.blogimg3, profile:IMAGES.profile3, profilename:"Admin", date:"January 1, 2024", text:"To generate lorem ipsum which looks reasonable."},
]

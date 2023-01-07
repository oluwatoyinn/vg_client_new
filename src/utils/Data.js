import call from "../img/call.png";
import address from "../img/address2.png";
import email from "../img/email.webp";
import { EmailIcon, PhoneIcon, MapPinIcon } from "../components/icons";

const Data = {
  whatWeDo: [
    {
      id: "04",
      title1: "Branding and product development",
      title2: "Branding and product development",
      message:
        "The importance of branding in business cannot be ignored, it is absolutely critical to a business because of the overall impact it makes on your company and essential to how a company... ",
    },
    {
      id: "05",
      title1: "Training",
      title2: "Training",
      message:
        "Better training leads to better processes and Better Work, Workforce training is an indispensable way to keep your organization competitive, our team of expert specialize in training of organization... ",
    },
    {
      id: "06",
      title1: "Business reconstruction",
      title2: "Business reconstruction",
      message:
        "Business owners should periodically assess how to improve financial results. Business reconstruction involve an action taken by a company to significantly modify the financial and operational aspects... ",
    },
    {
      id: "07",
      title1: "Business continuity plan",
      title2: "Business continuity plan",
      message:
        "Preparing a plan/document that outlines how a business will continue operating during an unplanned disruption in service is crucial for all business. It’s more comprehensive than a disaster...",
    },
    {
      id: "08",
      title1: "Corporate governance structuring",
      title2: "Corporate governance structuring",
      message:
        "The pillars of successful corporate governance are: accountability, fairness, transparency, assurance, leadership and stakeholder management. All six are critical in successfully running an entity and...",
    },
  ],

  whatWeDo2: [
    {
      id: "01",
      title1: "Business Development Advisory Services",
      title2: "Business Development Advisory Services",
      message:
        "Our approach is client-centric, geared towards delivering customized business solutions that deliver lasting value to their businesses. We satisfy the primary objective such as sales growth...",
    },
    {
      id: "02",
      title1: "Tax Planning",
      title2: "Tax Planning",
      message:
        "We assist businesses, individuals and organizations with tax strategy, planning, and compliance through a careful and deliberate structuring of the company’s activities we provide advice on tax planning with an objective of...",
    },
    {
      id: "03",
      title1: "Consulting services",
      title2: "Consulting services",
      message:
        "We have proven a multiplier effect from optimizing the sum of the parts, not just the individual pieces. We bring deep, handy expertise, but are known for our all-inclusive perception: we capture value across boundaries and between the silos..",
    },
  ],
  contactAddress: [
    {
      id: 1,
      img: address,
      title: "10 Benson Ojukwu Str. Okota Ago Lagos",
    },
    {
      id: 2,
      img: email,
      title: "contact@vgrconsultingltd.com",
    },
    {
      id: 3,
      img: call,
      title: "(234) 803 345 9094",
    },
  ],
  contactUsData: [
    {
      id: 1,
      icon: <MapPinIcon />,
      title: "Our Main Office",
      detail: "10 Benson Ojukwu Str. Okota Ago Lagos",
    },
    {
      id: 2,
      icon: <PhoneIcon />,
      title: "Phone Number",
      detail: "(234) 803 345 9094",
    },
    {
      id: 3,
      icon: <EmailIcon />,
      title: "Email",
      detail: "contact@vgrconsultingltd.com",
    },
  ],
};

export default Data;

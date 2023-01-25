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
      url: "/branding",
    },
    {
      id: "05",
      title1: "Training",
      title2: "Training",
      message:
        "Better training leads to better processes and Better Work, Workforce training is an indispensable way to keep your organization competitive, our team of expert specialize in training of organization... ",
      url: "/training",
    },
    {
      id: "06",
      title1: "Business reconstruction",
      title2: "Business reconstruction",
      message:
        "Business owners should periodically assess how to improve financial results. Business reconstruction involve an action taken by a company to significantly modify the financial and operational aspects... ",
      url: "/reconstruction",
    },
    {
      id: "07",
      title1: "Business continuity plan",
      title2: "Business continuity plan",
      message:
        "Preparing a plan/document that outlines how a business will continue operating during an unplanned disruption in service is crucial for all business. It’s more comprehensive than a disaster...",
      url: "/continuity",
    },
    {
      id: "08",
      title1: "Corporate governance structuring",
      title2: "Corporate governance structuring",
      message:
        "The pillars of successful corporate governance are: accountability, fairness, transparency, assurance, leadership and stakeholder management. All six are critical in successfully running an entity and...",
      url: "/governance",
    },
  ],

  whatWeDo2: [
    {
      id: "01",
      title1: "Business Development Advisory Services",
      title2: "Business Development Advisory Services",
      message:
        "Our approach is client-centric, geared towards delivering customized business solutions that deliver lasting value to their businesses. We satisfy the primary objective such as sales growth...",
      url: "/advisory",
    },
    {
      id: "02",
      title1: "Tax Planning",
      title2: "Tax Planning",
      message:
        "We assist businesses, individuals and organizations with tax strategy, planning, and compliance through a careful and deliberate structuring of the company’s activities we provide advice on tax planning with an objective of...",
      url: "/tax",
    },
    {
      id: "03",
      title1: "Consulting services",
      title2: "Consulting services",
      message:
        "We have proven a multiplier effect from optimizing the sum of the parts, not just the individual pieces. We bring deep, handy expertise, but are known for our all-inclusive perception: we capture value across boundaries and between the silos..",
      url: "/consulting",
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
  scheduleDetails: [
    {
      id: "01",
      message:
        "We facilitate the acquisition process with confidence and create advisory team tailored to your company to provide adetailed strategy and implementation plan",
    },
    {
      id: "02",
      message:
        "We access a corporate portfolio of business units and identify key success factor in the business",
    },
    {
      id: "03",
      message:
        "We provide business advisory to guide the growth of your company while introducing and facilitating important strategic alliances.",
    },
    {
      id: "04",
      message:
        "We support effective business development activity with new and evocative customers to create revenue strength for your company.",
    },
    {
      id: "05",
      message:
        "Resources recap and identification and industry perception research",
    },
  ],
  taxType: [
    {
      id: "01",
      message: "Company income Tax",
    },
    {
      id: "02",
      message: "Transaction Tax",
    },
    {
      id: "03",
      message: "Value Added Tax",
    },
    {
      id: "04",
      message: "Transfer Pricing",
    },
    {
      id: "05",
      message: "Personal Income Tax",
    },
    {
      id: "06",
      message: "Education Tax",
    },
    {
      id: "07",
      message: "Capital Gain Tax",
    },
  ],
  consultingAreas: [
    {
      id: "01",
      message: " Logistics",
    },
    {
      id: "02",
      message: " SME business development",
    },
    {
      id: "03",
      message: " Cleaning services",
    },
    {
      id: "04",
      message: " Export and imports",
    },
    {
      id: "05",
      message: " Accounting software installation",
    },
  ],
  reconstruction: [
    {
      id: "01",
      message:
        "Reorganizing functions such as marketing, sales, and distribution.",
    },
    {
      id: "02",
      message:
        "Conducting a public relations campaign at large to reposition the company with its consumers.",
    },
    {
      id: "03",
      message: "Changes in corporate management",
    },
    {
      id: "04",
      message:
        "Iimproving the Balance Sheet of the company (by disposing of the unprofitable division from its core business)",
    },
  ],
  branding: [
    {
      id: "01",
      message: "Consider your overall business strategy.",
    },
    {
      id: "02",
      message: "Identify your target clients.",
    },
    {
      id: "03",
      message: "Research your target client group",
    },
    {
      id: "04",
      message: "Develop your brand positioning",
    },
    {
      id: "05",
      message: "Develop your messaging strategy",
    },
    {
      id: "06",
      message: "Develop your content marketing strategy",
    },
    {
      id: "07",
      message: "Develop your name, logo and tagline",
    },
    {
      id: "08",
      message: "Develop your website",
    },
    {
      id: "09",
      message: "Build your marketing toolkit",
    },
    {
      id: "10",
      message: "Implement, track, and adjust.",
    },
  ],
  training: [
    {
      id: "01",
      message: "Branding and Product Development",
    },
    {
      id: "02",
      message: "Business Reconstruction",
    },
    {
      id: "03",
      message: "Consulting Services",
    },
    {
      id: "04",
      message: "Continuity Plan etc",
    },
  ],
  continuity: [
    {
      id: "01",
      message: "Determining how those risks will affect operations",
    },
    {
      id: "02",
      message: "Implementing safeguards and procedures to mitigate the risks",
    },
    {
      id: "03",
      message: "Testing procedures to ensure they work",
    },
    {
      id: "04",
      message: "Reviewing the process to make sure that it is up to date",
    },
  ],
  governance: [
    {
      id: "01",
      message:
        "An ethical approach towards society which must be a key organizational paradigm",
    },
    {
      id: "02",
      message:
        "Objectives should be balanced and respect the goals of all interested parties",
    },
    {
      id: "03",
      message:
        "The roles of key players such as the board, the management or staff/stakeholders must be clarified",
    },
    {
      id: "04",
      message:
        "A decision-making process must be in place – reflecting the first three principles and giving due weight to all stakeholders",
    },
    {
      id: "05",
      message:
        "Equal concern must be given for all stakeholders – albeit some have greater weight than others",
    },
    {
      id: "06",
      message:
        "Accountability and transparency is necessary – to all stakeholders",
    },
  ],
  coreValues1: [
    {
      id: "1",
      message: "Innovative",
    },
    {
      id: "1",
      message: "Visionary",
    },
    {
      id: "1",
      message: "Growth",
    },
    {
      id: "1",
      message: "Timely",
    },
  ],
  coreValues2: [
    {
      id: "1",
      message: "Tested",
    },
    {
      id: "1",
      message: "Trusted",
    },
    {
      id: "1",
      message: "Sustainable",
    },
    {
      id: "1",
      message: "Reliable",
    },
  ],
  services: [
    {
      id: "01",
      message: "Business Development advisory services",
    },
    {
      id: "02",
      message: "Tax Planning",
    },
    {
      id: "03",
      message: "Consulting Services",
    },
    {
      id: "04",
      message: "Branding and Product Development",
    },
    {
      id: "05",
      message: "Training",
    },
    {
      id: "06",
      message: "Business Reconstruction",
    },
    {
      id: "07",
      message: "Business Continuity Plan",
    },
    {
      id: "08",
      message: "Corporate governance structuring",
    },
  ],
  servicesLink: [
    {
      name: "Services",
      submenu: true,
      sublinks: [
        {
          id: "1",
          message: "Business Development advisory services",
          url: "/advisory",
        },
        {
          id: "2",
          message: "Tax Planning",
          url: "/tax",
        },
        {
          id: "3",
          message: "Consulting Services",
          url: "/consulting",
        },
        {
          id: "4",
          message: "Branding and Product Development",
          url: "/branding",
        },
        {
          id: "5",
          message: "Training",
          url: "/training",
        },
        {
          id: "6",
          message: "Business Reconstruction",
          url: "/reconstruction",
        },
        {
          id: "7",
          message: "Business Continuity Plan",
          url: "/continuity",
        },
        {
          id: "8",
          message: "Corporate governance structuring",
          url: "/governance",
        },
      ],
    },
  ],
  blogData:[
    {
      id:'01',
      message:'Message one'
    },
    {
      id:'02',
      message:'Mesage two'
    },
    {
      id:'03',
      message:'message three'
    },
    {
      id:'04',
      message:'Message four'
    },
  ]
};

export default Data;

import {
  FaGlobe,
  FaMobileAlt,
  FaShoppingCart,
  FaServer,
  FaDigitalTachograph,
  FaBullhorn,
  FaDollarSign,
  FaExpand,
  FaGem,
  FaTools,
  FaStream,
} from "react-icons/fa";

const size = 60;

const iconWebsiteDevelopment = <FaGlobe size={size} />;
const iconAppsDevelopment = <FaMobileAlt size={size} />;
const iconECommercePlatform = <FaShoppingCart size={size} />;
const iconManagedHosting = <FaServer size={size} />;
const iconDigitalContents = <FaDigitalTachograph size={size} />;
const iconPromotions = <FaBullhorn size={size} />;

const iconReasonablePricing = <FaDollarSign size={size} />;
const iconScalableWeb = <FaExpand size={size} />;
const iconPremiumThemes = <FaGem size={size} />;
const iconRobustApps = <FaTools size={size} />;
const iconConsolidateContents = <FaStream size={size} />;

const cloudJourney = [
  {
    icon: iconWebsiteDevelopment,
    title: "Website Development",
    body: "Build responsive and user-friendly websites tailored to your business needs. Our team of developers ensures cutting-edge technology and a seamless user experience.",
  },
  {
    icon: iconAppsDevelopment,
    title: "Apps Development",
    body: "Craft innovative mobile applications that enhance user engagement. We focus on creating scalable and feature-rich apps for both Android and iOS platforms.",
  },
  {
    icon: iconECommercePlatform,
    title: "E-Commerce Platform",
    body: "Establish your online presence with a robust e-commerce platform. We provide end-to-end solutions for setting up and optimizing your online store for maximum sales.",
  },
  {
    icon: iconManagedHosting,
    title: "Managed Hosting",
    body: "Experience worry-free hosting with our managed hosting services. We take care of server maintenance, security, and performance optimization, allowing you to focus on your business.",
  },
  {
    icon: iconDigitalContents,
    title: "Digital Contents",
    body: "Create compelling digital content to engage your audience. From graphics and videos to blog posts and social media content, our team ensures a consistent and appealing online presence.",
  },
  {
    icon: iconPromotions,
    title: "Promotions",
    body: "Boost your brand visibility with strategic promotions. Our marketing experts leverage various channels to drive targeted traffic and increase brand awareness for your products and services.",
  },

  // Add more stages as needed...
];

const builderBenefits = [
  {
    icon: iconReasonablePricing,
    title: "Reasonable Pricing",
    body: "Enjoy cost-effective solutions tailored to your budget. Our pricing plans are designed to provide excellent value without compromising on quality.",
  },
  {
    icon: iconScalableWeb,
    title: "Scalable Web",
    body: "Build a scalable web presence that grows with your business. Our solutions are designed to handle increased traffic and evolving requirements.",
  },
  {
    icon: iconPremiumThemes,
    title: "Premium Themes",
    body: "Choose from a selection of premium themes to give your website a professional and visually appealing look. Customize these themes to match your brand identity.",
  },
  {
    icon: iconRobustApps,
    title: "Robust Apps",
    body: "Develop robust applications with advanced features and functionality. Our app development services ensure that your digital solutions meet the highest standards.",
  },
  {
    icon: iconConsolidateContents,
    title: "Consolidate Contents",
    body: "Effectively streamline and centralize your digital content with our comprehensive tools and strategic approaches. Elevate your content management by efficiently organizing, optimizing, and presenting your materials, ensuring they resonate with maximum impact and engagement.",
  },

  // Add more benefits as needed...
];
export { cloudJourney, builderBenefits };

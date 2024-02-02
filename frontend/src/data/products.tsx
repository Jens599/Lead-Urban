import {
  TbDroplet,
  TbDropletBolt,
  TbDropletCancel,
  TbDropletCheck,
  TbDropletCode,
  TbDropletCog,
} from "react-icons/tb";

const size = "3rem";
const color = "#191D88";

const products = [
  {
    icon: <TbDroplet size={size} color={color} />,
    title: "basic",
    subtitle: "For simple applications",
    Premium: true,
    list: ["Low-traffic web servers", "Blogs and forums", "Small databases"],
    link: "#",
  },
  {
    icon: <TbDropletBolt size={size} color={color} />,
    title: "General Purpose",
    subtitle: "For critical apps",
    Premium: true,
    list: [
      "Software-as-a-Service (SaaS)",
      "E-commerce sites",
      "High-traffic web servers",
    ],
    link: "#",
  },
  {
    icon: <TbDropletCancel size={size} color={color} />,
    title: "Memory-Optimized",
    subtitle: "For RAM-Intensive apps",
    list: [
      "High-performance DBs",
      "In-memory caches",
      "Real-time data processing",
    ],
    link: "#",
  },
  {
    icon: <TbDropletCheck size={size} color={color} />,
    title: "Premium CPU-Optimized",
    list: [
      "Upgrade to Premium CPU-Optimized for up to 10 Gbps network speeds, faster processors, & NVMe SSDs.",
    ],
    link: "#",
  },
  {
    icon: <TbDropletCode size={size} color={color} />,
    title: "CPU-Optimized",
    subtitle: "For CPU-intensive apps",
    list: ["Media streaming", "Data analytics", "Batch processing"],
    link: "#",
  },
  {
    icon: <TbDropletCog size={size} color={color} />,
    title: "Storage-Optimized",
    subtitle: "For extra large apps",
    list: ["NoSQL databases", "Monitoring software", "Other data warehouses"],
    link: "#",
  },
];

export { products };
import blockchainIcon from "../icons/blockchain.svg";
import chainIcon from "../icons/chain.svg";
import roadmapImg01 from "../images/roadmap/img-1.png";
import roadmapImg02 from "../images/roadmap/img-2.png";
import roadmapImg03 from "../images/roadmap/img-3.png";

export const bannerData = [
  {
    id: 1,
    icon: blockchainIcon,
    title: "Total Supply",
    value: "1,000,000,000",
    subText: "$AUREX",
  },
  {
    id: 2,
    icon: chainIcon,
    title: "Chain",
    value: "Binance Smart Chain",
    subText: "(BEP-20)",
  },
  {
    id: 3,
    icon: blockchainIcon,
    title: "Price",
    value: "$0.08",
    subText: "(Live)",
  },
];

export const roadmapData = [
  {
    id: 1,
    title: "Concept & Development",
    photo: roadmapImg01,
    point: [
      "Core team formation",
      "Whitepaper v1.0 release",
      "Smart contract development",
      "Security audit initiation",
    ],
  },
  {
    id: 2,
    title: "Presale & Node Sales Launch",
    photo: roadmapImg02,
    point: [
      "Public token presale",
      "Node tier launch",
      "Community building",
      "Partnership announcements",
    ],
  },
  {
    id: 3,
    title: "Staking & NFT",
    photo: roadmapImg01,
    point: [
      "Staking platform launch",
      "NFT marketplace beta",
      "Governance implementation",
      "AI generation tools",
    ],
  },
  {
    id: 4,
    title: "AI Node Expansion",
    photo: roadmapImg03,
    point: [
      "Node network scaling",
      "Cross-chain integration",
      "Advanced AI models",
      "Mobile app release",
    ],
  },
  {
    id: 5,
    title: "Ecosystem Integration",
    photo: roadmapImg01,
    point: [
      "Third-party integrations",
      "Enterprise solutions",
      "Global expansion",
      "DAO transition",
    ],
  },
];

export const faqData = [
  {
    id: 1,
    question: "What is AUREX?",
    answer:
      "AUREX AI automates repetitive tasks by integrating with your existing systems and analyzing your data in real time. The AI engine identifies patterns, suggests optimizations, and runs tasks automatically, allowing you to focus on higher-level business operations.",
  },
  {
    id: 2,
    question: "How Does AUREX AI Automation Work?",
    answer:
      "AUREX AI connects to your tools via secure APIs and no-code connectors. It continuously monitors workflows, learns from your team’s actions, and builds intelligent automation rules. Once approved, these rules run 24/7—handling everything from data entry and report generation to customer follow-ups and inventory alerts—while giving you full visibility and control.",
  },
  {
    id: 3,
    question: "Can I Integrate AUREX AI with my current tools?",
    answer:
      "Yes! AUREX AI natively supports 200+ popular apps including QuickBooks, Shopify, Slack, Gmail, Google Sheets, Salesforce, HubSpot, Zapier, and many more. If your tool isn’t in our library yet, our custom API integration or webhook system lets you connect virtually any software in under 48 hours.",
  },
  {
    id: 4,
    question: "Is AUREX AI Suitable For Small Business?",
    answer:
      "Absolutely. AUREX AI was designed with small and medium businesses in mind. There’s no need for a dedicated IT team—setup takes minutes, pricing starts at just $49/month, and you can begin automating your first process on the same day. Thousands of small businesses already save 20+ hours per week using AUREX AI.",
  },
];

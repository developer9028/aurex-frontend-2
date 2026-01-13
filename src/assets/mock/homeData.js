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
    value: "$0.06",
    subText: "(Live)",
  },
];

export const roadmapData = [
  {
    id: 1,
    title: "Foundation & Development",
    photo: roadmapImg01,
    point: [
      "Tokenomics finalized",
      "Node program setup",
      "AI Engine internal testing",
      "Smart contract development and security audit initiation",
    ],
  },
  {
    id: 2,
    title: "Activation & Node Launch",
    photo: roadmapImg02,
    point: [
      "Public node tier launch",
      "Early community expansion",
      "Initial partnerships",
      "AI Engine public activation",
    ],
  },
  {
    id: 3,
    title: "RWA & Staking Release",
    photo: roadmapImg01,
    point: [
      "RWA revenue integration begins",
      "ARX staking system goes live",
      "CTO reward system activated",
      "Ecosystem utilities rollout",
    ],
  },
  {
    id: 4,
    title: "AI Node Expansion",
    photo: roadmapImg03,
    point: [
      "Node network scaling",
      "AI Engine V2 upgrade",
      "Cross-chain integration",
      "Mobile app development",
    ],
  },
  {
    id: 5,
    title: "Ecosystem Integration & Global Growth",
    photo: roadmapImg01,
    point: [
      "Merchant & UCard integrations",
      "Enterprise-level RWA solutions",
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
    question: "How is AUREX backed by Real-World Assets (RWA)?",
    answer:
      "AUREX operates on an asset-backed model where ecosystem value is linked to real commodities, real revenue streams, and real economic activity. Through on-chain verification and tokenized utility, ARX tokens and node rewards are supported by real-world asset flows, helping to reduce volatility and enhance long-term sustainability compared to purely speculative crypto models.",
  },
  {
    id: 4,
    question: "What is an AUREX Node and how does it generate value?",
    answer:
      "An AUREX Node is a participation unit within the ecosystem that provides access to ARX token allocation, airdrop rewards, and daily staking returns powered by AUREX’s AI trading and RWA revenue model. Node holders benefit from structured reward caps, early liquidity advantages, and long-term ecosystem growth, with higher-tier nodes unlocking additional incentives such as CTO profit sharing.",
  },
];

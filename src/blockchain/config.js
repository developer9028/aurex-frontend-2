import { bsc, bscTestnet } from "wagmi/chains";
import { TOKEN_ABI } from "./abi/token";
import { NODE_ABI } from "./abi/node";
const environment = import.meta.env.VITE_ENVIRONMENT || "dev";

const getConfig = (environment) => {
  console.log("Environment: ", environment);
  if (environment === "prod") {
    return {
      RPC_URL:
        "https://bsc-mainnet.infura.io/v3/76d1fe2dcd1f4694a71aa5268eac8c8e",
      CHAIN: bsc,
      CHAIN_ID: bsc.id,
      TOKEN_ABI: TOKEN_ABI,
      NODE_ABI: NODE_ABI,
      OWNER: "0x306bC6557BFAC07BF8cC0E1D744897Fed605ACF2",
      NODE_SALE_CONTRACT_ADDRESS: "0x2032D1D5c1B410B43561C3C51a8BE95eF7D5399B",
      AUREX_TOKEN_CONTRACT_ADDRESS:
        "0x233178d3265B5F1Ae6f3F83aF8919774a13A794A",
      USDT_CONTRACT_ADDRESS: "0x55d398326f99059fF775485246999027B3197955",
      USDT_DECIMALS: 18,
      USDT_SYMBOL: "USDT",
      ARX_DECIMALS: 18,
    };
  } else {
    return {
      RPC_URL: "https://data-seed-prebsc-1-s1.binance.org:8545",
      CHAIN: bscTestnet,
      CHAIN_ID: bscTestnet.id,
      TOKEN_ABI: TOKEN_ABI,
      NODE_ABI: NODE_ABI,
      NODE_SALE_CONTRACT_ADDRESS: "0x1C75b1f2175fa7f62951dEe8b9F1B749a7D06F1b",
      AUREX_TOKEN_CONTRACT_ADDRESS:
        "0x2De40C0eb034aaf05d2884eA9658088e1D9593BD",
      OWNER: "0xd3E332619A85FBe005F847BAE0Fe6579b8795084",
      USDT_CONTRACT_ADDRESS: "0xbDE02cF1Bc4904046633fa16beDD9b931136E8AB",
      USDT_DECIMALS: 18,
      USDT_SYMBOL: "USDT",
      ARX_DECIMALS: 18,
    };
  }
};

export const config = getConfig(environment);

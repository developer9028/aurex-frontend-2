import { bsc, bscTestnet } from "wagmi/chains";
import { TOKEN_ABI } from "./abi/token";
import { NODE_ABI } from "./abi/node";
import { STAKING_ABI } from "./abi/staking";

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
      STAKING_ABI: STAKING_ABI,
      OWNER: "0x306bC6557BFAC07BF8cC0E1D744897Fed605ACF2",
      NODE_SALE_CONTRACT_ADDRESS: "0x2032D1D5c1B410B43561C3C51a8BE95eF7D5399B",
      AUREX_TOKEN_CONTRACT_ADDRESS:
        "0x233178d3265B5F1Ae6f3F83aF8919774a13A794A",
      STAKING_CONTRACT_ADDRESS: "", // TODO: fill when mainnet deployed
      USDT_CONTRACT_ADDRESS: "0x55d398326f99059fF775485246999027B3197955",
      USDT_DECIMALS: 18,
      USDT_SYMBOL: "USDT",
      ARX_DECIMALS: 18,
    };
  } else {
    return {
      RPC_URL: "https://bsc-testnet.infura.io/v3/76d1fe2dcd1f4694a71aa5268eac8c8e",
      CHAIN: bscTestnet,
      CHAIN_ID: bscTestnet.id,
      TOKEN_ABI: TOKEN_ABI,
      NODE_ABI: NODE_ABI,
      STAKING_ABI: STAKING_ABI,
      NODE_SALE_CONTRACT_ADDRESS: "0x5676ba67eae088d21e93654044114149fbe232ac",
      AUREX_TOKEN_CONTRACT_ADDRESS:
        "0xbaF25B731D67Eb314FFecA04Db8A57b3f45bD8A2",
      STAKING_CONTRACT_ADDRESS: "0x660a20AB38067EA50a55BaccB18a00e0C3E65720",
      OWNER: "0xd3E332619A85FBe005F847BAE0Fe6579b8795084",
      USDT_CONTRACT_ADDRESS: "0x8225838dd8f89960240d5553552a5c27e2bcc57b",
      USDT_DECIMALS: 18,
      USDT_SYMBOL: "USDT",
      ARX_DECIMALS: 18,
    };
  }
};

export const config = getConfig(environment);

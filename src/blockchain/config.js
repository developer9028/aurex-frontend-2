import { bsc, bscTestnet } from "wagmi/chains";
import { TOKEN_ABI } from "./abi/token";
import { NODE_ABI } from "./abi/node";
const environment = import.meta.env.VITE_ENVIRONMENT || "dev";

const getConfig = (environment) => {
    console.log("Environment: ", environment);
    if (environment === 'prod') {
        return {
            RPC_URL: 'https://bsc-testnet.infura.io/v3/a35f393cf0a94c6196ff69faf4816b23',
            CHAIN: bsc,
            CHAIN_ID: bsc.id,
            TOKEN_ABI: TOKEN_ABI,
            NODE_ABI: NODE_ABI,
            OWNER: '0x3ff88b69d1762aa444c85c30c4b0b795f9c48b59',
            NODE_SALE_CONTRACT_ADDRESS: '0xA4eXNodeSaleContractAddressProd',
            AUREX_TOKEN_CONTRACT_ADDRESS: '0xAurexTokenContractAddressProd',
            USDT_CONTRACT_ADDRESS: '0xUSDTContractAddressProd',
            USDT_DECIMALS: 6,
            USDT_SYMBOL: 'USDT',
            ARX_DECIMALS: 18
        }
    } else {
        return {
            RPC_URL: 'https://data-seed-prebsc-1-s1.binance.org:8545',
            CHAIN: bscTestnet,
            CHAIN_ID: bscTestnet.id,
            TOKEN_ABI: TOKEN_ABI,
            NODE_ABI: NODE_ABI,
            NODE_SALE_CONTRACT_ADDRESS: '0x40ea973b36fef68B891AFd17965da8157051A793',
            AUREX_TOKEN_CONTRACT_ADDRESS: '0x020e0e964a9ae84dcb34e41e2de606277f34744d',
            OWNER: '0x71D7F36C664Bb2fE8eA895d16AF14928eB812ebB',
            USDT_CONTRACT_ADDRESS: '0x71E53ea9f5a19A0aFB72d4fFCEBB5c0Da9c57152',
            USDT_DECIMALS: 6,
            USDT_SYMBOL: 'USDT',
            ARX_DECIMALS: 18
        }
    }
}


export const config = getConfig(environment);

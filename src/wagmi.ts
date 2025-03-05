import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { sepolia } from "wagmi/chains";

const electroneumTestnet = {
  id: 5201420,
  name: "Electroneum Testnet",
  iconUrl: "https://cryptologos.cc/logos/electroneum-etn-logo.png",
  iconBackground: "#fff",
  nativeCurrency: { name: "Electroneum", symbol: "ETN", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.ankr.com/electroneum_testnet"] },
  },
  blockExplorers: {
    default: { name: "Electroneum Explorer", url: "https://blockexplorer.thesecurityteam.rocks/" },
  },
};

export const config = getDefaultConfig({
  appName: import.meta.env.VITE_WALLET_CONNECT_PROJECT_NAME,
  projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
  chains: [
    electroneumTestnet,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  ssr: true,
});


// import { getDefaultConfig } from "@rainbow-me/rainbowkit";
// import { sepolia } from "wagmi/chains";

// const Electroneum = {
//   id: 5000,
//   name: "Electroneum",
//   iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/27075.png",
//   iconBackground: "#fff",
//   nativeCurrency: { name: "Electroneum", symbol: "ETN", decimals: 18 },
//   rpcUrls: {
//     default: { http: ["https://rpc.sepolia.Electroneum.xyz	"] },
//   },
//   blockExplorers: {
//     default: { name: "SnowTrace", url: "https://Electroneumscan.xyz/" },
//   },
// };

// export const config = getDefaultConfig({
//   appName: import.meta.env.VITE_WALLET_CONNECT_PROJECT_NAME,
//   projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
//   chains: [
//     Electroneum,
//     ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
//   ],
//   ssr: true,
// });

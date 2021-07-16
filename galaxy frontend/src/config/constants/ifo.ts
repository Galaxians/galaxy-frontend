import { Ifo } from "./types";

const ifos: Ifo[] = [
  // {
  //   id: "belt",
  //   address: "0xc9FBedC033a1c479a6AD451ffE463025E92a1d38",
  //   isActive: true,
  //   name: "Belt (BELT)",
  //   subTitle: "AMM protocol incorporating multi-strategy yield optimization",
  //   description:
  //     "Belt.fi is a protocol that allows users to retain the stability of their asset positions and get maximum yields with minimal risk, including automated vault compounding and yield optimization strategies. BELT is the governance and incentivization token of Belt Finance. BELT will be distributed to all types of pools.",
  //   launchDate: "Mar. 10",
  //   launchTime: "5PM SGT",
  //   saleAmount: "150,000 BELT",
  //   raiseAmount: "$3,000,000",
  //   cakeToBurn: "$1,500,000",
  //   projectSiteUrl: "https://beta.belt.fi/",
  //   currency: "CAKE-BNB LP",
  //   currencyAddress: "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6",
  //   tokenDecimals: 18,
  //   tokenSymbol: "BELT",
  //   releaseBlockNumber: 5493919,
  //   campaignId: "511080000",
  // },
  // {
  //   id: "watch",
  //   address: "0x55344b55C71Ad8834C397E6e08dF5195cF84fe6d",
  //   isActive: false,
  //   name: "Yieldwatch (WATCH)",
  //   subTitle: "A smart yield farming dashboard on BSC",
  //   description:
  //     "Yieldwatch is a smart yield farming dashboard on Binance Smart Chain that lets you monitor your liquidity pools, yield farming and token staking performance with fast and casual UI. The $WATCH token is a membership token, which is required to access advanced PRO features.",
  //   launchDate: "Mar. 4",
  //   launchTime: "5PM SGT",
  //   saleAmount: "8,000,000 WATCH",
  //   raiseAmount: "$800,000",
  //   cakeToBurn: "$400,000",
  //   projectSiteUrl: "https://yieldwatch.net/",
  //   currency: "CAKE-BNB LP",
  //   currencyAddress: "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6",
  //   tokenDecimals: 18,
  //   tokenSymbol: "WATCH",
  //   releaseBlockNumber: 5294924,
  //   campaignId: "511070000",
  // },
  // {
  //   id: "berry",
  //   address: "0x5d028cE3435B2bB9AceBfaC599EEbA1ccD63d7dd",
  //   isActive: false,
  //   name: "Berry (BRY)",
  //   subTitle: "A decentralized oracle network on BSC",
  //   description:
  //     "Berry Data is a transparent community-veriﬁed price oracle on BSC. Berry Data provides a trustless and decentralized alternative for off-chain data. As the governance token for Berry Data, BRY allows holders to pay for Berry Data feeds, vote on governance issues, validate data through staking, and build the Berry ecosystem.",
  //   launchDate: "Feb. 16",
  //   launchTime: "5PM SGT",
  //   saleAmount: "2,000,000 BRY",
  //   raiseAmount: "$1,000,000",
  //   cakeToBurn: "$500,000",
  //   projectSiteUrl: "https://berrydata.co/",
  //   currency: "CAKE-BNB LP",
  //   currencyAddress: "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6",
  //   tokenDecimals: 18,
  //   tokenSymbol: "BRY",
  //   releaseBlockNumber: 4750968,
  //   campaignId: "511060000",
  // },
  // {
  //   id: "soteria",
  //   address: "0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e",
  //   isActive: false,
  //   name: "Soteria (wSOTE)",
  //   subTitle:
  //     "A blockchain based mutual to share the risk of DeFi on Binance Smart Chain",
  //   description:
  //     "Soteria allows users to buy insurance cover to greatly diminish or reduce the financial risk of hacks. It replaces the idea of a traditional insurance company, because it is wholly owned by the members. The model encourages engagement as members receive economic incentives for participating in Risk Assessment, Claims Assessment and Governance.",
  //   launchDate: "Jan. 21",
  //   launchTime: "4PM SGT",
  //   saleAmount: "1,500,000 wSOTE",
  //   raiseAmount: "$525,000",
  //   cakeToBurn: "$262,500",
  //   projectSiteUrl: "https://soteria.finance/#/",
  //   currency: "CAKE-BNB LP",
  //   currencyAddress: "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6",
  //   tokenDecimals: 18,
  //   tokenSymbol: "wSOTE",
  //   releaseBlockNumber: 4086064,
  //   campaignId: "511050000",
  // },
  // {
  //   id: "helmet",
  //   address: "0xa32509d760ee47Eb2Be96D338b5d69B5FBa4eFEB",
  //   isActive: false,
  //   name: "Helmet.insure (Helmet)",
  //   subTitle: "Crypto-assets insurance trading platform",
  //   description:
  //     "Helmet is a peer-to-peer insurance protocol written with options trading logic, which allows anyone to create any insurance policy easily in the market. Helmet aims to enable DeFi users to be protected against the risk of price fluctuations by providing price-shield insurance for BSC assets. They provide suppliers with a range of insurance types to sell, giving a variety of hedging strategies to the market.",
  //   launchDate: "Jan. 13",
  //   launchTime: "5PM SGT",
  //   saleAmount: "10,000,000 Helmet",
  //   raiseAmount: "$1,000,000",
  //   cakeToBurn: "$500,000",
  //   projectSiteUrl: "https://www.helmet.insure/",
  //   currency: "CAKE-BNB LP",
  //   currencyAddress: "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6",
  //   tokenDecimals: 18,
  //   tokenSymbol: "Helmet",
  //   releaseBlockNumber: 3771926,
  //   campaignId: "511040000",
  // },
  // {
  //   id: "tenet",
  //   address: "0xB922aA19A2603A07C6C9ED6c236618C9bac51f06",
  //   isActive: false,
  //   name: "Tenet (TEN)",
  //   subTitle: "Cross-chain Automated Market Maker",
  //   description:
  //     "Tenet is a cross-chain Automated Market Maker (AMM) connector that provides a decentralized Liquidity Tap for various tokens. The Liquidity Tap is the powerhouse of the Liquidity Pool, employing a dynamic algorithm to give the Liquidity Provider fairer, more efficient, and richer incentives. Tenet aims to build a cross-chain and cross-platform toolkit protocol that allows the demand side to customize the parameters of the liquidity tap, allowing them to reach out to more liquidity participants effectively and with relative ease.",
  //   launchDate: "Jan. 5",
  //   launchTime: "3PM SGT",
  //   saleAmount: "1,000,000 TEN",
  //   raiseAmount: "$1,000,000",
  //   cakeToBurn: "$500,000",
  //   projectSiteUrl: "https://www.tenet.farm/",
  //   currency: "CAKE-BNB LP",
  //   currencyAddress: "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6",
  //   tokenDecimals: 18,
  //   tokenSymbol: "TEN",
  //   releaseBlockNumber: 3483883,
  //   campaignId: "511030000",
  // },
  // {
  //   id: "ditto",
  //   address: "0x570c9eB19553526Fb35895a531928E19C7D20788",
  //   isActive: false,
  //   name: "Ditto (DITTO)",
  //   subTitle: "Next-gen elastic supply token",
  //   description:
  //     "Ditto is the first elastic supply token on the Binance Smart Chain. Its goal is to maintain a stable price of $1, where its supply will adapt to changes in demand. All supply changes will apply equally to every wallet holding Ditto, and holders should always have the same % of the total supply",
  //   launchDate: "Dec. 23",
  //   launchTime: "3PM SGT",
  //   saleAmount: "700,000 DITTO",
  //   raiseAmount: "$630,000",
  //   cakeToBurn: "$315,000",
  //   projectSiteUrl: "https://ditto.money/",
  //   currency: "CAKE-BNB LP",
  //   currencyAddress: "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6",
  //   tokenDecimals: 9,
  //   tokenSymbol: "DITTO",
  //   releaseBlockNumber: 3279767,
  //   campaignId: "511020000",
  // },
  // {
  //   id: "blink",
  //   address: "0x44a9Cc8463EC00937242b660BF65B10365d99baD",
  //   isActive: false,
  //   name: "BLINk (BLK)",
  //   subTitle: "Online games on BSC",
  //   description:
  //     "BLINk enables BNB holders to enjoy gaming experiences that WINk users on Tron have been enjoying for over two years.",
  //   launchDate: "Nov. 20",
  //   launchTime: "9PM SGT",
  //   saleAmount: "100,000,000 BLINK",
  //   raiseAmount: "$1,000,000",
  //   cakeToBurn: "$500,000",
  //   projectSiteUrl: "https://blink.wink.org",
  //   currency: "CAKE-BNB LP",
  //   currencyAddress: "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6",
  //   tokenDecimals: 6,
  //   tokenSymbol: "blink",
  //   releaseBlockNumber: 3279767,
  //   campaignId: "511010000",
  // },
  {
    id: "Glx",
    address: "0x4F2906C0e6891bb0A7440db0ce6e806cC03bC852",
    isActive: true,
    name: "GALAXIA (GLX)",
    subTitle: "Online games on BSC",
    description:
      "GLX enables BNB holders to enjoy gaming experiences that WINk users on Tron have been enjoying for over two years.",
    launchDate: "July. 15",
    launchTime: "1:25PM SGT",
    saleAmount: "1,000,000 GLX",
    raiseAmount: "$10,000",
    cakeToBurn: "$500,000",
    projectSiteUrl: "https://GLX.wink.org",
    currency: "GLX",
    currencyAddress: "0x8664978bFA02B6BA296AF00b402911d96bb523BF",
    tokenDecimals: 18,
    tokenSymbol: "GLX",
    releaseBlockNumber: 10605404,
    campaignId: "511010000",
  },
];

export default ifos;

import contracts from "./contracts";
import { FarmConfig, QuoteToken } from "./types";

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: "GLX-BNB LP",
    isTokenOnly: false,
    lpAddresses: {
      97: "0x442b350d69bd8Aa240376342b40eF2bc530cB776",
      56: "0x0f3cF7457D655973420b2A9A2b3681B6b13B0DFf",
    },
    tokenSymbol: "GLX",
    tokenAddresses: {
      97: "0x4F2906C0e6891bb0A7440db0ce6e806cC03bC852",
      56: "0x8723eEb54d8fdbCE7900a60b4893C2A312439f87",
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: "GLX-BUSD LP",
    isTokenOnly: false,
    lpAddresses: {
      97: "0x671477c84Df69f0283F44F813784bBC78289F382",
      56: "0x144fe2e8cF8A6f683366EE6B79DB904F473bd0ad",
    },
    tokenSymbol: "BUSD",
    tokenAddresses: {
      97: "0xA697EC8f0DFfaF4C4AE800d9960cC75D33Cd5615",
      56: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    lpSymbol: "GLX-BTC LP",
    isTokenOnly: false,
    lpAddresses: {
      97: "0x1361144C20960b9aC3d42191129139536512aAb6",
      56: "0x8450F872d8812d96cDa19e10446cC1a4976898dF",
    },
    tokenSymbol: "BTC",
    tokenAddresses: {
      97: "0x4F2906C0e6891bb0A7440db0ce6e806cC03bC852",
      56: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 3,
    lpSymbol: "GLX-ETH LP",
    isTokenOnly: false,
    lpAddresses: {
      97: "0x442b350d69bd8Aa240376342b40eF2bc530cB776", // glx-busd
      56: "0x9CA6FfDcf143a087277E1e60D41511E3F07D30FE",
    },
    tokenSymbol: "ETH",
    tokenAddresses: {
      97: "0x4F2906C0e6891bb0A7440db0ce6e806cC03bC852",
      56: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 4,
    lpSymbol: "BNB-BUSD LP",
    isTokenOnly: false,
    lpAddresses: {
      97: "0x442b350d69bd8Aa240376342b40eF2bc530cB776", // glx-busd
      56: "0x2a19226CEb4b186624fa046441D45EB0134808aD",
    },
    tokenSymbol: "BUSD",
    tokenAddresses: {
      97: "0x4F2906C0e6891bb0A7440db0ce6e806cC03bC852",
      56: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    lpSymbol: "BUSD-USDT LP",
    isTokenOnly: false,
    lpAddresses: {
      97: "0x442b350d69bd8Aa240376342b40eF2bc530cB776", // glx-busd
      56: "0x250F85b7BE84cBAabcB704d9184c66b172098540",
    },
    tokenSymbol: "USD",
    tokenAddresses: {
      97: "0x4F2906C0e6891bb0A7440db0ce6e806cC03bC852",
      56: "0x55d398326f99059fF775485246999027B3197955",
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    lpSymbol: "GLX-CAKE LP",
    isTokenOnly: false,
    lpAddresses: {
      97: "0x442b350d69bd8Aa240376342b40eF2bc530cB776", // glx-busd
      56: "0x481C996afe3136521d43245CF0A73D885e09B6C2",
    },
    tokenSymbol: "CAKE",
    tokenAddresses: {
      97: "0x4F2906C0e6891bb0A7440db0ce6e806cC03bC852",
      56: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 7,
    lpSymbol: "GLX-BAKE LP",
    isTokenOnly: false,
    lpAddresses: {
      97: "0x442b350d69bd8Aa240376342b40eF2bc530cB776", // glx-busd
      56: "0xF0782A407ccDa251A9246f0B5DC5c4f87f6369d7",
    },
    tokenSymbol: "BAKE",
    tokenAddresses: {
      97: "0x4F2906C0e6891bb0A7440db0ce6e806cC03bC852",
      56: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 8,
    lpSymbol: "GLX-BANANA LP",
    isTokenOnly: false,
    lpAddresses: {
      97: "0x442b350d69bd8Aa240376342b40eF2bc530cB776", // glx-busd
      56: "0xfdFfF02033e0E293ED12eBcCd42BBDd81D07d247",
    },
    tokenSymbol: "BANANA",
    tokenAddresses: {
      97: "0x4F2906C0e6891bb0A7440db0ce6e806cC03bC852",
      56: "0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95",
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 9,
    lpSymbol: "GLX-EPS LP",
    isTokenOnly: false,
    lpAddresses: {
      97: "0x442b350d69bd8Aa240376342b40eF2bc530cB776", // glx-busd
      56: "0x4F17A125923fA27186c583BB4b13691168a7CB48",
    },
    tokenSymbol: "EPS",
    tokenAddresses: {
      97: "0x4F2906C0e6891bb0A7440db0ce6e806cC03bC852",
      56: "0xA7f552078dcC247C2684336020c03648500C6d9F",
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 10,
    lpSymbol: "GLX-NRV LP",
    isTokenOnly: false,
    lpAddresses: {
      97: "0x442b350d69bd8Aa240376342b40eF2bc530cB776", // glx-busd
      56: "0x31861bc843fEFcc4B20750e5F7D3EBC63FB6c415",
    },
    tokenSymbol: "NRV",
    tokenAddresses: {
      97: "0x4F2906C0e6891bb0A7440db0ce6e806cC03bC852",
      56: "0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096",
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 11,
    lpSymbol: "GLX-CAPS LP",
    isTokenOnly: false,
    lpAddresses: {
      97: "0x442b350d69bd8Aa240376342b40eF2bc530cB776", // glx-busd
      56: "0x6bF326298304d90C794fa99F3da0b335231AdE27",
    },
    tokenSymbol: "CAPS",
    tokenAddresses: {
      97: "0x4F2906C0e6891bb0A7440db0ce6e806cC03bC852",
      56: "0xFfBa7529AC181c2Ee1844548e6D7061c9A597dF4",
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 12,
    lpSymbol: "GLX",
    isTokenOnly: true,
    lpAddresses: {
      97: "0x442b350d69bd8Aa240376342b40eF2bc530cB776", // glx-busd
      56: "0x144fe2e8cF8A6f683366EE6B79DB904F473bd0ad",
    },
    tokenSymbol: "GLX",
    tokenAddresses: {
      97: "0x4F2906C0e6891bb0A7440db0ce6e806cC03bC852",
      56: "0x8723eEb54d8fdbCE7900a60b4893C2A312439f87",
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // {
  //   pid: 90,
  //   lpSymbol: 'BELT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x83B92D283cd279fF2e057BD86a95BdEfffED6faa',
  //   },
  //   tokenSymbol: 'BELT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 89,
  //   lpSymbol: 'RAMP-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbF36959939982D0D34B37Fb3f3425da9676C13a3',
  //   },
  //   tokenSymbol: 'RAMP',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8519ea49c997f50ceffa444d240fb655e89248aa',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  // {
  //   pid: 88,
  //   lpSymbol: 'BFI-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x45a9e8d48bc560416008d122c9437927fed50e7d',
  //   },
  //   tokenSymbol: 'BFI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x81859801b01764D4f0Fa5E64729f5a6C3b91435b',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 87,
  //   lpSymbol: 'DEXE-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x69ab367bc1bea1d2c0fb4dbaec6b7197951da56c',
  //   },
  //   tokenSymbol: 'DEXE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x039cb485212f996a9dbb85a9a75d898f94d38da6',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  // {
  //   pid: 86,
  //   lpSymbol: 'BEL-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xAB97952a2806D5c92b7046c7aB13a72A87e0097b',
  //   },
  //   tokenSymbol: 'BEL',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8443f091997f06a61670b735ed92734f5628692f',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 85,
  //   lpSymbol: 'TPT-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x4db28767d1527ba545ca5bbda1c96a94ed6ff242',
  //   },
  //   tokenSymbol: 'TPT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xeca41281c24451168a37211f0bc2b8645af45092',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  // {
  //   pid: 84,
  //   lpSymbol: 'WATCH-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xdc6c130299e53acd2cc2d291fa10552ca2198a6b',
  //   },
  //   tokenSymbol: 'WATCH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 83,
  //   lpSymbol: 'xMARK-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x292ca56ed5b3330a19037f835af4a9c0098ea6fa',
  //   },
  //   tokenSymbol: 'xMARK',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x26a5dfab467d4f58fb266648cae769503cec9580',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  // {
  //   pid: 82,
  //   lpSymbol: 'bMXX-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x4D5aA94Ce6BbB1BC4eb73207a5a5d4D052cFcD67',
  //   },
  //   tokenSymbol: 'bMXX',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x4131b87f74415190425ccd873048c708f8005823',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 81,
  //   lpSymbol: 'IOTX-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x36b8b28d37f93372188f2aa2507b68a5cd8b2664',
  //   },
  //   tokenSymbol: 'IOTX',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x9678e42cebeb63f23197d726b29b1cb20d0064e5',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  // {
  //   pid: 80,
  //   lpSymbol: 'BOR-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x86e650350c40a5178a5d014ba37fe8556232b898',
  //   },
  //   tokenSymbol: 'BOR',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x92d7756c60dcfd4c689290e8a9f4d263b3b32241',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 79,
  //   lpSymbol: 'bOPEN-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x9d8b7e4a9d53654d82f12c83448d8f92732bc761',
  //   },
  //   tokenSymbol: 'bOPEN',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xF35262a9d427F96d2437379eF090db986eaE5d42',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 78,
  //   lpSymbol: 'SUSHI-ETH LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x17580340f3daedae871a8c21d15911742ec79e0f',
  //   },
  //   tokenSymbol: 'SUSHI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x947950bcc74888a40ffa2593c5798f11fc9124c4',
  //   },
  //   quoteTokenSymbol: QuoteToken.ETH,
  //   quoteTokenAdresses: contracts.eth,
  //   isCommunity: false,
  // },
  // {
  //   pid: 77,
  //   lpSymbol: 'DODO-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x9e642d174b14faea31d842dc83037c42b53236e6',
  //   },
  //   tokenSymbol: 'DODO',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 76,
  //   lpSymbol: 'SWINGBY-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x4576C456AF93a37a096235e5d83f812AC9aeD027',
  //   },
  //   tokenSymbol: 'SWINGBY',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 75,
  //   lpSymbol: 'BRY-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x5E3CD27F36932Bc0314aC4e2510585798C34a2fC',
  //   },
  //   tokenSymbol: 'BRY',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 74,
  //   lpSymbol: 'ZEE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xb5ab3996808c7e489dcdc0f1af2ab212ae0059af',
  //   },
  //   tokenSymbol: 'ZEE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x44754455564474a89358b2c2265883df993b12f0',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 73,
  //   lpSymbol: 'SWGb-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc1800c29cf91954357cd0bf3f0accaada3d0109c',
  //   },
  //   tokenSymbol: 'SWGb',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 72,
  //   lpSymbol: 'COMP-ETH LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0392957571f28037607c14832d16f8b653edd472',
  //   },
  //   tokenSymbol: 'COMP',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
  //   },
  //   quoteTokenSymbol: QuoteToken.ETH,
  //   quoteTokenAdresses: contracts.eth,
  //   isCommunity: false,
  // },
  // {
  //   pid: 71,
  //   lpSymbol: 'SFP-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xcbe2cf3bd012e9c1ade2ee4d41db3dac763e78f3',
  //   },
  //   tokenSymbol: 'SFP',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 70,
  //   lpSymbol: 'BETH-ETH LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x99d865ed50d2c32c1493896810fa386c1ce81d91',
  //   },
  //   tokenSymbol: 'BETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x250632378e573c6be1ac2f97fcdf00515d0aa91b',
  //   },
  //   quoteTokenSymbol: QuoteToken.ETH,
  //   quoteTokenAdresses: contracts.eth,
  //   isCommunity: false,
  // },
  // {
  //   pid: 69,
  //   lpSymbol: 'LINA-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xeb325a8ea1c5abf40c7ceaf645596c1f943d0948',
  //   },
  //   tokenSymbol: 'LINA',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x762539b45a1dcce3d36d080f74d1aed37844b878',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  // {
  //   pid: 68,
  //   lpSymbol: 'LIT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x60bB03D1010b99CEAdD0dd209b64bC8bd83da161',
  //   },
  //   tokenSymbol: 'LIT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xb59490ab09a0f526cc7305822ac65f2ab12f9723',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 67,
  //   lpSymbol: 'HGET-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x66b9e1eac8a81f3752f7f3a5e95de460688a17ee',
  //   },
  //   tokenSymbol: 'HGET',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xc7d8d35eba58a0935ff2d5a33df105dd9f071731',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 66,
  //   lpSymbol: 'BDO-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x74690f829fec83ea424ee1f1654041b2491a7be9',
  //   },
  //   tokenSymbol: 'BDO',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x190b589cf9fb8ddeabbfeae36a813ffb2a702454',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 65,
  //   lpSymbol: 'EGLD-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3ef4952c7a9afbe374ea02d1bf5ed5a0015b7716',
  //   },
  //   tokenSymbol: 'EGLD',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 63,
  //   lpSymbol: 'UST-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xD1F12370b2ba1C79838337648F820a87eDF5e1e6',
  //   },
  //   tokenSymbol: 'UST',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  // {
  //   pid: 62,
  //   lpSymbol: 'mAMZN-UST LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc92Dc34665c8a21f98E1E38474580b61b4f3e1b9',
  //   },
  //   tokenSymbol: 'mAMZN',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x3947B992DC0147D2D89dF0392213781b04B25075',
  //   },
  //   quoteTokenSymbol: QuoteToken.UST,
  //   quoteTokenAdresses: contracts.ust,
  //   isCommunity: false,
  // },
  // {
  //   pid: 61,
  //   lpSymbol: 'mGOOGL-UST LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x852A68181f789AE6d1Da3dF101740a59A071004f',
  //   },
  //   tokenSymbol: 'mGOOGL',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f',
  //   },
  //   quoteTokenSymbol: QuoteToken.UST,
  //   quoteTokenAdresses: contracts.ust,
  //   isCommunity: false,
  // },
  // {
  //   pid: 60,
  //   lpSymbol: 'mNFLX-UST LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xF609ade3846981825776068a8eD7746470029D1f',
  //   },
  //   tokenSymbol: 'mNFLX',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc',
  //   },
  //   quoteTokenSymbol: QuoteToken.UST,
  //   quoteTokenAdresses: contracts.ust,
  //   isCommunity: false,
  // },
  // {
  //   pid: 59,
  //   lpSymbol: 'mTSLA-UST LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xD5664D2d15cdffD597515f1c0D945c6c1D3Bf85B',
  //   },
  //   tokenSymbol: 'mTSLA',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xF215A127A196e3988C09d052e16BcFD365Cd7AA3',
  //   },
  //   quoteTokenSymbol: QuoteToken.UST,
  //   quoteTokenAdresses: contracts.ust,
  //   isCommunity: false,
  // },
  // {
  //   pid: 58,
  //   lpSymbol: 'wSOTE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xffb9e2d5ce4378f1a89b29bf53f80804cc078102',
  //   },
  //   tokenSymbol: 'wSOTE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x541e619858737031a1244a5d0cd47e5ef480342c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 57,
  //   lpSymbol: 'FRONT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x36b7d2e5c7877392fb17f9219efad56f3d794700',
  //   },
  //   tokenSymbol: 'FRONT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 56,
  //   lpSymbol: 'Helmet-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x6411310c07d8c48730172146fd6f31fa84034a8b',
  //   },
  //   tokenSymbol: 'Helmet',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 55,
  //   lpSymbol: 'BTCST-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x91589786D36fEe5B27A5539CfE638a5fc9834665',
  //   },
  //   tokenSymbol: 'BTCST',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x78650b139471520656b9e7aa7a5e9276814a38e9',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 54,
  //   lpSymbol: 'LTC-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbc765fd113c5bdb2ebc25f711191b56bb8690aec',
  //   },
  //   tokenSymbol: 'LTC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 53,
  //   lpSymbol: 'USDC-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  // {
  //   pid: 52,
  //   lpSymbol: 'DAI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3aB77e40340AB084c3e23Be8e5A6f7afed9D41DC',
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  // {
  //   pid: 51,
  //   lpSymbol: 'BSCX-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x20781bc3701c5309ac75291f5d09bdc23d7b7fa8',
  //   },
  //   tokenSymbol: 'BSCX',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 50,
  //   lpSymbol: 'TEN-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x01ecc44ddd2d104f44d2aa1a2bd9dfbc91ae8275',
  //   },
  //   tokenSymbol: 'TEN',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xdff8cb622790b7f92686c722b02cab55592f152c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 49,
  //   lpSymbol: 'bALBT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbe14f3a89a4f7f279af9d99554cf12e8c29db921',
  //   },
  //   tokenSymbol: 'bALBT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x72faa679e1008ad8382959ff48e392042a8b06f7',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 46,
  //   lpSymbol: 'OG-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x64373608f2e93ea97ad4d8ca2cce6b2575db2f55',
  //   },
  //   tokenSymbol: 'OG',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf05e45ad22150677a017fbd94b84fbb63dc9b44c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 47,
  //   lpSymbol: 'ASR-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd6b900d5308356317299dafe303e661271aa12f1',
  //   },
  //   tokenSymbol: 'ASR',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x80d5f92c2c8c682070c95495313ddb680b267320',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 48,
  //   lpSymbol: 'ATM-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd5b3ebf1a85d32c73a82b40f75e1cd929caf4029',
  //   },
  //   tokenSymbol: 'ATM',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x25e9d05365c867e59c1904e7463af9f312296f9e',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 45,
  //   lpSymbol: 'REEF-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x58B58cab6C5cF158f63A2390b817710826d116D0',
  //   },
  //   tokenSymbol: 'REEF',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 44,
  //   lpSymbol: 'Ditto-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x470bc451810b312bbb1256f96b0895d95ea659b1',
  //   },
  //   tokenSymbol: 'DITTO',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x233d91A0713155003fc4DcE0AFa871b508B3B715',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 43,
  //   lpSymbol: 'JUV-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x51a2ffa5b7de506f9a22549e48b33f6cf0d9030e',
  //   },
  //   tokenSymbol: 'JUV',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xc40c9a843e1c6d01b7578284a9028854f6683b1b',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 42,
  //   lpSymbol: 'PSG-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x9c4f6a5050cf863e67a402e8b377973b4e3372c1',
  //   },
  //   tokenSymbol: 'PSG',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbc5609612b7c44bef426de600b5fd1379db2ecf1',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 39,
  //   lpSymbol: 'UNFI-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbEA35584b9a88107102ABEf0BDeE2c4FaE5D8c31',
  //   },
  //   tokenSymbol: 'UNFI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   multiplier: '1X',
  //   isCommunity: false,
  // },
  // {
  //   pid: 41,
  //   lpSymbol: 'VAI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xff17ff314925dff772b71abdff2782bc913b3575',
  //   },
  //   tokenSymbol: 'VAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   isCommunity: false,
  // },
  // {
  //   pid: 40,
  //   lpSymbol: 'BLK-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xC743Dc05F03D25E1aF8eC5F8228f4BD25513c8d0',
  //   },
  //   tokenSymbol: 'BLK',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 37,
  //   lpSymbol: 'HARD-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x9f40e8a2fcaa267a0c374b6c661e0b372264cc3d',
  //   },
  //   tokenSymbol: 'HARD',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xf79037f6f6be66832de4e7516be52826bc3cbcc4',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   isCommunity: false,
  // },
  // {
  //   pid: 3,
  //   lpSymbol: 'ADA-BNB LP',
  //   lpAddresses: {
  //     97: '0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce',
  //     56: '0xba51d1ab95756ca4eab8737ecd450cd8f05384cf',
  //   },
  //   tokenSymbol: 'ADA',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 4,
  //   lpSymbol: 'BAND-BNB LP',
  //   lpAddresses: {
  //     97: '0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce',
  //     56: '0xc639187ef82271d8f517de6feae4faf5b517533c',
  //   },
  //   tokenSymbol: 'BAND',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 5,
  //   lpSymbol: 'DOT-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
  //   },
  //   tokenSymbol: 'DOT',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 6,
  //   lpSymbol: 'EOS-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x981d2ba1b298888408d342c39c2ab92e8991691e',
  //   },
  //   tokenSymbol: 'EOS',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 7,
  //   lpSymbol: 'LINK-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xaebe45e3a03b734c68e5557ae04bfc76917b4686',
  //   },
  //   tokenSymbol: 'LINK',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 11,
  //   lpSymbol: 'USDT-BUSD LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd',
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 12,
  //   lpSymbol: 'TWT-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x610e7a287c27dfFcaC0F0a94f547Cc1B770cF483',
  //   },
  //   tokenSymbol: 'TWT',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x4b0f1812e5df2a09796481ff14017e6005508003',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 13,
  //   lpSymbol: 'XVS-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x41182c32F854dd97bA0e0B1816022e0aCB2fc0bb',
  //   },
  //   tokenSymbol: 'XVS',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 15,
  //   lpSymbol: 'BTCB-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x7561EEe90e24F3b348E1087A005F78B4c8453524',
  //   },
  //   tokenSymbol: 'BTC',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 16,
  //   lpSymbol: 'ALPHA-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x4e0f3385d932F7179DeE045369286FFa6B03d887',
  //   },
  //   tokenSymbol: 'ALPHA',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 17,
  //   lpSymbol: 'USDT-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x20bcc3b8a0091ddac2d0bc30f68e6cbb97de59cd',
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 18,
  //   lpSymbol: 'XRP-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xc7b4b32a3be2cb6572a1c9959401f832ce47a6d2',
  //   },
  //   tokenSymbol: 'XRP',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 19,
  //   lpSymbol: 'ATOM-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x2333c77fc0b2875c11409cdcd3c75d42d402e834',
  //   },
  //   tokenSymbol: 'ATOM',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x0eb3a705fc54725037cc9e008bdede697f62f335',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 20,
  //   lpSymbol: 'YFII-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x574a978c2d0d36d707a05e459466c7a1054f1210',
  //   },
  //   tokenSymbol: 'YFII',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x7f70642d88cf1c4a3a7abb072b53b929b653eda5',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 21,
  //   lpSymbol: 'DAI-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x56c77d59e82f33c712f919d09fceddf49660a829',
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 22,
  //   lpSymbol: 'XTZ-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x5acac332f0f49c8badc7afd0134ad19d3db972e6',
  //   },
  //   tokenSymbol: 'XTZ',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x16939ef78684453bfdfb47825f8a5f714f12623a',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 23,
  //   lpSymbol: 'BCH-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x54edd846db17f43b6e43296134ecd96284671e81',
  //   },
  //   tokenSymbol: 'BCH',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x8ff795a6f4d97e7887c79bea79aba5cc76444adf',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 24,
  //   lpSymbol: 'YFI-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x68Ff2ca47D27db5Ac0b5c46587645835dD51D3C1',
  //   },
  //   tokenSymbol: 'YFI',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 25,
  //   lpSymbol: 'UNI-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x4269e7F43A63CEA1aD7707Be565a94a9189967E9',
  //   },
  //   tokenSymbol: 'UNI',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 26,
  //   lpSymbol: 'FIL-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x35fe9787f0ebf2a200bac413d3030cf62d312774',
  //   },
  //   tokenSymbol: 'FIL',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 27,
  //   lpSymbol: 'INJ-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x7a34bd64d18e44CfdE3ef4B81b87BAf3EB3315B6',
  //   },
  //   tokenSymbol: 'INJ',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xa2b726b1145a4773f68593cf171187d8ebe4d495',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 29,
  //   lpSymbol: 'USDC-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x30479874f9320a62bce3bc0e315c920e1d73e278',
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 30,
  //   lpSymbol: 'SXP-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x752E713fB70E3FA1Ac08bCF34485F14A986956c4',
  //   },
  //   tokenSymbol: 'SXP',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x47bead2563dcbf3bf2c9407fea4dc236faba485a',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 32,
  //   lpSymbol: 'CTK-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x7793870484647a7278907498ec504879d6971EAb',
  //   },
  //   tokenSymbol: 'CTK',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 34,
  //   lpSymbol: 'STAX-CAKE LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x7cd05f8b960ba071fdf69c750c0e5a57c8366500',
  //   },
  //   tokenSymbol: 'STAX',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0x0Da6Ed8B13214Ff28e9Ca979Dd37439e8a88F6c4',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   isCommunity: true,
  // },
  // {
  //   pid: 35,
  //   lpSymbol: 'NAR-CAKE LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x745c4fd226e169d6da959283275a8e0ecdd7f312',
  //   },
  //   tokenSymbol: 'NAR',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xa1303e6199b319a891b79685f0537d289af1fc83',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   isCommunity: true,
  // },
  // {
  //   pid: 36,
  //   lpSymbol: 'NYA-CAKE LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x2730bf486d658838464a4ef077880998d944252d',
  //   },
  //   tokenSymbol: 'NYA',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xbfa0841f7a90c4ce6643f651756ee340991f99d5',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   isCommunity: true,
  // },
  // {
  //   pid: 38,
  //   lpSymbol: 'bROOBEE-CAKE LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x970858016C963b780E06f7DCfdEf8e809919BcE8',
  //   },
  //   tokenSymbol: 'bROOBEE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   isCommunity: true,
  // },
  // {
  //   pid: 8,
  //   lpSymbol: 'BAKE-BNB Bakery LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xc2eed0f5a0dc28cfa895084bc0a9b8b8279ae492',
  //   },
  //   tokenSymbol: 'BAKE',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 9,
  //   lpSymbol: 'BURGER-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0xd937FB9E6e47F3805981453BFB277a49FFfE04D7',
  //   },
  //   tokenSymbol: 'BURGER',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xae9269f27437f0fcbc232d39ec814844a51d6b8f',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 10,
  //   lpSymbol: 'BAKE-BNB LP',
  //   lpAddresses: {
  //     97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
  //     56: '0x3Da30727ed0626b78C212e81B37B97A8eF8A25bB',
  //   },
  //   tokenSymbol: 'BAKE',
  //   tokenAddresses: {
  //     97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //     56: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
];

export default farms;

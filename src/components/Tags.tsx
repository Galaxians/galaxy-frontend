import React from "react";
import { Tag, VerifiedIcon, CommunityIcon, BinanceIcon, CheckmarkIcon } from "glx-uikit";

const CoreTag = (props) => (
  <Tag variant="secondary" outline startIcon={<VerifiedIcon />} {...props}>
    Core
  </Tag>
);

const CoreTagFarm = (props) => (
  <Tag style={{color: "white", background: "#FF1FFF", height: "30px", padding: "0 12px"}} variant="primary" text-white outline startIcon={<CheckmarkIcon />} {...props}>
    Core
  </Tag>
);

const CommunityTag = (props) => (
  <Tag variant="textSubtle" outline startIcon={<CommunityIcon />} {...props}>
    Community
  </Tag>
);

const BinanceTag = (props) => (
  <Tag variant="binance" outline startIcon={<BinanceIcon />} {...props}>
    Binance
  </Tag>
);

const DualTag = (props) => (
  <Tag variant="textSubtle" outline {...props}>
    Dual
  </Tag>
);

export { CoreTagFarm, CoreTag, CommunityTag, BinanceTag, DualTag };

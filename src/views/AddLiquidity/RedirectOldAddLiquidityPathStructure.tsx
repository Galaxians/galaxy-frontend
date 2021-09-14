import React from "react";
import { Redirect, useParams } from "react-router-dom";
import AddLiquidity from "./index";

const OLD_PATH_STRUCTURE = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;
export default function RedirectOldAddLiquidityPathStructure() {
  const { currencyIdA } = useParams<{ currencyIdA: string }>();
  const match = currencyIdA.match(OLD_PATH_STRUCTURE);
  if (match?.length) {
    return <Redirect to={`/add/${match[1]}/${match[2]}`} />;
  }

  return <AddLiquidity />;
}

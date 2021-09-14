import React from "react";
import { Redirect, useParams } from "react-router-dom";
import AddLiquidity from "./index";

export default function RedirectDuplicateTokenIds() {
  const { currencyIdA, currencyIdB } =
    useParams<{ currencyIdA: string; currencyIdB: string }>();
  if (currencyIdA.toLowerCase() === currencyIdB.toLowerCase()) {
    return <Redirect to={`/add/${currencyIdA}`} />;
  }
  return <AddLiquidity />;
}

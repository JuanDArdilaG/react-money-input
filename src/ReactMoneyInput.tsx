import { PriceValueObject } from "@juandardilag/value-objects/PriceValueObject";
import React, { JSX, useEffect, useState } from "react";

export const ReactMoneyInput = ({
  id,
  initialValue,
  onValueChange,
}: {
  id: string;
  initialValue: number;
  onValueChange: (value: PriceValueObject) => void;
}): JSX.Element => {
  const [priceStr, setPriceStr] = useState(PriceValueObject.zero().toString());

  useEffect(() => {
    setPriceStr(new PriceValueObject(initialValue).toString());
  }, [initialValue]);

  useEffect(() => {
    const input = document.getElementById(id);
    if (!input) return;
    PriceValueObject.parseInput(
      input as HTMLInputElement,
      (priceStr) => {
        const priceVO = PriceValueObject.fromString(priceStr);
        setPriceStr(priceStr);
        onValueChange(priceVO);
      },
      true,
      -1
    );
  }, [id, onValueChange]);

  return (
    <input
      id={id}
      type="text"
      value={priceStr}
      onChange={(e) => setPriceStr(e.target.value)}
    />
  );
};

import { PriceValueObject } from "@juandardilag/value-objects/PriceValueObject";
import { useEffect, useState } from "react";

export const ReactMoneyInput = ({
  id,
  value,
  onValueChange,
}: {
  id: string;
  value: number;
  onValueChange: (value: PriceValueObject) => void;
}) => {
  const [priceVO, setPriceVO] = useState(new PriceValueObject(value));

  useEffect(() => {
    const input = document.getElementById(id);
    if (!input) {
      return;
    }
    PriceValueObject.parseInput(input as HTMLInputElement, (priceStr) => {
      const priceVO = PriceValueObject.fromString(priceStr);
      setPriceVO(priceVO);
      onValueChange(priceVO);
    });
  }, [value, id, onValueChange]);

  return (
    <input
      id={id}
      type="text"
      value={priceVO.toString()}
      onChange={(e) => setPriceVO(PriceValueObject.fromString(e.target.value))}
    />
  );
};

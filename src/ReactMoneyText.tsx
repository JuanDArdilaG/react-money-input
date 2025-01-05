import { PriceValueObject } from "@juandardilag/value-objects/PriceValueObject";
import { JSX } from "react";

export const ReactMoneyText = ({
  value,
  className,
  CustomComponent,
}: {
  value: PriceValueObject | string | number;
  className?: string;
  CustomComponent?: any;
}): JSX.Element => {
  const priceVO =
    typeof value === "string"
      ? PriceValueObject.fromString(value)
      : typeof value === "number"
      ? new PriceValueObject(value)
      : value;

  return !CustomComponent ? (
    <span className={className}>{priceVO.toString()}</span>
  ) : (
    <CustomComponent
      className={className}
      children={<span>{priceVO.toString()}</span>}
    />
  );
};

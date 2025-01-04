import { PriceValueObject } from "@juandardilag/value-objects/PriceValueObject";

export const ReactMoneyText = ({
  value,
  className,
  CustomComponent,
}: {
  value: PriceValueObject | string | number;
  className?: string;
  CustomComponent?: any;
}) => {
  const priceVO =
    value instanceof PriceValueObject
      ? value
      : typeof value === "string"
      ? PriceValueObject.fromString(value)
      : new PriceValueObject(value);
  if (!CustomComponent) {
    return <span className={className}>{priceVO.toString()}</span>;
  }
  return (
    <CustomComponent
      className={className}
      children={<span>{priceVO.toString()}</span>}
    />
  );
};

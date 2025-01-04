import { PriceValueObject } from "@juandardilag/value-objects/PriceValueObject";

export const ReactMoneyText = ({
  value,
  className,
  CustomComponent,
}: {
  value: PriceValueObject;
  className?: string;
  CustomComponent?: any;
}) => {
  if (!CustomComponent) {
    return <span className={className}>{value.toString()}</span>;
  }
  return (
    <CustomComponent
      className={className}
      children={<span>{value.toString()}</span>}
    />
  );
};

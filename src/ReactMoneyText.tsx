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
  return (
    <CustomComponent
      className={className}
      children={<p>{value.toString()}</p>}
    />
  );
};

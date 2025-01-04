import { PriceValueObject } from "@juandardilag/value-objects/PriceValueObject";

export const ReactMoneyText = ({
  value,
  CustomComponent,
}: {
  value: PriceValueObject;
  CustomComponent?: any;
}) => {
  return <CustomComponent children={<p>{value.toString()}</p>} />;
};

import { useState } from "react";
import { ReactMoneyInput } from "./ReactMoneyInput";
import { PriceValueObject } from "@juandardilag/value-objects/PriceValueObject";

export const App = () => {
  const [val, setVal] = useState(PriceValueObject.zero());
  return (
    <>
      <div>Index</div>
      <ReactMoneyInput value={0} onValueChange={setVal} id="test" />
      <button onClick={() => console.log({ val })}>Test</button>
    </>
  );
};

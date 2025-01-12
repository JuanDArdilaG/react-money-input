import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { ReactMoneyInput } from "./ReactMoneyInput";
import { PriceValueObject } from "@juandardilag/value-objects/PriceValueObject";

export * from "./ReactMoneyInput";
export * from "./ReactMoneyText";

const App: React.FC = () => {
  const [price, setPrice] = React.useState(new PriceValueObject(15));

  useEffect(() => {
    console.log({ price });
  }, [price]);

  return (
    <div>
      <h1>Test Decimal Input</h1>
      <ReactMoneyInput
        id="price-input"
        initialValue={0}
        onValueChange={(newPrice) => setPrice(newPrice)}
      />
    </div>
  );
};

const container = document.getElementById("root");
if (!container) {
  throw new Error("Could not find root element");
}
const root = createRoot(container);
root.render(<App />);

import React, { useState, KeyboardEvent } from "react";

export default function SliderInput({ value }: { value: number }) {
  const [enableInput, setEnableInput] = useState<boolean>(false);
  const [changeValue, setChangeValue] = useState<number>(value);

  const valueChange = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === "Escape") {
      setEnableInput(false);
    }
  };

  return (
    <div onDoubleClick={() => setEnableInput(true)}>
      {enableInput ? (
        <input
          value={changeValue}
          onChange={(e) => setChangeValue(Number(e.target.value))}
          onKeyDown={valueChange}
        />
      ) : (
        <label>{changeValue}€</label>
      )}
    </div>
  );
}

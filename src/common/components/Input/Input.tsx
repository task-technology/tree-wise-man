import React, { forwardRef, Ref } from "react";
import { InputProps } from "./config/type";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      labelName,
      inputPlaceholder = "Write here...",
      inputType = "text",
      inputName,
      IsDisabled = false,
      defaultValue = "",
      required = false,
      minValue,
      onChange,
      className,
      accept,
      checked,
    },
    ref
  ) => {
    return (
      <div>
        {labelName && (
          <div className="label">
            <label className="text-lg font-semibold">{labelName}</label>
          </div>
        )}
        <input
          accept={accept}
          ref={ref}
          min={minValue}
          required={required}
          onChange={onChange}
          name={inputName}
          type={inputType}
          disabled={IsDisabled}
          placeholder={inputPlaceholder}
          defaultValue={defaultValue}
          className={`${className} border w-full rounded-sm py-2 pl-2`}
          step={inputType === "number" ? "any" : undefined}
          checked={checked}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

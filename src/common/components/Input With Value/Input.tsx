import React, { forwardRef, Ref } from "react";
import { InputProps } from "./config/type";

const InputWithValue = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      labelName,
      inputPlaceholder = "Write here...",
      inputType = "text",
      inputName,
      IsDisabled = false,
      required = false,
      minValue,
      onChange,
      className,
      accept,
      checked,
      labelClassName,
      value,
    },
    ref
  ) => {
    return (
      <div>
        {labelName && (
          <div className="label">
            <label className={`${labelClassName} text-lg font-semibold`}>
              {labelName}
              {required && <span className="text-red-500 ml-1">*</span>}
            </label>
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
          value={value}
          className={`${className} border border-slateLightThird w-full rounded-sm py-2 pl-2`}
          step={inputType === "number" ? "any" : undefined}
          checked={checked}
        />
      </div>
    );
  }
);

InputWithValue.displayName = "Input";

export default InputWithValue;

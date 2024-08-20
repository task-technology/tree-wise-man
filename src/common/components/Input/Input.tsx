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
      labelClassName,
      maxLength,
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
          maxLength={maxLength}
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
          className={`${className} border border-slateLightThird w-full rounded-sm py-2 pl-2`}
          step={inputType === "number" ? "any" : undefined}
          checked={checked}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

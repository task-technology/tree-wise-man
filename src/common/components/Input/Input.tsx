import { InputProps } from "./config/type";

const Input: React.FC<InputProps> = ({
  labelName,
  inputPlaceholder = "Write here...",
  inputType = "text",
  inputName,
  IsDisabled = false,
  defaultValue = "",
  required = false,
  minValue,
  // value,
  onChange,
  className,
}) => {
  return (
    <div>
      <div>
        <div className={` w-full ${labelName && "space-y-1"}`}>
          {labelName && (
            <div className="label">
              <label className="text-lg font-semibold">{labelName}</label>
            </div>
          )}
          <input
            min={minValue}
            required={required}
            onChange={onChange} // Added onChange event handler
            name={inputName}
            type={inputType}
            disabled={IsDisabled}
            placeholder={inputPlaceholder}
            defaultValue={defaultValue}
            className={`${className} border w-full rounded-sm  py-2 pl-2`}
            step={`${inputType === "number" && "any"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;

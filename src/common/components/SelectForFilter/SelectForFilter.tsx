interface inputFilterProps {
  Filter: { label: string; value: string }[];
  label?: string;
  IsDisabled?: boolean;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
  required?: boolean;
  inputName?: string;
  onChange?: any;
}

const SelectForFilter: React.FC<inputFilterProps> = ({
  Filter = [],
  label,
  IsDisabled = false,
  placeholder = "Select an option", // Default placeholder value
  className,
  required = false,
  inputName,
  defaultValue,
  onChange,
}) => {
  return (
    <div className={`${label && "space-y-1"}`}>
      {label && <label className="text-lg font-semibold">{label}</label>}
      <select
        onChange={onChange}
        name={inputName}
        required={required}
        disabled={IsDisabled}
        className={` ${className} py-2 rounded-sm w-full border border-slateLightThird shadow-sm ml-0`}
        defaultValue={defaultValue || ""} // Ensure defaultValue is set to empty or to the desired value
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {Filter.map((item, i) => (
          <option key={i} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectForFilter;

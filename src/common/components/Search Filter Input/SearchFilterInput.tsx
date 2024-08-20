import Select from "react-select";
import makeAnimated from "react-select/animated";

interface SearchFilterInput {
  options?: { value?: string; id?: string }[];
  labelName?: string;
  filterName?: string;
  data: string[] | any;
  setData: any;
  required?: boolean;
  isMulti?: boolean;
  defaultValue?: string;
  isDisabled?: boolean;
  className?: string;
  labelClassName?: string;
}

const SearchFilterInput: React.FC<SearchFilterInput> = ({
  options = [],
  labelName,
  filterName,
  data,
  setData,
  required = false,
  isMulti = false,
  defaultValue,
  isDisabled = false,
  className,
  labelClassName,
}) => {
  const animatedComponents = makeAnimated();
  const handleChangeArray = (e: any[]) => {
    if (isMulti) {
      setData(Array.isArray(e) ? e.map((x) => x.value) : []);
    } else {
      setData(e);
    }
  };

  const transformedOptions = options?.length
    ? (options as { state?: string; id?: string }[])?.map((option) => ({
        value: option?.id,
        label: option?.state,
      }))
    : [];
  const transformedOption = options?.length
    ? (options as any[])?.map((option) => ({
        ...option,
        value: option?.state,
        label: option?.state,
      }))
    : [];
  return (
    <div>
      <div className="label">
        <label className={`${labelClassName} text-lg font-semibold`}>
          {labelName}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      </div>
      <Select
        className={`${className} mt-0 `}
        instanceId="react-select-instance"
        placeholder={isDisabled ? defaultValue : "Select"}
        isDisabled={isDisabled}
        required={required}
        name={filterName}
        styles={{
          control: (provided: any) => ({
            ...provided,
            padding: "2px",
            border: "1px solid slateLIghtThird",
          }),
        }}
        closeMenuOnSelect={isMulti ? false : true}
        components={animatedComponents}
        defaultInputValue={defaultValue}
        defaultValue={isMulti && [transformedOptions[2]]}
        isMulti={isMulti}
        options={isMulti ? transformedOptions : transformedOption}
        value={
          isMulti
            ? transformedOptions.filter((obj) =>
                data.includes(obj.value as string)
              )
            : transformedOption.find(
                (obj) => obj?.id === data?.id && data?.value
              )
        }
        onChange={(e: any) => handleChangeArray(e)}
      />
    </div>
  );
};

export default SearchFilterInput;

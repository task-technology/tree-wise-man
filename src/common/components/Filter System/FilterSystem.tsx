import Button from "@components/Button";
import SearchFilterInput from "@components/Search Filter Input/SearchFilterInput";
import { Menu, Transition } from "@headlessui/react";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useRef, useState } from "react";
import { isDisabled, isPublished, states } from "./config/constant";
import SelectForFilter from "@components/SelectForFilter/SelectForFilter";

const FilterSystem: React.FC = () => {
  const pathName = usePathname();
  const router = useRouter();

  const [selectState, setSelectState] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const [selectDisabled, setSelectDisabled] = useState<string | undefined>(
    undefined
  );
  const [selectPublished, setSelectPublished] = useState<string | undefined>(
    undefined
  );

  const handleFilter = () => {
    const queryParams = new URLSearchParams(window.location.search);

    if (selectState) {
      queryParams.set("state", selectState?.value);
    }
    if (selectDisabled) {
      queryParams.set("disable", selectDisabled);
    }
    if (selectPublished) {
      queryParams.set("published", selectPublished);
    }

    router.push(`?${queryParams.toString()}`);
  };

  const handleClearQueryParams = () => {
    const queryParams = new URLSearchParams(window.location.search);

    queryParams.delete("state");
    queryParams.delete("disable");
    queryParams.delete("published");

    setSelectState(null);
    setSelectDisabled(undefined);
    setSelectPublished(undefined);

    router.push(`${pathName}`);
  };

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button>
          <div className="shadow-md bg-white py-2 px-5 text-xl hover:bg-grayForBorder hover:!text-solidWhite !text-gray-900 rounded-md transition-all duration-300">
            <div className="flex justify-center gap-2 items-center">
              {/* SVG Icon */}
              <span>Filter</span>
            </div>
          </div>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-10 absolute w-[400px] right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="text-black w-full ">
              <div className="px-5">
                <h2 className="text-2xl py-3 font-semibold">Filter</h2>
                <hr />
              </div>

              <div className="px-5 py-5 space-y-4">
                <div>
                  <SearchFilterInput
                    options={states}
                    labelName="State Name"
                    filterName="state"
                    setData={setSelectState}
                    data={selectState}
                    isMulti={false}
                  />
                </div>
                <div>
                  <SelectForFilter
                    label="Is Disabled"
                    Filter={isDisabled}
                    inputName="disabled"
                    placeholder="Select..."
                    defaultValue={selectDisabled}
                    onChange={(e: any) => setSelectDisabled(e.target.value)}
                  />
                </div>
                <div>
                  <SelectForFilter
                    label="Is Published"
                    Filter={isPublished}
                    inputName="published"
                    placeholder="Select..."
                    defaultValue={selectPublished}
                    onChange={(e: any) => setSelectPublished(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-around items-center pb-5">
                <div>
                  <Button
                    onClick={handleClearQueryParams}
                    className="!bg-solidRed !text-white"
                    status
                  >
                    Clear
                  </Button>
                </div>
                <div>
                  <Button
                    onClick={handleFilter}
                    type="submit"
                    className="!bg-primary !text-white"
                    status
                  >
                    Filter
                  </Button>
                </div>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default FilterSystem;

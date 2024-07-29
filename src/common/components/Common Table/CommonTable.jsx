import { IoMdEye } from "react-icons/io";
import { NavLink } from "react-router-dom";

import Button from "../Button";
import { MdModeEdit } from "react-icons/md";
import {
  handleAllCheckboxChange,
  handleCheckboxChange,
} from "../../../shared/helpers/HandleCheckbox";
import { icons } from "../../../shared/libs/Icons";
import { emptyData } from "../../../shared/config/constaints";

// type TableData = Record<string, any>;

const CommonTable = ({
  headerData,
  checkedRows,
  setCheckedRows,
  link,
  checkbox,
  productData,
  itemData = [],
  dataLayout,
  btnLink,
  btnValue,
  deleteBtn,
  deleteFn,
  editPageLink,
}) => {
  return (
    <>
      <div className="flex justify-center w-full pb-14">
        <div className="overflow-x-auto w-full ">
          <table className="table text-center w-full border border-collapse border-gray-800">
            {/* head */}
            <thead className=" text-black border text-center">
              <tr>
                {checkbox && (
                  <td>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox form-checkbox h-5 w-5 "
                        checked={checkedRows?.length === itemData?.length}
                        onChange={() =>
                          handleAllCheckboxChange(
                            checkedRows,
                            setCheckedRows,
                            itemData
                          )
                        }
                      />
                    </label>
                  </td>
                )}

                {headerData &&
                  headerData?.map((title, index) => (
                    <th key={index}>{title}</th>
                  ))}
              </tr>
            </thead>
            <tbody className="text-center text-sm">
              {itemData?.length > 0 &&
                itemData?.map((item, index) => (
                  <tr key={index}>
                    {checkbox && (
                      <td className="border">
                        <label>
                          <input
                            type="checkbox"
                            className="checkbox form-checkbox h-5 w-5 "
                            checked={checkedRows?.includes(item)}
                            onChange={() =>
                              handleCheckboxChange(
                                item,
                                checkedRows,
                                setCheckedRows
                              )
                            }
                          />
                        </label>
                      </td>
                    )}

                    {dataLayout.map((layout, idx) => (
                      <td key={idx} className="border">
                        {eval(layout) || emptyData}
                      </td>
                    ))}
                    {btnLink && (
                      <td className="border">
                        <NavLink
                          className=" !text-black flex justify-center"
                          target="_blank"
                          to={`${btnLink}/${item?.id}`}
                        >
                          <Button primary mini className="!text-xs ">
                            {btnValue}
                          </Button>
                        </NavLink>
                      </td>
                    )}
                    {deleteBtn && (
                      <td className="border">
                        <div
                          onClick={() => deleteFn(item?.id)}
                          className="text-shadeOfRed text-xl  flex justify-center cursor-pointer"
                        >
                          {icons?.delete}
                        </div>
                      </td>
                    )}
                    {link && (
                      <td className="border">
                        <NavLink
                          className=" !text-black flex justify-center"
                          to={`${link}/${
                            productData
                              ? item?.repair[item?.repair?.length - 1]?.id
                              : item?.id
                          }`}
                        >
                          <IoMdEye />
                        </NavLink>
                      </td>
                    )}
                    {editPageLink && (
                      <td className="border">
                        <NavLink
                          className=" !text-black flex justify-center"
                          to={`${editPageLink}/${
                            productData
                              ? item?.repair[item?.repair?.length - 1]?.id
                              : item?.id
                          }`}
                        >
                          <MdModeEdit />
                        </NavLink>
                      </td>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CommonTable;

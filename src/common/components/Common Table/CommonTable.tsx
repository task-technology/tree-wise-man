import { FC } from "react";
import { IoMdEye } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import Link from "next/link";

import Button from "../Button";
import {
  handleAllCheckboxChange,
  handleCheckboxChange,
} from "./helpers/handleCheckbox";
import { icons } from "../../../shared/libs/Icons";
import { emptyData } from "@config/constants";
import LoadingSpinner from "@widgets/Loading Spinner/LoadingSpinner";

interface CommonTableProps {
  headerData: string[];
  itemData: Record<string, any>[];
  dataLayout: string[];
  link?: string;
  checkbox?: boolean;

  checkedRows?: any;
  setCheckedRows?: any;
  btnLink?: string;
  btnValue?: string;
  deleteBtn?: boolean;
  deleteFn?: any;
  editPageLink?: string;
  loading?: any;
}

const CommonTable: FC<CommonTableProps> = ({
  headerData,
  checkedRows,
  setCheckedRows,
  link,
  checkbox,
  loading,

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
      <div
        className={`flex justify-center w-full ${
          itemData?.length > 0 && "pb-14"
        } `}
      >
        <div className="overflow-x-auto w-full">
          {loading ? (
            <LoadingSpinner />
          ) : itemData?.length > 0 ? (
            <table className="table-auto text-center w-full border border-slateLightThird">
              {/* head */}
              <thead className="text-black text-center">
                <tr className="border border-slateLightThird">
                  {checkbox && (
                    <td className="border border-slateLightThird">
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox form-checkbox h-5 w-5"
                          checked={checkedRows.length === itemData?.length}
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
                    headerData.map((title: string, index: number) => (
                      <th
                        key={index}
                        className="border border-slateLightThird p-2"
                      >
                        {title}
                      </th>
                    ))}
                </tr>
              </thead>
              <tbody className="text-center text-sm">
                {itemData.length > 0 &&
                  itemData.map((item, index) => (
                    <tr key={index} className="border border-slateLightThird">
                      {checkbox && (
                        <td className="border border-slateLightThird">
                          <label>
                            <input
                              type="checkbox"
                              className="checkbox form-checkbox h-5 w-5"
                              checked={checkedRows.includes(
                                item?.id || item?._id
                              )}
                              onChange={() =>
                                handleCheckboxChange(
                                  item?.id || item?._id,
                                  checkedRows,
                                  setCheckedRows
                                )
                              }
                            />
                          </label>
                        </td>
                      )}

                      {dataLayout.map((layout, idx) => (
                        <td
                          key={idx}
                          className="border border-slateLightThird p-2"
                        >
                          {layout === "item?.products?.serial_number" ||
                          layout === "item?.serial_number" ? (
                            link ? (
                              <Link
                                className="text-solidBlack hover:underline hover:text-shadeOfGray"
                                href={`${link}/${item?.id || item?._id}`}
                              >
                                {eval(layout)}
                              </Link>
                            ) : (
                              eval(layout) || emptyData
                            )
                          ) : (
                            eval(layout) || emptyData
                          )}
                        </td>
                      ))}
                      {btnLink && (
                        <td>
                          <Link
                            className="!text-black flex justify-center"
                            target="_blank"
                            href={`${btnLink}/${item?.id}`}
                          >
                            <Button primary mini className="!text-xs">
                              {btnValue}
                            </Button>
                          </Link>
                        </td>
                      )}
                      {deleteBtn && (
                        <td className="border border-slateLightThird p-2">
                          <div
                            onClick={() => deleteFn(item?.id)}
                            className="text-solidRed text-xl flex justify-center cursor-pointer"
                          >
                            {icons?.delete}
                          </div>
                        </td>
                      )}
                      {link && (
                        <td>
                          <Link
                            className="!text-black flex justify-center"
                            href={`${link}/${item?.id || item?._id}`}
                          >
                            <IoMdEye className="hover:!text-blue-light" />
                          </Link>
                        </td>
                      )}
                      {editPageLink && (
                        <td className="border border-slateLightThird p-2">
                          <Link
                            className="!text-lightBlue flex justify-center"
                            href={`${editPageLink}/${item?.id}`}
                          >
                            <MdModeEdit />
                          </Link>
                        </td>
                      )}
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center font-medium text-2xl">{emptyData}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default CommonTable;

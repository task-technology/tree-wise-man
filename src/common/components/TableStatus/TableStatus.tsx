"use client";
import { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Button from "../Button";
import { TableStatusProps } from "./config/types";
import { capitalize, handleFilter } from "./helpers/statusHandler";

const TableStatus: React.FC<TableStatusProps> = ({ btnValues, status }) => {
  const [activeRoute, setActiveRoute] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (!status) {
      const repairStatus = params.get("searchTerm");
      setActiveRoute(repairStatus || "");
    } else {
      const statusParam = params.get("status");
      setActiveRoute(statusParam || "");
    }
  }, [status, searchParams]);

  return (
    <div>
      <div className="flex gap-2 flex-wrap">
        {btnValues?.length > 0 && (
          <Button
            status
            className={activeRoute === "" ? "!bg-grayForBorder" : ""}
            onClick={() =>
              handleFilter("status", "", router, setActiveRoute, pathname)
            }
          >
            All
          </Button>
        )}
        {btnValues?.map((btnValue: any, index) => (
          <Button
            key={index}
            status
            className={
              activeRoute === btnValue?.label ? "!bg-grayForBorder" : ""
            }
            onClick={() =>
              handleFilter(
                "status",
                btnValue?.label,
                router,
                setActiveRoute,
                pathname
              )
            }
          >
            {capitalize(btnValue?.value)}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TableStatus;

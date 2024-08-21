"use client";
import { SERVER_URL } from "@config/secret";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
const ReturnPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const paymentId = searchParams.get("paymentId");
  const PayerID = searchParams.get("PayerID");
  useEffect(() => {
    const executePayment = async (paymentId: string, PayerID: string) => {
      const url =SERVER_URL+"/subscription/verify";

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ paymentId, PayerID }),
      };
      fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          if (
            data.success &&
            data.data.state === "approved" &&
            data.data.payer.status === "VERIFIED"
          ) {
            router.push("/payment/success");
          } else {
            router.push("/payment/failed");
          }
     
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    };

    if (paymentId && PayerID) {
      console.log("query", paymentId, PayerID);
      executePayment(paymentId as string, PayerID as string);
    }
  }, [paymentId, PayerID]);

  return (
    <div className=" min-h-screen  flex justify-center items-center">
      <p className="text-3xl">Processing your subscription...</p>
    </div>
  );
};

export default ReturnPage;

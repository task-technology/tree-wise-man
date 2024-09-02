

import dynamic from 'next/dynamic';
const ReturnPage = dynamic(() => import("@modules/Others Content/payment/ReturnPage"), {
  ssr: false,
});
export default function returnPage() {
    return (
      <>
        <div>
          <ReturnPage />
        </div>
      </>
    );
  }
  
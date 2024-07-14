import React from "react";
import { home_data } from "../config/constants";

const MyAccordion = () => {
    const {frequently_asked_questions}=home_data;
  return (
    <div className=" w-8/12 mx-auto space-y-2">
        {
            frequently_asked_questions.map(data=>{
                return(
                    <div key={data.id} className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-lg font-medium">
                          {data.question}
                        </div>
                        <div className="collapse-content">
                          <p>{data.answer}</p>
                        </div>
                    </div>    
                )
            })
        }
      


    </div>
  );
};

export default MyAccordion;

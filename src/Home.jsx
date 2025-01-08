import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Steps } from "primereact/steps";
import { Checkbox } from "primereact/checkbox";

function Home() {
  const steps = [
    { label: "হিসাব সংক্রান্ত তথ্যাদি" },
    { label: "ব্যক্তি সংক্রান্ত তথ্যাদি" },
    { label: "নমিনি সংক্রান্ত তথ্যাদি" },
    { label: "ঘোষণা ও স্বাক্ষর" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex < steps.length - 1) setActiveIndex(activeIndex + 1);
  };

  const handlePrev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };



  return (
    <div className="card mt-4">
      <Steps
        model={steps}
        activeIndex={activeIndex}
        onSelect={(e) => setActiveIndex(e.index)}
      />

      <div
        className="surface-0 p-4 shadow-2 border-round mx-auto mt-6"
        style={{ maxWidth: "900px", width: "100%" }}
      >
        <div className="content" style={{ maxWidth: "900px", width: "100%" }}>
          {getStepContent(activeIndex)}
        </div>
        <div className="buttons" style={{ marginTop: "20px" }}></div>
        <Button
          label="Previous"
          icon="pi pi-arrow-left"
          className="p-button-secondary"
          onClick={handlePrev}
          disabled={activeIndex === 0}
        />
        <Button
          label={activeIndex === steps.length - 1 ? "Submit" : "Next"}
          icon="pi pi-arrow-right"
          className="p-button-primary"
          onClick={handleNext}
        />
      </div>
    </div>
  );
}

const getStepContent = (step) =>{
  
  switch (step) {
    case 0:
      return (
        <div>
          <h3 className="text-center">প্রথম অংশ : হিসাব সংক্রান্ত তথ্যাদি</h3>
          <div className="field p-grid">
            <label
              htmlFor="name"
              className="p-col-fixed"
              style={{ textAlign: "right", fontSize: "14px" }}
            >
              হিসাবের শিরোনাম :
            </label>
            <div className="p-col-12 flex flex-column">
              <InputText
                id="name"
                className="p-inputtext-sm"
                placeholder="(বাংলায়)"
              />
            </div>
            <div className="p-col-12 pt-2  flex flex-column">
              <InputText
                id="name"
                className="p-inputtext-sm"
                placeholder="In English (Block Letter)"
              />
            </div>
          </div>
          <div className="field p-grid">
            <label
              htmlFor="dob"
              className="p-col-fixed"
              style={{ textAlign: "right", fontSize: "14px" }}
            >
              হিসাবের প্রকৃতি:
            </label>
            <div className="p-col-12">

            </div>
          </div>
        </div>
      );
    case 1:
      return (
        <div>
          <h3>Contact Details</h3>
          <div className="field">
            <label htmlFor="email">Email</label>
            <InputText id="email" placeholder="Enter your email" />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone</label>
            <InputText id="phone" placeholder="Enter your phone number" />
          </div>
        </div>
      );
    case 2:
      return (
        <div>
          <h3>Bank Details</h3>
          <div className="field">
            <label htmlFor="account">Account Number</label>
            <InputText id="account" placeholder="Enter account number" />
          </div>
          <div className="field">
            <label htmlFor="ifsc">IFSC Code</label>
            <InputText id="ifsc" placeholder="Enter IFSC code" />
          </div>
        </div>
      );
    case 3:
      return <h3>Review and Confirm</h3>;
    default:
      return null;
  }
}

export default Home;

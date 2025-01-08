import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { Steps } from 'primereact/steps';

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
        <div className="card">
            <Steps model={steps} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} />
            <div className="content">{getStepContent(activeIndex)}</div>
            <div className="buttons" style={{ marginTop: "20px" }}>
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




function getStepContent(step) {
    switch (step) {
        case 0:
            return (
                <div>
                    <h3>Personal Information</h3>
                    <div className="field">
                        <label htmlFor="name">Full Name</label>
                        <InputText id="name" placeholder="Enter your name" />
                    </div>
                    <div className="field">
                        <label htmlFor="dob">Date of Birth</label>
                        <InputText id="dob" placeholder="Enter your date of birth" />
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

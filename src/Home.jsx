import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Steps } from "primereact/steps";
import { Dropdown } from "primereact/dropdown";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [accountType, setAccountType] = useState(null); // Track selected account type
  const [accountCurrency, setAccountCurrency] = useState(null); // Track selected account Currency
  const [accountRunningProces, setAccountRunningProces] = useState(null); // Track selected account Running Proces process
  const [modernBankingFacility, setModernBankingFacility] = useState(null); // Track selected Modern Banking Facility
  const [formData, setFormData] = useState({
    accountTitleBn: "",
    accountTitleEn: "",
    initialDepositAmountBn: "",
    initialDepositAmountEn: "",
    accountHolderNameBn: "",
    accountHolderNameEn: "",
    dateOfBirth: "",
    accountFatherName: "",
    accountMotherName: "",
    accountSpouceName: "",
    accountNationality: "",
    accountGender: "",
    accountOccupation: "",
    accountMonthlyIncome: "",
    accountIncomeSource: "",
    accountCurrentAddress: "",
    accountParmanentAddress: "",
    nomineeNameBn: "",
    nomineeCurrentAddress: "",
    nomineeParmanentAddress: "",
    nomineePercentage: "",
    nomineeRelation: "",
    nomineeNID: "",
  });
  // Define the steps for the wizard
  const steps = [
    { label: "প্রথম অংশ: হিসাব সংক্রান্ত তথ্যাদি" },
    { label: "দ্বিতীয় অংশ: ব্যক্তি সংক্রান্ত তথ্যাদি" },
    { label: "তৃতীয় অংশ: নমিনি সংক্রান্ত তথ্যাদি" },
    { label: "শেষ অংশ: রিভিও এবং সাবমিট" },
  ];

  // Define options for the "হিসাবের প্রকৃতি" dropdown
  const accountTypes = [
    { label: "মুদারাবা সঞ্চয় হিসাব", value: "mudraba_savings" },
    { label: "MSA - General", value: "msa_general" },
    { label: "MSA - Staff", value: "msa_staff" },
    { label: "MSA - RDS", value: "msa_rds" },
    { label: "SMSA", value: "smsa" },
    { label: "MFSA", value: "mfsa" },
    { label: "MIESA", value: "miesa" },
    { label: "MPA", value: "mpa" },
    { label: "AWCA", value: "awca" },
    { label: "AWPRA", value: "awpra" },
    { label: "MSNA", value: "msna" },
    { label: "NITA", value: "nita" },
    { label: "others", value: "Others" },
  ];

  const accountCurrencies = [
    { label: "টাকা", value: "taka" },
    { label: "ডলার", value: "usd" },
    { label: "পাউন্ড", value: "pound" },
    { label: "অনন্যা ", value: "others" },
  ];

  const accountRunningProcess = [
    { label: "এককভাবে", value: "এককভাবে" },
    { label: "যৌথভাবে ", value: "যৌথভাবে" },
    { label: "যে কোন একজন ", value: "যে কোন একজন" },
    { label: "যে কোন একজন অথবা জীবিতজন", value: "যে কোন একজন অথবা জীবিতজন" },
    { label: "অন্যান্য", value: "অন্যান্য" },
  ];

  const modernBankingFacilities = [
    { label: "Online Service", value: "Online Service" },
    { label: "ATM Service", value: "ATM Service" },
    { label: "i-Banking", value: "i-Banking" },
    { label: "SMS Service", value: "SMS Service" },
    { label: "Others", value: "Others" },
  ];

  const handleNext = () => {
    if (activeIndex < steps.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    const formObject = {
      accountType,
      accountCurrency,
      accountRunningProces,
      modernBankingFacility,
      ...formData,
    };
    console.log(formObject);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            <h3 className="text-center">প্রথম অংশ : হিসাব সংক্রান্ত তথ্যাদি</h3>
            <div className="field p-grid">
              <label
                htmlFor="accountTitleBn"
                className="p-col-fixed"
                style={{ textAlign: "right", fontSize: "14px" }}
              >
                হিসাবের শিরোনাম :
              </label>
              <div className="p-col-12 flex flex-column">
                <InputText
                  id="accountTitleBn"
                  className="p-inputtext-sm"
                  placeholder="(বাংলায়)"
                  value={formData.accountTitleBn}
                  onChange={handleChange}
                />
              </div>
              <div className="p-col-12 pt-2 flex flex-column">
                <InputText
                  id="accountTitleEn"
                  className="p-inputtext-sm"
                  placeholder="In English (Block Letter)"
                  value={formData.accountTitleEn}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Account type select */}
            <div className="field p-grid">
              <label
                htmlFor="accountType"
                className="p-col-fixed"
                style={{ textAlign: "right", fontSize: "14px" }}
              >
                হিসাবের প্রকৃতি:
              </label>
              <div className="p-col-12  pt-2 flex flex-column">
                <Dropdown
                  id="accountType"
                  className="p-dropdown-sm"
                  value={formData.accountType}
                  options={accountTypes}
                  onChange={(e) =>
                    setFormData({ ...formData, accountType: e.value })
                  }
                  placeholder="Select account type"
                />
              </div>
            </div>

            {/* Currency select */}
            <div className="field p-grid">
              <label
                htmlFor="accountCurrency"
                className="p-col-fixed"
                style={{ textAlign: "right", fontSize: "14px" }}
              >
                মুদ্রা (Currency ):
              </label>
              <div className="p-col-12  pt-2 flex flex-column">
                <Dropdown
                  id="accountCurrency"
                  className="p-dropdown-sm"
                  value={formData.accountCurrency}
                  options={accountCurrencies}
                  onChange={(e) =>
                    setFormData({ ...formData, accountCurrency: e.value })
                  }
                  placeholder="Select account type"
                />
              </div>
            </div>

            {/* account running system select */}
            <div className="field p-grid">
              <label
                htmlFor="AccountRunningProces"
                className="p-col-fixed"
                style={{ textAlign: "right", fontSize: "14px" }}
              >
                হিসাব পরিচালনা পদ্ধতি :
              </label>
              <div className="p-col-12  pt-2 flex flex-column">
                <Dropdown
                  id="AccountRunningProces"
                  className="p-dropdown-sm"
                  value={formData.accountRunningProces}
                  options={accountRunningProcess}
                  onChange={(e) =>
                    setFormData({ ...formData, accountRunningProces: e.value })
                  }
                  placeholder="Select account type"
                />
              </div>
            </div>

            {/* initial deposit amount */}
            <div className="field p-grid">
              <label
                htmlFor="initialDepositAmount"
                className="p-col-fixed"
                style={{ textAlign: "right", fontSize: "14px" }}
              >
                প্রাথমিক জমার পরিমান :
              </label>
              <div className="p-col-12 flex flex-column">
                <InputText
                  id="initialDepositAmountBn"
                  className="p-inputtext-sm"
                  placeholder="(বাংলায়)"
                  value={formData.initialDepositAmountBn}
                  onChange={handleChange}
                />
              </div>
              <div className="p-col-12 pt-2 flex flex-column">
                <InputText
                  id="initialDepositAmountEn"
                  className="p-inputtext-sm"
                  placeholder="(কথায়)"
                  value={formData.initialDepositAmountEn}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Modern banking facilities */}
            <div className="field p-grid">
              <label
                htmlFor="modernBankingFacility"
                className="p-col-fixed"
                style={{ textAlign: "right", fontSize: "14px" }}
              >
                আধুনিক ব্যাংকিং সুবিধা:
              </label>
              <div className="p-col-12  pt-2 flex flex-column">
                <Dropdown
                  id="modernBankingFacility"
                  className="p-dropdown-sm"
                  value={formData.modernBankingFacility}
                  options={modernBankingFacilities}
                  onChange={(e) =>
                    setFormData({ ...formData, modernBankingFacility: e.value })
                  }
                  placeholder="Select account type"
                />
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <h3 className="text-center">
              দ্বিতীয় অংশ: ব্যক্তি সংক্রান্ত তথ্যাদি
            </h3>
            {/* Account Holder name */}
            <div className="field p-grid">
              <label
                htmlFor="accountHolderName"
                className="p-col-fixed"
                style={{ textAlign: "right", fontSize: "14px" }}
              >
                হিসাবধারীর নাম :
              </label>
              <div className="p-col-12 flex flex-column">
                <InputText
                  id="accountHolderNameBn"
                  className="p-inputtext-sm"
                  placeholder="(বাংলায়)"
                  value={formData.accountHolderNameBn}
                  onChange={handleChange}
                />
              </div>
              <div className="p-col-12 pt-2 flex flex-column">
                <InputText
                  id="accountHolderNameEn"
                  className="p-inputtext-sm"
                  placeholder="In English (Block Letter)"
                  value={formData.accountHolderNameEn}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Account holder date of birth */}
            <div className="field p-grid">
              <label
                htmlFor="dateOfBirth"
                className="p-col-fixed"
                style={{ textAlign: "right", fontSize: "14px" }}
              >
                জন্ম তারিখ :
              </label>
              <div className="p-col-12 flex flex-column">
                <InputText
                  id="dateOfBirth"
                  className="p-inputtext-sm"
                  placeholder="DD/MM/YYYY"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Account holder father name */}
            <div className="field p-grid">
              <label
                htmlFor="accountFatherName"
                className="p-col-fixed"
                style={{ textAlign: "right", fontSize: "14px" }}
              >
                পিতার নাম :
              </label>
              <div className="p-col-12 flex flex-column">
                <InputText
                  id="accountFatherName"
                  className="p-inputtext-sm"
                  placeholder="Father Name"
                  value={formData.accountFatherName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Account holder father name */}
            <div className="field p-grid">
              <label
                htmlFor="accountMotherName"
                className="p-col-fixed"
                style={{ textAlign: "right", fontSize: "14px" }}
              >
                মাতার নাম :
              </label>
              <div className="p-col-12 flex flex-column">
                <InputText
                  id="accountMotherName"
                  className="p-inputtext-sm"
                  placeholder="Mother Name"
                  value={formData.accountMotherName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Account holder spouce name */}
            <div className="field p-grid">
              <label
                htmlFor="accountSpouceName"
                className="p-col-fixed"
                style={{ textAlign: "right", fontSize: "14px" }}
              >
                স্বামী / স্ত্রীর নাম :
              </label>
              <div className="p-col-12 flex flex-column">
                <InputText
                  id="accountSpouceName"
                  className="p-inputtext-sm"
                  placeholder="Spouce Name"
                  value={formData.accountSpouceName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Account holder Nationality */}
            <div className="field p-grid">
              <label
                htmlFor="accountNationality"
                className="p-col-fixed"
                style={{ textAlign: "right", fontSize: "14px" }}
              >
                জাতীয়তা :
              </label>
              <div className="p-col-12 flex flex-column">
                <InputText
                  id="accountNationality"
                  className="p-inputtext-sm"
                  placeholder="your country"
                  value={formData.accountNationality}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Account holder Gender */}
            <div className="field p-grid">
              <label
                htmlFor="accountGender"
                className="p-col-fixed"
                style={{ textAlign: "right", fontSize: "14px" }}
              >
                লিঙ্গ :
              </label>
              <div className="p-col-12 flex flex-column">
                <InputText
                  id="accountGender"
                  className="p-inputtext-sm"
                  placeholder="Gender"
                  value={formData.accountGender}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Account holder Occupation */}
            <div className="field p-grid">
              <label
                htmlFor="accountOccupation"
                className="p-col-fixed"
                style={{ textAlign: "right", fontSize: "14px" }}
              >
                পেশা (বিস্তারিত ):
              </label>
              <div className="p-col-12 flex flex-column">
                <InputText
                  id="accountOccupation"
                  className="p-inputtext-sm"
                  placeholder="Occupation (Details)"
                  value={formData.accountOccupation}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Account holder Monthly Income*/}
            <div className="field p-grid">
              <label
                htmlFor="accountMonthlyIncome"
                className="p-col-fixed"
                style={{ textAlign: "right", fontSize: "14px" }}
              >
                মাসিক আয়:
              </label>
              <div className="p-col-12 flex flex-column">
                <InputText
                  id="accountMonthlyIncome"
                  className="p-inputtext-sm"
                  placeholder="Monthly Income"
                  value={formData.accountMonthlyIncome}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Account holder Income Source*/}
            <div className="field p-grid">
              <label
                htmlFor="accountIncomeSource"
                className="p-col-fixed"
                style={{ textAlign: "right", fontSize: "14px" }}
              >
                অর্থের উৎস:
              </label>
              <div className="p-col-12 flex flex-column">
                <InputText
                  id="accountIncomeSource"
                  className="p-inputtext-sm"
                  placeholder="Income Source"
                  value={formData.accountIncomeSource}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Account holder current address*/}
            <div className="field p-grid">
              <label
                htmlFor="accountCurrentAddress"
                className="p-col-fixed"
                style={{ textAlign: "right", fontSize: "14px" }}
              >
                বর্তমান ঠিকানা:
              </label>
              <div className="p-col-12 flex flex-column">
                <InputText
                  id="accountCurrentAddress"
                  className="p-inputtext-sm"
                  placeholder="Current Address"
                  value={formData.accountCurrentAddress}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Account holder Parmanent address*/}
            <div className="field p-grid">
              <label
                htmlFor="accountParmanentAddress"
                className="p-col-fixed"
                style={{ textAlign: "right", fontSize: "14px" }}
              >
                স্থায়ী ঠিকানা:
              </label>
              <div className="p-col-12 flex flex-column">
                <InputText
                  id="accountParmanentAddress"
                  className="p-inputtext-sm"
                  placeholder="Parmanent Address"
                  value={formData.accountParmanentAddress}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="mb-10">
            <h3 className="text-center">তৃতীয় অংশ: নমিনি সংক্রান্ত তথ্যাদি</h3>
            {/* Account Holder Nominee name */}
            <div className="field p-grid">
              <label
                htmlFor="NomineeName"
                className="p-col-fixed"
                style={{ textAlign: "right", fontSize: "14px" }}
              >
                নমিনির নাম:
              </label>
              <div className="p-col-12 flex flex-column">
                <InputText
                  id="nomineeNameBn"
                  className="p-inputtext-sm"
                  placeholder="(বাংলায়)"
                  value={formData.nomineeNameBn}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Account holder Nominee current address*/}
            <div className="field p-grid">
              <label
                htmlFor="nomineeCurrentAddress"
                className="p-col-fixed"
                style={{ textAlign: "right", fontSize: "14px" }}
              >
                নমিনির বর্তমান ঠিকানা:
              </label>
              <div className="p-col-12 flex flex-column">
                <InputText
                  id="nomineeCurrentAddress"
                  className="p-inputtext-sm"
                  placeholder="Current Address"
                  value={formData.nomineeCurrentAddress}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Account holder Nominee Parmanent address*/}
            <div className="field p-grid">
              <label
                htmlFor="nomineeParmanentAddress"
                className="p-col-fixed"
                style={{ textAlign: "right", fontSize: "14px" }}
              >
                নমিনির স্থায়ী ঠিকানা:
              </label>
              <div className="p-col-12 flex flex-column">
                <InputText
                  id="nomineeParmanentAddress"
                  className="p-inputtext-sm"
                  placeholder="Parmanent Address"
                  value={formData.nomineeParmanentAddress}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Account holder Nominee date of birth */}
            <div className="field p-grid">
              <label
                htmlFor="nomineePercentage"
                className="p-col-fixed"
                style={{ textAlign: "right", fontSize: "14px" }}
              >
                শতকরা হার:
              </label>
              <div className="p-col-12 flex flex-column">
                <InputText
                  id="nomineePercentage"
                  className="p-inputtext-sm"
                  placeholder="Percentage %"
                  value={formData.nomineePercentage}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Account holder Nominee relation */}
            <div className="field p-grid">
              <label
                htmlFor="nomineeRelation"
                className="p-col-fixed"
                style={{ textAlign: "right", fontSize: "14px" }}
              >
                হিসাবধারীর সাথে সম্পর্ক:
              </label>
              <div className="p-col-12 flex flex-column">
                <InputText
                  id="nomineeRelation"
                  className="p-inputtext-sm"
                  placeholder="Relation"
                  value={formData.nomineeRelation}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Account holder National Identity Card Number */}
            <div className="field p-grid">
              <label
                htmlFor="nomineeNID"
                className="p-col-fixed"
                style={{ textAlign: "right", fontSize: "14px" }}
              >
                জাতীয় পরিচয় পত্র নং:
              </label>
              <div className="p-col-12 flex flex-column">
                <InputText
                  id="nomineeNID"
                  className="p-inputtext-sm"
                  placeholder="National Identity Card Number"
                  value={formData.nomineeNID}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h3 clasclassName="text-center">শেষ অংশ: রিভিও এবং সাবমিট</h3>
            {/* loop all form data in here */}
            {Object.keys(formData).map((key) => (
              <div key={key} className="field p-grid">
                <label
                  htmlFor={key}
                  className="p-col-fixed"
                  style={{ textAlign: "right", fontSize: "14px" }}
                >
                  <h4>{key} : {formData[key]}</h4>
                </label>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="card mt-4 mb-6">
      <Steps
        model={steps}
        activeIndex={activeIndex}
        onSelect={(e) => setActiveIndex(e.index)}
        style={{ fontSize: "14px" }}
      />

      <div
        className="surface-0 p-4 shadow-2 border-round mx-auto mt-6"
        style={{ maxWidth: "900px", width: "100%" }}
      >
        <div className="content" style={{ maxWidth: "900px", width: "100%" }}>
          {renderStepContent(activeIndex)}
        </div>
        <div className="buttons flex justify-content-center" style={{ marginTop: "20px" }}>
          <Button
            label="Prev"
            icon="pi pi-arrow-left"
            className="p-button-secondary mr-2"
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
    </div>
  );
};

export default Home;

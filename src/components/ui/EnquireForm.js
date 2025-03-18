import { useState } from "react";
import FormInput from "./FormInput";
import FormNumberInput from "./FormNumberInput";
import FormSelectInput from "./FormSelectInput";
import FormTextArea from "./FormTextArea";
import Button from "../ui/Button";

export default function EnquireForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    country: "",
    message: "",
  });


  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Simple Validation Checks
    if (!formData.name) {
      alert("Name is required");
      return;
    }
    if (!formData.email.includes("@") || !emailPattern.test(formData.email)) {
      alert("Enter a valid email");
      return;
    }
    if (!formData.tel.match(/^\+?\d+$/)) {
      alert("Enter a valid mobile number");
      return;
    }
    if (!formData.country) {
      alert("Please select a country");
      return;
    }
    if (!formData.message) {
      alert("Message cannot be empty");
      return;
    }

    // If all validations pass
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full px-[74px] mt-[25px] flex flex-col gap-8">
      {/* Name & Email */}
      <div className="flex justify-between gap-3">
        <FormInput name="name" placeholder="Name" containerStyle="w-1/2" onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} />
        <FormInput name="email" type="email" placeholder="Email" containerStyle="w-1/2" onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} />
      </div>

      {/* Telephone and Country */}
      <div className="flex justify-between gap-3">
        <FormNumberInput name="tel" type="text" placeholder="Mobile No." containerStyle="w-1/2" onChange={(e) => setFormData(prev => ({ ...prev, tel: e.target.value }))} />
        <FormSelectInput
          name="country"
          placeholder="Country of Residence"
          options={["Malaysia", "Vietnam", "Thailand", "Other"]}
          containerStyle="w-1/2"
          onChangeValue={(value) => setFormData(prev => ({ ...prev, country: value }))}
        />
      </div>

      {/* Message */}
      <div className="flex justify-between gap-3">
        <FormTextArea name="message" placeholder="Enter your message here" containerStyle="w-full" onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))} />
      </div>

      {/* Submit Button */}
      <div className="w-full flex justify-center mt-4">
        <Button title="Submit" titleStyle="text-[16px] tracking-wider" buttonStyle="rounded-sm shadow-2xl px-4.5 py-2 mb-[16px]" otherStyle={{ backgroundColor: "var(--orange)" }} />
      </div>
    </form>
  );
}

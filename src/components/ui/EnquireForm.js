import FormInput from "./FormInput";
import FormNumberInput from "./FormNumberInput";
import FormSelectInput from "./FormSelectInput";
import FormTextArea from "./FormTextArea";
import Button from "../ui/Button";

export default function EnquireForm({}) {

  return (
    <div className="w-full px-[74px] mt-[25px] flex flex-col gap-8">

        {/* Name & Email */}
        <div className="flex justify-between gap-3">
            <FormInput name="name" placeholder="Name" containerStyle="w-1/2"/>
            <FormInput name="email" type="email" placeholder="Email" containerStyle="w-1/2"/>
        </div>

        {/* Telephone and Country */}
        <div className="flex justify-between gap-3">
            <FormNumberInput name="tel" type="text" placeholder="Mobile No." containerStyle="w-1/2"/>
            <FormSelectInput 
                name="country" 
                placeholder="Country of Residence"
                options={["Malaysia", "Vietnam", "Thailand", "Other"]}
                containerStyle="w-1/2"
            />
        </div>
        
        {/* Message */}
        <div className="flex justify-between gap-3">
            <FormTextArea name="message" placeholder="Enter your message here" containerStyle="w-full" />
        </div>

        {/* Register Button */}
        <div className="w-full flex justify-center mt-4">
            <Button title="Submit" titleStyle="text-[16px] tracking-wider" buttonStyle="rounded-sm shadow-2xl px-4.5 py-2 mb-[16px]"  otherStyle={{ backgroundColor: "var(--orange)"}} />
        </div>

    </div>
  );
}

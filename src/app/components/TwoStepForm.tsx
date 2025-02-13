"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface TwoStepFormProps {
  step: number;
  setStep: (step: number) => void;
}

export const TwoStepForm = ({ step, setStep }: TwoStepFormProps) => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phoneNumber: value });
    setErrors({ ...errors, phoneNumber: "" });
  };

  const handleNext = () => {
    const newErrors: any = { firstname: "", lastname: "" };
    if (!formData.firstname) newErrors.firstname = "First name is required";
    if (!formData.lastname) newErrors.lastname = "Last name is required";

    setErrors(newErrors);

    if (!newErrors.firstname && !newErrors.lastname) {
      setStep(step + 1);
    }
  };

  const handleCompletion = () => {
    if (!formData.phoneNumber || formData.phoneNumber.length < 8) {
      setErrors({ ...errors, phoneNumber: "Enter a valid phone number" });
      return;
    }

    router.push("/congratulations");
  };

  return (
    <div className="flex flex-col p-4 gap-4 text-black max-w-md mx-auto">
      <h1 className="text-xl font-semibold text-center">Some instructions</h1>

      {step === 1 && (
        <>
          <label className="font-medium">First name</label>
          <input
            className="p-4 rounded-full border border-indigo-500"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Your first name"
          />
          {errors.firstname && (
            <p className="text-red-500 text-sm">{errors.firstname}</p>
          )}

          <label className="font-medium">Last name</label>
          <input
            className="p-4 rounded-full border border-indigo-500"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Your last name"
          />
          {errors.lastname && (
            <p className="text-red-500 text-sm">{errors.lastname}</p>
          )}

          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-full mt-4"
            onClick={handleNext}
          >
            Continue
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <label className="font-medium">Phone Number</label>

          <PhoneInput
            className="flex justify-center items-center rounded-full"
            defaultCountry={"mk"}
            value={formData.phoneNumber}
            onChange={handlePhoneChange}
            inputProps={{
              name: "phoneNumber",
              required: true,
              className:
                "mx-2 p-4 rounded-full border border-indigo-500 text-black",
            }}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
          )}

          <div className="flex justify-between mt-4">
            <button
              className="bg-gray-500 text-white px-6 py-3 rounded-full"
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded-full"
              onClick={handleCompletion}
            >
              Continue
            </button>
          </div>
        </>
      )}
    </div>
  );
};

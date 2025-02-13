"use client";
import { useState } from "react";
import Image from "next/image";
import { TwoStepForm } from "./components/TwoStepForm";

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex items-center justify-center my-[8px]">
        <Image height={56} width={56} src="/Vector.svg" alt="vector image" />
      </div>
      <div className="flex gap-[12px]">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center 
            ${
              step === 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
        >
          1
        </div>
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center 
            ${
              step === 2
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-100"
            }`}
        >
          2
        </div>
      </div>
      <TwoStepForm step={step} setStep={setStep} />
    </div>
  );
}

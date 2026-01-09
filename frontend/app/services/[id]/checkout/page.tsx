"use client";

import React, { useState, use } from "react";
import { useRouter } from "next/navigation";
import { getServiceById, mainServices } from "@/data/services";
import { CheckCircle2, Circle, ArrowLeft, ArrowRight } from "lucide-react";
import type { ServiceItem } from "@/data/services";
import {
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  MicroStepOne,
  MicroStepTwo,
} from "@/components/checkout/steps";
import { FormProvider, useForm } from "react-hook-form";
import type {
  CheckoutFormData,
  MainCheckoutFormData,
  MicroCheckoutFormData,
} from "@/types/form-type";

const CheckoutPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = use(params);
  const serviceId = resolvedParams.id;
  const service = getServiceById(serviceId);
  const router = useRouter();

  const isMainService = service?.type === "main";

  const methods = useForm<CheckoutFormData>({
    mode: "onChange",
    defaultValues: isMainService
      ? {
          fullName: "",
          email: "",
          destination: "",
          travelDate: "",
          passportNumber: "",
          nationality: "",
          purposeOfTravel: "",
          additionalNotes: "",
        }
      : {
          fullName: "",
          email: "",
          additionalNotes: "",
        },
  });

  const [currentStep, setCurrentStep] = useState(1);

  const steps = isMainService
    ? [
        {
          id: 1,
          title: "Personal Information",
          description: "Enter your basic details",
        },
        {
          id: 2,
          title: "Travel Details",
          description: "Provide your travel information",
        },
        {
          id: 3,
          title: "Document Information",
          description: "Share your document details",
        },
        {
          id: 4,
          title: "Review & Confirmation",
          description: "Review and confirm your application",
        },
      ]
    : [
        {
          id: 1,
          title: "Service Request",
          description: "Enter your details",
        },
        {
          id: 2,
          title: "Review & Confirmation",
          description: "Review and confirm your request",
        },
      ];

  const totalSteps = steps.length;

  const handleNext = async () => {
    let fieldsToValidate: (
      | keyof MainCheckoutFormData
      | keyof MicroCheckoutFormData
    )[] = [];

    if (isMainService) {
      const mainFieldsByStep: Record<number, (keyof MainCheckoutFormData)[]> = {
        1: ["fullName", "email"],
        2: ["destination", "travelDate"],
        3: ["passportNumber", "nationality"],
        4: ["purposeOfTravel"],
      };
      fieldsToValidate = mainFieldsByStep[currentStep] || [];
    } else {
      const microFieldsByStep: Record<number, (keyof MicroCheckoutFormData)[]> =
        {
          1: ["fullName", "email"],
          2: [],
        };
      fieldsToValidate = microFieldsByStep[currentStep] || [];
    }

    const isStepValid = await methods.trigger(fieldsToValidate as any);
    if (isStepValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onFinalSubmit = (data: CheckoutFormData) => {
    console.log("Form submitted successfully:", data);
    alert("Form submitted successfully! (Check console for data)");
  };

  if (!service) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Service not found</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* Header */}
        <div className="mb-8 ">
          <button
            onClick={() => router.back()}
            type="button"
            className="flex cursor-pointer hover:opacity-80 items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Service
          </button>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {service.title} -{" "}
            {isMainService ? "Application Form" : "Request Form"}
          </h1>
          <p className="text-gray-600">
            {isMainService
              ? "Please complete all steps to submit your visa application"
              : "Please provide your details to request this service"}
          </p>
        </div>

        {/* Step Indicator */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div
            className={`grid gap-5 place-content-center ${
              isMainService ? "md:grid-cols-2 lg:grid-cols-4" : "grid-cols-2"
            }`}
          >
            {steps.map((step) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                      currentStep > step.id
                        ? "bg-primary border-primary text-white"
                        : currentStep === step.id
                        ? "border-primary text-primary bg-primary/10"
                        : "border-gray-300 text-gray-400 bg-white"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <span className="font-semibold">{step.id}</span>
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <p
                      className={`text-sm font-medium ${
                        currentStep >= step.id
                          ? "text-gray-900"
                          : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
                {/* {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-4 transition-all ${
                      currentStep > step.id ? "bg-primary" : "bg-gray-300"
                    }`}
                  />
                )} */}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onFinalSubmit)}
              onKeyDown={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            >
              {isMainService ? (
                <>
                  {currentStep === 1 && <StepOne />}
                  {currentStep === 2 && <StepTwo />}
                  {currentStep === 3 && <StepThree />}
                  {currentStep === 4 && <StepFour />}
                </>
              ) : (
                <>
                  {currentStep === 1 && <MicroStepOne />}
                  {currentStep === 2 && <MicroStepTwo />}
                </>
              )}
              {/* Note: Step 3 & 4 need to be implemented in components/checkout/steps.tsx */}
              {/* For now, placeholders will be shown via StepOne/StepTwo if they was fully implemented */}

              {/* Navigation Buttons */}
              <div className="flex md:flex-row flex-col justify-between md:items-center mt-8 pt-6 border-t gap-3 md:gap-0 border-gray-200">
                <button
                  type="button"
                  key={"prev-btn"}
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg  font-medium transition-all ${
                    currentStep === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </button>

                {currentStep < totalSteps ? (
                  <button
                    key={"next-btn"}
                    type="button"
                    onClick={handleNext}
                    className="flex justify-center items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    key={"submit-btn"}
                    type="submit"
                    className="flex justify-center  items-center gap-2 px-8 py-3 bg-secondary text-white rounded-lg font-medium hover:bg-secondary/90 transition-all"
                  >
                    Submit Application
                  </button>
                )}
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;

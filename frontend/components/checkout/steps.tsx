import { useFormContext } from "react-hook-form";
import type {
  MainCheckoutFormData,
  MicroCheckoutFormData,
  CheckoutFormData,
} from "@/types/form-type";

const StepOne = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<MainCheckoutFormData>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Personal Information
        </h2>
        <p className="text-gray-600 mb-6">
          Please provide your basic personal details for the visa application.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name <span className="text-blue-700">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            {...register("fullName", { required: "Full name is required" })}
            placeholder="Enter your full name as it appears on your passport"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${
              errors.fullName ? "border-blue-700" : "border-gray-300"
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-blue-700">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address <span className="text-blue-700">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="your.email@example.com"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${
              errors.email ? "border-blue-700" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-blue-700">{errors.email.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const StepTwo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<MainCheckoutFormData>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Travel Details
        </h2>
        <p className="text-gray-600 mb-6">
          Tell us about your planned travel and destination.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="destination"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Destination Country <span className="text-blue-700">*</span>
          </label>
          <input
            type="text"
            id="destination"
            {...register("destination", {
              required: "Destination is required",
            })}
            placeholder="Enter the country you plan to visit"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${
              errors.destination ? "border-blue-700" : "border-gray-300"
            }`}
          />
          {errors.destination && (
            <p className="mt-1 text-sm text-blue-700">
              {errors.destination.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="travelDate"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Planned Travel Date <span className="text-blue-700">*</span>
          </label>
          <input
            type="date"
            id="travelDate"
            {...register("travelDate", { required: "Travel date is required" })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${
              errors.travelDate ? "border-blue-700" : "border-gray-300"
            }`}
          />
          {errors.travelDate && (
            <p className="mt-1 text-sm text-blue-700">
              {errors.travelDate.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const StepThree = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<MainCheckoutFormData>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Document Information
        </h2>
        <p className="text-gray-600 mb-6">
          Provide details about your travel documents.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="passportNumber"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Passport Number <span className="text-blue-700">*</span>
          </label>
          <input
            type="text"
            id="passportNumber"
            {...register("passportNumber", {
              required: "Passport number is required",
            })}
            placeholder="Enter your passport number"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${
              errors.passportNumber ? "border-blue-700" : "border-gray-300"
            }`}
          />
          {errors.passportNumber && (
            <p className="mt-1 text-sm text-blue-700">
              {errors.passportNumber.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="nationality"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nationality <span className="text-blue-700">*</span>
          </label>
          <input
            type="text"
            id="nationality"
            {...register("nationality", {
              required: "Nationality is required",
            })}
            placeholder="Enter your nationality"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${
              errors.nationality ? "border-blue-700" : "border-gray-300"
            }`}
          />
          {errors.nationality && (
            <p className="mt-1 text-sm text-blue-700">
              {errors.nationality.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const StepFour = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<MainCheckoutFormData>();

  const formData = watch();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Review & Confirmation
        </h2>
        <p className="text-gray-600 mb-6">
          Please review your information and provide any additional details.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="purposeOfTravel"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Purpose of Travel <span className="text-blue-700">*</span>
          </label>
          <textarea
            id="purposeOfTravel"
            {...register("purposeOfTravel", {
              required: "Purpose of travel is required",
            })}
            placeholder="Describe the purpose of your travel"
            rows={4}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none ${
              errors.purposeOfTravel ? "border-blue-700" : "border-gray-300"
            }`}
          />
          {errors.purposeOfTravel && (
            <p className="mt-1 text-sm text-blue-700">
              {errors.purposeOfTravel.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="additionalNotes"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Additional Notes (Optional)
          </label>
          <textarea
            id="additionalNotes"
            {...register("additionalNotes")}
            placeholder="Any additional information..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
          />
        </div>
      </div>

      {/* Summary Card */}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Application Summary
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Name:</span>
            <span className="font-medium text-gray-900">
              {formData.fullName || "Not provided"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Email:</span>
            <span className="font-medium text-gray-900">
              {formData.email || "Not provided"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Destination:</span>
            <span className="font-medium text-gray-900">
              {formData.destination || "Not provided"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Travel Date:</span>
            <span className="font-medium text-gray-900">
              {formData.travelDate || "Not provided"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const MicroStepOne = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<MicroCheckoutFormData>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Service Request Details
        </h2>
        <p className="text-gray-600 mb-6">
          Please provide your contact information and any specific details for
          this service.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name <span className="text-blue-700">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            {...register("fullName", { required: "Full name is required" })}
            placeholder="Enter your full name"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${
              errors.fullName ? "border-blue-700" : "border-gray-300"
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-blue-700">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address <span className="text-blue-700">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="your.email@example.com"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${
              errors.email ? "border-blue-700" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-blue-700">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="additionalNotes"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Additional Notes (Optional)
          </label>
          <textarea
            id="additionalNotes"
            {...register("additionalNotes")}
            placeholder="How can we help you with this service?"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
          />
        </div>
      </div>
    </div>
  );
};

const MicroStepTwo = () => {
  const { watch } = useFormContext<MicroCheckoutFormData>();

  const formData = watch();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Review & Confirmation
        </h2>
        <p className="text-gray-600 mb-6">
          Please review your information before submitting your request.
        </p>
      </div>

      {/* Summary Card */}
      <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Request Summary
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Name:</span>
            <span className="font-medium text-gray-900">
              {formData.fullName || "Not provided"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Email:</span>
            <span className="font-medium text-gray-900">
              {formData.email || "Not provided"}
            </span>
          </div>
          {formData.additionalNotes && (
            <div className="pt-4 border-t border-gray-200">
              <span className="text-gray-600 block mb-1">
                Additional Notes:
              </span>
              <p className="text-gray-900 bg-white p-3 rounded border border-gray-100 italic">
                {formData.additionalNotes}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { StepOne, StepTwo, StepThree, StepFour, MicroStepOne, MicroStepTwo };

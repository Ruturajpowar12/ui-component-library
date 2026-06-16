import { useState } from "react";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

function App() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (step === 1) {
      if (!formData.name || !formData.email) {
        return alert("Fill all fields");
      }
    }

    if (step === 2) {
      if (!formData.phone || !formData.city) {
        return alert("Fill all fields");
      }
    }

    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitForm = () => {
    alert("Form Submitted");

    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center">
      <div className="card bg-base-100 shadow-xl w-[500px] p-8">
        <progress
          className="progress progress-primary w-full mb-6"
          value={step}
          max="3"
        />

        {step === 1 && (
          <Step1 formData={formData} handleChange={handleChange} />
        )}

        {step === 2 && (
          <Step2 formData={formData} handleChange={handleChange} />
        )}

        {step === 3 && <Step3 formData={formData} />}

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button onClick={prevStep} className="btn btn-outline">
              Previous
            </button>
          )}

          {step < 3 ? (
            <button onClick={nextStep} className="btn btn-primary ml-auto">
              Next
            </button>
          ) : (
            <button onClick={submitForm} className="btn btn-success ml-auto">
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

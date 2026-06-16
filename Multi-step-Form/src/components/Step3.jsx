import React from "react";

function Step3({ formData }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Review</h2>

      <div className="space-y-3">
        <p>
          <b>Name:</b> {formData.name}
        </p>

        <p>
          <b>Email:</b> {formData.email}
        </p>

        <p>
          <b>Phone:</b> {formData.phone}
        </p>

        <p>
          <b>City:</b> {formData.city}
        </p>
      </div>
    </div>
  );
}

export default Step3;

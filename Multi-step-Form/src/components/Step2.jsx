import React from "react";

function Step2({ formData, handleChange }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Contact Info</h2>

      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        className="input input-bordered w-full mb-4"
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
    </div>
  );
}

export default Step2;

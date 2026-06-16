import React from "react";

function Step1({ formData, handleChange }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Personal Info</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="input input-bordered w-full mb-4"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
    </div>
  );
}

export default Step1;

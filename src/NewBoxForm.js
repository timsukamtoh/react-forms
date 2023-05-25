import React, { useState } from "react";

/**
 * Component for New Box Form
 *
 * Props:
 * - addBox : function
 *
 * State:
 * - formData : object with form fields
 *
 * BoxList -> NewBoxForm
 *
 * @param {*} param0
 * @returns
 */
function NewBoxForm({ addBox }) {
  const initialState = {
    width: "",
    height: "",
    backgroundColor: ""
  }

  const [formData, setFormData] = useState(initialState);

  /**
   * Updates formData upon every change in all input fields
   * @param {Object} evt
   */
  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData(currData => {
      currData[fieldName] = value;
      return { ...currData };
    });
  }

  /**
   * Calls BoxList component addBox function to set its state and resets form state
   * @param {Object} evt
   */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width:
        <input id="width" name="width" onChange={handleChange} value={formData.width}/>
      </label>
      <label htmlFor="height">Height:
        <input id="height" name="height" onChange={handleChange} value={formData.height}/>
      </label>
      <label htmlFor="backgroundColor">Background Color:
        <input id="backgroundColor" name="backgroundColor" onChange={handleChange} value={formData.backgroundColor}/>
      </label>
      <button>Add Box</button>
    </form>
  )
}

export default NewBoxForm;
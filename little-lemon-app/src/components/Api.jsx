export const fetchAPI = async (date) => {
    const availableTimes = ["10:00 AM", "11:00 AM", "12:00 PM"];
    return availableTimes;
  };

  export const submitAPI = async (formData) => {
    console.log("Form data submitted:", formData);
    return true;
  };
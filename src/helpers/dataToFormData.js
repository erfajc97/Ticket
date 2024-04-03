export const dataToFormData = (data) => {
  const formData = new FormData();

  for (const key in data) {
    if(data[key]){
      formData.append(key, data[key]);
    }
  }

  return formData
};

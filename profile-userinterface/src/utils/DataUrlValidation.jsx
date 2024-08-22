function isValidUrl(url) {
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlRegex.test(url);
}

export default function validateDataUrlField(values, profileData, validations) {
  let field = profileData.form_fields.find(
    ({ field }) => field.field_type.type === "data-url-field"
  );
  let field_id = field.field.field_id;
  let value = values[field_id];
  if (field.field.mandatory === "true" || (value !== undefined && value !== "")) {
    if (!isValidUrl(value)) {
      validations[field_id] = "Please enter a valid URL";
    }
  }
}
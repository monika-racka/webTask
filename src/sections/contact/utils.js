export const getPhoneNumber = (value) => {
  let digitValue = value.replace(/\D/g, "");

  if (digitValue.length > 9) {
    digitValue = digitValue.slice(0, 9);
  }

  return digitValue.match(/.{1,3}/g)?.join(" ") || "";
};

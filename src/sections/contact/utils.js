export const getPhoneNumber = (value) => {
  if (value.length > 9) {
    value = value.slice(0, 9);
  }

  return value.match(/.{1,3}/g)?.join(" ") || "";
};

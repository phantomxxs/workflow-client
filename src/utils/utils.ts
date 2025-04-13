const cleanUpObject = (data: object) => {
  return Object.entries(data).reduce((acc, [key, value]) => {
    if (typeof value === "number") {
      return { ...acc, [key]: value };
    }
    if (Array.isArray(value)) {
      return value.length > 0 ? { ...acc, [key]: value.join(",") } : { ...acc };
    }
    if (!value) {
      return { ...acc };
    }
    return { ...acc, [key]: value };
  }, {});
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const queryFormatter = (params?: Record<string, any>) => {
  if (params) {
    return new URLSearchParams(cleanUpObject(params));
  }
  return "&";
};

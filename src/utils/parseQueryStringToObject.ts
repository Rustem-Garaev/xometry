export const parseQueryStringToObject = (queryString: string) =>
  queryString
    .replace("?", "")
    .split("&")
    .reduce((acc, current) => {
      const [key, value] = current.split("=");
      const decodedValue = decodeURIComponent(value);

      if (key.endsWith("[]")) {
        const clearKey = key.slice(0, key.length - 2);
        acc[clearKey] =
          clearKey in acc ? [...acc[clearKey], decodedValue] : [decodedValue];
      } else {
        acc[key] = decodedValue;
      }

      return acc;
    }, {} as Record<string, any>);

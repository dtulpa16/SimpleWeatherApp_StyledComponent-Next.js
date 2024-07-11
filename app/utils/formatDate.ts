export const formatDate = (dateString: string | null): string => {
  let date;
  if (dateString) {
    date = new Date(dateString);
  } else {
    date = new Date();
  }
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

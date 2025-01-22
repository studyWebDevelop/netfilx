const omitDescription = (description: string) => {
  return description?.length > 100
    ? description.substring(0, 100) + "..."
    : description;
};

export { omitDescription };

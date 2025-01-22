const scrollY = (id: string, direction: "left" | "right") => {
  const element = document.getElementById(id);

  if (!element) return;

  switch (direction) {
    case "left":
      element.scrollLeft -= innerWidth - 80;
      break;
    case "right":
      element.scrollLeft += innerWidth + 80;
      break;
  }
};

export { scrollY };

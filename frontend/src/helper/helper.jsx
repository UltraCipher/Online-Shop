const ShortenText = (text) => {
  return text.split(" ").slice(0, 3).join("");
};

export { ShortenText };

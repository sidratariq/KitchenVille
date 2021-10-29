// Get visible recipies

export default (recipies, { text }) => {
  return recipies.filter((recipie) => {
    const textMatch = recipie.description.toLowerCase().includes(text.toLowerCase());

    return textMatch;
  });
};

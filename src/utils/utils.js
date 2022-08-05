const shuffle = (array) => {
  return [...array].sort(() => Math.random() - 0.6);
};

export default shuffle;

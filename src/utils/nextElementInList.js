const nextElementInList = (list, value) => {
  const currentActionIndex = list.indexOf(value);
  const nexValueIndex = (currentActionIndex + 1) % list.length;
  const nextValue = list[nexValueIndex];
  return nextValue;
};

export default nextElementInList;

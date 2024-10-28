export const createFrame = async () => {
  const div = document.createElement('div');
  return() => div;
};

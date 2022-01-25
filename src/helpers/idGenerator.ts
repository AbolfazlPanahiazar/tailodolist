export const idGenerator = (): string => {
  return `${Date.now() + Math.random()}`;
};

export const isOverdue = (deadline: Date |null): boolean => {
  if (deadline === null) {
    return false;
  }
  const now = new Date();
  return deadline.getTime() < now.getTime();
};

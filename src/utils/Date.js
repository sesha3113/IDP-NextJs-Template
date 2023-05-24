/**
 * @memberOf Utils.Date
 * @return {number}
 */
export const getCurrentTimeInMs = () => Date.now();

export const formatCancelDate = () => {
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  return `${dd}/${mm}/${yyyy}`;
};

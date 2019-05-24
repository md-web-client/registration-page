export const navigate = (history, navString = '/') => {
  console.log('reached', {history, navString})
  history.push(navString);
};
export const replace = (history, navString = '/') => {

  history.replace(navString);
};

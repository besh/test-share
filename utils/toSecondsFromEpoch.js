const toSecondsFromEpoch = (dateString) => {
  const date = dateString ? new Date(dateString) : new Date();
  return Math.floor(date.getTime() / 1000);
};

export default toSecondsFromEpoch;

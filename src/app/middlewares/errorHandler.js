module.exports = (error, request, response, next) => {
  // eslint-disable-next-line no-console
  console.log('error handler', error);
  response.sendStatus(500);
};

function succesResponse(res, message, data = null) {
  const response = {
    success: true,
    message,
  };
  if (message.length === 0) {
    response.message = undefined;
  }
  if (data !== null) {
    response.data = data;
  }

  return res.status(200).json(response);
}

module.exports = { succesResponse };

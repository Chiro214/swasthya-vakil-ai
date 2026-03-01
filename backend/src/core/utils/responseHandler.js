function successResponse(res, data, statusCode = 200) {
  return res.status(statusCode).json({
    success: true,
    data,
    error: null
  });
}

function errorResponse(res, message, statusCode = 500) {
  return res.status(statusCode).json({
    success: false,
    data: null,
    error: message
  });
}

module.exports = {
  successResponse,
  errorResponse
};
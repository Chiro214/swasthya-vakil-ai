function errorMiddleware(err, req, res, next) {
  console.error("Error:", err);

  res.status(err.statusCode || 500).json({
    success: false,
    data: null,
    error: err.message || "Internal Server Error"
  });
}

module.exports = errorMiddleware;
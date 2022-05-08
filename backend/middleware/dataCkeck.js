const dataCheck = (req, res, next) => {
  const { data } = req.body;
  if (!data) {
    res.status(400).json({
      status: "error",
      message: "400 Bad Request",
    });
    return;
  }
  try {
    res.locals.data = JSON.parse(data);
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "400 Bad Request",
    });
    return;
  }
  next();
};

module.exports = dataCheck;

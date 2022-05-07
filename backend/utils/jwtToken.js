// Create Token and saving in cookie

const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000 // abi ka time fir jab expire a time nikal diya add karke simple maths
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true, // yaha humne token mei id store kar di ek object ke form mei fir user and token ko return kar diya
    user,
    token,
  });
};

module.exports = sendToken;

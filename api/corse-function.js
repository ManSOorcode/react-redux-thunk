// eslint-disable-next-line no-undef
module.exports = (req, res) => {
  // Set headers to allow requests from any origin
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, OPTIONS, DELETE"
  );

  // Preflight CORS handler
  if (req.method === "OPTIONS") {
    return res.status(200).json({ body: "OK" });
  }

  // Your other code goes here
};

const secret = (req, res) => {
  res.send(JSON.stringify(req["tokenData"]));
};

module.exports = { secret };

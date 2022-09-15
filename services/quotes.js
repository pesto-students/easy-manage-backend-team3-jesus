const { Quotes } = require("../models");

module.exports.postQuote = (req, res) => {
  Quotes.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    plans: req.body.plans,
    message: req.body.message,
  })
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Created a Quote!",
      });
    })
    .catch((err) => {
      if (err) {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      }
    });
};

module.exports.deleteQuote = (req, res) => {
  Quotes.findOne({
    where: { id: req.params.id },
  }).then((user) => {
    if (user) {
      Quotes.destroy({
        where: {
          id: req.params.id,
        },
      })
        .then((result) => {
          return res.status(200).json({
            message: `Quote Deleted Succesfully`,
          });
        })
        .catch((err) => {
          return res.staus(500).json({
            error: err,
          });
        });
    } else {
      return res.status(500).json({
        message: "Quote doesn't exist",
      });
    }
  });
};

module.exports.updateQuote = (req, res) => {
  Quotes.findOne({
    where: { id: req.params.id },
  }).then((user) => {
    if (user) {
      Quotes.update(
        {
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          plans: req.body.plans,
          message: req.body.message,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      )
        .then((result) => {
          return res.status(200).json({
            message: `Quote Updated Succesfully`,
          });
        })
        .catch((err) => {
          return res.staus(500).json({
            error: err,
          });
        });
    } else {
      return res.status(500).json({
        message: "Quote doesn't exist",
      });
    }
  });
};

module.exports.getAllQuotes = (req, res) => {
  Quotes.findAll()
    .then((quotes) => {
      return res.status(200).json(quotes);
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
      });
    });
};

module.exports.getQuote = (req, res) => {
    Quotes.findOne({
        where: { id: req.params.id },
      })
      .then((quote) => {
        return res.status(200).json(quote);
      })
      .catch((err) => {
        return res.status(500).json({
          error: err,
        });
      });
  };
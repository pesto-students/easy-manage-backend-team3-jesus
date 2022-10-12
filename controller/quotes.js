const {
    getAllQuotes,
    getQuote,
    postQuote,
    updateQuote,
    deleteQuote
  } = require("../services/quotes");

  module.exports.submitQuote = (req, res) => {
    return postQuote(req, res);
  };

  module.exports.getQuotes = (req, res) => {
    return getAllQuotes(req, res);
  };
  
  module.exports.getOneQuote = (req, res) => {
    return getQuote(req, res);
  };

  module.exports.updateOneQuote = (req, res) => {
    return updateQuote(req, res);
  };

  module.exports.deleteOneQuote = (req, res) => {
    return deleteQuote(req, res);
  };

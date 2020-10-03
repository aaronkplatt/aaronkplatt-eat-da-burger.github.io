var orm = require("../config/orm.js");
// cb = call back
var burger = {
    selectAll: function(cb) {
      return orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
};
  
  // Export the database functions for the controller (burger-controller.js).
  module.exports = burger;
  
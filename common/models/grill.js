'use strict';

module.exports = function(Grill) {
  Grill.findByLocation = function(cb) {
    var response;
    var test = true;

    response = "test";
    cb(null, response);
  };
  Grill.remoteMethod(
    'findByLocation', {
      http: {
        path: '/findByLocation',
        verb: 'get'
      },
      returns: {
        arg: 'status',
        type: 'string'
      }
    }
  );
};

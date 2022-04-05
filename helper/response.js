// module.exports = {
//   response: (response, status, msg, data, pagination) => {
//     const result = {}
//     result.status = status || 200
//     result.msg = msg
//     result.data = data
//     result.pagination = pagination

//     return response.status(result.status).json(result)
//   }
// }
module.exports.response = function(res, data, statusCode) {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(statusCode || 500)
  res.json(data)
  res.end()
};

module.exports.response_datatable = function(res, data, statusCode, meta_data) {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(statusCode || 500)
  res.json(data)
  res.end()
};
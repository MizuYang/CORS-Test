const headers = {
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
  // 'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Origin': 'http://localhost:8088', // 設定允許跨域的來源
  'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
  'Content-Type': 'application/json'
}

module.exports = headers
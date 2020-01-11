const http = require('http')

const homePage = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Node.js 静态网站/API 部署上线示例</title>
      <style>
        h1 {
          text-align: center;
          color: #ff6600;
        }
      </style>
    </head>
    <body>
      <h1>Node.js 静态网站/API 部署上线示例</h1>
    </body>
  </html>
`

http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(homePage)
}).listen(5000, () => {
  console.log('Server running at 5000')
})
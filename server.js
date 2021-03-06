var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
    console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
    process.exit(1)
}

var server = http.createServer(function (request, response) {
    var parsedUrl = url.parse(request.url, true)
    var pathWithQuery = request.url
    var queryString = ''
    if (pathWithQuery.indexOf('?') >= 0) {
        queryString = pathWithQuery.substring(pathWithQuery.indexOf('?'))
    }
    var path = parsedUrl.pathname
    var query = parsedUrl.query
    var method = request.method

    /******** 从这里开始看，上面不要看 ************/

    console.log('路径（带查询参数）为：' + pathWithQuery)

    if (path === '/') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write(`二哈`)
        response.end()
    } else if (path === '/index.html') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html;charset=utf-8');
        const htmlString = fs.readFileSync('public/html/index.html')
        response.write(htmlString);
        response.end();
    } else if (path === '/main.js') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
        response.write(fs.readFileSync('public/js/main.js'))
        response.end()
    } else if (path === '/style.css') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/css;charset=utf-8')
        response.write(fs.readFileSync('public/css/style.css'))
        response.end()
    } else if (path === '/main1.js') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
        response.write(fs.readFileSync('public/js/main1.js'))
        response.end()
    } else if (path === '/iframe.html') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html;charset=utf-8');
        response.write(fs.readFileSync('public/html/iframe.html'));
        response.end();
    } else if (path === '/test.xml') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/xml;charset=utf-8');
        response.write(fs.readFileSync('public/html/test.xml'));
        response.end();
    } else if (path === '/test.json') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json;charset=utf-8');
        response.write(fs.readFileSync('public/json/test.json'));
        response.end();
    } else if (path === '/db1.json') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json;charset=utf-8');
        response.write(fs.readFileSync('public/db/db1.json'));
        response.end();
    } else if (path === '/db2.json') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json;charset=utf-8');
        response.write(fs.readFileSync('public/db/db2.json'));
        response.end();
    } else if (path === '/db3.json') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json;charset=utf-8');
        response.write(fs.readFileSync('public/db/db3.json'));
        response.end();
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html;charset=utf-8');
        response.write(`你输入的路径不存在对应的内容`);
        response.end();
    }

    /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n打开 http://localhost:' + port)
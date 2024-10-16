const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3003;

// 添加中间件设置正确的响应头
app.get(encodeURI('/Build/mushroom webgl.framework.js.gz'), (req, res) => {
    const filePath = path.join(__dirname, '/public/Build/mushroom webgl.framework.js.gz');
    const readStream = fs.createReadStream(filePath);
    res.set('Content-Encoding', 'gzip');
    readStream.pipe(res);
});

// 添加中间件设置正确的响应头
app.get(encodeURI('/Build/mushroom webgl.wasm.gz'), (req, res) => {
    const filePath = path.join(__dirname, '/public/Build/mushroom webgl.wasm.gz');
    const readStream = fs.createReadStream(filePath);
    res.set('Content-Type', 'application/wasm');
    res.set('Content-Encoding', 'gzip');
    readStream.pipe(res);
});

// 添加中间件设置正确的响应头
app.get(encodeURI('/Build/mushroom webgl.data.gz'), (req, res) => {
    const filePath = path.join(__dirname, '/public/Build/mushroom webgl.data.gz');
    const readStream = fs.createReadStream(filePath);
    res.set('Content-Encoding', 'gzip');
    readStream.pipe(res);
});

// 设置静态资源目录
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

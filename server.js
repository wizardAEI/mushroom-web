const express = require('express');
const app = express();
const port = 3003;

// 设置静态资源目录
app.use(express.static('public'));
app.use('/test', express.static('public'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

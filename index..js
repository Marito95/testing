express = require('express');
var app = express();
var port = 8080
app.get('/', (req, res) => res.send("Hello"));
app.listen(port, () => {
    console.log('app is running')
})


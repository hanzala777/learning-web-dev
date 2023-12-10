const express = require('express');
const app = express();
const port = 3000;

// app.get('/', handleFirstRequest);

function started() {
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);

// Started http server with the above code
const express = require('express');
const port = process.env.PORT || 5001;
const app = express();

app.get('/', (req, res)=> {
    res.send('Hi There from backend');
});

app.listen(port, (err)=> {
    if(err) {
        console.log(`Error: ${err.message}`);
    } else {
        console.log(`Server running on port ${port}`);
    }
})
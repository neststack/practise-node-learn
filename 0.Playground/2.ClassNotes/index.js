const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});

const app = require('./app');

require('dotenv').config({
    path: __dirname + '/../.env',
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

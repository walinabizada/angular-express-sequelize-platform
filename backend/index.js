const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./app/routes/userRoutes');
const jobRoutes = require('./app/routes/jobRoutes');
const companyRoutes = require('./app/routes/companyRoutes');

dotenv.config();

const app = express();

var allowlist = ['http://localhost:4200'];

var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = {
            origin: req.header('Origin'), // reflect the origin in the CORS response
            credentials: true // allow credentials to be sent
        };
    } else {
        corsOptions = { origin: false }; // disable CORS for this request
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Define routes
app.use('/api/v1', userRoutes);
app.use('/api/v1/jobs', jobRoutes);
app.use('/api/v1/companies', companyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

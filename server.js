require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const apiRouter = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;
const SITE_TITLE = process.env.SITE_TITLE || 'My Advanced App';

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/health', (req, res) => {
    res.json({ status: 'UP', time: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`${SITE_TITLE} running on port ${PORT}`);
});

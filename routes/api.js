const express = require('express');
const router = express.Router();

router.get('/message', (req, res) => {
    const msg = process.env.API_MESSAGE || 'Hello from API';
    res.json({ message: msg, timestamp: new Date().toISOString() });
});

router.get('/config', (req, res) => {
    const title = process.env.SITE_TITLE || 'My Advanced App';
    res.json({ siteTitle: title });
});

module.exports = router;

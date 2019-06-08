const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    const actualPage = '/brand/edit';
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
});

module.exports = router;
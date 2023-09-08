const express = require('express');
const router = express.Router();
const filter = require('../controller/filter');

router.get('/', (req, res) => {
res.json(
    {
    "operations" : 1
    }
)
});
router.post('/' ,filter.filter);
module.exports = router;

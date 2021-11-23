const path = require('path');
const router = require('express').Router();

// GET Route :: Paint the new exercise content. 
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});
// GET Route :: Paint the Stats Page
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});
// GET Route :: Paint the Exercise Page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});


module.exports = router;

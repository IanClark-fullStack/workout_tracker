const router = require('express').Router();
const path = require('path');

// GET Route :: Paint the Exercise Page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});
// GET Route :: Paint the new exercise content. 
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
});
// GET Route :: Paint the Stats Page
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
});



module.exports = router;

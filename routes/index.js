var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/files', function (req, res) {
    res.status(200).json({ message: 'IMPL_101' });
});

router.post('/files', function (req, res) {
    console.log(req.files);
    var file = req.files.file1;
    res.status(201).json({ message: file.name });
});

module.exports = router;

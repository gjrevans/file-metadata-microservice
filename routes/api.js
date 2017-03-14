var multer  = require('multer'),
    upload = multer({ dest: 'uploads/' });
    
var ApiRoutes = function(){};

ApiRoutes.prototype.upload = function(req, res) {
    var upload = multer().single('file');

    upload(req, res, function (err) {
        // Catch any errors
        if (err) { return next(err); }

        // Proceed with file metadata creation
        var fileDetails = {
            name: req.file.originalname,
            size: req.file.size,
            mimetype: req.file.mimetype
        }

        res.json(fileDetails);
    });
}

module.exports = ApiRoutes;

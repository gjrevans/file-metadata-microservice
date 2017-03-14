var PageRoutes = function(){};

PageRoutes.prototype.index = function(req, res) {
    res.render('index.html', { page: { title: 'Upload File' } } );
}

module.exports = PageRoutes;

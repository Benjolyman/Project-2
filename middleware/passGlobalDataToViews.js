const passGlobalDataToViews = (req, res, next) => {
    res.locals.user = req.session.user || null;
    res.locals.title = 'League DB'
    next();
};

module.exports = passGlobalDataToViews;
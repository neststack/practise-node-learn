module.exports = {
    index: (req, res) => {
        // res.render("users/index", {data: "Dynamic Data"});
        res.render('users-pug/index', { data: 'Dynamic Data' });
    },
};

module.exports = {
    index: (req, res) => {
        // prettier-ignore
        res.render("users/index", {data: "Dynamic Data"});
        // prettier-ignore
        // res.render("users-pug/index", { data: 'Dynamic Data' });
    },
};

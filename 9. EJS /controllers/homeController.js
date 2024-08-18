const homeController = (req,res) => {
    const data = {
        name : "Kunaal",
        id : 31,
    };
    res.render("index",data);
};

export { homeController };
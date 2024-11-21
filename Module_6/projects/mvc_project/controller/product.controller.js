const productList = (req, res) => {
    res.json({
        success: true
    })
};

const productDetails = (req, res) => {
    res.json({
        success: true
    })
};

const productReview = (req, res) => {
    res.json({
        success: true
    })
};

const productRate = (req, res) => {
    res.json({
        success: true
    })
};

const productController = {
    productList,
    productDetails,
    productReview,
    productRate
};

module.exports = productController;
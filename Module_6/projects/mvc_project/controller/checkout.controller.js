const placeOrder = (req, res) => {
    // Todo: Write the logic for placing an order
    res.json({
        success: true
    })
};

const makePayment = (req, res) => {
    res.json({
        success: true
    })
};

const checkoutController = {
    placeOrder,
    makePayment
};

module.exports = checkoutController;
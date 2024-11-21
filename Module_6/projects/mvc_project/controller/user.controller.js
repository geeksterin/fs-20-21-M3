const singup = (req, res) => {
    res.json({
        success: true
    })
};

const login = (req, res) => {
    res.json({
        success: true
    })
};

const logout = (req, res) => {
    res.json({
        success: true
    })
};

const forgotPassword = (req, res) => {
    res.json({
        success: true
    })
};

const resetPassword = (req, res) => {
    res.json({
        success: true
    })
};

const userController = {
    singup,
    login,
    logout,
    forgotPassword,
    resetPassword
};

module.exports = userController;
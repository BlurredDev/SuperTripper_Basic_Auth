const { Router } = require("express");
const authenticationRouter = require("./authentication")

module.exports = ()=>{
    const router = Router();
    router.use("/authentication",authenticationRouter())
    return router;
}
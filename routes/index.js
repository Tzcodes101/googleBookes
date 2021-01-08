const path = require("path");
const router = require("exress").Router();
const apiRoutes = require("./api");

//API routes
router.user("./api", apiRoutes);


//Send to the React App
router.use((req, res) => {
    res.sendFile(path.join(_dirname, "../client/public/index.html"))
});

module.exports = router;
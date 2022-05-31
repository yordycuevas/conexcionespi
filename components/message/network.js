const express = require("express");
const response = require("../../network/response.js");
const controller = require("./controller.js");
const router = express.Router();

router.post("/", function (req, res) {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((err) => {
      response.error(
        req,
        res,
        "Danger Danger from POST",
        400,
        "Error keyboard"
      );
    });
});
// 
router.get("/", function (req, res) {
  const filterMessage = req.query.user || null;
  controller
    .getMessage(filterMessage)
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch(err => {
      response.error(req, res, "Danger Danger from GET", 500, err);
    });
});

router.patch("/:id", function (req, res) {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, "Error from PATH", 500, e);
    });
});


router.delete("/:id", function (req, res) {
  controller.deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Data ${req.params.id} deleted successfully!`, 200);
    })
    .catch((e) => {
      response.error(req, res, "Error from DELETE !", 500, e);
    });
});

module.exports = router;

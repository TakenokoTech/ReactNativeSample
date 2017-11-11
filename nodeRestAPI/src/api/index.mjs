import express from "express";
const router = express.Router();

/**
 * sample API
 * @description GET method
 * @returns {JSON}
 */
router.get('/', function(req, res, next) {
  var param = {"値":"これはサンプルAPIです"};
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

/** 
 * sample API
 * @description GET method
 * @returns {JSON}
 */
router.get('/hello', function(req, res, next) {
  var param = {"result":"Hello World !"};
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

export default router;
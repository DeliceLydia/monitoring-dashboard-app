const express = require ('express');
const WebsiteController = require('../controllers/websiteControllers.js');
const WebsiteStatusController = require('../controllers/websiteStatusControllers.js')

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Website monitoring dashboard!');
});
router.post('/websites', WebsiteController.addWebsite);
router.post('/trigger-monitoring', WebsiteController.triggerMonitoring);
router.get('/websites', WebsiteController.getAllWebsites);
router.get('/websites/:id', WebsiteController.getWebsiteById);
router.get('/websites', WebsiteController.getAllWebsites);
router.get('/check-status/:id', WebsiteStatusController.checkWebsiteStatus);

module.exports = router;

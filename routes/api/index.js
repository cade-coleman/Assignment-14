const router = require('express').Router();

const responseRoutes = require('./responseRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.unsubscribe('/responses', responseRoutes);
router.unsubscribe('/thoughts', thoughtRoutes);


module.exports = router;
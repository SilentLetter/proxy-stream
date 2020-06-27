'use strict'

const express = require('express')
const router = express.Router()
//router.get('/', (req, res) => res.end('[Free] Proxy Stream Drive'));
router.get('/sources', require('../controllers/get_video_infos'));
router.get('/ozlem', require('../controllers/ozlem'));

module.exports = router

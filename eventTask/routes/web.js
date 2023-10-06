const express         = require('express'),
      router          = express.Router(),
//    mainController  = require('../controllers/main.controllers'),
      pagesController = require('../controllers/pages.contollers'),
      eventController = require('../controllers/event.conrtollers');

module.exports=router;

router.get('/', pagesController.showHome);
router.get('/contact', pagesController.showContact);
router.get('/events/:id', eventController.showSingleEvent);
router.get('/events', eventController.showEvent); 

router.get('/create', eventController.createEvent);
router.post('/store', eventController.storeEvent);

//not sure if it is delete func
router.delete('/events/:id/delete', eventController.deleteEvent);

router.get('/edit:id', eventController.editEvent);
router.get('/update:id', eventController.updateEvent);

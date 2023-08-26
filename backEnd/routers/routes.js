const express=require('express');

const controller=require('../controllers/controllers');

const router=express.Router();

router.get('/',controller.getting);
router.post('/',controller.posting);
router.delete('/:id',controller.deleting);
router.put('/:id',controller.updating);

module.exports=router;
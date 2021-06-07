module.exports = async(router) => {
    const controller = require('../../controller/employee');
    const validator=require('../../validator/validation');
    
    
    router.get('/getAllEmployee',controller.getAllEmployee);
    router.post('/AddEmployee',validator.validateemployee,controller.AddEmployee);
    router.put('/updateEmployee',validator.validateupdateemployee,controller.updateEmployee);
    router.put('/deleteEmployee',validator.validatedeleteemployee,controller.deleteEmployee); 
    return router;
}
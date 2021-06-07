module.exports = async(router) => {
    const controller = require('../../controller/department');
    
    
    router.get('/getAllDepartment',controller.getAllDepartment);
    
    return router;
}
const BasePageHandler = require("../utility/base.page");
const models = require("../models/index");


exports.getAllDepartment=async(req,res)=>{
    try {
        
        const get_all_department=await models.department.findAll({where:{isdeleted:"0"}});
        BasePageHandler.response(res,true,'All Departments fetched Successfully.',get_all_department);
    } catch (error) {
        console.log(error);
        BasePageHandler.response(res, false,'Please Try Again', error);
    }
}
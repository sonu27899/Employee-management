const BasePageHandler = require("../utility/base.page");
const models = require("../models/index");
const { validationResult } = require("express-validator");


exports.AddEmployee=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ message: errors.array() });
        }
        const get_employee=await models.employee.findOne({where:{email:req.body.email,isdeleted:"0"}});
        if(get_employee)
        {
            BasePageHandler.response(res,false,'Email Already Exist',null);
        }
        else
        {
            const make_date=new Date(req.body.dob);
            const add_employee=await models.employee.create({first_name:req.body.first_name,last_name:req.body.last_name,designation:req.body.designation,email:req.body.email,dob:make_date,address:req.body.address,department:req.body.department,isdeleted:"0"});
            BasePageHandler.response(res,true,'Employee Inserted Successfully.',add_employee);
        }
    } catch (error) {
        console.log(error);
        BasePageHandler.response(res, false,'Please Try Again', error);
    }
}

exports.getAllEmployee=async(req,res)=>{
    try {
        const get_all_emp=await models.employee.findAll({where:{isdeleted:"0"}});
        for(let i=0;i<get_all_emp.length;i++)
        {
            const get_name=await models.department.findOne({where:{Id:get_all_emp[i].dataValues.department}});
            get_all_emp[i].dataValues.department_name=get_name.name;

        }
        BasePageHandler.response(res,true,'All Employees fetched Successfully.',get_all_emp);
    } catch (error) {
        console.log(error);
        BasePageHandler.response(res, false,'Please Try Again', error);
    }
}

exports.updateEmployee=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ message: errors.array() });
        }
        
        const update_employee=await models.employee.update(req.body,{where:{Id:req.body.Id}});
        BasePageHandler.response(res,true,'Employee updated Successfully.',update_employee);
    } catch (error) {
        console.log(error);
        BasePageHandler.response(res, false,'Please Try Again', error);
    }
}

exports.deleteEmployee=async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ message: errors.array() });
        }
        const changeData = { isdeleted: "1" };
        const delete_employee=await models.employee.update(changeData,{where:{Id:req.body.Id}});
        BasePageHandler.response(res,true,'Employee deleted Successfully.',delete_employee);
    } catch (error) {
        console.log(error);
        BasePageHandler.response(res, false,'Please Try Again', error);
    }
}
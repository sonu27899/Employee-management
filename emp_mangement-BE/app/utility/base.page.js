exports.response = (res, status, msg, data = null)=>{
    res.json({
        status:status,
        message:msg,
        data:data
    });
}


module.exports = (sequelize, DataType) => {
    const employee = sequelize.define('employee', {
        Id: {
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,

        },
        first_name: DataType.STRING,
        last_name:DataType.STRING,
        designation:DataType.STRING,
        email:DataType.STRING,
        dob: {
            type: DataType.DATEONLY,
            defaultValue: null
        },
        address:DataType.TEXT,
        department:DataType.INTEGER,
        isdeleted: DataType.ENUM('0', '1')
    }, {
        timestamps: true,
        freezeTableName: true
    });
    return employee;
}
module.exports = (sequelize, DataType) => {
    const department = sequelize.define('department', {
        Id: {
            type: DataType.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,

        },
        name: DataType.STRING,
        isdeleted: DataType.ENUM('0', '1')
    }, {
        timestamps: true,
        freezeTableName: true
    });
    return department;
}
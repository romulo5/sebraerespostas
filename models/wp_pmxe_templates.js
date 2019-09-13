/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_pmxe_templates', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ''
    },
    options: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'wp_pmxe_templates'
  });
};

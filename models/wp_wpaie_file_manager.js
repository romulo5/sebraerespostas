/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wp_wpaie_file_manager', {
    file_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    file_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    absolute_path: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    file_path: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    file_type: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    file_info: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ''
    },
    imported_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    upload_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    }
  }, {
    tableName: 'wp_wpaie_file_manager'
  });
};

module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: { defaultValue: DataTypes.NOW, type: DataTypes.DATE },
    updated: { defaultValue: DataTypes.NOW, type: DataTypes.DATE },
  }, 
  { 
    timestamps: false,
    tableName: 'BlogPosts',
  });
  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.Users, { foreignKey: 'userId', as: 'user' });
    BlogPosts.hasMany(models.Categories, { foreignKey: 'id', as: 'categoryId' });
  };
  return BlogPosts;
};
module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories',
    {},
    { timestamps: false });
  PostsCategories.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, { 
      as: 'Categories',
      through: PostsCategories,
      foreignKey: 'postId',
      otherKey: 'category_id',
    });
    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'BlogPosts',
      through: PostsCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostsCategories;
};
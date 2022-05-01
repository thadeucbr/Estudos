module.exports = (sequelize, DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories',
    {
      categoryId: { type: DataTypes.INTEGER, primaryKey: true },
      postId: { type: DataTypes.INTEGER, primaryKey: true },
    }, { timestamps: false });
  PostsCategories.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, { as: 'categories',
      through: PostsCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Categories.belongsToMany(models.BlogPosts, { as: 'blogPosts',
      through: PostsCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return PostsCategories;
};

// Consultado o PR: https://github.com/tryber/sd-07-project-blogs-api/pull/24/files para correção de bugs
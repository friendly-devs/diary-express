module.exports = (mongoose) => {
  const User = mongoose.model(
    'user',
    mongoose.Schema(
      {
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        bio: String,
        image: String,
        gender: Boolean,
      },
      { timestamps: true },
    ),
  );

  return User;
};

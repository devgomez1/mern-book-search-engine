const { User } = require('../models');

const resolvers = {
  Query: {
    // get a single user by either their id or their username
    user: async (parent, { username, _id }) => {
      return User.findOne({
        $or: [{ _id }, { username }],
      }).populate('savedBooks');
    },
    // get all users
    users: async () => {
      return User.find().populate('savedBooks');
    },
  },

  Mutation: {
    // create a new user
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      return user;
    },

    // login a user
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) { 
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },

    // save a book to a user's `savedBooks` array
    saveBook: async (parent, { input }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          context.user._id,
          { $addToSet: { savedBooks: input } },
          { new: true }
        ).populate('savedBooks');
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    // remove a book from a user's `savedBooks` array
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          context.user._id,
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        ).populate('savedBooks');
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;

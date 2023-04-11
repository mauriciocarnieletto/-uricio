module.exports = {
  resolvers: {
    Query: {
      // Returns an array of Tracks taht will be used to populate our client
      tracksForHome: (parent, args, { dataSources }, info) => {
        return dataSources.trackApi.getTracksForHome();
      },
    },
    Track: {
      author: ({ authorId }, args, { dataSources }, info) => {
        return dataSources.trackApi.getAuthor(authorId);
      },
    },
  },
};

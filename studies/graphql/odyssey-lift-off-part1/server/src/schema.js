const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]!
  }

  """
  A group of modules that teaches about a specific topic
  """
  type Track {
    id: ID!
    "The track title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's thumb to ilustrate the card"
    thumbnail: String
    "The track's approximate lenght to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
  }
  """
  Author of a complete track
  """
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = { typeDefs };

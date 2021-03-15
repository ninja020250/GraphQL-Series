const graphql = require("graphql");
const _ = require("lodash");
const Player = require("../models/player");
const Team = require("../models/team");
const Game = require("../models/game");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

// var players = [
//   {
//     id: "1",
//     name: "Cuong",
//     age: 24,
//     account: "cuonghn2",
//     gender: "nam",
//     email: "nhatcuonghuynh@gmail.com",
//     phone: 0364774545,
//   },
//   {
//     id: "2",
//     name: "Trang",
//     age: 30,
//     account: "trangntt",
//     gender: "nu",
//     email: "trangntt@gmail.com",
//     phone: 0364774545,
//   },
// ];

// var teams = [
//   {
//     id: "1",
//     name: "Holy",
//     player: [1, 2],
//   },
// ];

// var games = [
//   {
//     name: "XRace",
//     description: "Vui chơi giải trí lành mạnh, không đánh nhau",
//     maxPlayer: 100,
//     startDate: "20-11-2021",
//     endDate: "30-11-2021",
//     logo: "logo.png",
//     winner: "",
//     team: [1],
//   },
// ];

const PlayerType = new GraphQLObjectType({
  name: "Player",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    account: { type: GraphQLString },
    gender: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const TeamType = new GraphQLObjectType({
  name: "Team",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    logo: { type: GraphQLString },
  }),
});

const GameType = new GraphQLObjectType({
  name: "Game",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    maxPlayer: { type: GraphQLInt },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    logo: { type: GraphQLString },
    winner: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    player: {
      type: PlayerType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Player.findById({
          _id: args.id,
        });
      },
    },
    players: {
      type: new GraphQLList(PlayerType),
      resolve(parent, args) {
        return Player.find({});
      },
    },
    team: {
      type: TeamType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Team.findById({
          _id: args.id,
        });
      },
    },
    teams: {
      type: new GraphQLList(TeamType),
      resolve(parent, args) {
        return Team.find({});
      },
    },
    game: {
      type: GameType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Game.findById({
          _id: args.id,
        });
      },
    },
    games: {
      type: new GraphQLList(GameType),
      resolve(parent, args) {
        return Game.find({});
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addPlayer: {
      type: PlayerType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        account: { type: new GraphQLNonNull(GraphQLString) },
        gender: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        phone: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let player = new Player({
          name: args.name,
          age: args.age,
          account: args.account,
          gender: args.gender,
          email: args.email,
          phone: args.phone,
        });
        return player.save();
      },
    },
    addTeam: {
      type: TeamType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        logo: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let team = new Team({
          name: args.name,
          logo: args.logo,
        });
        return team.save();
      },
    },
    addGame: {
      type: GameType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        maxPlayer: { type: GraphQLInt },
        startDate: { type: new GraphQLNonNull(GraphQLString) },
        endDate: { type: new GraphQLNonNull(GraphQLString) },
        logo: { type: GraphQLString },
        winner: { type: GraphQLString },
      },
      resolve(parent, args) {
        let game = new Game({
          name: args.name,
          description: args.description,
          maxPlayer: args.maxPlayer,
          startDate: args.startDate,
          endDate: args.endDate,
          logo: args.logo,
          winner: args.winner,
        });
        return game.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

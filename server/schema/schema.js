const graphql = require("graphql");
const _ = require("lodash");
const Player = require("../models/player");
const Team = require("../models/team");
const Game = require("../models/game");
const player = require("../models/player");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

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
    team: {
      type: TeamType,
      resolve(parent, args) {
        return Team.findById(parent.teamId);
      },
    },
  }),
});

const TeamType = new GraphQLObjectType({
  name: "Team",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    logo: { type: GraphQLString },
    games: { type: new GraphQLList(GameType) },
    players: {
      type: new GraphQLList(GameType),
      resolve(parent, args) {
        return Player.find({ teamId: parent.id });
      },
    },
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
    teams: {
      type: new GraphQLList(TeamType),
    },
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
        }).populate("games");
      },
    },
    teams: {
      type: new GraphQLList(TeamType),
      resolve(parent, args) {
        return Team.find({}).populate("games");
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
        }).populate("teams");
      },
    },
    games: {
      type: new GraphQLList(GameType),
      resolve(parent, args) {
        return Game.find({}).populate("teams");
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
          teamId: "",
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
          games: [],
        });
        return team.save();
      },
    },
    joinGame: {
      type: TeamType,
      args: {
        teamId: { type: new GraphQLNonNull(GraphQLID) },
        gameId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const team = Team.findOneAndUpdate(
          { _id: args.teamId },
          { $push: { games: args.gameId } }
        );
        return (game = Game.findOneAndUpdate(
          { _id: args.gameId },
          { $push: { teams: args.teamId } }
        ));
      },
    },
    joinTeam: {
      type: PlayerType,
      args: {
        teamId: { type: new GraphQLNonNull(GraphQLID) },
        playerId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Player.findOneAndUpdate(
          { _id: args.playerId },
          { $set: { teamId: args.teamId } }
        );
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
          teams: [],
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

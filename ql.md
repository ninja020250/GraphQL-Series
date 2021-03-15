# mutation {
    #   addPlayer(name: "player 4",
    #     account: "player-4",
    #     age: 20, gender: "name",
    #     email:"player4@gmail.com",
    #     phone: "0367778454"){
    #     name
    #   }
    # }

    # mutation {
    #   addPlayer (name: "player 100",
    # 	age: 20,
    #   account: "the100",
    #   gender: "nam",
    #   email: "100@gmail.com",
    #   phone: "111111111"){
    #     name
    #     id
    #   }
    # }

    {
      teams{
        name,
        id,
        players {
          name
        }
      }
    }


    # {
    #   games{
    #     name,
    #     id,
    #     teams {
    #       name
    #     }
    #   }
    # }

    # {
    #   game (id: "604f748c53438f0aac14b5aa"){
    #     id
    #     name
    #     logo,
    #     teams {
    #       name
    #     }
    #   }
    # }

    # {
    #   teams{
    #     id
    #     name
    #   }
    # }

    # mutation {
    #   joinGame(teamId: "604f79121b10fb36c08fe9de", gameId: "604f748c53438f0aac14b5aa"){
    #    name
    #   }
    # }

    # mutation {
    #   addGame(name: "race-2021",
    #     description: "have fun",
    #     maxPlayer: 100
    #   	startDate: "2021",
    #   endDate: "2022",
    #   logo: "https://res.cloudinary.com/practicaldev/image/fetch/s--UVX7ie6K--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/v4y43jjfj7u5r8to8qdu.png",
    #     winner: ""
    #   ){
    #     id
    #     name
    #   }
    # }

    # mutation {
    #   addTeam(name: "Must Win", logo: "https://ephoto360.com/uploads/effect-data/ephoto360.com/32fc3a3f5/65ea15bd15a713.jpg"){
    #     id
    #     name
    #   }
    # }

    # mutation {
    #   joinTeam(teamId: "604f77a4cf9e3c29dce6e841", playerId: "604f7e2a1062923bb459c5b5"){
    #     id
    #     name
    #   }
    # }

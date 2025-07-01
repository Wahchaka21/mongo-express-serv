const PlayerService = require("./../services/PlayerService")

//get /players

exports.getAllPlayers = async(req, res) => {
    try {
        const player = await PlayerService.getAllPlayers()
        res.json(player)
    } catch (err) {
        res.status(500).json({error: err.message})
    }   
}

//get /players/:id

exports.getPlayerById = async(req, res) => {
    try {
        const player = await PlayerService.getPlayerById(req.params.id)
        if(!player) return res.status(404).json({error: "player not found"})
        res.json(player)
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}

//post /players

exports.createPlayer = async(req, res) => {
    try {
        const newPlayer = await PlayerService.createPlayer(req.body)
        res.status(201).json(newPlayer)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

//put /players/:id

exports.updatePlayer = async(req, res) => {
    try {
        const updated
    }
}
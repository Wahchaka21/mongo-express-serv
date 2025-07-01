const PlayerSchema = require('../schemas/Player')
const mongoose = require('mongoose')


const Player = require('../schemas/Player')

module.exports.getAllPlayers = async () => {
    return await Player.find()
}

module.exports.createPlayer = async (playerData) => {
    const player = new Player(playerData)
    return await player.save()
}

module.exports.deletePlayer = async (playerId) => {
   let result = await Player.findByIdAndDelete(playerId)
   if (!result)
        throw {type: 'NOT_FOUND', message: 'Impossible de trouver le player a supprimer.'}
    return result
}

module.exports.createManyPlayers = async (playersArray) => {
    return await Player.insertMany(playersArray)
}
  
module.exports.updateManyPlayers = async (id, data) => {
    return await Player.updateMany(id, data)
}
  
module.exports.deleteManyPlayers = async (id) => {
    return await Player.deleteMany(id)
}
  
module.exports.getPlayerById = async (id) => {
    return await Player.findById(id)
}

module.exports.updatePlayer = async (id, data) => {
    return await Player.findByIdAndUpdate(id, data, { new: true })
}  
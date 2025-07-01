const PlayerService = require("../services/PlayerService")

const mongoose = require("mongoose")

main().catch(err => console.log(err))

let users = []

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test")

    //pour tout supprimer à chaque relance
    //await PlayerService.deleteManyPlayers({})

    //crée un seul joueur
    await createPlayer({ username: "Artoria", score: 7 });


    //supprimer un seul joueur par son id 
    // await deletePlayer("6862547dc0e6ba96ae916888")
  
    // Ajouter plusieurs joueurs
    await createManyPlayers([
      { username: "Shirou", score: 8 },
      { username: "EKUSUKARIBAAA", score: 15 }
    ])
  
    // Voir tous les joueurs crée
    await getAllPlayers()
  
    // Voir un joueur spécifique par rapport à son id
    await getPlayerById("68627989cc99554e34e7f935")
  
    // Modifier un joueur par rapport à son id (id d'Artoria)
    await updatePlayer("68627989cc99554e34e7f935", { score: 10000000000 })
  
    // Modifier plusieurs par rapport à leur id (id de Shirou et de EKUSUKARIBAAA)
    await updateManyPlayers(
        { _id: { $in: ["68627989cc99554e34e7f937", "68627989cc99554e34e7f938"] } },
        { score: 10 })

    // Supprimer plusieurs par exemple Shirou et EKUSUKARIBAAA
    // await deleteManyPlayers({ _id: { $in: ["68627989cc99554e34e7f937", "68627989cc99554e34e7f938"] } })
  
    // Voir tous les joueurs juste après la suppression
    // await getAllPlayers()
}
  
//crée un seul joueur

async function createPlayer(body) {
    try {
        let res = await PlayerService.createPlayer(body)
        users.push(res)
        console.log('Player ajouté')
    }
    catch (err) {
        console.log('Player non ajouté, probleme :', err?.message)
    }
}

//supprimer un seul joueur par son id

async function deletePlayer(id) {
      try {
        let res = await PlayerService.deletePlayer(id)
        console.log('Player supprimer')
    }
    catch (err) {
        console.log('Player non supprimer, probleme :', err?.message)
    }
}

//ajouter plusieur joueurs

async function createManyPlayers(array) {
    try {
        let res = await PlayerService.createManyPlayers(array)
        users.push(...res)
        console.log("Players ajouté :", res)
    } catch (err) {
        console.log("Erreur ajout multiple :", err?.message)
    }
}

//trouver un joueur par son ID

async function getPlayerById(id) {
    try {
        let res = await PlayerService.getPlayerById(id)
        console.log("Player trouvé :", res)
    } catch (err) {
        console.log("Erreur recherche :", err?.message)
    }
}

//mettre à jour un joueur par son ID 

async function updatePlayer(id, data) {
    try {
        let res = await PlayerService.updatePlayer(id, data)
        console.log("Player mis à jour :", res)
    } catch (err) {
        console.log("Erreur update :", err?.message)
    }
}

//trouver plusieur joueurs

async function getAllPlayers(filter = {}) {
    try {
      let res = await PlayerService.getAllPlayers(filter)
      console.log('Tous les joueurs :', res)
    } catch (err) {
      console.log('Erreur getAll :', err?.message)
    }
}
  

//mettre à jour plusieur joueurs

async function updateManyPlayers(id, data) {
    try {
        let res = await PlayerService.updateManyPlayers(id, data)
        console.log("Player mis à jour :", res)
    } catch(err) {
        console.log("Erreur update multiple :", err?.message)
    }
}

//supprimer plusieur joueurs

async function deleteManyPlayers(id) {
    try {
      let res = await PlayerService.deleteManyPlayers(id)
      console.log('Players supprimés :', res)
    } catch (err) {
      console.log('Erreur suppression multiple :', err?.message)
    }
}



/* gte >=
   lte <=
   User.find({
        age: { $gte: req.params.min, $lte: req.params.max }
    }) 
   
   regex pour trouver mot
    product.find({
        nom: { $regex: mot, $options: "i" }
    }) 
    
    sort pour trier, param de trie, ordre: 1 ou -1
    produit.find().sort({ params: ordre }) */


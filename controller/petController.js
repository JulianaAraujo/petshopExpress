const petModel = require('../model/pet');

const petController = {
    index: (req, res) => {
        res.send(petModel.listarPets());
    },
    add: (req,res) => {
        let novoPet = req.params;
        petModel.adicionarPet(novoPet);
        res.send(`O ${novoPet.nome} adicionado com sucesso`);
    },
    buscar: (req,res) => {
        let nomePet = req.params.nome;

        let petsEncontrados = petModel.buscarPet(nomePet);

        if (petsEncontrados.length > 0){
            res.send(`temos ${petsEncontrados.length} pets encontrados`);
        } else {
            res.send(`Nao encontramos nenhum pet`)
        }
        
    }

};

module.exports = petController;
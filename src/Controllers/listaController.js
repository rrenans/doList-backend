const listaSchema = require('../Schema/listaSchema');

class listaController {
    async index(req, res){
        listaSchema.find({})
        .then((result) => {
            return res.json(result)
        })
        .catch((error) => {
            return res.json({ "mensagem": "Não conseguir pegar nada " + error });
       });
        // const lista = await listaSchema.find().catch(error => console.log(error));
        // console.log(result);
    } 
    // async create(req, res){
    //     const { nome, descricao, data } = req.body;
    //     console.log(nome);
    //     await listaSchema.create(
    //         {
    //             nome,
    //             descricao,
    //             data
    //         }
    //     ).catch(error => {
    //         console.log(error);
    //     });
    //     return res.json({nome, descricao, data});
    // }
}

module.exports = new listaController();
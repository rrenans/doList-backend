// vontando para os imports e adaptando para o projeto do professor.
import ListaSchema from '../Schema/ListaSchema';

class ListaController {

    async index(req, res) {

        const listas = await ListaSchema
            .find()
            .catch(error => console.log(error));

        console.log(listas);

        return res.json(listas);
    }

    async create(req, res) {
        const { nome, descricao, data } = req.body;

        console.log(nome);

        await ListaSchema
            .create(
                {
                    nome,
                    descricao,
                    data
                }
            ).catch(error => {
                console.log(error);
            });

        return res.json({ nome, descricao, data });
    }
}

export default new ListaController();


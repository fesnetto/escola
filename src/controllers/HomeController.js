import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Fernando',
      sobrenome: 'Netto',
      email: 'fernando.esnetto@gmail.com',
      idade: 38,
      peso: 65,
      altura: 1.67,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();

class Pessoa {

    teste = () => 'leonardo';

    funcao(variavel) { 
        
        const pessoa = (nome) => ({
            nome: nome,
            sobrenome: 'Doe',
            idade: 30
          })
          var pessoa2 = pessoa(variavel);
          return pessoa2;
    }
}
let p = new Pessoa();
console.log(p.funcao('leopoldo'));



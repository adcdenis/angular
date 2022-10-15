// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}


 
@isAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}

type Constructor =   { new(...args: any[]) : {}}

//criar decorator
function isAdmin<T extends Constructor>(constructor : T) {

    return class extends constructor {
        constructor(...args: any[]) {
            super(...args)

            if(!usuarioLogado || !usuarioLogado.admin) {
                console.log(usuarioLogado)
                throw new Error("Sem permissão");
            }
        }
    }
    
}
 
new MudancaAdministrativa().critico()
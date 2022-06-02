const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=> {
            db.query('SELECT * FROM carros', (error, results)=> {
                if(error) { 
                    rejeitado(error); 
                    return;
                } else {
                    aceito(results);
                }         
            });
        });
    },

    buscarUm: (codigo)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('SELECT * FROM carros WHERE codCarros = ? ', [codigo], (error, results)=> {
                if(error) { 
                    rejeitado(error); 
                    return;
                } 
                if(results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },

    inserir: (modelo, placa)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('INSERT INTO carros (modeloCarro, placaCarro) values(?,?)', 
                [modelo, placa], (error, results)=> {
                    if(error) { 
                        rejeitado(error); 
                        return;
                    } else {
                        aceito(results.insertCodigo);
                    }
            });
        });
    },

    alterar: (codigo, modelo, placa)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('UPDATE carros SET modeloCarro= ?, placaCarro= ? WHERE codCarros= ?', 
                [modelo, placa, codigo], (error, results)=> {
                    if(error) { 
                        rejeitado(error); 
                        return;
                    } else {
                        aceito(results);
                    }
            });
        });
    },

    excluir: (codigo) => {
        return new Promise((aceito, rejeitado)=> {
            db.query('DELETE FROM carros WHERE codCarros = ?', [codigo], (error, results)=> {
                if(error) { 
                    rejeitado(error); 
                    return;
                } else {
                    aceito(results);
                }         
            });
        });
    },
};
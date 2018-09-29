const API_URL = "http://www.omdbapi.com/?apikey=8c80d077"; //chavekey pego no omdb

export const search = async query => { //fazer a função da pesquisa

};

//tt3896198
export const search = async id => { 
    let result = {};
    try { //vai tentar encontrar o que deve ser procurado, se não achar, mostra um erro na tela
        result = await fetch(`${API_URL}&i=${id}`); //usar crase
        //fazer a requisição aqui
        result = await result.json();
    } catch (e) {
        console.error(e);
    }

    return result
};

export const getItem = async id => { 
    let result = {};
    try { //vai tentar encontrar o que deve ser procurado, se não achar, mostra um erro na tela
        result = await fetch(`${API_URL}&i=${id}`); //usar crase
        //fazer a requisição aqui
        result = await result.json();
    } catch (e) {
        console.error(e);
    }

    return result
};

export default {
    search,
    getItem
};
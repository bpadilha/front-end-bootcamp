export  const storageService = localStorage ? {
    initialize: () => { //inicializa a aplicação para ver se tem item
        const items = [];

        return JSON.parse(localStorage.items) || items;
    },
    favoriteItem: id => { //favorita o item
        if (!isFavorited(id)){ //analisa se é favoritado
            const items = JSON.parse(localStorage.items);
            
            items.push(id);
            return localStorage.items = JSON.stringify(items);
        }
        return false;
    },
    unfavoriteItem: id => {
        if (!isFavorited(id)){
            const items = JSON.parse(localStorage.items);
            const result = items.filter(item => item !== id);

            return localStorage.items = JSON.stringify(result);
        }

        return false;
    },
    
    saveItem: id => {
        if (!checkItem(id)){
            const items = JSON.parse(localStorage.items);
            
            items.push(id);
            return localStorage.items = items;
        }
        return false;
    },
    
    removeItem: id => {
        if (!checkItem(id)){
            const items = JSON.parse(localStorage.items);
            const result = items.filter(item => item !== id);
            
            return localStorage.items = JSON.stringify(result);
        }
        return false;
    },

    checkItem: id => {
        const items = JSON.parse(localStorage.items);

        return items.find(item => item === id);

    },

    isFavorited: id => {
        const items = JSON.parse(localStorage.items);
        return !!items.find(item => item === id);
    }
} : null

export default storageService;

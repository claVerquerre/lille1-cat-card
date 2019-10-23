class DataService {
    constructor() {
        this.data = [
            {
                id: 1,
                title: 'Random cat card',
                imageUrl: 'https://cataas.com/cat',
                description: 'That card shows a random cat image.'
            },
            {
                id: 2,
                title: 'Random cat card',
                imageUrl: 'https://cataas.com/cat/says/Hello',
                description: 'That card shows a random cat image with a text !'
            }
        ];
    }
      
    async initData() {
        const cards = JSON.parse(sessionStorage.getItem('cards'));
        if(!cards) {
            sessionStorage.setItem('cards', JSON.stringify(this.data));
        }
    }
    
    async getAllCards() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            const cards = JSON.parse(sessionStorage.getItem('cards'));
            if(cards && cards.length) {
                resolve(cards);
            } else {
                reject('No cards found !');
            }
            }, 300);
        });
    }
    
    async getCard(cardId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            const cards = JSON.parse(sessionStorage.getItem('cards'));
            if(cards && cards.length) {
                const card = cards.find(c => c.id === parseInt(cardId));
                if (card) {
                    resolve(card);
                } else {
                    reject(`Card with id <${cardId}> was not found.`);
                }
            } else {
                reject('No cards found !');
            }
            }, 300);
        });
    }
    
    async createCard(card) {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
            const cards = JSON.parse(sessionStorage.getItem('cards'));
            if(cards && cards.length) {
                card.id = Math.max(...cards.map(c => c.id)) + 1;
                cards.push(card);
                sessionStorage.setItem('cards', JSON.stringify(cards));
                resolve();
            } else {
                reject('No cards found !');
            }
            }, 300);
        });
    }
    
    async updateCard(card) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            const cards = JSON.parse(sessionStorage.getItem('cards'));
            if(cards && cards.length) {
                const idxToUpdate = cards.findIndex(c => c.id === card.id)
                if (idxToUpdate >= 0) {
                    cards[idxToUpdate] = card;
                    sessionStorage.setItem('cards', JSON.stringify(cards));
                    resolve();
                } else {
                    reject(`Impossible to update card with id <${card.id}> because it doesn't exists.`);
                }
            } else {
                    reject('No cards found !');
            }
            }, 300);
        });
    }
    
    async deleteCard(cardId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            const cards = JSON.parse(sessionStorage.getItem('cards'));
            if(cards && cards.length) {
                const idxToDelete = cards.findIndex(c => c.id === parseInt(cardId));
                if (idxToDelete >= 0) {
                    cards.splice(idxToDelete, 1);
                    sessionStorage.setItem('cards', JSON.stringify(cards));
                    resolve();
                } else {
                    reject(`Impossible to delete card with id <${cardId}> because it doesn't exists.`);
                }
            } else {
                reject('No cards found !');
            }
            });
        });
    }

    async getCardsLength() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            const cards = JSON.parse(sessionStorage.getItem('cards'));
            if(cards && cards.length) {
                resolve(cards.length);
            } else {
                reject(0);
            }
            }, 300);
        });
    }
}

export default DataService;
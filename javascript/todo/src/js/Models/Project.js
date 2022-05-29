import Card from "./Card";

export default function Project(name) {

  let cards = {};
  let board;

  const addCard = (...cardInfo) => {
    const cardId = `${name}${(Object.keys(cards)).length}`;
    cardInfo.push(cardId);

    const card = Card(...cardInfo);
    cards[`${cardId}`] = card;
    
  }

  const removeCard = (cardId) => {
    delete cards[`${cardId}`];
  }
  
  return { name,  board, cards, addCard, removeCard };
  
}

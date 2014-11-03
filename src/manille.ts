export class ManilleRules {

    createCard() {
        var card = new Card(CardColor.SPADE, CardValue.TEN);
        console.log(card.color);
    }
}

enum CardColor {
    SPADE,
    CLUB,
    HEART,
    DIAMOND
}

enum CardValue {
    SEVEN,
    EIGHT,
    NINE,
    TEN,
    JACK,
    QUEEN,
    KING,
    ACE
}

class Card {
    constructor (
        private _color: CardColor,
        private _value: CardValue
    ) {}

    get color() {
        return this._color;
    }

    get value() {
        return this._value;
    }
}

class CardDeck {
    private cards: Card[];
}

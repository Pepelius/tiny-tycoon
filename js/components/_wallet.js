// Component for handling the player currency
export default class Wallet {
    constructor(balance) {
        this._balance = balance;
    }

    // Getters
    get balance() {
        return this._balance;
    }

    // Setters
    set balance(amount) {
        this._balance = amount;
    }

    // Methods
    subtractBy(amount) {
        // Check that we have enough balance to subtract from
        if (this._balance >= amount) {
            console.log(`Subtracting ${amount} from ${this._balance}`);
            this.balance -= amount;
            this.update();
        } else {
            alert(`Unable to subtract ${amount}€, because you only have ${this._balance}€ in your wallet.`);
        }
    }
    increaseBy(amount) {
        this.balance += amount;
    }

    // Render methods
    render() {
        document.getElementById('player').innerHTML = `<span class="current">${this._balance} €</span>`;
    }
    update() {
        //console.log('View should get updated by now...');
        this.render();
    }
}
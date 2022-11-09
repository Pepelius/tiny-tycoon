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
            const target = document.querySelector('#top-info .current-balance .subtract');
            const elem = document.createTextNode(amount);
            //console.log(`Subtracting ${amount} from ${this._balance}`);
            this.balance -= amount;
            target.appendChild(elem);
            this.update();
        } else {
            alert(`Unable to subtract ${amount}€, because you only have ${this._balance}€ in your wallet.`);
        }
    }
    increaseBy(amount) {
        this.balance += amount;
    }

    // Render methods
    // TODO: The element renders should be relative to the objects, so that we can pass and update the corresponding data to where it belongs
    render() {
        document.getElementById('top-info').innerHTML = `<div class="current-balance">
            <span class="label">Balance</span>
            ${this._balance} €
            <span class="subtract"></span>
        </div>`;
    }
    update() {
        //console.log('View should get updated by now...');
        this.render();
    }
}
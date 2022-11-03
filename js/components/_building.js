// Building component
export default class Building {
    constructor(name, base_cost, efficiency) {
        this._level = 1;
        this._name = name;
        this._cost = base_cost;
        this._efficiency = efficiency;
    }

    // Getters
    get level() {
        return this._level;
    }
    get name() {
        return this._name;
    }
    get cost() {
        return Math.floor(this._cost * (this._level * 1.25)); // base_cost * (level * 1.25)
    }
    get clickEfficiency() {
        return Math.floor(this._efficiency * this._level); // initial efficiency * level
    }
    get idleEfficiency() {
        return Math.floor(this._efficiency * (this._level * 0.65)); // initial efficiency * (level * 0.65)
    }

    // Setters
    set level(amount) {
        this._level += amount;
    }

    // Methods
    purchase(cash, amount) {
        // Processing each purchase/upgrade separately
        for (let i = amount; i > 0; i--) {
            if (cash >= this.cost) {
                console.log('Upgrade purchased...')
                this.level = 1; // Upgrade the building's level by one
                console.warn(`Next upgrade will cost ${this.cost} €.`);

                /*
                    Deducting the upgrade cost from the player's cash supply will take place in the handlePurchase() function,
                    which gets called as an onclick call from each building's individual purchase button.

                    Essentially, we'd want to create a loop around this purchase method's call and within that loop, right after
                    calling the Building.purchase() method, call a wallet method to deduct the Building.cost from the player's available cash.

                    It shouldn't be possible to ever fulfill the "else" condition after the outer layer of the transaction has been implemented.
                 */
            } else {
                alert(`Player has insufficient funds (${cash} €) to purchase more upgrades to ${this.name}, which costs ${this.cost} € for the level ${this.level+1} upgrade.`);
                break;
            }
        }
    }
}
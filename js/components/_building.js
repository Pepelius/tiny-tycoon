// Building component
import handlePurchase from "../functions/handlePurchase.js";

const buildings = [];

export default class Building {
    constructor(id, name, base_cost, efficiency) {
        this._id = id;
        this._level = 0;
        this._name = name;
        this._cost = base_cost;
        this._efficiency = efficiency;
        buildings.push(this);
    }

    // Getters
    get id() {
        return this._id;
    }
    get level() {
        return this._level;
    }
    get name() {
        return this._name;
    }
    get cost() {
        if (!this._level) {
            return this._cost;
        } else {
            return Math.floor(this._cost * (this._level * 1.25)); // base_cost * (level * 1.25)
        }
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
    setLevel(level) {
        // Simple override method for setting a building's level to a pre-determined value
        this.level = level;
    }

    purchase(cash, amount) {
        // Processing each purchase/upgrade separately
        for (let i = amount; i > 0; i--) {
            if (cash >= this.cost) {
                console.log('Upgrade purchased...')
                this.level = 1; // Upgrade the building's level by one
                console.warn(`Next upgrade will cost ${this.cost} €.`);
            } else {
                alert(`Player has insufficient funds (${cash} €) to purchase more upgrades to ${this.name}, which costs ${this.cost} € for the level ${this.level+1} upgrade.`);
                break;
            }
        }
    }

    // Render methods
    render(output) {
        const listOfBuildings = document.getElementById('buildings');
        listOfBuildings.innerHTML += output;

        //document.getElementById('buildings').innerHTML = `<span class="current">${this._balance} €</span>`;
    }
    update(element) {
        //console.log('View should get updated by now...');
        this.render(element);
    }
}

// Additional exports
export { buildings }
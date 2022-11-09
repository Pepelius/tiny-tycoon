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
    render(output, object) {
        const listOfBuildings = document.getElementById('buildings');

        if (output !== undefined) {
            // Initial render
            listOfBuildings.innerHTML += output;
        } else {
            // Updating the existing building element
            const target = document.getElementById(`building-${object.id}`);
            const newOutput = `
                <header>
                    <h3>${object.name}</h3>
                    <aside>${!object.level ? "You don't own this building yet" : "Level: " + object.level}</aside>
                </header>
                <button id="purchase-${object.id}" class="${!object.level ? 'purchase' : 'upgrade'}">
                    ${!object.level ? 'Purchase (' + object.cost + ' €)' : 'Upgrade (' + object.cost + ' €)'}
                </button>
            `;

            if (target) {
                target.innerHTML = newOutput;
            } else {
                console.error('No target found, calling render() through update() on _building.js');
            }
        }
    }
    update(object) {
        this.render(undefined, object);
    }
}

// Additional exports
export { buildings }
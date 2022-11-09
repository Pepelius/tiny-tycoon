// Game configuration

// Component imports
import Wallet from "../components/_wallet.js";
import Building from "../components/_building.js";
import {buildings} from "../components/_building.js";

// Function imports
import handlePurchase from "../functions/handlePurchase.js";

export default function Game() {
    // Initializing player's wallet
    const wallet = new Wallet(500);

    // Defining each individual building
    const TacoTruck = new Building(1, 'Taco Truck', 100, 1);
    const PizzaParlor = new Building(2, 'Pizza Parlor', 1250, 1.85);
    const GroceryStore = new Building(3, 'Grocery Store', 11500, 2.9);
    const MotelCalifornia = new Building(4, 'Motel California', 45000, 4);
    const DressUpClub = new Building(5, 'Dress-up Club', 115000, 6.75);
    const HotelSix = new Building(6, 'Hotel 6', 400000, 8);

    // Accessing the array of buildings
    const buildingsArray = buildings;

    // Set the buildings player starts with
    TacoTruck.setLevel(1);

    // Building the output for each building
    //const listOfBuildings = document.getElementById('buildings');
    let buildingsInView = [];
    buildings.forEach((building) => {
        const output = `
            <article>
                <header>
                    <h3>${building.name}</h3>
                    <aside>${building.level}</aside>
                </header>
                <span class="cost">Cost: ${building.cost}</span>
                <button id="purchase-${building.id}" class="${!building.level ? 'purchase' : 'upgrade'}">
                    ${!building.level ? 'Purchase' : 'Upgrade'}
                </button>
            </article>
        `;
        building.render(output); // Send each building to be rendered
        buildingsInView.push(building); // Not sure if necessary, but there it is - an array of rendered buildings

        // Adding event listeners
        setTimeout(() => {
            const purchaseOne = document.getElementById('purchase-' + building.id);
            purchaseOne.addEventListener('click', (event) => {
                handlePurchase({building}, {wallet}, 1);
                building.update(output);
            });
        }, 200);
    });

    // Rendering player profile objects
    wallet.render();

    // Runtime, updating the view once per second
    window.setInterval(function(){
        // Do stuff here
        wallet.update();
    }, 1000);
}
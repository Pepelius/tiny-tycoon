// Handler for purchasing buildings, with cost calculations etc.
/*
    target: receives the building object
    player: receives the player's wallet object
    amount: desired purchase amount
 */

export default function handlePurchase(target, player, amount) {
    const building = target.building;
    const wallet = player.wallet;

    if (building && wallet) {
        console.log("We are calling the handlePurchase function, woooohoo!");
        // Credit check for player wallet before proceeding
        if (wallet.balance >= building.cost) {
            building.purchase(wallet.balance, amount); // Handle purchase
            wallet.subtractBy(building.cost); // Deducting the building cost from player wallet
        } else {
            // Insufficient funds
            alert(`Purchasing this would cost ${building.cost} € and you only have ${wallet.balance} € on you, you poor bastard.`);
        }
    }
}
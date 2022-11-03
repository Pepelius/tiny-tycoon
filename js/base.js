// Importing game components
import Building from "./components/_building.js";

const KeinusaarenKoo = new Building('Keinusaaren K-Market', 100, 1);
console.log('[[ Debug ]] Building object: ', KeinusaarenKoo);
console.log('[[ Debug ]] Building\'s current level: ', KeinusaarenKoo.level);
console.log('[[ Debug ]] Building\'s initial cost to upgrade: ', KeinusaarenKoo.cost);

KeinusaarenKoo.purchase(300, 2);
console.log('[[ Action ]] Building upgraded, current level: ', KeinusaarenKoo.level);
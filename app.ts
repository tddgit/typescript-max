import { GameCharacterFactory } from './gameCharecterFactory';

let warrior = GameCharacterFactory.getWarrior(9);
let mage = GameCharacterFactory.getMage(12);
console.log('warrior ', warrior);
console.log(' mage ', mage);

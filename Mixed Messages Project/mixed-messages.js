const potionNames = [
    "Frothmire Elixir",
    "Glittergloom Brew",
    "Sparklewhirl Concoction",
    "Fizzleflame Draught",
    "Mysticrock Potion",
    "Bubblemist Serum",
    "Whirlwind Whimsey Tonic",
    "Enchanted Ember Elixir",
    "Starlight Shimmer Solution",
    "Moonbeam Mirage Brew",
    "Glimmerglow Grog",
    "Whiskerwhip Wondersplash",
    "Quicksand Quaff",
    "Stardust Swirl Brew",
    "Goblintoes Gigglebrew",
    "Trollbelly Tonic",
    "Firefly Fizz",
    "Shadowcloak Serum",
    "Fairyfrost Fusion",
    "Dragonfire Delight"
];
const ingredientsOne = [
    "Dragon Scale Shavings",
    "Unicorn Tears",
    "Pixie Dust",
    "Goblin Goo",
    "Troll Toenails",
    "Mermaid Scales",
    "Phoenix Feathers",
    "Fairy Wings",
    "Griffin Claws",
    "Basilisk Venom",
    "Cyclops Eyeballs",
    "Sphinx Hair",
    "Centaur Hoof Powder",
    "Chimera Breath",
    "Hydra Blood",
    "Leprechaun Gold",
    "Manticore Mane",
    "Nymph Nectar",
    "Ogre Earwax",
    "Witch's Wart"
];
const ingredientsTwo = [
    "Gorgon Gizzards",
    "Yeti Yarn",
    "Banshee Breath",
    "Kraken Ink",
    "Siren Song",
    "Cockatrice Comb",
    "Mummy Dust",
    "Boggart Bark",
    "Chupacabra Claw",
    "Vampire Venom",
    "Werewolf Whisker",
    "Ghoul Guts",
    "Sasquatch Saliva",
    "Hydra Heart",
    "Cerberus Collar",
    "Kelpie Mane",
    "Basilisk Blood",
    "Necromancer's Nail",
    "Lich Liver",
    "Wraith Wisp"
];
const ingredientsThree = [
    "Gargoyle Snot",
    "Cyclops Tears",
    "Banshee Wail",
    "Leprechaun Laughter",
    "Griffin Grease",
    "Witch's Whisker",
    "Dwarf Dandruff",
    "Ogre Ooze",
    "Nymph Nails",
    "Minotaur Mucus",
    "Pegasus Plumage",
    "Satyr Spit",
    "Kobold Ketchup",
    "Hydra Hide",
    "Sphinx Scales",
    "Goblin Guts",
    "Troll Tongue",
    "Basilisk Bones",
    "Cerberus Slobber",
    "Harpy Hair"
];

function recipeBook() {
    const randomName = potionNames[Math.floor(Math.random() * 20)];
    const randIngOne = ingredientsOne[Math.floor(Math.random() * 20)];
    const randIngTwo = ingredientsTwo[Math.floor(Math.random() * 20)];
    const randIngThree = ingredientsThree[Math.floor(Math.random() * 20)];
    let fullPotion = `With incantations whispered, let the secrets of creation unfold: To concoct the potion of ${randomName}, infuse the brew with a dose of ${randIngOne}, blend with the essence of ${randIngTwo}, and stir gently with a dash of ${randIngThree}.`
    console.log(fullPotion);
}
recipeBook();
let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

// Logging multiple values

console.log(playerName, playerHealth, playerAttack);

let enemyName = "Roberto";
let enemyHealth = 50;
let enemyAttack = 12;

let fight = function() {
    window.alert('Welcome to Robot Gladiators!')

    let promptFight = window.prompt("Would you like to FIGHT or SKIP this fight? Enter 'FIGHT' or 'SKIP' to choose.")

    if(promptFight === 'FIGHT' || promptFight === 'fight' || promptFight ===  'Fight') {
        // Subtract playerattack from enemy health and log to console.
            enemyHealth = enemyHealth - playerAttack
            console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`)

        if (enemyHealth <= 0) {
            window.alert(`${enemyName} has died.`)
        } else {
            window.alert(`${enemyName} still has ${enemyHealth} remaining.`)
        }
    
        // subtract enemyAttack from playerHealth and log to console.
            playerHealth = playerHealth - enemyAttack 
            console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`)
    
        
        // check player health
    
        if (playerHealth <= 0) {
            window.alert(`${playerHealth} has died.`)
        } else {
            window.alert(`${playerName} still has ${playerHealth} remaining.`)
        }

    //if player decides to skip
    } else if (promptFight === 'SKIP' || promptFight === 'skip' || promptFight === 'Skip') {
        // Confirm with player he wants to Skip
        let confirmSkip = window.confirm('Are you sure you want to quit?')

        if(confirmSkip) {
            window.alert(`${playerName} has decided to skip the fight. Lil pussy boi.`)
            playerMoney = playerMoney - 2
        } else {
            fight()
        }
    } else {
        window.alert('You need to choose a valid option. FIGHT or SKIP bitch.')
    } 
}

fight()


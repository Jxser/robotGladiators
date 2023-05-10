let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;

// Logging multiple values

console.log(playerName, playerHealth, playerAttack);

let enemyName = "Roberto";
let enemyHealth = 50;
let enemyAttack = 12;

let fight = function() {
    window.alert('Welcome to Robot Gladiators!')


    // Subtract the value of playerAttack from the value of "enemyHealth" and use that result to update the value in the enemyHealth Variable"

    enemyHealth = enemyHealth - playerAttack
    console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`)

    // Subtract the value from EnemyAttack from the value of PlayerHealth and use that result to update the value in the PlayerHealth variable"
    playerHealth = playerHealth - enemyAttack 
    // Log a resulting message to the console so we know it worked.
    console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`)


    if (playerHealth <= 0) {
        window.alert(`${playerHealth} has died.`)
    } else {
        window.alert(`${playerName} still has ${playerHealth} remaining.`)
    }


    if (enemyHealth <= 0) {
        window.alert(`${enemyName} has died.`)
    } else {
        window.alert(`${enemyName} still has ${enemyHealth} remaining.`)
    }
}

fight()


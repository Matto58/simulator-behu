// Proměnné
var rychlost = 0
var maxRychlost = 7
var minRychlost = -4
var minSpeedReached_errorMessage = 'Vaše rychlost je nízká, rychlost byla resetována.'
var maxSpeedReached_errorMessage = 'Vaše rychlost je vysoká, rychlost byla resetována.'
// Přidávat rychlost
function plus1Rychlost() {
  speedPlus1()
}
function plus2Rychlost() {
  speedPlus2()
}
// Odstraňovat rychlost
function minus1Rychlost() {
  speedMinus1()
}
function minus2Rychlost() {
  speedMinus2()
}
// Zobrazení nové rychlosti v konzoli
function newSpeedInfo() {
  console.log('Vaše nová rychlost je ' + rychlost + ' km/h')
}
// Data k přidávání a odstraňování rychlosti. Prosím NEMĚNIT!
function speedPlus1() {
  if (rychlost > maxRychlost) {
    alert('Jsi moc rychlý/á! Maximální rychlost je 8 km/h. Tvoje rychlost byla resetována na 0.')
    console.error(maxSpeedReached_errorMessage)
    rychlost = 0
  } else {
    rychlost = rychlost + 1
    newSpeedInfo()
  }
}
function speedPlus2() {
  if (rychlost > maxRychlost) {
    alert('Jsi moc rychlý/á! Maximální rychlost je 8 km/h. Tvoje rychlost byla resetována na 0.')
    console.error(maxSpeedReached_errorMessage)
    rychlost = 0
  } else {
    rychlost = rychlost + 2
    newSpeedInfo()
  }
}
function speedMinus1() {
  if (rychlost < minRychlost) {
    alert('Jsi moc pomalý/á! Minimální rychlost je -5 km/h. Tvoje rychlost byla resetována na 0.')
    console.error(minSpeedReached_errorMessage)
    rychlost = 0
  } else {
    rychlost = rychlost - 1
    newSpeedInfo()
  }
}
function speedMinus2() {
  if (rychlost < minRychlost) {
    alert('Jsi moc pomalý/á! Minimální rychlost je -10 km/h. Tvoje rychlost byla resetována na 0.')
    console.error(minSpeedReached_errorMessage)
    rychlost = 0
  } else {
    rychlost = rychlost - 2
    newSpeedInfo()
  }
}
// Zobrazení informací o simulátoru běhu
function currentVersion() {
  console.log('Simulátor běhu')
  console.log('Verze 1.1.5')
  console.log('Naposledy aktualizováno 27.4.2020 16:47')
}

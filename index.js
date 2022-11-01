const guy = [{name : "CoolUser", age : 18},]

const newGuy = guy.map(v => Object.assign(v, {school: "Ananda College"}));
console.log(newGuy)

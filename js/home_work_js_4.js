//1Написать функцию поиска в строке указанной подстроки и замены ее на новую. Строку,
// ее подстроку для замены и новую подстроку вводит пользователь.

let replacement = prompt('Введите текст');
let str12 = "Текст для замены";
let String = function(search, replacement) {
    return search.replace(/Текст для замены/g, replacement);
};

console.log(String(str12, replacement));
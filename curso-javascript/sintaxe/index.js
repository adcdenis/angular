const teste = 'funciona javascript';
console.log(String(111));

console.log("1"+2);
console.log("1"-2);
console.log("1"*2);
console.log("1"/2);
console.log("1"+"2");

console.log('-------------------------------------------------------');
console.log(typeof 1);
console.log(typeof "1");
console.log(typeof Number('2'));
console.log(typeof String(3333));
console.log(typeof NaN);

console.log('-------------------------------------------------------');


console.log({nome:String,telefone:Number});
let nome;
let telefone;
console.log({nome,telefone});

const lista = ["Antonio", "Denilson", "Canuto"]
lista.forEach(
    (item, index) => console.log(`${item} - ${index}`)
)
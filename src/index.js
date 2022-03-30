// const,letなどの変数宣言

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = 1;
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可
// // val3 = "const変数を上書き";
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "ああ",
//   age: 22
// };
// console.log(val4);

// val4.name = "aa";
// val4.address = "tokyo";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// //テンプレート文字列
// const name = "hayato";
// const age = "27";
// // わたしの名前はhayatoです。年齢は27さいです
// //従来
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列の場合
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

//アロー関数
//従来
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("this is func1."));

// //アロー関数
// const func2 = (str) => str;
// console.log(func2("this is func2."));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

//分割代入

// const myProfile = {
//   name: "hayato",
//   age: 27
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。2`;
// console.log(message2);

// const myProfile = ["hayato", 27];
// const message3 = `前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `前は${name}です。年齢は${age}です。4`;
// console.log(message4);

//デフォルト値、引数など
const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん！`);
sayHello("hayato");

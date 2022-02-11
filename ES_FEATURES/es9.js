//1. Asynchronous Iteration:-
// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.asyncIterator]() {
//     return {
//       current: this.from,
//       last: this.to,

//       async next() {
//         await new Promise((resolve) => setTimeout(resolve, 1000));

//         if (this.current <= this.last) {
//           return { done: false, value: this.current++ };
//         } else {
//           return { done: true };
//         }
//       },
//     };
//   },
// };

// (async () => {
//   for await (let value of range) {
//     console.log(value);
//   }
// })();

//2. Rest/Spread Properties:-
//   const foo = {
//     empanadas: 6,
//     milanesas: 2,
//     yerba: "1 Kg",
//   };
//   const { yerba, ...rest } = foo;
//   console.log(yerba);
//   console.log(rest);

//3. Spread operator:-
// const foo = {
//     empanadas: 6,
//     milanesas: 2,
//     yerba: "1 Kg",
//   };
//   const bar = { ...foo, water: "1 L"  };
//   console.log(bar);

//New features related to regular expression//

//1. Flag /s (dotAll):-
// const regex1 = new RegExp('foo', 's');
// console.log(regex1.dotAll);
// const regex2 = new RegExp('bar');
// console.log(regex2.dotAll);

//2.Unicode Property Escapes:-
// const sentence = 'A ticket to 大阪 costs ¥2000 👌.';
// const regexpEmojiPresentation = /\p{Emoji_Presentation}/gu;
// console.log(sentence.match(regexpEmojiPresentation));
// const regexpNonLatin = /\P{Script_Extensions=Latin}+/gu;
// console.log(sentence.match(regexpNonLatin));
// const regexpCurrencyOrPunctuation = /\p{Sc}|\p{P}/gu;
// console.log(sentence.match(regexpCurrencyOrPunctuation));

//3. Lookbehind Assertions:-
// const text = 'A quick fox';
// const regexpLastWord = /\w+$/;
// console.log(text.match(regexpLastWord));
// const regexpWords = /\b\w+\b/g;
// console.log(text.match(regexpWords));
// const regexpFoxQuality = /\w+(?= fox)/;
// console.log(text.match(regexpFoxQuality));

//4. Named capture groups:-
// const aliceExcerpt = 'The Caterpillar and Alice looked at each other';
// const regexpWithoutE = /\b[a-df-z]+\b/ig;
// console.log(aliceExcerpt.match(regexpWithoutE));

// const imageDescription = 'This image has a resolution of 1440×900 pixels.';
// const regexpSize = /([0-9]+)×([0-9]+)/;
// const match = imageDescription.match(regexpSize);
// console.log(`Width: ${match[1]} / Height: ${match[2]}.`);

//Promise .finally//
// function checkMail() {
//     return new Promise((resolve, reject) => {
//       if (Math.random() > 0.5) {
//         resolve('Mail has arrived');
//       } else {
//         reject(new Error('Failed to arrive'));
//       }
//     });
//   }

//   checkMail()
//     .then((mail) => {
//       console.log(mail);
//     })
//     .catch((err) => {
//       console.error(err);
//     })
//     .finally(() => {
//       console.log('Experiment completed');
//     });

//Template literal revision//
// function fn(string, substitute) {
//     if(substitute === 'empanadas') {
//       substitute = 'milanesas with mashed potatoes';
//     }
//     return substitute + string[1];
//   }
//   const food = 'empanadas';
//   const result = fn`${food} are tasty!`;
//   console.log(result);

//

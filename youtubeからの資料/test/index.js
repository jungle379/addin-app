// 変数
let unko = 'Hello World!';

// 定数
const bigUnko = 'He..Hell...Hello World!';

// 配列
const inoki = ['いーち','にーい','さーん','ダーー!!'];

// ループ文
// let index = 0;
// while(index < inoki.length) {
//   // 繰り返したい命令
//   console.log(inoki[index]);
//   index++;
// }

// if / else
// if(inoki.length > 5){
//   console.log('ボンバイエ！');
// } else {
//   console.log('ボンバ...');
// }

// 関数
const test = () => {
  // ここに実行したい命令をかく
  if(inoki.length > 5){
    console.log('ボンバイエ！');
  } else {
    console.log('ボンバ...');
  }
};

// オブジェクト(データの塊)
const unko2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  goToilet: () =>{
    console.log('Hello World!');
  }
};

console.log(unko2);
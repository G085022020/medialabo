// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
hantei();
//hantei();
//hantei();
//hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let kaisu = kaisu + 1;
    let yoso = 4;       // 第5回課題:テキストボックスの数値をここに代入

     if (kotae === yoso && kaisu < 4){
        result =("正解です。おめでとう！");
     }
    else if (kotae !== yoso && kaisu < 3 && kotae > yoso){
       result =("まちがい。答えはもっと大きいですよ");
    }
     else if (kotae !== yoso && kaisu < 3 && kotae < yoso){
        result =("まちがい。答えはもっと小さいですよ");
     }
     else if (kotae !== yoso && kaisu === 3 ){
        result = ("まちがい。残念でした答えは "+ kotae +" です．");
    }
    else {
        result = ("答えは "+ kotae +" でした．すでにゲームは終わっています")
    }

    let s = document.querySelector('span#kaisu');
    s.textContent = kaisu;
    let p = document.querySelector('span#yoso');
    p.textContent = yoso;
    let q = document.querySelector('p#result');
    q.textContent = result;
}



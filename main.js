
/*
// jQuery入門
//	公式サイト: https://jquery.com/
//	チュートリアル: https://snome.jp/programming/jquery1/
//	チートシート: https://web-cheatsheet.com/jquery-to-vanillajs
*/


// Ready
$("#my_btn").click(()=>{
   
	console.log("計算する")
   
	const strval =$("#my_input").val();//文字列を取得
	const numval =parseInt(strval);//文字列->数値
	console.log("これを計算する:", numval);
	//消費税を表示
   const tax=numval*0.1;
   console.log("tax:",tax);
   $("#my_tax").text(tax)

   const total=numval+tax;
   console.log("total:",total)
   $("#my_total").text(total);
   
});
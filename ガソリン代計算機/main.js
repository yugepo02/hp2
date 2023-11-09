
/*
// jQuery入門
//	公式サイト: https://jquery.com/
//	チュートリアル: https://snome.jp/programming/jquery1/
//	チートシート: https://web-cheatsheet.com/jquery-to-vanillajs
*/


// Ready
$("#my_btn").click(()=>{
   
	console.log("計算する")
   
	const gasval =$("#my_gasoline").val();//文字列を取得
	const numval1 =parseInt(gasval);//文字列->数値
	console.log("ガソリン代:", numval1);
	

   const  disval =$("#distanc").val();//文字列を取得
	const numval2 =parseInt(disval);//文字列->数値
	console.log("距離:", numval2);

	const fulval =$("#Fuel").val();//文字列を取得
	const numval3 =parseInt(fulval);//文字列->数値
	console.log("車の燃費:", numval3);
	
	const gaso= parseInt(numval1*numval2/numval3)
	console.log("ガソリン代;",gaso);
	$("#gaso").text(gaso);


});
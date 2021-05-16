$(function () {

	/*********************************************
	 * スムーススクロール
	 *********************************************/
	$('a[href^="#"]').click(function () {
		let header = $('.header').innerHeight();
		let speed = 500;
		let id = $(this).attr("href"); // 遷移先ID（href属性）
		let target = $("#" == id ? "html" : id); // #のみだhtmlタグ（トップ）に戻る
		let position = $(target).offset().top - header; // 固定ヘッダー分引く
		// ヘッダーがfixedでない場合
		if ($(".header").css("position") !== "fixed") {
			position = $(target).offset().top;
		}
		if (position < 0) {
			position = 0;
		}
		$("html, body").animate({
				scrollTop: position
			},
			speed
		);
		return false;
	});

})
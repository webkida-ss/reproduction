jQuery(function () {

	/*********************************************
	 * ヘッダーのリンク修正
	 *********************************************/
	let locUrl = location.href;
	if (!locUrl.match(/about.html/) && !locUrl.match(/contact.html/)) {
		let links = jQuery('.header__nav--link');
		for (i = 0; i < links.length; i++) {
			let item = jQuery(links[i]);
			item.attr('href', item.attr('href').replace('index.html', ''))
		}
	}

	/*********************************************
	 * ヘッダーの背景チェンジ
	 *********************************************/
	$(window).scroll(function () {

		if ($(window).width() > 959) {
			if ($(this).scrollTop() > 600) {
				$(".header").addClass("is-bg-gray");
			} else {
				$(".header").removeClass("is-bg-gray");
			}
		} else if ($(window).width() <= 959 && $(window).width() > 559) {
			if ($(this).scrollTop() > 900) {
				$(".header").addClass("is-bg-gray");
			} else {
				$(".header").removeClass("is-bg-gray");
			}
		} else {
			if ($(this).scrollTop() > 600) {
				$(".header").addClass("is-bg-gray");
			} else {
				$(".header").removeClass("is-bg-gray");
			}
		}
	})

	/*********************************************
	 * スムーススクロール
	 *********************************************/
	jQuery('a[href^="#"]').click(function () {
		let header = jQuery('.header').innerHeight();
		let speed = 500;
		let id = jQuery(this).attr("href"); // 遷移先ID（href属性）
		let target = jQuery("#" == id ? "html" : id); // #のみだhtmlタグ（トップ）に戻る
		let position = jQuery(target).offset().top - header; // 固定ヘッダー分引く
		// ヘッダーがfixedでない場合
		if (jQuery(".header").css("position") !== "fixed") {
			position = jQuery(target).offset().top;
		}
		if (position < 0) {
			position = 0;
		}
		jQuery("html, body").animate({
				scrollTop: position
			},
			speed
		);
		return false;
	});

	/*********************************************
	 * ドロワー
	 * jQuery
	 *********************************************/
	let drawerBtn = jQuery("#js-drawer");
	drawerBtn.on("click", function (e) {
		e.preventDefault();
		let targetClass = jQuery(this).attr("data-target");
		jQuery("." + targetClass).toggleClass("is-checked"); // for-drawerクラスがついてる要素をトグルでis-checked
		return false;
	});
	// リンク選択時にドロワーを閉じる
	jQuery('.js-drawer-item').on('click', function (e) {
		let targetClass = drawerBtn.attr("data-target");
		jQuery("." + targetClass).removeClass('is-checked');
	});
})
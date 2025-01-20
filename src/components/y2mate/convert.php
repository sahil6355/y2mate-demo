<?php include('./url.php'); ?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="robots" content="noindex, nofollow">
	<title>Y2Meta - Free YouTube Downloader (1080p)</title>
	<meta name="description" content="Y2Meta is a popular online YouTube Downloader that lets you save videos in HD, 4K, and 8K quality without any registration. Fast, easy, and free to use!">
	<meta property="og:title" content="Y2Meta - Free YouTube Downloader (1080p)">
	<meta property="og:description" content="Y2Meta is a popular online YouTube Downloader that lets you save videos in HD, 4K, and 8K quality without any registration. Fast, easy, and free to use!">
	<meta property="og:type" content="website">
	<meta property="og:url" content="<?php echo $en; ?>">
	<meta property="og:site_name" content="Y2Mate">
	<link rel="preload" fetchpriority="high" as="image" href="./assets/image/image.webp" type="image/webp">
	<style>
		<?php include './assets/css/style.css'; ?>
	</style>
	<link rel="icon" href="./assets/image/favicon.webp">
</head>
<body>
	<header>
		<div class="sub-header">
			<a href="#" class="header-logo" area-label="home link">
				<span class="img logo"></span>
				<span>y2meta.lol</span>
			</a>
			<div class="nav">
				<a href="#">YouTube Downloader</a>
				<a href="#">YouTube to MP3</a>
				<a href="#">YouTube to MP4</a>
				<div class="language">
					<div class="lang" id="languageToggle">
						<span class="img earth"></span>
						<span>English</span>
					</div>
					<div class="langdropdown" id="langDropdown">
						<a data-lang="en" href="#">English</a>
						<a data-lang="de" href="#">Deutsch</a>
						<a data-lang="es" href="#">Español</a>
						<a data-lang="fr" href="#">Français</a>
						<a data-lang="hi" href="#">हिन्दी / Hindī</a>
						<a data-lang="id" href="#">Indonesian</a>
						<a data-lang="it" href="#">Italiano</a>
						<a data-lang="ja" href="#">日本語</a>
						<a data-lang="ko" href="#">한국어</a>
						<a data-lang="my" href="#">Myanmar (မြန်မာ)</a>
						<a data-lang="ms" href="#">Malay</a>
						<a data-lang="ph" href="#">Filipino</a>
						<a data-lang="pt" href="#">Português</a>
						<a data-lang="ru" href="#">Русский</a>
						<a data-lang="th" href="#">ไทย</a>
						<a data-lang="tr" href="#">Türkçe</a>
						<a data-lang="vi" href="#">Tiếng Việt</a>
						<a data-lang="zh-cn" href="#">简体中文</a>
						<a data-lang="zh-tw" href="#">繁體中文</a>
						<a data-lang="ar" href="#">العربية</a>
						<a data-lang="bn" href="#">বাঙালি</a>
					</div>
				</div>
			</div>

			<button type="button" class="navbar-toggler" id="navbarToggle" aria-label="navbar toggle">
				<span class="toggle-icon"></span>
				<span class="toggle-icon"></span>
				<span class="toggle-icon"></span>
			</button>
		</div>
	</header>
	<div class="container">
		<div class="search"> 
			<div class="main_search">
				<h1>Y2Meta - YouTube Downloader</h1>
				<p>Download YouTube videos seamlessly in 1080p with Y2meta</p>
				<div class="search_box">
					<form class="main_seacrh_box" action="./search" method="POST">
						<div class="img search-icon"></div>
						<input type="text" name="url" id="url" autocomplete="off" placeholder="https://youtube.com/watch?v=URL" value="">
						<button class="submit" id="submit-btn">Start</button>
					</form>
					<div id="suggestion_box"></div>
				</div>
				<p class="terms">By using our service you are accepting our <a href="#" aria-label="terms and conditions">Term and Conditions.</a></p>
			</div>
			<div class="result">
				<div class="spinner" id="loader">
					<div class="box-1"></div>
					<div class="box-2"></div>
					<div class="box-3"></div>
					<div class="box-4"></div>
				</div>
				<div class="data_results">
					
				</div>
			</div>
		</div>
		<div class="contain">
			<h2 class="text-center">Download YouTube Video For Free</h2>
			<p>Y2Meta is one of the best YouTube downloader tools, providing high-quality video downloads for free at fast speeds. Millions of people use it regularly to save YouTube videos in various formats, including MP4, MOV, WMV, WebM, 3GP, FLV, MO, and more. Y2Meta works seamlessly across all devices, including mobile phones, tablets, desktops, and more. It stands out among other video downloader tools due to its fast download speeds and support for multiple video (MP4) and audio (MP3) formats compatible with all devices. For high-quality YouTube video downloads, Y2Meta ranks first, offering video quality options from 320p up to 4K. Y2Meta is cross-platform compatible and can be accessed on any OS like Android, iOS, macOS, Windows, Linux, and more. Y2Meta works like a search engine, allowing you to directly search for the YouTube video you want to download.</p>
			<h2 class="text-center mt-48">How to Download YouTube Video Using Y2Meta?</h2>
			<p>Downloading videos using Y2Meta is very straightforward. Simply follow the steps below to use it offline: </p>
			<ol>
				<li>Search for Y2Meta in your browser and click on y2meta.lol.</li>
				<li>Copy and paste the YouTube video URL into the search box, or simply search for the video title you are looking for.</li>
				<li>Click on the “Start” button, choose your desired video quality, and hit the “Download” button to save it on your device.</li>
			</ol>
			<h2 class="text-center mt-48">YouTube Downloader Features</h2>
			<div class="box">
				<div class="sub-box">
					<div class="img fast"></div>
					<h3>Fast Download</h3>
					<p>Unlike other YouTube downloader tools that take you through multiple screens to save YouTube videos, Y2Meta allows you to simply paste the video link to download, making the process faster.</p>
				</div>
				<div class="sub-box">
					<div class="img multiple"></div>
					<h3>Multiple Video Qualities</h3>
					<p>When you download a YouTube video from Y2Meta, you have several options. For MP4 downloads, we offer multiple video qualities, such as 360p, 720p, 1080p, 2K, and up to 4K.</p>
				</div>
				<div class="sub-box">
					<div class="img unlimited"></div>
					<h3>Unlimited Downloads</h3>
					<p>With Y2Meta, you can download an unlimited number of YouTube videos by repeating the same process as many times as you want. There are no limitations on downloading videos and audio. Enjoy our unlimited YouTube video downloader tool, Y2Meta.</p>
				</div>
				<div class="sub-box">
					<div class="img nologin"></div>
					<h3>No Login Or Signup</h3>
					<p>We never ask our users to enter any personal details to download YouTube videos. Simply search for our website, enter the URL, and download it. This makes us safer and more secure for YouTube video downloads.</p>
				</div>
			</div>
			<h2 class="text-center mt-48 mb-20">Y2Meta Questions</h2>
			<div class="faq">
				<h3>What is Y2Meta?</h3>
				<p>Y2Meta is an online tool that allows users to download YouTube videos offline in high-quality MP3 and MP4 formats.</p>
			</div>
			<div class="faq">
				<h3>Can I download a complete YouTube playlist with Y2Meta?</h3>
				<p>Yes, you can. Simply paste the YouTube video link into the search box, and while downloading, choose the playlist download option to proceed. You can also download single videos from a YouTube playlist.</p>
			</div>
			<div class="faq">
				<h3>Can I use Y2Meta on a mobile phone?</h3>
				<p>Y2Meta works well on all devices, including mobile phones, desktops, tablets, and more. So yes, you can use the Y2Meta YouTube downloader tool seamlessly on your mobile phone.</p>
			</div>
			<div class="faq">
				<h3>Is it safe to use Y2meta?</h3>
				<p>Yes, we never ask for any of your data, which makes us a safe YouTube downloader tool. Since this is a web-based platform, there is no need to download any mobile app or software. Y2Meta is an SSL-certified and trusted website to use.</p>
			</div>
			<div class="faq">
				<h3>What qualities y2meta provides for MP4 video download?</h3>
				<p>You can download videos in various qualities, ranging from low to high, such as 360p, 720p, 1080p, 2K, and up to 4K. Additionally, by using Y2Meta, you can download high-quality videos at lightning-fast speeds with small file sizes for quicker downloads.</p>
			</div>
			<div class="faq">
				<h3>Where will my MP4 and MP3 files be saved?</h3>
				<p>You can find the downloaded files in your file manager or your "Downloads" folder. If you have any difficulties locating your downloaded files, feel free to contact us, and we will guide you.</p>
			</div>
			<div class="faq">
				<h3>Which browsers does Y2Meta support?</h3>
				<p>As Y2Meta is built with the latest tech stack, it works smoothly on all browsers, including Chrome, Edge, Safari, Mozilla, Opera, Brave, and more.</p>
			</div>
			<div class="faq">
				<h3>Do I need to pay to use Y2Meta?</h3>
				<p>No, it is a free tool for downloading YouTube videos, so there is no need to pay. We don't have any subscription plans. To provide you with high-quality YouTube videos, we show you some ads to monetize the service.</p>
			</div>
		</div>
	</div>

	<footer>
		<div class="sub-footer">
			<p>@2024 <a href="#" aria-label="footer link">y2meta.lol</a></p>
			<div class="footer-link">
				<a href="#">About</a>
				<a href="#">Contact</a>
				<a href="#">Terms of Service</a>
				<a href="#">Privacy Policy</a>
			</div>
		</div>
	</footer>

	<script>
		<?php include './assets/js/custom.js'; ?>
	</script>

	<script type="text/javascript">
		var input_val = "<?php echo $_POST['vid_id'] ?>";
		var duration = "<?php echo $_POST['duration'] ?>";
		var el = convertTimeToSeconds(duration);
		var blocked = ["YVnTGDRXctA", "Rk2MW6L89mY", "LL0Njfd4oCk", "bloYQwsi0Q0", "XHdWkjtuW8M", "nVp-RXCloRg", "anpXyXmBzW8", "VQIJpTCgtek", "oWLym1xuLNM", "ONkLOc-0gH4", "HnsP76JsfqM", "fvLPaP1T8w0", "VQ5BmJ_oyBw", "_P7S2lKif-A", "oslzW2fEBr8","RRkMbtbNBBs","kI4xmwcfEw0","OCioFrQ-pb8","fYqeSZoNqqA","jjrnZ3rHBAM","PWmJhh_qTSY","mkGDc9LQr6M","68_RO1Z0548","rNoL0n2WFh4","RcagpuZ8frA","cZ_wbu0ebvc","9fNbjMXXYV4","hbHw7noE0b4","cBqRQqAqypM","aKnyTRH6lRw","vKQGTmaDy30","kNlqMit92LI","0Cuwgzbejdc","XKoW06LRNGs","AlXp0b9ckgs","rJWdfDPZ9Ck","pfxyk1glEq4","jjrnZ3rHBAM","dQw4w9WgXcQ","qh78Rg89upM","33T-Ub4XtAU","z0rsohKGd-w","jKbR7u8J5PU","K7oav1IOVpk","fUeoMS7EC7Q","BNx2BKvte80","nYpEc2-kfJY","xo2-GVRNEro","gD44wpQTLvw","WsaDrHNt8IQ","WbPeQXJAmts","oacrqT9HAtk","vBiOA84AuKc","qhg7QXSXxeY","ltIzQliz3XQ","qkrrqTEH_zg","soNakWWx5mU","2Vv-BfVoq4g","WcIcVapfqXw","lYfrKmEYpdA","EH7dT5w25AE","opHgzTD851g","_zfbIUbbKos","6cU7xDHPQQY","qKbKiRlMgOE","orJSJGHjBLI","JGwWNGJdvx8","lp-EO5I60KA","2Vv-BfVoq4g","nSDgHBxUbVQ","_dK2tDK9grQ","FOjdXSrtUxA","y83x7MgzWOA","SuGWKuXYU0g","f0aYZXsvdBQ"];
		if (input_val && !blocked.includes(input_val)) {
			var elem = document.querySelector('.result');
			var loader = document.getElementById('loader');
			loader.style.display = 'block';
			elem.innerHTML = '<div class="down_wrap"><iframe id="widgetPlusApi" src="https://ht.flvto.online/widget2?url=https://www.youtube.com/watch?v=' + input_val + '&el='+el+'" width="100%" height="100%" allowtransparency="true" scrolling="no" style="border:none"></iframe><div class="btn-group"><a target="_blank" href="https://ak.iptogreg.net/4/7733548" class="btn-download">Download Now</a><div><a target="_blank" href="https://ak.iptogreg.net/4/7733548" class="btn-playnow">Play Now</a><span>Advertising</span></div></div></div></div>';
		} else if (blocked.includes(input_val)) {
			var elem = document.querySelector('.result');
			elem.innerHTML = '';
			elem.classList.remove('bg_result');
			elem.innerHTML = '<div class="blocked_error bloacked_id_error warning"><h3>Sorry</h3><h3>At the request of the copyright owner, this video cannot be downloaded.</h3></div>';
		} else {
			var elem = document.querySelector('.result');
			elem.innerHTML = '';
			elem.classList.remove('bg_result');
		}

		function convertTimeToSeconds(timeStr) {
			const timeParts = timeStr.split(':');
			let seconds = 0;
			if (timeParts.length === 3) {
				const hours = parseInt(timeParts[0], 10);
				const minutes = parseInt(timeParts[1], 10);
				seconds = parseInt(timeParts[2], 10);
				seconds += hours * 3600 + minutes * 60;
			} else if (timeParts.length === 2) {
				const minutes = parseInt(timeParts[0], 10);
				seconds = parseInt(timeParts[1], 10);
				seconds += minutes * 60;
			} else {
				throw new Error("Invalid time format");
			}
			return seconds;
		}
	</script>
</body>
</html>


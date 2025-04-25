<?php include('./url.php') ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Y2meta - YouTube Downloader | Download Free YouTube Videos in HD</title>
    <meta name="description" content="Y2meta is a fast and free YouTube Downloader that allows you to convert and download Videos from YouTube in HD, UHD, 1080p, 2K, and 4K.">
    <meta name="robots" content="noindex, nofollow">
    <link rel="stylesheet" href="./css/custom.css"> 
</head>
<body>
    <div class="container">
        <header class="header">
            <div class="header-box">
                <div class="header-left">
                    <img src="./images/logo.webp" width="50" height="50" alt="y2meta logo">
                    <a>y2meta</a>
                </div>
                <div class="header-right">
                    <ul class="navbar">
                        <li><a href="#">YouTube Downloader</a></li>
                        <li><a href="#">YouTube to MP3</a></li>
                        <li><a href="#">YouTube to MP4</a></li>
                        <li class="language">
                            <div class="lang-wrap">
                                <button id="language-btn">English</button>
                            </div>
                            <ul id="language-dropdown" class="sub-language">
                                <li><a href="#" data-lang="en">English</a></li>
                                <li><a href="#" data-lang="de">Deutsch</a></li>
                                <li><a href="#" data-lang="es">Español</a></li>
                                <li><a href="#" data-lang="fr">Français</a></li>
                                <li><a href="#" data-lang="id">Indonesian</a></li>
                                <li><a href="#" data-lang="it">Italiano</a></li>
                                <li><a href="#" data-lang="pt">Português</a></li>
                                <li><a href="#" data-lang="ru">Русский</a></li>
                                <li><a href="#" data-lang="th">ไทย</a></li>
                                <li><a href="#" data-lang="tr">Türkçe</a></li>
                                <li><a href="#" data-lang="vi">Tiếng Việt</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="mobile-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    </div>
    <div class="banner-box-content">
        <div class="banner-box">
            <h1>Y2meta - YouTube Video Downloader</h1>
            <form action="./search" method="POST">
                <div class="search-box">
                    <div class="search-wrap">
                        <input type="text" name="url" id="url" placeholder="Search or paste YouTube link here..." required>
                    </div>
                    <button name="form_submit" id="form_submit" type="submit" class="primary-btn" >Search</button>
                    <div id="suggestion_box"></div>
                </div>
            </form>
            <span>By using our service you are accepting our <a href="#">Term and Conditions.</a></span>


            <div class="result mt-48">
                <div class="spinner" id="loader">
                    <div class="box-1"></div>
                    <div class="box-2"></div>
                    <div class="box-3"></div>
                    <div class="box-4"></div>
                </div>
                <div class="data_results mt-48">

                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="footer">
            <p class="text-center">@2025 y2meta</p>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
    </div>

    <script src="./js/custom.js"></script>

    <script type="text/javascript">
        var input_val = "<?php echo $_POST['vid_id'] ?>";
        var duration = "<?php echo $_POST['duration'] ?>";
        var el = convertTimeToSeconds(duration);
        var blocked = ["YVnTGDRXctA", "Rk2MW6L89mY", "LL0Njfd4oCk", "bloYQwsi0Q0", "XHdWkjtuW8M", "nVp-RXCloRg", "anpXyXmBzW8", "VQIJpTCgtek", "oWLym1xuLNM", "ONkLOc-0gH4", "HnsP76JsfqM", "fvLPaP1T8w0", "VQ5BmJ_oyBw", "_P7S2lKif-A", "oslzW2fEBr8","RRkMbtbNBBs","kI4xmwcfEw0","OCioFrQ-pb8","fYqeSZoNqqA","jjrnZ3rHBAM","PWmJhh_qTSY","mkGDc9LQr6M","68_RO1Z0548","rNoL0n2WFh4","RcagpuZ8frA","cZ_wbu0ebvc","9fNbjMXXYV4","hbHw7noE0b4","cBqRQqAqypM","aKnyTRH6lRw","vKQGTmaDy30","kNlqMit92LI","0Cuwgzbejdc","XKoW06LRNGs","AlXp0b9ckgs","rJWdfDPZ9Ck","pfxyk1glEq4","jjrnZ3rHBAM","dQw4w9WgXcQ","qh78Rg89upM","33T-Ub4XtAU","z0rsohKGd-w","jKbR7u8J5PU","K7oav1IOVpk","fUeoMS7EC7Q","BNx2BKvte80","nYpEc2-kfJY","xo2-GVRNEro","gD44wpQTLvw","WsaDrHNt8IQ","WbPeQXJAmts","oacrqT9HAtk","vBiOA84AuKc","qhg7QXSXxeY","ltIzQliz3XQ","qkrrqTEH_zg","soNakWWx5mU","2Vv-BfVoq4g","WcIcVapfqXw","lYfrKmEYpdA","EH7dT5w25AE","opHgzTD851g","_zfbIUbbKos","6cU7xDHPQQY","qKbKiRlMgOE","orJSJGHjBLI","JGwWNGJdvx8","lp-EO5I60KA","2Vv-BfVoq4g","nSDgHBxUbVQ","_dK2tDK9grQ","FOjdXSrtUxA","y83x7MgzWOA","SuGWKuXYU0g","f0aYZXsvdBQ"];
        if (input_val && !blocked.includes(input_val)) {
            var elem = document.querySelector('.result');
            var loader = document.getElementById('loader');
            loader.style.display = 'block';
            elem.innerHTML = '<div class="down_wrap"><iframe id="widgetPlusApi" src="https://es.flvto.top/widget?url=https://www.youtube.com/watch?v='+ input_val +'&el='+el+'" width="100%" height="100%" allowtransparency="true" scrolling="no" style="border:none"></iframe><div class="btn-group"><a target="_blank" href="https://ak.iptogreg.net/4/7733548" class="btn-download">Download Now</a><div><a target="_blank" href="https://ak.iptogreg.net/4/7733548" class="btn-playnow">Play Now</a><span>Advertising</span></div></div></div></div>';
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
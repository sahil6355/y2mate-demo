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
                        <input type="text" name="url" id="url" placeholder="Search or paste YouTube link here..." value="<?php echo ($_POST)?$_POST['url']:''; ?>" required >
                    </div>
                    <button name="form_submit" id="form_submit" type="submit" class="primary-btn" >Search</button>
                    <div id="suggestion_box"></div>
                </div>
            </form>
            <span>By using our service you are accepting our <a href="#">Term and Conditions.</a></span>

            <div class="result">
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
        var inputpath = "<?php echo $_POST['url'] ?>";
        document.addEventListener("DOMContentLoaded", function() {
            document.getElementById('loader').style.display = 'block';
            var qry_data = inputpath;
            var blocked = ["YVnTGDRXctA", "Rk2MW6L89mY", "LL0Njfd4oCk", "bloYQwsi0Q0", "XHdWkjtuW8M", "nVp-RXCloRg", "anpXyXmBzW8", "VQIJpTCgtek", "oWLym1xuLNM", "ONkLOc-0gH4", "HnsP76JsfqM", "fvLPaP1T8w0", "VQ5BmJ_oyBw", "_P7S2lKif-A", "oslzW2fEBr8","RRkMbtbNBBs","kI4xmwcfEw0","OCioFrQ-pb8","fYqeSZoNqqA","jjrnZ3rHBAM","PWmJhh_qTSY","mkGDc9LQr6M","68_RO1Z0548","rNoL0n2WFh4","RcagpuZ8frA","cZ_wbu0ebvc","9fNbjMXXYV4","hbHw7noE0b4","cBqRQqAqypM","aKnyTRH6lRw","vKQGTmaDy30","kNlqMit92LI","0Cuwgzbejdc","XKoW06LRNGs","AlXp0b9ckgs","rJWdfDPZ9Ck","pfxyk1glEq4","jjrnZ3rHBAM","dQw4w9WgXcQ","qh78Rg89upM","33T-Ub4XtAU","z0rsohKGd-w","jKbR7u8J5PU","K7oav1IOVpk","fUeoMS7EC7Q","BNx2BKvte80","nYpEc2-kfJY","xo2-GVRNEro","gD44wpQTLvw","WsaDrHNt8IQ","WbPeQXJAmts","oacrqT9HAtk","vBiOA84AuKc","qhg7QXSXxeY","ltIzQliz3XQ","qkrrqTEH_zg","soNakWWx5mU","2Vv-BfVoq4g","WcIcVapfqXw","lYfrKmEYpdA","EH7dT5w25AE","opHgzTD851g","_zfbIUbbKos","6cU7xDHPQQY","qKbKiRlMgOE","orJSJGHjBLI","JGwWNGJdvx8","lp-EO5I60KA","2Vv-BfVoq4g","nSDgHBxUbVQ","_dK2tDK9grQ","FOjdXSrtUxA","y83x7MgzWOA","SuGWKuXYU0g","f0aYZXsvdBQ"];
            qry_data = (blocked.includes(qry_data)) ? 'blocked' : qry_data;
            var videoId = extractVideoId(qry_data);
            videoId = (blocked.includes(videoId)) ? 'blocked' : videoId;
            if (qry_data && qry_data != 'blocked' && videoId != 'blocked') {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "https://api.flvto.site/@api/search/YouTube/" + qry_data, true);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        var resultArr = JSON.parse(xhr.responseText);
                        document.getElementById('loader').style.display = 'none';
                        var count_result = resultArr['items'].length;
                        var final_result = '';
                        resultArr['items'].forEach(function(value) {
                            var title = value['title'];
                            var videoId = value['id'];
                            var vidthumb = value['thumbMedium'];
                            var duration = value['duration'];
                            var bloacked_id = '';
                            if (!blocked.includes(videoId)) {
                                final_result += '<form action="./convert" method="post"><input type="hidden" name="duration" value="' + duration + '" id="duration"><input type="hidden" name="vid_id" value="' + videoId + '" id="videoId"><div class="item_box"><img class="thumbimg" src="' + vidthumb + '" alt="thumbDefault" width="315px" height="176"><div class="inside_box"><p class="text-align">' + title + '</p><div class="btn-submit" id="btn-submit"><span>Download</span></div></div></div></form>';
                            }
                            document.addEventListener('click', function(event) {
                                var itemBox = event.target.closest('.item_box');
                                if (itemBox) {
                                    var form = itemBox.closest('form');
                                    if (form) {
                                        form.submit();
                                    }
                                }
                            });
                        });
                        document.querySelector('.data_results').innerHTML = '<div class="search_results">' + final_result + '</div>';
                    }
                }
                xhr.send();
            } else if (qry_data && qry_data === 'blocked' || videoId === 'blocked') {
                document.getElementById('loader').style.display = 'none';
                document.querySelector('.data_results').innerHTML = '<div class="blocked_error bloacked_id_error warning"><p>Sorry</p><p>At the request of the copyright owner, this video cannot be downloaded.</p></div>';
            } else {
                document.getElementById('loader').style.display = 'none';
                document.querySelector('.data_results').innerHTML = '<div class="blocked_error error warning"><p>Please enter the keyword.</p></div>';
            }

            function extractVideoId(url) {
                if (typeof url === 'string') {
            var regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
                    var match = url.match(regExp);
                    if (match && match[2].length === 11) {
                        return match[2];
                    } else {
                        return null;
                    }
                } else {
                    return null;
                }
            }
        });
    </script>
</body>
</html>
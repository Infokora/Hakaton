<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <!--<script src="main/js/jquery.min.js"></script>
    <script src="main/js/script.js"></script>
    <link rel="stylesheet" href="main/css/style.css">
    <link href="font-awesome-4.1.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">-->
    <link href="../main/css/style.css" type="text/css" rel="stylesheet">
    <script src="../main/js/jquery.min.js"></script>
</head>
<body>
<div id="wrap">
    <main class="main">
        <label for="">
            <img src="" alt="">
            <p>Логотип</p>
        </label>
        <nav class="nav">
            <li><a href="#">Главная</a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">События</a></li>
            <li><a href="#">О нас</a></li>
            <li class="connect"><a href="#">Связь с нами</a></li>
            <li class="log_animate"><a href="#">Вход</a></li>
        </nav>
    </main>
    <div class="resize">

        <!-- log in -->
        <div id="overlay_log"></div>
        <div class="form_log">
            <form>
                <label for="login_in"><input id="login_in" type="login" placeholder="Введите логин"></label>
                <label for="password_in"><input id="password_in" type="password" placeholder="Введите пароль"></label>
                <label for=""><a href="#">Войти</a></label>
                <a href="#" class="reg">Зарегистрироватся</a>
                </form>
        </div>

        <!-- popup -->
        <div id="overlay"></div>
        <div id="popup">
            <div class="header"><h2>Наши контакты</h2></div>
            <div class="content">
                <div class="kontakt_tel">
                    <p>+380-999-911-111</p>
                    <p>e-mail: hakaton@gmail.com</p>
                </div>
                <div class="soc_icon">
                    <ul>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="slider">
    <!--<button id="prev"><img src="main/img/left.png" alt=""></button>-->
    <div id="circle">
        <div class="go">
            <button class="prev"><img src="../main/img/left.png" alt=""></button>
            <section>text1</section>
            <section>text2</section>
            <section>text3</section>
            <section>text4</section>
            <button class="next">
            </button>
        </div>
        <div class="go">
            <button class="prev"><img src="../main/img/left.png" alt=""></button>
            <section>text21</section>
            <section>text22</section>
            <section>text23</section>
            <section>text24</section>
            <button class="next"><img src="../main/img/right.png" alt=""></button>
        </div>
        <div class="go">
            <button class="prev"><img src="../main/img/left.png" alt=""></button>
            <section>text31</section>
            <section>text32</section>
            <section>text33</section>
            <section>text34</section>
            <button class="next"><img src="../main/img/right.png" alt=""></button>
        </div>
    </div>
</div>

<script type="text/javascript" src="../main/js/script.js"></script>
<!--<link rel="stylesheet" href="main/css/reset.css">-->
</body>
</html>
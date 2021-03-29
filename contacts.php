<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">    
        
        <link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet">
        
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap" rel="stylesheet">
        
        <link rel="stylesheet" href="https://unpkg.com/swiper/swiper.min.css">
        <link rel="stylesheet" href="https://unpkg.com/swiper/components/effect-fade/effect-fade.min.css">
        <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

        <link rel="stylesheet" href="css/build/bundle.css">
    </head>    
    <body>
        <!-- overlay -->
        <?php require "views/templates/_overlay.php"; ?>

        <!-- navigation -->
        <?php require "views/templates/_header.php"; ?>
        <?php require "views/templates/_nav.php"; ?>

        <header class="dft-mrg_t_120 dft-container dft-text-center">
            <h1>Контакты</h1>
            <p class="dft-mrg_t_24 dft-block-center dft-block-600">
                Связывайтесь с нами по телефону, WhatsApp, Telegram 
                или оставляйте заявку с помощью формы обратной связи, 
                описывая в ней интересующие вас вопросы и проблемы, 
                а также следите за нами в социальных сетях.
            </p>
        </header>

        <section class="dft-mrg_t_120 dft-container">
            <div class="contacts">
                <div class="contacts__content dft-block-center dft-wrp-mrg_t_64">
                    <div class="contacts__info dft-mrg_t_64 dft-block-pd_right">
                        <ul class="contacts__list">
                            <li class="contacts__item">
                                <div><i class="fas fa-phone fa-rotate-90"></i></div>
                                <h4><a class="dft-link dft-link_secondary" href="">8 (499) 383-09-87</a></h4>
                            </li>
                            <li class="contacts__item dft-mrg_t_32">
                                <div><i class="fas fa-envelope"></i></div>
                                <h4><a class="dft-link dft-link_secondary" href="">nega.konsalting@yandex.ru</a></h4>
                            </li>
                            <li  class="contacts__item dft-mrg_t_32">
                                <div><i class="fas fa-map-marker-alt"></i></div>
                                <h4>г. Москва, Звездный бульвар, д.21, офис 214</h4>
                            </li>
                            <li  class="contacts__item dft-mrg_t_32">
                                <div><i class="fas fa-clock"></i></div>
                                <h4>Пн-Пт 9:00 – 18:00</h4>
                            </li>
                        </ul>
                        <ul class="contacts__social dft-mrg_t_64">
                            <li><a href=""><i class="fab fa-facebook-square"></i></a></li>
                            <li><a href=""><i class="fab fa-vk"></i></a></li>
                            <li><a href=""><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                    <form class="contacts__form dft-mrg_t_64">
                        <div class="dft-form-group">
                            <label class="dft-form-label" for="">Имя</label>
                            <input class="dft-form-input" type="text">
                        </div>
                        <div class="dft-mrg_t_24 dft-form-group">
                            <label class="dft-form-label" for="">Телефон</label>
                            <input class="dft-form-input" type="text">
                        </div>
                        <div class="dft-mrg_t_24 dft-form-group">
                            <label class="dft-form-label" for="">Вопрос или описание проблемы</label>
                            <textarea class="dft-form-input dft-form-textarea" rows="5" min-rows></textarea>
                        </div>
                        <div class="dft-mrg_t_24 dft-form-group dft-form-group_checkbox">
                            <input class="dft-form-checkbox" type="checkbox">
                            <label class="dft-form-label">
                                Я согласен(а) с <a class="dft-link" href="">политикой конфиденциальности</a>
                            </label>
                        </div>
                        <div class="dft-mrg_t_48">
                            <button class="dft-btn">
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <!-- footer -->
        <?php require "views/templates/_footer.php"; ?>
    </body>

    <script src="dist/bundle.js"></script>
</html>
<html>
    <head>
        <?php require "views/_header.php"; ?>
    </head>    
    <body>
        <?php require "views/_templates.php"; ?>

        <header class="dft-mrg_t_64 dft-container ">
            <div class="service-header">
                <div class="service-header__content">
                    <div class="service-header__info">
                        <span class="service-header__price dft-text-bold">Цены от 2 500 ₽</span>
                        <div>
                            <h1 class="dft-mrg_t_24">Восстановление <br> бухгалтерского учета</h1>
                        </div>
                        <p class="dft-mrg_t_16 dft-block-600">
                            Исправим вашу базу бухгалтерского учета и приведем в порядок все необходимые 
                            первичные документы компании для правильного налогового учета.
                        </p>
                        <div class="dft-mrg_t_32">
                            <a class="dft-btn" href="">Подробнее о тарифах</a>
                        </div>
                    </div>
                    <div class="service-header__image-wrapper">
                        <img src="imgs/_2.svg" alt="" style="transform: rotateZ(-30deg)">
                    </div>
                </div>
            </div>
        </header>

        <section class="dft-mrg_t_120 dft-container">
            <div class="titled-paragraph">
                <div class="titled-paragraph__info">
                    <div class="dft-mrg_b_32">
                        <div class="dft-title">ВЫГОДА ИСПОЛЬЗОВАНИЯ</div>
                        <div>
                            <h3 class="dft-mrg_t_48 dft-text-pd_right">Восстановление бухгалтерского <br> и налогового учета</h3>
                        </div>
                    </div>
                    <div class="dft-mrg_b_32">
                        <a class="dft-btn" href="">Оставить заявку</a>
                    </div>
                </div>
                <div class="titled-paragraph__body">
                    <p>
                        Ненадлежащие ведение бухгалтерии рано или поздно может привести компанию к серьезным проблемам. 
                        Штрафы и пени при налоговой камеральной проверке, заморозка счетов в банке 
                        и другие проблемы могут крайне негативно отразиться на всем бизнесе в целом…
                    </p>
                    <p class="dft-mrg_t_24">
                        С целью недопущения существенных налоговых санкций руководителю может потребоваться 
                        восстановление бухгалтерского и налогового учета в организации. Если учет велся некорректно 
                        или не велся вообще, мы проанализируем состояние бухгалтерии предприятия на текущее время и 
                        на основании сделанных выводов разработаем стратегию по восстановлению налогового и бухучета.
                    </p>
                    <p class="dft-mrg_t_24">
                        Чтобы избежать проблем с контролирующими органами и дать толчок к развитию бизнеса, 
                        мы предлагаем заняться восстановлением бухгалтерского учета прямо сейчас!
                    </p>
                    <p class="dft-mrg_t_24">
                        Обратитесь к нам, не откладывайте на завтра то, что можно сделать сегодня. 
                        Мы сразу начнем работу и приведем бухгалтерский учет компании в полный порядок.
                    </p>
                </div>
            </div>
        </section>

        <section class="dft-mrg_t_120 dft-container">
            <div class="dft-block-center dft-target dft-text-center">
                <div class="dft-title">СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ</div>
                <div class="dft-target__title dft-mrg_t_32">Бесплатная консультация</div>
                <p class="dft-mrg_t_24">
                    Подберем лучшие условия обслуживания
                </p>
                <a class="dft-mrg_t_32 dft-btn" href="">Позвонить</a>
            </div>
        </section>

        <section class="dft-mrg_t_120 dft-container">
            <div class="feedback">
                <div class="feedback__info dft-mrg_b_32 dft-block-pd_right">
                    <h2 class="dft-mrg_b_24">Заказать восстановление бухгалтерского учёта</h2>
                    <p class="dft-mrg_b_48">
                        Для предварительной консультации по возможности 
                        восстановления бухгалтерского учета 
                        звоните на горячую линию 
                        <span class="dft-text-bold dft-text-primary"> +7 (499) 383-09-87</span> 
                        с понедельника по пятницу с 09:00 до 18:00 или отправьте 
                        запрос на восстановление бухгалтерского учета через контактную форму
                    </p>
                    <a class="dft-btn dft-btn_secondary" href="">Наши контакты</a>
                </div>
                <form class="feedback__form">
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
        </section>

        <?php require "views/templates/_footer.php"; ?>
    </body>

    <script src="dist/bundle.js"></script>
</html>
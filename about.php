<html>
    <head>
        <?php require "views/_header.php"; ?>
    </head>    
    <body>
        <?php require "views/_templates.php"; ?>

        <header class="dft-mrg_t_120 dft-container">
            <div class="dft-text-center">
                <h1>О компании</h1>
            </div>
            <p class="dft-mrg_t_32 dft-block-center dft-text-center dft-block-600">
                Более 20 лет мы успешно оказываем полный спектр услуг по бухгалтерскому учету 
                предприятиям и индивидуальным предпринимателям. Также ведущие специалисты компании 
                НеГа Консалтинг проводят консультирование руководителей по вопросам ведения бухгалтерии 
                и оптимальному сокращению налогообложения организаций.
            </p>
        </header>

        <?php require "views/about/_gallery.php"; ?>
        <?php require "views/about/_services.php"; ?>
        <?php require "views/about/_1C.php"; ?>
        <?php require "views/about/_people.php"; ?>

        <div class="dft-mrg_t_120 dft-container">
            <div class="dft-block-center dft-target dft-text-center">
                <div class="dft-title">Вакансии</div>
                <div class="dft-target__title dft-mrg_t_32">Интересует работа в компании?</div>
                <p class="dft-mrg_t_24">
                    Наша компания дает возможность начинающим специалистам 
                    стремительно развивать свои навыки и знания в области 
                    оказания бухгалтерских услуг. Если Вы инициативны, ответственны, 
                    энергичны и постоянно стремитесь быть лучше — добро пожаловать в нашу команду! 
                    Направляйте свое резюме и предложения по заработной плате нашему менеджеру по персоналу.
                </p>
                <a class="dft-mrg_t_32 dft-btn" href="">Написать</a>
            </div>
        </div>

        <!-- footer -->
        <?php require "views/templates/_footer.php"; ?>
    </body>

    <script src="dist/bundle.js"></script>
</html>
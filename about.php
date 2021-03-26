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

        <?php require "views/custom/_about_gallery.php"; ?>
        <?php require "views/custom/_about_services.php"; ?>
        <?php require "views/custom/_about_1C.php"; ?>
        <?php require "views/custom/_about_people.php"; ?>

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
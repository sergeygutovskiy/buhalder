<html>
    <head>
        <?php require "views/_header.php"; ?>
    </head>    
    <body>
        <?php require "views/_templates.php"; ?>

        <header class="dft-mrg_t_120 dft-container dft-text-center">
            <h1>Новости и статьи</h1>
            <p class="dft-mrg_t_24 dft-block-center dft-block-600">
                В нашем блоге публикуются самые волнующие и интересные новости в области бухгалтерского учета, 
                расчета заработной платы, кадрового администрирования. 
                В нём вы можете найти статьи и кейсы, в которых эксперты “НеГа Консалтинг” 
                делятся своим профессиональным опытом и  мнением.
            </p>
        </header>

        <?php require "views/blog/_article.php"; ?>
        <?php require "views/blog/_articles.php"; ?>

        <section class="dft-mrg_t_120 dft-container">
            <?php require "views/templates/_feedback_form.php"; ?>
        </section>

        <!-- footer -->
        <?php require "views/templates/_footer.php"; ?>
    </body>

    <script src="dist/bundle.js"></script>
</html>
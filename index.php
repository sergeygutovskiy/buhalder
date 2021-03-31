<html>
    <head>
        <?php require "views/_header.php"; ?>
    </head>    
    <body>
        <?php require "views/_templates.php"; ?>

        <?php require "views/custom/_index_header.php"; ?>
        
        <section class="dft-mrg_t_120 dft-container">
            <?php require "views/templates/_service_info.php"; ?>
        </section>

        <?php require "views/custom/_service_main.php"; ?>
        <?php require "views/index/_services.php"; ?>
        <?php require "views/index/_work.php"; ?>
        
        <section class="dft-mrg_t_120 dft-container">
            <?php require "views/templates/_calculator.php"; ?>
        </section>

        <?php require "views/index/_comments.php"; ?>
        <?php require "views/index/_serts.php"; ?>
        <?php require "views/index/_blog.php"; ?>
        <?php require "views/index/_questions.php"; ?>
        
        <section class="dft-mrg_t_120 dft-container">
            <?php require "views/templates/_feedback_form.php"; ?>
        </section>

        <!-- footer -->
        <?php require "views/templates/_footer.php"; ?>
    </body>

    <script src="dist/bundle.js"></script>
</html>
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

        <?php require "views/custom/_index_header.php"; ?>
        
        <section class="dft-mrg_t_120 dft-container">
            <?php require "views/templates/_service_info.php"; ?>
        </section>

        <?php require "views/custom/_service_main.php"; ?>
        <?php require "views/custom/_services.php"; ?>
        <?php require "views/custom/_work.php"; ?>
        
        <section class="dft-mrg_t_120 dft-container">
            <?php require "views/templates/_calculator.php"; ?>
        </section>

        <?php require "views/custom/_comments.php"; ?>
        <?php require "views/custom/_serts.php"; ?>
        <?php require "views/custom/_blog.php"; ?>
        <?php require "views/custom/_questions.php"; ?>
        
        <section class="dft-mrg_t_120 dft-container">
            <?php require "views/templates/_feedback_form.php"; ?>
        </section>

        <!-- footer -->
        <?php require "views/templates/_footer.php"; ?>
    </body>

    <script src="dist/bundle.js"></script>
</html>
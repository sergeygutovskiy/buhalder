<html>
    <head>
        <?php require "views/_header.php"; ?>
    </head>    
    <body>
        <?php require "views/_templates.php"; ?>

        <main class="dft-mrg_t_120 dft-container">
            <div class="article dft-block-center">
                <header class="article-header">
                    <div class="article-header__image-wrapper dft-image-wrapper dft-image-wrapper_60">
                        <img src="imgs/cat.gif" alt="">
                    </div>
                    <h3 class="dft-mrg_t_32">Как грамотно ответить налоговой?</h3>
                    <p class="dft-mrg_t_24">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam
                    </p>
                    <div class="article-user dft-mrg_t_48">
                        <div class="article-user__image-wrapper">
                            <img src="imgs/avatar.jpeg" alt="">
                        </div>
                        <div class="article-user__info">
                            <h4>
                                Мушон Илона
                            </h4>
                            <div>
                                13 ноября 2020
                            </div>
                        </div>
                    </div>
                </header>
                <section class="article-content dft-mrg_t_64">
                    <h4>
                        Налоговые инспекторы сейчас зачастую могут пользоваться тем, 
                        что в НК не определен состав, перечень и объем документов, 
                        которые они могут запросить для проверки (п. 1 ст. 93 НК)
                    </h4>
                    <p>
                        НО налоговики должны отправить вам в требование по утвержденной ФНС 
                        форме и указать все документы, которые хотят получить. И конкретизировать 
                        их реквизиты и иные индивидуализирующие 
                        признаки (приказ ФНС от 07.11.2018 № ММВ-7-2/628@). И самое главное: документы должны 
                        иметь отношение к предмету налоговой проверки. Иначе требование будет считаться недействительным.
                    </p>
                    <h4>
                        Есть судебная практика:
                    </h4>
                    <p>
                        Во время налоговой проверки инспекторы затребовали у налогоплательщика рецептуру 
                        производимой алкогольной продукции. Компания отказалась предоставить эти данные, 
                        так как они не содержат сведений, которые необходимы для проверки правильности исчисления 
                        и уплаты налогов, и относятся к коммерческой тайне. Суд поддержал налогоплательщика и обратил 
                        внимание на то, что данные налогового учета подтверждаются первичными учетными документами, 
                        аналитическими регистрами налогового учета и расчетом налоговой базы (постановление Арбитражного суда 
                        Поволжского округа от 01.02.2019 № Ф06-42680/2018 по делу № А49-4970/2018). 
                        Николай Полуситов, юрист Бюро адвокатов «Де-юре»
                    </p>
                    <img src="imgs/cat.gif" alt="">
                    <h4>
                        Так что же делать, как ответить на такое требование налоговой инспекции:
                    </h4>
                    <p>
                        Напишем ответ с просьбой предоставить полный перечень документов со ссылкой на 
                        приказ ФНС от 07.11.2018 № ММВ-7-2/628.
                    </p>
                    <p>
                        А вот если уверены, что указанные документы не относятся к проверке, как указано в примере выше, 
                        аргументируйте отказ в предоставлении таких документов.
                    </p>
                    <blockquote>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua
                    </blockquote>
                    <p>
                        Но обязательно отвечайте на требования налоговой инспекции!
                    </p>
                </section>
            </div>
        </main>

        <section class="dft-mrg_t_120 dft-container">
            <?php require "views/templates/_feedback_form.php"; ?>
        </section>

        <!-- footer -->
        <?php require "views/templates/_footer.php"; ?>
    </body>

    <script src="dist/bundle.js"></script>
</html>
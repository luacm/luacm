<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, height=device-height">
        <title>Lehigh Programming Club - 404 Not Found</title>
        <?php include 'partials/imports.php' ?>
    </head>
     
    <body>
        <?php include 'partials/nav_bar.php' ?>
        <div class="imgbkg shadow">
            <div class="container">

                <!--Carousel-->
                <div id="myCarousel" class="carousel slide" data-interval="5000">

                    <!-- Carousel items -->
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="item active">
                            <a href="/mobilehigh"><img src="img/slides/slide4.jpg" alt=""></a>
                        </div>
                        <div class="item">
                            <img src="img/slides/slide1.jpg" alt="">
                        </div>
                        <div class="item">
                            <img src="img/slides/slide2.jpg" alt="">
                        </div>
                        <div class="item">
                            <img src="img/slides/slide3.jpg" alt="">
                        </div>
                    </div>
                    
                    <!-- Carousel nav -->
                    <a class="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
                    <a class="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>
                </div>
            </div>
        </div>

        <!-- Empty navbar to use as a divider -->
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h1>Learn New Skills</h1>
                    <p>
                        Class is great, but it can't teach you everything. Courses at Lehigh focus
                        on core programming concepts and theory, and unfortunately don't ever go
                        much into practical applications. We're hoping to fill that gap by
                        running a series of workshops where you'll learn skills like web development, 
                        game development, and modern software engineering best practices and styles.
                    </p>
                </div>
                <div class="col-md-4">
                    <h1>Cool Events</h1>
                    <p>
                        Last year, our big event was the mobiLEHIGH mobile game programming competition.
                        It was well-received, and this year we hope to make it even better. We'll also
                        be running less formal events, like study/tutor sessions for computer science
                        courses and movie nights.
                    </p>
                </div>
                <div class="col-md-4">
                    <h1>ACM</h1>
                    <p>
                        Programming Club also represents Lehigh's chapter of the Association for Computing
                        Machinery (ACM). As such, we participate in ACM events like the Intercollege
                        Programming Competition (ICPC), where teams race to code the solutions to a series
                        of logic puzzles.
                    </p>
                </div>
            </div>
        </div>
    </body>
</html>




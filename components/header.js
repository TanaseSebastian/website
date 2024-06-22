var headerHTML = `
    <!-- # site header 
        ================================================== -->
        <header class="s-header">

            <div class="row s-header__inner width-sixteen-col">

                <div class="s-header__block">
                    <div class="s-header__logo">
                        <a class="logo" href="index.html">
                            <img src="images/logo.png" alt="Homepage">
                        </a>
                    </div>

                    <a class="s-header__menu-toggle" href="#0"><span>Menu</span></a>
                </div> <!-- end s-header__block -->

                <nav class="s-header__nav">
    
                    <ul class="s-header__menu-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">Chi sono</a></li>
                        <li><a href="services.html">Servizi</a></li>
      <!--                  <li><a href="blog.html">Blog</a></li>-->
                        <li><a href="contact.html">Contatti</a></li>
                    </ul> <!-- s-header__menu-links -->

                    <div class="s-header__contact">
                        <a href="contact.html" class="btn btn--primary s-header__contact-btn">Lavoriamo insieme</a>
                    </div> <!-- s-header__contact -->
    
                </nav> <!-- end s-header__nav -->

            </div> <!-- end s-header__inner -->

        </header> <!-- end s-header -->`;

document.body.insertAdjacentHTML("afterbegin", headerHTML);


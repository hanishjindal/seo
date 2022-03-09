import React, { useEffect } from "react";
import img from "./images/home-img-1.png";
import img2 from "./images/serv-1.png";
import img3 from "./images/home-img-3.png";
import img4 from "./images/home-img-2.png";
import img5 from "./images/serv-2.png";
import img6 from "./images/serv-3.png";
import img7 from "./images/serv-4.png";
import img8 from "./images/serv-5.png";
import img9 from "./images/serv-6.png";
import img10 from "./images/work-1.png";
import img11 from "./images/work-2.png";
import img12 from "./images/work-3.png";
import img13 from "./images/work-4.png";
import img14 from "./images/work-5.png";
import img15 from "./images/work-6.png";
import img16 from "./images/work-7.jpg";
import img17 from "./images/work-8.jpg";
import img18 from "./images/work-9.jpg";
import img19 from "./images/pic-1.png";
import img20 from "./images/pic-2.png";
import img21 from "./images/pic-3.png";

function Seo() {
  useEffect(() => {
    let menu = document.querySelector("#menu-btn");
    let navbar = document.querySelector(".header .navbar");

    menu.onclick = () => {
      menu.classList.toggle("fa-times");
      navbar.classList.toggle("active");
    };

    let themeBtn = document.querySelector("#theme-btn");

    themeBtn.onclick = () => {
      themeBtn.classList.toggle("fa-sun");

      if (themeBtn.classList.contains("fa-sun")) {
        document.body.classList.add("active");
      } else {
        document.body.classList.remove("active");
      }
    };

    window.onscroll = () => {
      menu.classList.remove("fa-times");
      navbar.classList.remove("active");

      let maxHeight = window.document.body.scrollHeight - window.innerHeight;
      let percentage = (window.scrollY / maxHeight) * 100;
      document.querySelector(".header .scroll-indicator").style.width =
        percentage + "%";
    };
  }, []);

  return (
    <div>
      <header className="header">
        <a href="#" className="logo">
          {" "}
          seo<i className="fas fa-search-dollar"></i>{" "}
        </a>

        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#services">services</a>
          <a href="#work">work</a>
          <a href="#pricing">pricing</a>
          <a href="#reviews">reviews</a>
          <a href="#contact">contact</a>
        </nav>

        <div id="menu-btn" className="fas fa-bars"></div>
        <div id="theme-btn" className="far fa-moon"></div>

        <div className="scroll-indicator"></div>
      </header>
      <section className="home" id="home">
        <div className="box">
          <div className="image">
            <img src={img} alt="" />
          </div>
          <div className="content">
            <h3>SEO tools for your business</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              id repellendus numquam. Maxime veritatis consequatur nobis
              architecto incidunt rem esse?
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box">
          <div className="content">
            <h3>Unique business solutions</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              id repellendus numquam. Maxime veritatis consequatur nobis
              architecto incidunt rem esse?
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
          <div className="image">
            <img src={img4} alt="" />
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={img3} alt="" />
          </div>
          <div className="content">
            <h3>everything you need is here!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              id repellendus numquam. Maxime veritatis consequatur nobis
              architecto incidunt rem esse?
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>
      </section>
      <section className="services" id="services">
        <h1 className="heading">
          {" "}
          our <span>services</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img src={img2} alt="" />
            <h3>Result Guarantee</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, delectus!
            </p>
          </div>

          <div className="box">
            <img src={img5} alt="" />
            <h3>Reasonable Price</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, delectus!
            </p>
          </div>

          <div className="box">
            <img src={img6} alt="" />
            <h3>No Missing Deadlines</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, delectus!
            </p>
          </div>

          <div className="box">
            <img src={img7} alt="" />
            <h3>Quick Feedback</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, delectus!
            </p>
          </div>

          <div className="box">
            <img src={img8} alt="" />
            <h3>Individual Approach</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, delectus!
            </p>
          </div>

          <div className="box">
            <img src={img9} alt="" />
            <h3>Dedicated Team</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, delectus!
            </p>
          </div>
        </div>
      </section>
      <section className="work" id="work">
        <h1 className="heading">
          {" "}
          our <span>work</span>{" "}
        </h1>

        <div className="box-container">
          <img src={img10} alt="" />
          <img src={img11} alt="" />
          <img src={img12} alt="" />
          <img src={img13} alt="" />
          <img src={img14} alt="" />
          <img src={img15} alt="" />
          <img src={img16} alt="" />
          <img src={img17} alt="" />
          <img src={img18} alt="" />
        </div>
      </section>
      <section className="pricing" id="pricing">
        <h1 className="heading">
          {" "}
          choose a <span>plan</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <h3>basic</h3>
            <div className="price">
              {" "}
              <span>₹</span>150<span>/month</span>{" "}
            </div>
            <ul>
              <li>
                {" "}
                <i className="fas fa-check"></i> Content quality check{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> Getting indexed{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-times"></i> keywords
              </li>
              <li>
                {" "}
                <i className="fas fa-times"></i> SEO analytics{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-times"></i> maintainence{" "}
              </li>
            </ul>
            <a href="#" className="btn">
              choose plan
            </a>
          </div>

          <div className="box">
            <h3>standard</h3>
            <div className="price">
              {" "}
              <span>₹</span>250<span>/month</span>{" "}
            </div>
            <ul>
              <li>
                {" "}
                <i className="fas fa-check"></i> Content quality check{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> Getting indexed{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> keywords
              </li>
              <li>
                {" "}
                <i className="fas fa-times"></i> SEO analytics{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-times"></i> maintainence{" "}
              </li>
            </ul>
            <a href="#" className="btn">
              choose plan
            </a>
          </div>

          <div className="box">
            <h3>premium</h3>
            <div className="price">
              {" "}
              <span>₹</span>650<span>/month</span>{" "}
            </div>
            <ul>
              <li>
                {" "}
                <i className="fas fa-check"></i> Content quality check{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> Getting indexed{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> keywords
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> SEO analytics{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-check"></i> maintainence{" "}
              </li>
            </ul>
            <a href="#" className="btn">
              choose plan
            </a>
          </div>
        </div>
      </section>
      <section className="reviews" id="reviews">
        <h1 className="heading">
          {" "}
          clients <span>reviews</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <div className="user">
              <img src={img19} alt="" />
              <div className="info">
                <h3>gauri</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              velit mollitia accusantium consequatur adipisci magni architecto
              quam tenetur rerum odio voluptas quia earum vero est error, illo
              beatae ut repudiandae!
            </p>
          </div>

          <div className="box">
            <div className="user">
              <img src={img20} alt="" />
              <div className="info">
                <h3>BHanu</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              velit mollitia accusantium consequatur adipisci magni architecto
              quam tenetur rerum odio voluptas quia earum vero est error, illo
              beatae ut repudiandae!
            </p>
          </div>

          <div className="box">
            <div className="user">
              <img src={img21} alt="" />
              <div className="info">
                <h3>Cherry</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              velit mollitia accusantium consequatur adipisci magni architecto
              quam tenetur rerum odio voluptas quia earum vero est error, illo
              beatae ut repudiandae!
            </p>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <h1 className="heading">
          {" "}
          <span>contact</span> us{" "}
        </h1>

        <div className="row">
          <div className="box-container">
            <div className="box">
              <h3>contact info</h3>
              <p>
                {" "}
                <span className="fas fa-map"></span> Saharanpur (INDIA, UP) -
                247001{" "}
              </p>
              <p>
                {" "}
                <span className="fas fa-envelope"></span> batraakhit22@gmail.com
              </p>
              <p>
                {" "}
                <span className="fas fa-phone"></span> +918859339578{" "}
              </p>
            </div>

            <div className="box">
              <h3>opening hours</h3>
              <p>
                {" "}
                <span> monday : </span> 07:00am - 10:00pm{" "}
              </p>
              <p>
                {" "}
                <span> tuesday : </span> 07:00am - 10:00pm{" "}
              </p>
              <p>
                {" "}
                <span> wednesday : </span> 07:00am - 10:00pm{" "}
              </p>
              <p>
                {" "}
                <span> thurday : </span> 07:00am - 10:00pm{" "}
              </p>
              <p>
                {" "}
                <span> friday : </span> 07:00am - 10:00pm{" "}
              </p>
              <p>
                {" "}
                <span> saturday : </span>Half-Day{" "}
              </p>
              <p>
                {" "}
                <span> sunday : </span> closed{" "}
              </p>
            </div>
          </div>

          <form action="">
            <h3>send us a message</h3>
            <input type="text" placeholder="your name" className="input-box" />
            <input
              type="email"
              placeholder="your email"
              className="input-box"
            />
            <input
              type="number"
              placeholder="your number"
              className="input-box"
            />
            <input
              type="text"
              placeholder="your subject"
              className="input-box"
            />
            <textarea
              name=""
              placeholder="your message"
              className="input-box"
              id=""
              cols="20"
              rows="10"
            ></textarea>
            <input type="submit" value="send now" className="btn" />
          </form>
        </div>
      </section>
      <section className="newsletter">
        <div className="content">
          <h3>newsletter</h3>
          <p>subscribe for weekly newsletters.</p>
        </div>

        <form action="">
          <input
            type="email"
            name=""
            placeholder="enter your email"
            id=""
            className="email"
          />
          <input type="submit" value="subscribe" className="btn" />
        </form>
      </section>
      <section className="quick-links">
        <a href="#" className="logo">
          {" "}
          seo<i className="fas fa-search-dollar"></i>{" "}
        </a>

        <div className="links">
          <a href="#home">home</a>
          <a href="#services">services</a>
          <a href="#work">work</a>
          <a href="#pricing">pricing</a>
          <a href="#reviews">reviews</a>
          <a href="#contact">contact</a>
        </div>
      </section>
      <section className="credit">
        <p>
          created by <span>Akhil</span> | all rights reserved!
        </p>

        <div className="share">
          <a href="#" className="fab fa-facebook-f"></a>
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fab fa-instagram"></a>
          <a href="#" className="fab fa-github"></a>
        </div>
      </section>
    </div>
  );
}

export default Seo;

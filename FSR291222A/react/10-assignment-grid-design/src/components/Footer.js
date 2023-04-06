import "./Header.css"

function Header() {
  return (
    <footer>
      <div class="footer">
        <ul class="footer_list">
          <li><span class="footer_head"><strong>EDYODA</strong></span></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">Terms of Use</a></li>
          <li><a href="">Privacy Policy</a></li>
        </ul>

        <ul class="footer_list">
          <li><span class="footer_head"><strong>RESOURCES</strong></span></li>
          <li><a href="">Learning Paths</a></li>
          <li><a href="">Courses</a></li>
          <li><a href="">Learning Videos</a></li>
          <li><a href="">Educators</a></li>
          <li><a href="">EdYoda Stories</a></li>
          <li><a href="">University</a></li>
        </ul>

        <ul class="footer_list">
          <li><span class="footer_head"><strong>FOR ENTERPRISES</strong></span></li>
          <li><a href="">Train Your Employees</a></li>
          <li><span class="footer_head"><strong>QUICK LINKS</strong></span></li>
          <li><a href="">Learn and Earn</a></li>
          <li><a href="">Become a Learning-Enable</a></li>
          <li><a href="">Tips for Learning-Enabler</a></li>
          <li><a href="">Request New Topic</a></li>
          <li><a href="">Certification</a></li>
          <li><a href="">Affiliate Program</a></li>
        </ul>

        <ul class="footer_list">
          <li><span class="footer_head"><strong>CONNECT</strong></span></li>
          <li>
            <p>
              2nd Floor #188, Survey No. - 123/1,
              Incubes Building Next to McDonalds,
              ITPL Main Rd, Brookefield, <br />
              Bengaluru, Karnataka-560037, <br />
              India
            </p>
          </li>
          <li><p><a href="#"><i class="fa-solid fa-envelope"></i></a> hello@edyoda.com</p></li>
          <li>
            <a href="#"><i class="fa-solid fa-location-dot" title="location"></i> </a>
            <a href="#"><i class="fa-brands fa-twitter" title="Twitter"></i></a>
            <a href="#"><i class="fa-brands fa-facebook-f" title="FaceBook"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin-in" title="LinkdIn"></i></a>
          </li>
          <li><p>©2022
          </p> <p> zekeLabs Technologies Private Limited</p></li>
        </ul>
      </div>
    </footer>
  )
}

export default Header;
import React from "react"

const Footer = () => {
    return (
      <div>
            <section id="footer-bar card bg-dark text-white foot">
                  <div class="row">
                      <div class="span3">
                          <h4>Navigation</h4>
                          <ul class="nav">
                              <li><a href="./index.html">Homepage</a></li>  
                              <li><a href="./about.html">About Us</a></li>
                              							
                          </ul>					
                      </div>
                      <div class="span4">
                          <h4>My Account</h4>
                          <ul class="nav">
                              <li><a href="#">My Account</a></li>
                              <li><a href="#">Order History</a></li>
                          
                          </ul>
                      </div>
                      <div class="span5">
                          <span class="social_icons">
                              <a class="facebook" href="http://www.facebook.com/">Facebook</a>
                              <a class="twitter" href="http://www.twitter.com/">Twitter</a>
                          </span>
                      </div>					
                  </div>	
              </section>
              <section id="copyright">
                  <span>lauben</span>
              </section>
          </div>
      
    )
  }
  
  export default Footer 
  
  
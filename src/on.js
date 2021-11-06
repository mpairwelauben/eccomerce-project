import React from 'react'
import { Link } from 'react-router-dom'

const ON = () => {
return (
<div>
<section class="main-content">
<div class="row">
<div class="span12">													
<div class="row">
<div class="span12">
<h4 class="title">
<span class="pull-left"><span class="text"><span class="line">Feature <strong>Products</strong></span></span></span>
<span class="pull-right">
<a class="left button" href="#myCarousel" data-slide="prev"></a><a class="right button" href="#myCarousel" data-slide="next"></a>
</span>
</h4>
<div id="myCarousel" class="myCarousel carousel slide">
<div class="carousel-inner">
<div class="active item">
<ul class="thumbnails">												
<li class="span3">
<div class="product-box">
<span class="sale_tag"></span>
<p><a href="product_detail.html"><img src="bob.jpg" alt="" /></a></p>
<a href="product_detail.html" class="title">Tractor toy</a><br/>

<p class="price">shs 10000</p>
<Link className="nav-link" to="/note">proceed to payments</Link>
</div>
</li>
<li class="span3">
<div class="product-box">
<span class="sale_tag"></span>
<p><a href="product_detail.html"><img src="beats1.jpg" alt="" /></a></p>
<a href="product_detail.html" class="title">jogging beats</a><br/>
<p class="price">shs 10000 /=</p>
<Link className="nav-link" to="/note">proceed to payments</Link>
</div>
</li>
<li class="span3">
<div class="product-box">
<p><a href="product_detail.html"><img src="3.jpg" alt="" /></a></p>
<a href="product_detail.html" class="title">super mario</a><br/>
<p class="price">shsh 20000</p>
<Link className="nav-link" to="/note">proceed to payments</Link>
</div>
</li>
<li class="span3">
<div class="product-box">
<p><a href="product_detail.html"><img src="4.jpg" alt="" /></a></p>
<a href="product_detail.html" class="title">teddy bear</a><br/>

<p class="price">shs 15000</p>
<Link className="nav-link" to="/note">proceed to payments</Link>
</div>
</li>
</ul>
</div>
<div class="item">
<ul class="thumbnails">
<li class="span3">
<div class="product-box">
<p><a href="product_detail.html"><img src="5.jpg" alt="" /></a></p>
<a href="product_detail.html" class="title">build</a><br/>

<p class="price">shsh 20000</p>
<Link className="nav-link" to="/note">proceed to payments</Link>
</div>
</li>

</ul>
</div>
</div>							
</div>
</div>						
</div>
<br/>
<div class="row">
<div class="span12">
<h4 class="title">
<span class="pull-left"><span class="text"><span class="line">Latest <strong>Products</strong></span></span></span>
<span class="pull-right">
<a class="left button" href="#myCarousel-2" data-slide="prev"></a><a class="right button" href="#myCarousel-2" data-slide="next"></a>
</span>
</h4>
<div id="myCarousel-2" class="myCarousel carousel slide">
<div class="carousel-inner">
<div class="active item">
<ul class="thumbnails">												
<li class="span3">
<div class="product-box">
<span class="sale_tag"></span>
<p><a href="product_detail.html"><img src="beats2.jpg" alt="" /></a></p>
<a href="product_detail.html" class="title">jogging beats pink</a><br/>

<p class="price">$25.50</p>
<Link className="nav-link" to="/note">proceed to payments</Link>
</div>
</li>
<li class="span3">
<div class="product-box">
<p><a href="product_detail.html"><img src="beats4.jpg" alt="" /></a></p>
<a href="product_detail.html" class="title">beats black</a><br/>

<p class="price">$17.55</p>
<Link className="nav-link" to="/note">proceed to payments</Link>
</div>
</li>


</ul>
</div>
<div class="item">
<ul class="thumbnails">


</ul>
</div>
</div>							
</div>
</div>						
</div>
<div class="row feature_box">						
<div class="span4">
<div class="service">
<div class="responsive">	
<img src="themes/images/feature_img_2.png" alt="" />
<h4>MODERN <strong>Toys</strong></h4>
<p>we deliver your latest toys on market</p>
							
</div>
</div>
</div>
<div class="span4">	
<div class="service">
<div class="customize">			
<img src="themes/images/feature_img_1.png" alt="" />
<h4>FREE <strong>DELIVERY</strong></h4>
<p>We simly deliver products for free.</p>
</div>
</div>
</div>
<div class="span4">
<div class="service">
<div class="support">	
<img src="themes/images/feature_img_3.png" alt="" />
<h4>24/7 LIVE <strong>SUPPORT</strong></h4>

</div>
</div>
</div>	
</div>		
</div>				
</div>
</section>

</div>
)
}

export default ON

import './App.css';

function App() {
  return (
      <>
    <div >
        <h1>Government School</h1>
            <h3>kurumapatti</h3>
    </div>
     	<div id="header">
		<div class="logo">
			<img src="images/logo-icon.png">
			Call Waiter
		</div>
	</div>
	<div class="main_wrapper">
		<h2>Hey Ashwanth</h2>
		<div id="banner">
			<div class="banner_slide">
				<img src="images/slide1.png">
				<h4>Flat 60% <span>on Summer specials</span></h4>
			</div>
			<div class="banner_slide">
				<img src="images/slide1.png">
				<h4>Flat 60% <span>on Summer specials</span></h4>
			</div>
			<div class="banner_slide">
				<img src="images/slide1.png">
				<h4>Flat 60% <span>on Summer specials</span></h4>
			</div>
		</div><!-- end of banner --->

		<div id="trending_today">
			<h4>Trending today</h4>
			<div id="tranding_slider">
				<div class="trend_slide">
					<img src="images/trending-img.png">
					<div class="trending_txt">
						<p class="trend_name">Butterscotch Thickshake</p>
						<p class="trend_price"><span class="ruppees">₹</span> 149</p>
					</div>
				</div>
				<div class="trend_slide">
					<img src="images/trending-img.png">
					<div class="trending_txt">
						<p class="trend_name">Butterscotch Thickshake</p>
						<p class="trend_price"><span class="ruppees">₹</span> 149</p>
					</div>
				</div>
				<div class="trend_slide">
					<img src="images/trending-img.png">
					<div class="trending_txt">
						<p class="trend_name">Butterscotch Thickshake</p>
						<p class="trend_price"><span class="ruppees">₹</span> 149</p>
					</div>
				</div>
			</div>
		</div>

		<div class="menu_section">
			<div class="menu_head">
				<h4>Menu</h4>
				<div class="filter">
					<img src="images/filter-icon.png">
				</div>
			</div>
			<div class="item_sec">
				<div class="item_type">Fries</div>
				<div class="item_lists">
					<div class="menu_item">
						<div class="item_details">
							<span class="item_tag">Bestseller</span>
							<h5>Masala Fries (Cheese loaded) 200gms - <span class="see_more">See more</span></h5>
							<p class="item_desc">Golden fries made with select potatoes loaded with rich spices and cheese <span class="c_collapse">collapse</span></p>
							<div class="item_price">₹ 149</div>
						</div>
						<div class="item_img">
							<img src="images/masala-price.png">
							<div class="add_btns">
								<button class="addbtn">Add</button>
							</div>
						</div>
					</div>
					<div class="menu_item">
						<div class="item_details">
							<span class="item_tag">Bestseller</span>
							<h5>Masala Fries (Cheese loaded) 200gms - <span class="see_more">See more</span></h5>
							<p class="item_desc">Golden fries made with select potatoes loaded with rich spices and cheese <span class="c_collapse">collapse</span></p>
							<div class="item_price">₹ 149</div>
						</div>
						<div class="item_img">
							<img src="images/masala-price2.png">
							<div class="add_btns">
								<button class="addbtn">Add</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div id="footer">
		<div class="ft_icon">
			<img src="images/home.png">
		</div>
		<div class="ft_icon">
			<img src="images/search.png">
		</div>
		<div class="ft_icon">
			<img src="images/kichen.png">
		</div>
		<div class="ft_icon">
			<img src="images/user.png">
		</div>
	</div>

	<div class="card_popup">
		<!-- Enter the card item -->
	</div>
	<div class="card_overlay"></div>


	<!-- scripts -->
	<script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
	<script type="text/javascript" src="slick/slick.min.js"></script>
	<script>
		$(document).ready(function(){
			$('#banner').slick({
				arrows: false,
				dots: true
			});

			$('.see_more').click(function(){
				$('.item_desc').show();
				$(this).hide();
			});
			$('.c_collapse').click(function(){
				$('.item_desc').hide();
				$('.see_more').show();
			});

			$('.addbtn').click(function(){
				$('.card_popup').addClass('show_popup');
				$('.card_overlay').show();
			});
			$('.card_overlay').click(function(){
				$('.card_popup').removeClass('show_popup');
				$('.card_overlay').hide();
			})

		});
	</script>
      </>
  );
}

export default App;

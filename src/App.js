import './App.css';
function App() {
  return (
	  <>
    	    <div class="header" style={{ backgroundColor: "blue" }}>
	  
       		 <h1>Government School</h1>

            	 <h3>kurumapatti</h3>

 	   </div>

		 <div class="co">
			 
		 	<h3 style={{ color: "red" }}>About PUPS-KURUMAPATTI</h3>	

				<p>	PUPS-KURUMAPATTI was established in 1961 and it is managed by the Local body. It is located in Rural area. It is located in CHENGAM block of TIRUVANNAMALAI district of Tamil Nadu.</p>

				<p> 	The school consists of Grades from 1 to 5.The school is Co-educational and it doesn't have an attached pre-primary section. Tamil is the medium of instructions in this school.</p>

				<p> 	This school is approachable by all weather road. In this school academic session starts in April. The school has Government building. It has got 4 classrooms for instructional purposes.</p>

				<p>	 All the classrooms are in good condition. It has 2 other rooms for non-teaching activities. The school has a separate room for Head master/Teacher.</p>

				<p> 	The school has around boundary wall. The school has have electric connection. The source of Drinking Water in the school is Tap Water and it is functional.</p>

				<p> 	The school has 1 boys toilet and it is functional and 1 girls toilet and it is functional.</p>

				<p>	The school has a library and has 620 books in its library.</p>

				<p>	The school has 2 computers for teaching and learning purposes and all are functional. The school is having a computer aided learning lab.</p>

				<p>	The school is Provided and Prepared in School Premises providing mid-day meal.</p>

				<p>	UDISE Code : 33061604201</p>

				<p>	School Code: 2147483647</p>



<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext"></div>
  <img src="annual2023-1.png" style="width:100%"/>
  <div class="text">Caption Text</div>
</div>

<div class="mySlides fade">
  <div class="numbertext"></div>
  <img src="annual2023-2.png" style="width:100%"/>
  <div class="text">Caption Two</div>
</div>

<div class="mySlides fade">
  <div class="numbertext"></div>
  <img src="annual2023-3.png" style="width:100%"/>
  <div class="text">Caption Three</div>
</div>

</div>




				<div class="text">
					<img src="9.png" alt="logo" />
					<h3>The 4th year of annual function.</h3>
				</div>

				<div class="text">
					<img src="7.png" alt="logo" />
					<h3>The entrance of Parents United for Public schools in kurumapatti village.</h3>
				</div>

				<div class="text">
					<img class="side" src="1.png" alt="logo" />
					<h3>Students are assembly prayer at 9.00am</h3>
				</div>

				<div class="text">	
					<img class="side" src="2.png" alt="logo" />
					<h3>School pongal celebration for students and teachers.</h3>
				</div>

				<div class="text">
					<img class="side" src="5.png" alt="logo" />
					<h3>Kamarajar birthday is celebration as school students and teachers.</h3>
				</div>

				<div class="text">
					<img class="side" src="6.png" alt="logo" />
					<h3>The inspection officer inspecting in food and school.</h3>
				</div>

				<div class="text">
					<img class="side" src="8.png" alt="logo" />
					<h3>The new stage is established in 2018 as village people for students.</h3>
				</div>

			<h3 style={{ color: "red" }}>About Village</h3>
			<p>  Kurumapatti is a small Village/hamlet in Chengam Block in Tiruvannamalai District of Tamil Nadu State, India.
			It comes under Elangunni Panchayath. It is located 49 KM towards west from District head quarters Thiruvannamalai. 
			19 KM from Chengam. 230 KM from State capital Chennai.</p>

			<p>  Kurumapatti Pin code is 606703 and postal head office is Melpallipattu .</p>

			<p>  Puliyampatti ( 4 KM ) , Mothakkal ( 8 KM ) , Melravandavadi ( 8 KM ) , Kattamaduvu ( 10 KM ) , Andipatti ( 12 KM ) are the nearby Villages to Kurumapatti. Kurumapatti is surrounded by Uthangarai Block towards west , Harur Block towards west , Thandrampet Block towards East , Mathur Block towards west .</p>
			<p>  Tirupathur , Tiruvannamalai , Dharmapuri , Tirukkoyilur are the near by Cities to Kurumapatti.</p>		
		</div>
	</>
  );
}


<script>
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
</script>

export default App;

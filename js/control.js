// JavaScript Documentvar 
typed = new Typed('.element', {
               	strings: [" PHAN QUỐC DUY " , " Graphic Design Student ARENA Multimedia", " Sinh năm 2003 "],
       	 	typeSpeed:50,
        		backSpeed:50,
        		loop:false,
        		});
$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});
$('.counter').countUp();
  AOS.init();
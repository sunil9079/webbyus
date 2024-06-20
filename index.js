var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var contact=document.querySelector("#con");
  var contbox=document.querySelector("#img");
  var contbox2=document.querySelector("#back2");
  var elem=document.querySelector("#elem");
  // var back=document.querySelector("#back");
  
  contact.addEventListener("mouseenter",function(){
    contbox2.style.display="block";
    contbox2.style.zIndex="1";
    elem.innerHTML="8278629154";
    elem.style.padding="20px"
   

    // back.style.display="none";

  })
  contact.addEventListener("mouseleave",function(){
    
    contbox2.style.display="none";

  })

  var timing=document.querySelector("#timing");


timing.addEventListener("mouseenter",function(){
    contbox2.style.display="block";
    contbox2.style.zIndex="1";
    elem.innerHTML="6 am to 9pm";
    elem.style.paddingLeft="40px"
    elem.style.paddingTop="20px"
   

    // back.style.display="none";

  })
  timing.addEventListener("mouseleave",function(){
    
    contbox2.style.display="none";

  })
  
  var gmail=document.querySelector("#gmail");


  gmail.addEventListener("mouseenter",function(){
    contbox2.style.display="block";
    contbox2.style.zIndex="1";
    elem.innerHTML="sureshkumarsharma8278@gmail.com";
    elem.style.paddingRight="20px"
    elem.style.paddingTop="20px"
    elem.style.fontSize="1.5vw"
    contbox2.style.width="100%"
   

    // back.style.display="none";

  })
  gmail.addEventListener("mouseleave",function(){
    
    contbox2.style.display="none";

  })
   var icon=document.querySelector("#nav-part2 i");
var container=document.querySelector("#container");
var flag=0;

icon.addEventListener("click",function(){
  if(flag==0){
   container.style.top="0%";
   flag=1;
  }
  else{
    container.style.top="-100%";
    flag=0;
  }

})


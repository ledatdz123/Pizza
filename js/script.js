const $body = $("body");
const $header = $(".page-header");
const scrollClass = "scroll";
 
$(window).on("scroll", () => {
  if (this.matchMedia("(min-width: 992px)").matches) {
    const scrollY = $(this).scrollTop();
    scrollY > 0
      ? $body.addClass(scrollClass)
      : $body.removeClass(scrollClass);
  } else {
    $body.removeClass(scrollClass);
  }
});


$(".page-header .nav-link, .navbar-brand").on("click", function(e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(href).offset().top - 71
    }, 600);
  });


 $(document).ready(function(){
      $(".img1").mousemove(function(){
      $(".description1").show(500);
      });
       $(".img1").mouseleave(function(){
       $(".description1").hide();
     });
      $(".img2").mousemove(function(){
     $(".description2").show(500);
     });
     $(".img2").mouseleave(function(){
         $(".description2").hide();
     });
     $(".img3").mousemove(function(){
         $(".description3").show(500);
    });
     $(".img3").mouseleave(function(){
         $(".description3").hide();
     });
     $(".img4").mousemove(function(){
         $(".description4").show(500);
     });
     $(".img4").mouseleave(function(){
         $(".description4").hide();
     });
    
    // $(".img6").mousemove(function(){
    //     $(".description6").show();
    // });
    // $(".img6").mouseleave(function(){
    //     $(".description6").hide();
    // });

 

 });


  function myOrder(crust,size,number,toppings){
    this.pizzaCrust=crust;
    this.pizzaSize=size;
    this.Number=number;
    this.Toppings=toppings;
}
myOrder.prototype.fullOrder= function(){
    return "You have ordered "+this.Number+" "+this.pizzaSize+" "+this.pizzaCrust + " with " + this.Toppings;
}

$(document).ready(function(){
    $("#submit").click(function(event){
        event.preventDefault();
        var pizzaCrust =$("select#uno").val();
        var pizzaSize = $("select#due").val();
        var Numbers = $("input#tre").val();
        var Toppings = $("select#quatro").val();
        if((pizzaCrust==='Neapolitan Pizza')&&(pizzaSize==='Small')){
            newPrice=600;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='Neapolitan Pizza')&&(pizzaSize==='Medium')){
            newPrice=1200;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='Neapolitan Pizza')&&(pizzaSize==='Large')){
            newPrice=1800;
             var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='New York-Style Pizza')&&(pizzaSize==='Small')){
            newPrice=500;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='New York-Style Pizza')&&(pizzaSize==='Medium')){
            newPrice=1000;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='New York-Style Pizza')&&(pizzaSize==='Large')){
            newPrice=1500;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='St. Louis Pizza')&&(pizzaSize==='Small')){
            newPrice=450;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='St. Louis Pizza')&&(pizzaSize==='Medium')){
            newPrice=900;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='St. Louis Pizza')&&(pizzaSize==='Large')){
            newPrice=1350;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='Stuffed')&&(pizzaSize==='Small')){
            newPrice=700;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='Stuffed')&&(pizzaSize==='Medium')){
            newPrice=1400;
            var newTotal= newPrice*Numbers;
        }else if((pizzaCrust==='Stuffed')&&(pizzaSize==='Large')){
            newPrice=2100;
            
        }else{
            alert("Input not found!! please try again.")
        }

        var fullPizza = new myOrder (pizzaCrust,pizzaSize,Numbers,Toppings);

        $("div#cinco").append("<p>" + fullPizza.fullOrder() + "</p>");
        $("div#cinco").append("<p>"+"You will pay " + newTotal + "</p>");
        
    });
    $("#view").click(function(){
        if($('#delivery1:checked').val()){
            var place =prompt('please enter your location for pizza delivery')
            if(place!==null){
                alert(' Delivery fee is 150 ,your pizza will be delivered to' +'  ' +  place + '.' + ' Thank you.')
            }else{
                alert('please input a valid location ')
            }
            
        }  
    });
    
    
});


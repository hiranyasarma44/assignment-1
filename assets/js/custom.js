   $(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {            
            $(".navbar").addClass("bg-white");
            $(".navbar").addClass("shadow");
            $(".navbar").addClass("pt-2");
            $(".navbar").removeClass("pt-4");
        }  
        else{            
            $(".navbar").removeClass("bg-white");
            $(".navbar").removeClass("shadow");
            $(".navbar").addClass("pt-4");
            $(".navbar").removeClass("pt-2");
        }
    });
  });
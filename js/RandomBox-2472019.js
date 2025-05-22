$(document).ready(function() {
    // const Duration = setInterval(changePlace, 2000);

    function changePlace() {
        $(".box").fadeOut(1000);
        let panjang = Math.floor(Math.random() * 501);
        let lebar = Math.floor(Math.random() * 701);
        
        // $(".box").fadeTo("slow", 0.25);
        $(".box").css({"top": panjang+"px", "left": lebar+"px"});
        $(".box").fadeIn(1000);

        setTimeout(changePlace, 2000);

        console.log(panjang, " ", lebar);
    }

    changePlace();
});

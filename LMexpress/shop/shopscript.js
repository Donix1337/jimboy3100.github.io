//v0.3
$(document).ready(function() {
    $("#imgur img.lazy").lazyload({
        effect : "fadeIn",
        skip_invisible : true
    });
    
    $("#hizliresim img.lazy").lazyload({
        effect : "fadeIn",
        skip_invisible : true
    });
     $("#lowres img.lazy").lazyload({
        effect : "fadeIn",
        skip_invisible : true
    });	
     $("#vanillaskins img.lazy").lazyload({
        effect : "fadeIn",
        skip_invisible : true
    });
	
    $("img.lazy").on("click", function(e) {
        e.preventDefault();
		var url = $(this).attr("name");
		
        //var url = $(this).attr("src");
        $("#skin-url").val(url).select();
        try {
            //document.execCommand("copy");
        } catch (e) {}
    });
    
    $("#skin-url").on("click", function(e) {
        $(this).select();
        try {
            //document.execCommand("copy");
        } catch (e) {}
    });

	$("#nav a").on("click", function() {
        var _this = $(this);
        if (_this.hasClass("link")) {
            return;
        }
        $("#nav a").removeClass("active");
        _this.addClass("active");
        var id = _this.attr("href");
        $(".skins-wrapper").hide();
        $(id).show();
        $(window).scrollTop(0).trigger("scroll");
        return false;
    });
    $("#UseEffect").on("click", function(e) {
        try {	
        //    window.parent.postMessage("CustomSkins&?skin="+$("#skin-url").val(), "*"); 
		toastr.info("<b>[SERVER]:</b> Special Effect activated");
		for (var i = 0; i < $(".skins-wrapper").length; i++){
			if ($(".skins-wrapper")[i].style.display != "none"){
				for (var j = 0; j < document.getElementsByClassName("skins-wrapper")[i].children.length; j++)
					if (document.getElementsByClassName("skins-wrapper")[i].children[j].children[0].name ==$("#skin-url").val()){ 
						if (document.getElementsByClassName("skins-wrapper")[2].children[0]) document.getElementsByClassName("skins-wrapper")[2].children[0].remove()
						document.getElementsByClassName("skins-wrapper")[2].append(document.getElementsByClassName("skins-wrapper")[i].children[j])
					} 
			}			
		}	
		application.lastSentNick = $("#nick").val()
		SpecialEffectPlayers[application.lastSentNick]=$("#skin-url").val()
		window.application.sendSocket3Info("spfc", $("#skin-url").val())	
		
        } catch (e) {}
    });
	setTimeout(function() {
		$("#nav a")[0].click();
	}, 100);
});
$( document ).ready(function() {
    let timerText = 0;
    let currentText = 0;
    let timerImg = 0;
    let currentImg = 0;
    let prevImg = 0;
    let imgDir = 2;
    let quotep = $('.quotep');
    let quotet = $('.quotet');
    let dotj = $('.dotj');
    let imageJ = $('#imageJ');
    let clickImg = $('.clickImg');
    let animTime = 10;
    let sliderText = $("#slideText");
    let sliderMarg = 0;
    let animTimeImg = 10;
    let sliderImg = $("#slideImg");
    let sliderMargImg = 0;
    borderImage();
    
    setInterval(function(){ 
        if(document.hasFocus())
        {
            checkText(); checkImg();
        }
         
    }, 1000);
    let text = [{t:"Lorem ipsum 1", p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.1 1 1 1 1 1 1 11 1 1"} ,{t:"Lorem ipsum 2", p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.2 2 2 2 2 2 2 2 2 2"},{t:"Lorem ipsum 3", p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.3 3 3 3 3 3 3 3 3 3 3"}, {t:"Lorem ipsum 4", p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.4 4 4 4 4 4 4 4 4 4"}, {t:"Lorem ipsum 5", p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.5 5 5 5 5 5 5 5 5"}, {t:"Lorem ipsum 6", p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.6 6 6 6 6 6 6 6 6 6"}, {t:"Lorem ipsum 7", p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.7 7 7 7 7 77 7 7"}, {t:"Lorem ipsum 8", p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.8 8 8 8 8 8 8 8 8"}, {t:"Lorem ipsum 9", p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.9 9 9 9 9 9 9 9 9 9 9"}];
    let imgA = ["a1.jpg", "a2.jpg", "a3.jpg"]; 
    $( "body" ).on( "click", ".clickImg", function() {
        timerImg = 0;
        prevImg = currentImg;
        currentImg = $('.clickImg').index(this);
        setImgDir();
        setTimeout(function(){ imgAnim(); }, animTimeImg);
        
        
        borderImage();
        
    });
    function borderImage()
    {
        clickImg.each(function( index ) {
            if(index === currentImg)
            {
                $( this ).find("img").css("border", "solid black 3px");
                $( this ).css("cursor", "default");
            }
            else if(index !== currentImg)
            {
                $( this ).find("img").css("border", "solid gray 3px");
                $( this ).css("cursor", "pointer");
            }
        });
    }
    function checkImg()
    {
        timerImg +=1;
        if(timerImg >= 5)
        {

            timerImg = 0;
            prevImg = currentImg;
            currentImg++;
            if(currentImg >= (imgA.length))
            {
                currentImg = 0; 
            }
            setImgDir();
            setTimeout(function(){ imgAnim(); }, animTimeImg);
            //imageJ.attr("src",imgA[currentImg]);
            borderImage();

            
        }
    }
    function checkText()
    {
        timerText +=1;
        if(timerText >= 5)
        {
            timerText = 0;
            let prevText = currentText;
            currentText++;
            if(currentText >= (text.length/3))
            {
                currentText = 0; 
            }
            setTimeout(function(){ textAnim(); }, animTime);
            
            dotj.each(function( index ) {
                if(index === currentText)
                {
                    $( this ).css("color", "black");
                }
                else if(index !== currentText)
                {
                    $( this ).css("color", "#C4C4C4");
                }
                 
            });
            
            
        }
    }
    function setImgDir()
    {
        if(prevImg > currentImg)
        {
            imgDir = 2;
        }
        else
        {
            imgDir = 1;
        }
    }
    function imgAnim()
    {   
        let change = 50;
        if(imgDir == 1)
        {
            change = -50;
        } 
        sliderMargImg += change;
        sliderImg.css("margin-left", sliderMargImg+"px");
        if(imgDir === 2)
        {
            if(sliderMargImg > 1000)
            {
                sliderMargImg = -1000;
                imageJ.attr("src",imgA[currentImg]);
            }
        }
        else
        {
            if(sliderMargImg < -1000)
            {
                sliderMargImg = 1000;
                imageJ.attr("src",imgA[currentImg]);
            }
        }
        
        
        if(sliderMargImg !== 0)
        {
            setTimeout(function(){ imgAnim(); }, animTimeImg);
        }
    }
    function textAnim()
    {
        sliderMarg += 50;
        sliderText.css("margin-left", sliderMarg+"px");
        if(sliderMarg > 2000)
        {
            quotep.each(function( index ) {
                let textp = (currentText*3)+ index;
                 $( this ).html(text[textp].p) ;
            });
            quotet.each(function( index ) {
                let textt = (currentText*3)+ index;
                 $( this ).html(text[textt].t) ;
            });
            sliderMarg = -2000;
        }
        if(sliderMarg !== 0)
        {
            setTimeout(function(){ textAnim(); }, animTime);
        }
    }
});
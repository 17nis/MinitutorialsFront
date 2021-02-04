window.onload = function(){
    var cont = document.querySelector('.cont'),
    layerOne = document.querySelector('.layer1'),
    layerTwo = document.querySelector('.layer2'),
    layerThree = document.querySelector('.layer3'),
    layerFour = document.querySelector('.layer4');
    layerFive = document.querySelector('.layer5'),
    layerSix = document.querySelector('.layer6'),
    layerSeven = document.querySelector('.layer7'),
    
    cont.addEventListener('mousemove',function(e){
        var pageX = e.clientX - window.innerWidth/2,
        pageY = e.clientY - window.innerHeight/2;
        layerOne.style.transform = 'translateX(-' + ( pageX/600) + '%) translateY(-' + (pageY/500) + '%)';
        layerTwo.style.transform = 'translateX(-' + ( pageX/600) + '%) translateY(-' + (pageY/300) +  '%)';
        layerThree.style.transform = 'translateX(-' + ( pageX/600) + '%) translateY(-' + (pageY/200) +  '%)';
        layerFour.style.transform = 'translateX(-' + ( pageX/600) + '%) translateY(-' + (pageY/170) + '%)';
        layerFive.style.transform = 'translateX(-' + ( pageX/100) + '%) translateY(-' + (pageY/20) +  '%)';
        layerSix.style.transform = 'translateX(-' + ( pageX/200) + '%) translateY(-' + (pageY/80) +  '%)';
        layerSeven.style.transform = 'translateX(-' + ( pageX/600) + '%) translateY(-' + (pageY/1000) + '%)';
    });
}
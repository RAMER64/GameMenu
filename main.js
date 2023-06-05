var audio = new Audio("memory.ogg");
audio.play();
document.getElementById("RAID").addEventListener('click', function () {
        document.getElementById("text2").style.display = 'block';
        document.getElementById("text1").style.display = 'block';
        document.getElementById("SHOPMarket").style.display = 'none';
    });
    document.getElementById("SHOP").addEventListener('click', function () {
        document.getElementById("text1").style.display = 'none';
        document.getElementById("text2").style.display = 'none';
        document.getElementById("SHOPMarket").style.display = 'grid';
    });
    
    

document.addEventListener('DOMContentLoaded', function() {
    var percent = 0;
    var percentage = document.getElementById('percentage');
    var progress = document.getElementById('progress');
    var preloader = document.getElementById('preloader');
    
    function updateLoader() {
        percent += Math.random() * 7 + 2; // randomize for realism
        if (percent > 100) percent = 100;
        
        percentage.textContent = Math.floor(percent) + '%';
        progress.style.width = percent + '%';
        
        if (percent < 100) {
            setTimeout(updateLoader, 30 + Math.random() * 40);
        } else {
            setTimeout(function() {
                preloader.style.opacity = '0';
                setTimeout(function() {
                    preloader.style.display = 'none';
                }, 500);
            }, 400);
        }
    }
    
    updateLoader();
});
// Preloader percentage animation and wheel spin  
document.addEventListener('DOMContentLoaded', function() {  
    var percentage = 0;  
    var preloader = document.getElementById('preloader');  
    var percentText = document.getElementById('preloader-percentage');  
    var loadingWheel = document.querySelector('.loading-wheel');  
  
    // Animate the loading wheel (if not already animated by CSS)  
    if (loadingWheel) {  
        loadingWheel.style.animation = 'spin 1.2s linear infinite';  
    }  
  
    // Animate the percentage  
    var interval = setInterval(function() {  
        percentage += 1;  
        if (percentText) {  
            percentText.textContent = percentage + '%';  
        }  
        if (percentage >= 100) {  
            clearInterval(interval);  
            setTimeout(function() {  
                if (preloader) {  
                    preloader.style.opacity = '0';  
                    setTimeout(function() {  
                        preloader.style.display = 'none';  
                    }, 600);  
                }  
            }, 400);  
        }  
   ▍

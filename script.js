
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

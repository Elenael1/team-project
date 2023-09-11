window.addEventListener('load', function() {
     
     setTimeout(function() {
      
   
       document.querySelector('.preloader').style.display = 'none';

       document.querySelector('.content').style.display = 'block';

       document.body.style.overflow = 'auto';
     }, 3000); 
   });
   
   window.addEventListener('load', function() {
     const percentageElement = document.querySelector('.percentage');
 
     
     function updatePercentage(percentage) {
         percentageElement.textContent = percentage + '%';
     }
 
     
     const startTime = Date.now();
     const duration = 3000; 
 
    
     function animate() {
         const currentTime = Date.now();
         const elapsedTime = currentTime - startTime;
         const percentage = Math.min(100, Math.floor((elapsedTime / duration) * 100));
 
        
         updatePercentage(percentage);
 
         if (elapsedTime < duration) {
             requestAnimationFrame(animate);
         } else {
            
             document.querySelector('.preloader').style.display = 'none';
             document.querySelector('.content').style.display = 'block';
             document.body.style.overflow = 'auto';
         }
     }

     animate();
 });
   
   
   
   
   
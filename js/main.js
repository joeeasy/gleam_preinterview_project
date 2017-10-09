(function () { 
    var header = document.querySelector('.heading');
    header.style.height = window.innerHeight+ 'px';
    var heading = header.children[1];
    height = (window.innerHeight - 83) + 'px';
    heading.style.height = height;
    var  navbarBrand = document.querySelector('.navbar-brand');
    var brandName = ['g', 'l', 'e', 'a', 'm'];
    brandName.forEach(function(name) {
        navbarBrand.innerHTML += `<span>${name}</span>`
    });
    
    var end = document.querySelector('.end');
    // end.style.width= window.innerWidth +'px';
    var allFeatures = [
        {title: 'Run Campaign', content: 'Add your prize, choose your actions. Embed on your site, all in under 3 minutes.', link: '#', btnText: 'See Example', imgBackground: 'https://static.pexels.com/photos/33973/pexels-photo.jpg'},
        
        {title: 'Capture Emails', content: 'Rules based email capture forms that integrate directly with your email provider.', link: '#', imgBackground: 'https://static.pexels.com/photos/5199/hands-coffee-cup-apple.jpg'},
        
        {title: 'Visual Galleries', content: 'Build beautiful, responsive user driven content and photo galleries in minutes.', link: '#', imgBackground: 'https://static.pexels.com/photos/277054/pexels-photo-277054.jpeg'},
        
        {title: 'Redeem ', content: 'Drive more sales, ask users to complete predefined actions to unlock rewards.', link: '#', imgBackground: 'https://aos.iacpublishinglabs.com/question/aq/1400px-788px/purpose-reward-management_d5bc3242d935066f.jpg?domain=cx.aos.ask.com'},
        
    ];
    
    var features = document.querySelector('.features > .row');
    allFeatures.forEach(function(feature){
        features.innerHTML += `
        <div>
            <div class="col-md-3 p-0" style="height: ${window.innerHeight + 'px'}; background-image: linear-gradient(rgba(0,0,0,0.86),rgba(35, 131, 196, 0.2)), url('${feature.imgBackground}'); background-size: cover; background-size: cover; background-position: center; background-attachment: fixed;">
                <div class="features-content">
                    <h1 class="features-title">
                        ${feature.title}
                    </h1>
                    <p>
                        ${feature.content}
                    </p>
                    <a href="#">
                        <i class="material-icons">chevron_right</i> View History
                    </a>
                </div>
            </div>
        </div>
        `
    });  
})();
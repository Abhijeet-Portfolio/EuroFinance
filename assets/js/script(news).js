/* Author: 

*/

//button to top

var toTop = document.querySelector('.to-top');

window.addEventListener('scroll', function () {
    if (window.scrollY >= 10) {
        toTop.classList.replace('hide-to-top','show-to-top');
    }
    else {
        toTop.classList.replace('show-to-top','hide-to-top');
    }
});

//bamburger

var hamburger = document.querySelector('.hambuger');
var navUl = document.querySelector('nav ul');

function hamburgerToggle(hamburger, navUl) {
    hamburger.addEventListener('click', function () {
        navUl.classList.toggle('show');
    });
}

hamburgerToggle(hamburger, navUl);


//load more 

var loadMore = document.querySelector('.show-more');
var getData = 6;

function ajax(loadMore,getData) {
    var index = 0;
    loadMore.addEventListener('click', function (e) {
        e.preventDefault();
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://gabhijeetaxioned.github.io/json/data.json', true);
        
        xhr.onload = function () {
            try {
                var get = JSON.parse(this.responseText);
                if (this.status == 200) {
                    for (var k = 0; k < getData; k++) { 
                        if (index < get.length) {
                            newNews(get[index]);
                        }
                        else {
                            loadMore.classList.add('hide-show-more');
                            break;
                        }
                        index++;
                    }
                }
                else {
                    throw this.status,this.statusText;
                }   
            }
            catch {
                alert('Error: ' + this.status+ ' (' + this.statusText + ')');
            }   
        }

        xhr.send();
    });

    function newNews(news) {
        var ul = document.querySelector('.other-news ul');
        //creating new li
        var newLi = document.createElement('li');
        ul.appendChild(newLi);

        //creating new h3 for category
        var category = document.createElement('h3');
        category.innerHTML = news.category;
        newLi.appendChild(category);

        //creating new h4 for title
        var title = document.createElement('h4');
        var titleAnchor = document.createElement('a');
        titleAnchor.setAttribute('href','#FIXME');
        titleAnchor.setAttribute('title', news.title);
        titleAnchor.innerHTML = news.title;
        title.appendChild(titleAnchor);
        newLi.appendChild(title);

        //creating new span for date
        var date = document.createElement('span');
        date.innerHTML = news.date;
        newLi.appendChild(date);

        //creating new p for description
        var desc = document.createElement('p');
        desc.innerHTML = news.description;
        newLi.appendChild(desc);

    }
}

ajax(loadMore,getData);




// Image Slider

var slider = document.querySelector('.news-slider');
var sliderLi = document.querySelectorAll('.news-slider li');

var count = 0;
var size = sliderLi[0].clientWidth;

var next = document.querySelector('.slider-control .next');
var prev = document.querySelector('.slider-control .prev');

next.addEventListener('click', function() {    
    if (count >= (sliderLi.length - 3)) return;
    count += 3;
    slider.style.transform = 'translateX(' + (-size * count) + 'px)';
});

prev.addEventListener('click', function() {
    if(count <= 0) return;
    count -= 3;
    slider.style.transform = 'translateX(' + (-size * count) + 'px)';
});




















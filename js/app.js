/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const header = document.querySelector('.page__header');
const sectionsbodys = document.querySelectorAll('section');
const active_section = -1 ;



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const navbar = document.createElement('nav');
navbar.className ="navbar__menu";

const navlist = document.createElement('ul');
navlist.id ="navbar__list";
navbar.appendChild(navlist);



//create navbar sections
for (let i = 0; i <sectionsbodys.length ;i++){
    const mysection = document.createElement('li');
    mysection.innerText =sectionsbodys[i].attributes["data-nav"].nodeValue ;

    navlist.appendChild(mysection); 
}
header.appendChild(navbar);

const navbar_lis = document.querySelectorAll('li');
navbar_lis[0].style.color = "rgb(187, 193, 216)";




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
//ccompair sections with clicked one and go to the same named section

//navbae event 
navbar.addEventListener('click',function(e){
    if(e.target.localName  == "li"){
        const nav_item = e.path[0].innerText ;            
        for (let i = 0; i <sectionsbodys.length ;i++){
            const section = sectionsbodys[i].attributes["data-nav"].nodeValue ;
            if (nav_item === section){
               sectionsbodys[i].scrollIntoView();     
            }      
    
        }
    }
    

});
// scroll event 
window.addEventListener('scroll',function(e){
    
      for (let i = 0; i <sectionsbodys.length ;i++){
          if (sectionsbodys[i].getBoundingClientRect().top < window.innerHeight &&
              sectionsbodys[i].getBoundingClientRect().top >= 0 ){
              
                  sectionsbodys[i].classList.add("your-active-class");
                  navbar_lis[i].style.color = "rgb(187, 193, 216)";
             
               
                 for (let j = 0; j <sectionsbodys.length ;j++){
                    if(j != i){
                        sectionsbodys[j].classList.remove("your-active-class");
                        navbar_lis[j].style.color = "rgb(84, 115, 172)";
                      
                     
                    }
                 }
                  
              
          }  
         
  
          
  
          
      }
      
  });
  

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active




//========== MOBILE MENU ==========>	

function MobileMenu() {
    let btns = document.querySelectorAll('.siteBar-btn')
    let menuBlk = document.querySelector('.mobile-menu')
    if (btns.length > 0) {
        btns.forEach(btn => {
            btn.addEventListener("click",e => {
                e.preventDefault()
                menuBlk.classList.toggle('siteBar') 
            })
        })
    }
}
MobileMenu()


//========== Language MENU ==========>	
function LanguageMenu() {
	let LangItems = document.querySelectorAll('.change_lang ul li')
	let DisplayLang = document.querySelector('.change_lang .show_lang')

	if (LangItems.length > 0) { 
		LangItems.forEach(Item => {
			Item.addEventListener('click', (e) => {
				let target = e.target
				if (target.outerText === "AR") {
					document.querySelector('html').setAttribute('data-rtl','true')
				}else{
					document.querySelector('html').setAttribute('data-rtl','false')
				}
				DisplayLang.querySelector('span').src = target.outerText
				DisplayLang.querySelector('img').src = target.querySelector('img').src
			})
		});
	}
}
LanguageMenu()


//========== STICKY HEADER, BACK TO TOP ==========>	
const headerAreas = document.querySelectorAll('.header-area');
const scrollUp = document.querySelector('.scroll-up');

function addHeaderHeight(area) {
	document.documentElement.style.setProperty('--header-h', `${area.clientHeight}px`);
}
function handleScroll() {
	const isSticky = window.scrollY > headerAreas[0].clientHeight;
	
	headerAreas.forEach(area => area.classList.toggle('sticky', isSticky));
	scrollUp.classList.toggle('sticky', isSticky);
}
window.addEventListener('resize', () => headerAreas.forEach(addHeaderHeight));
window.addEventListener('load', () => headerAreas.forEach(addHeaderHeight));
window.addEventListener('scroll', handleScroll);
scrollUp.addEventListener('click', () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});
//========== STICKY HEADER, BACK TO TOP// ==========>

//========== MOBILE MENU JS ==========>
const resBar = document.querySelectorAll('.hamburger, .sidebar-overlay')
resBar.forEach(btn => {
	btn.addEventListener('click', ()=>{
		for (let i = 0; i < resBar.length; i++) {
			resBar[i].classList.toggle('active')
		}
		document.querySelector('.header-sidebar').classList.toggle('active')
	})
});
// if has child
const listItem = document.querySelectorAll('.sidebar-menu ul li')
listItem.forEach(item => {
	if (item.contains(item.querySelector('ul'))) {
		item.classList.add('has-child')
		item.querySelector('a').addEventListener('click', (e)=>{
			e.preventDefault();
		})
	}
});
// responsive menu clicking event
const responsiveMenuLink = document.querySelectorAll('.sidebar-menu ul li.has-child')
responsiveMenuLink.forEach(link => {
	link.addEventListener('click', ()=>{
		let submenu = document.querySelector('.sub-menu')
		link.classList.toggle('active');
		submenu.classList.toggle('active');

		if (submenu.style.maxHeight) {
			submenu.style.maxHeight = null
		}else{
			submenu.style.maxHeight = submenu.scrollHeight + 10 + 'px'
		}
	})
});
//========== MOBILE MENU JS end ==========>

// counting date function
// Set the date we're counting down to
var countDownDate = new Date("april 22, 2024 15:37:25").getTime();
const PreviewDate = document.querySelector('.date')
const PreviewHour = document.querySelector('.hour')
const PreviewMin = document.querySelector('.min')
const PreviewSec = document.querySelector('.sec')

// Update the count down every 1 second
var x = setInterval(function () {

	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in the element with id="demo"
	PreviewDate.innerHTML = days;
	PreviewHour.innerHTML = hours;
	PreviewMin.innerHTML = minutes;
	PreviewSec.innerHTML = seconds;

	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(x);
		PreviewDate.innerHTML = "00";
		PreviewHour.innerHTML = "00";
		PreviewMin.innerHTML = "00";
		PreviewSec.innerHTML = "00";
	}
}, 1000);

// IMG UPLOAD JS
const sponsorshipfile = document.querySelectorAll('.file-uplad input')
	sponsorshipfile.forEach(input => {
	input.addEventListener('change', ()=>{
	document.querySelector('.file-uplad label span').innerHTML = input.files[0].name
	})
});

// select sibling child
const selectableList = document.querySelectorAll(
	".pr-category-menu ul li"
);
selectableList.forEach((list) => {
	list.addEventListener("click", () => {
		let listParent = list.closest("ul");
		for (let i = 0; i < listParent.children.length; i++) {
		listParent.children[i].classList.remove("active");
		}
		list.classList.add("active");
	});
});

// custom tab
tabFunc(
	document.querySelectorAll(".pd-gl-link"),
	document.querySelectorAll(".pd-gl-content")
);
function tabFunc(tabLinks, tabs) {
	tabLinks.forEach((link, index) => {
		link.addEventListener("click", () => {
		for (let i = 0; i < tabLinks.length; i++) {
			tabLinks[i].classList.remove("active");
			tabs[i].classList.remove("active");
		}
		link.classList.add("active");
		tabs[index].classList.add("active");
		});
	});
}
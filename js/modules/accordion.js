function accordion (){
	const btns = document.querySelectorAll('.mobile-links__parent-btn');

	btns.forEach(function(btn){
		btn.addEventListener('click', function(){

			const content = btn.nextElementSibling;

			const isOpen = btn.classList.toggle('active');

			(isOpen) ? content.style.maxHeight = content.scrollHeight + 'px' : content.style.maxHeight = '0px';

		})
	})
}

export default accordion;

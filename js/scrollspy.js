/**
 * @Author: Antoine Tavant <tavant>
 * @Date:   2020-06-06T21:54:27+02:00
 * @Email:  antoine.tavant@polytechnique.edu
 * @Last modified by:   tavant
 * @Last modified time: 2020-06-06T22:45:40+02:00
 * @License: This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * @Copyright: Copyright (C) 2020 Antoine Tavant
 */
 
//  // From https://www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/
//  window.addEventListener('DOMContentLoaded', () => {
// 
// 	const observer = new IntersectionObserver(entries => {
// 		entries.forEach(entry => {
// 			const id = entry.target.getAttribute('id');
// 			if (entry.intersectionRatio > 0) {
// 				document.querySelector(`nav ul li a[href="#${id}"]`).parentElement.classList.add('active');
// 			} else {
// 				document.querySelector(`nav ul li a[href="#${id}"]`).parentElement.classList.remove('active');
// 			}
// 		});
// 	});
// 
// 	// Track all sections that have an `id` applied
// 	document.querySelectorAll('section[id]').forEach((section) => {
// 		observer.observe(section);
// 	});
// 
// });
// 
//  // Addaptied from https://ma.ttias.be/adding-a-sticky-table-of-contents-in-hugo-to-posts/#styling-the-table-of-contents
// 
//  function clearActiveStatesInTableOfContents() {
//      document.querySelectorAll('aside nav li').forEach((section) => {
//          section.classList.remove('active');
//      });
//  }
// 
// 


window.addEventListener('DOMContentLoaded', () => {
    


    const observerForTableOfContentActiveState = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');

            if (entry.intersectionRatio > 0) {
                
                clearActiveStatesInTableOfContents();

                
                document.querySelector(`aside nav ul li a[href="#${id}"]`).parentElement.classList.add('active');
            }
        });
    });

    
    document.querySelectorAll('h1[id],h2[id],h3[id],h4[id]').forEach((section) => {
        observerForTableOfContentActiveState.observe(section);
    });

});

function clearActiveStatesInTableOfContents() {
    document.querySelectorAll('aside nav ul li').forEach((section) => {
        section.classList.remove('active');
    });
}
            

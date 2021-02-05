const tabs = (headerSelector, tabSelector, contentSelector, activeClass)=>{
    const header =document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content =document.querySelectorAll(contentSelector);

          function hideTabContent(){
            content.forEach(item=>{
                item.style.display= 'none';
                item.classList.remove('fadeTab');
                document.querySelector('.logo_img').classList.add('fade');
            });
            tab.forEach(item =>{
                item.classList.remove(activeClass);
                item.classList.remove('fadeTab');
            });

          }
         
          function showTabContent(i = 0){
            content[i].style.display = 'block';
            content[i].classList.add('fadeTab')
            tab[i].classList.add(activeClass, 'fadeTab');
            
          }

          hideTabContent();
          showTabContent();

          header.addEventListener('click', (e)=>{
            const target = e.target;
            if(target && (target.classList.contains(tabSelector.replace(/\./, '')) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, '')))){
                tab.forEach((item, i)=>{
                    if(target==item || target.parentNode ==item){
                        hideTabContent();
                        showTabContent(i);
                    }
                }); 
            }
          });


  
};
export default tabs;
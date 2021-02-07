const fullState = (state)=>{
    function bindListenFullState(buttonNext){
    document.querySelector(buttonNext).addEventListener('click', ()=>{
        if(Object.keys(state).length<3){
            
            listenState('[data-modal]', '.popup_calc', '.popup_calc_button');

        }else if(Object.keys(state).length<5){
            listenState('[data-modal]', '.popup_calc_profile', '.popup_calc_profile_button');

        }
    });
    }

    function listenState(windows, modalSelector, buttonNext){
        document.querySelectorAll(windows).forEach(item => {

            item.style.display = 'none';
        });
        document.querySelector(modalSelector).style.display ='block';
        
        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        document.querySelector(buttonNext).parentNode.appendChild(statusMessage);
        statusMessage.textContent ='Введите все данные';

        setTimeout(() => {
            statusMessage.remove();
        }, 3000);
    }


    bindListenFullState('.popup_calc_button');
    bindListenFullState('.popup_calc_profile_button');
};
export default fullState;
document.addEventListener("DOMContentLoaded", () => {
    //Variable

    const accordian = document.getElementsByClassName('content-container');
    // console.log(accordian);
    // console.log(accordian.length);
  

   

    for (i = 0; i < accordian.length; i++){
       //rerun the code inside this loop x number of times as the items in our accordian object.
       //execute the code inside the for loop on each item with the class name content-container.

   

       accordian[i].addEventListener('click', function (){
        //accordian[i] - for the specific element at index [i], do the following.
        //add a click event listener which listens for if the specific element in the DOM has been clicked.
        // if a specific element has been clicked then execute the code in the function on that clicked element.
        this.classList.toggle('active')
        // on tht clicked element, add the class of active if it dosent exist and if it does remove it.
        // so now we can add a styling using that class in our css and it will be toggled on and off with each click.
       })
   
    }
});


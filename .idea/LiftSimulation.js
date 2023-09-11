var LiftCount = document.getElementById("Lift");
var FloorCount = parseInt(document.getElementById("TotalCount"));
var button = document.getElementById("Submit");
//let Lifts=[];
//let floors=[];


document.getElementById('Submit').addEventListener('click', function () {
//     var floor_counts = parseInt(document.getElementById("TotalCount"));
//    if(!floor_count || !Lift_count){
//        alert("Enter the number of lifts and floors")
//        return;
//    }

        let dynamicContent = '<center><h1>Lift Simulation</h1></center>';
        var floor_counts = document.getElementById('TotalCount').value;
        var Lift_counts = document.getElementById('Lift').value
          for(let i = floor_counts;i>=0;i--){
            dynamicContent += `<button class="floors-button">Floor ${i}</button>  <div class="lines"><hr width="900"></div>`;
          }

     const contentContainer = document.getElementById('content-container');
//     let liftss = '<p>LIFTS</p>';
//        for(let j = 1;j<=Lift_counts;j++){
//            const lift = document.createElement('div');
//            lift.classList.add('lift');
//            liftss = ` <hr size= "30" Lift ${j}>`;
//            contentContainer.innerHTML = liftss;
//        }
            const generateButton = document.getElementById('UserInputBox');

            generateButton.style.display = 'none';
            contentContainer.innerHTML = dynamicContent;
             contentContainer.classList.remove('hidden');


             var Lift_count = document.getElementById('Lift').value;
             for(let j = 1;j<=Lift_counts;j++){
                             const lift = document.createElement('div');
                             lift.classList.add('LIFT');
                             lift.innerHTML = `<p>${j}</p>`;
                             contentContainer.appendChild(lift);
                         }





const contentContainers = document.getElementById('content-container');

// Attach a click event listener to the content container
contentContainers.addEventListener('click', function (event) {
    // Check if the clicked element has the "floors-button" class
    if (event.target.classList.contains('floors-button')) {
        // Get the text content of the clicked button (e.g., "Floor 1")
        const clickedButtonValue = event.target.textContent;
        console.log(`Button for ${clickedButtonValue} was clicked.`);
        if(clickedButtonValue == 'Floor 3'){
                const liftElement = document.querySelector('.LIFT');
                const floorButtons = document.querySelectorAll('.floors-button');

                floorButtons.forEach((button, index) => {
                    button.addEventListener('click', () => {
                        // Get the top position of the clicked button
                        const buttonTop = button.getBoundingClientRect().top;
                        // Get the left position of the clicked button
                        const buttonLeft = button.getBoundingClientRect().left;

                        // Animate the lift element to the clicked position
                        liftElement.style.transition = 'left 0.5s, top 0.5s';
                        liftElement.style.left = `${buttonLeft}px`;
                        liftElement.style.top = `${buttonTop}px`;
                    });
                });

        }
    }
});



             // Iterate through each lift and update its position



});
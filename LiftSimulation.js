//var LiftCount = document.getElementById("Lift");
//var FloorCount = parseInt(document.getElementById("TotalCount"));
//var button = document.getElementById("Submit");
////let Lifts=[];
//let floors=[];


//document.getElementById('Submit').addEventListener('click', function () {
////     var floor_counts = parseInt(document.getElementById("TotalCount"));
////    if(!floor_count || !Lift_count){
////        alert("Enter the number of lifts and floors")
////        return;
////    }
//
//        let dynamicContent = '<center><h1>Lift Simulation</h1></center>';
//        var floor_counts = document.getElementById('TotalCount').value;
//        var Lift_counts = document.getElementById('Lift').value
//
//          for(let i = floor_counts;i>=0;i--){
//            dynamicContent += `<button class="floors-button">Floor ${i}</button>  <div class="lines"><hr width="900"></div>`;
//          }
//
//     const contentContainer = document.getElementById('content-container');
////     let liftss = '<p>LIFTS</p>';
////        for(let j = 1;j<=Lift_counts;j++){
////            const lift = document.createElement('div');
////            lift.classList.add('lift');
////            liftss = ` <hr size= "30" Lift ${j}>`;
////            contentContainer.innerHTML = liftss;
////        }
//            const generateButton = document.getElementById('UserInputBox');
//
//            generateButton.style.display = 'none';
//            contentContainer.innerHTML = dynamicContent;
//             contentContainer.classList.remove('hidden');
//
//
//             var Lift_count = document.getElementById('Lift').value;
//             const lift_container = document.createElement('div');
//             lift_container.classList.add('LIFT-container');
//             contentContainer.appendChild(lift_container);
//             for(let j = 1;j<=Lift_counts;j++){
//                             const lift = document.createElement('div');
//                             lift.classList.add('LIFT');
//                             lift.innerHTML = `<p>${j}</p>`;
//                             lift_container .appendChild(lift);
//                         }
//
//
//
//
//
//const contentContainers = document.getElementById('content-container');
//
//// Attach a click event listener to the content container
//contentContainers.addEventListener('click', function (event) {
//    // Check if the clicked element has the "floors-button" class
//    if (event.target.classList.contains('floors-button')) {
//        // Get the text content of the clicked button (e.g., "Floor 1")
//        const clickedButtonValue = event.target.textContent;
//        console.log(`Button for ${clickedButtonValue} was clicked.`);
//
//                const liftElement = document.querySelector('.LIFT');
//                const floorButtons = document.querySelectorAll('.floors-button');
////
//                floorButtons.forEach((button, index) => {
//                    button.addEventListener('click', () => {
////                              // Get the initial position of the lift element relative to the parent container
//                                  const initialTop = liftElement.offsetTop;
//                                  const initialLeft = liftElement.offsetLeft;
//
//                                  // Get the top position of the clicked button relative to the parent container
//                                  const buttonTop = button.offsetTop;
//                                  const buttonLeft = button.offsetLeft;
//
//                                  // Calculate the difference between initial and target positions
//                                  const deltaY = buttonTop - initialTop;
//                                  const deltaX = buttonLeft - initialLeft;
//
//                                  // Animate the lift element to the clicked position
//                                  liftElement.style.transition = 'transform 0.5s ease';
//                                  liftElement.style.transform = `translate(${deltaX + 30}px, ${deltaY + 30}px)`;
//                    });
//                });
//
//
//    }
//});
//
//
//
//             // Iterate through each lift and update its position
//
//
//
//});

const addLifts = (totalLifts) => {
    const ground = document.getElementById('groundFloor')

    // const liftWrapper = document.createElement('div');
    // ground.appendChild(liftWrapper);
    // liftWrapper.setAttribute('id', 'liftWrapper')

    for (let i = 0; i < totalLifts; i++) {
        const lifts = document.createElement('div');
        const liftDoor1 = document.createElement('span');
        const liftDoor2 = document.createElement('span');

        ground.appendChild(lifts)
        lifts.append(liftDoor1, liftDoor2)

        lifts.setAttribute('class', 'lifts')
        liftDoor1.setAttribute('class', 'liftDoor')
        liftDoor2.setAttribute('class', 'liftDoor')
    }
}
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
            dynamicContent += `<button id = "floors">Floor ${i}</button>  <div class="lines"><hr width="900"></div>`
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


});
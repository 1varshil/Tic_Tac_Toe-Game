console.log("hello this is working");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turn0 = true;

const winpatterns = [
    [0,1,2],[0,3,6],[3,4,5],[1,4,7],[2,5,8],[1,4,8],[2,4,6],[0,4,8]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // alert("So the button is clicked:");
        if(turn0 === true)
        {
            //player0
        box.innerText = "O";
        turn0 =false;
        }
        else{
            //player X
            box.innerText= "X";
            turn0 = true;
        }

        box.disabled = true;

        checkwinner()
    })
})

const checkwinner = () =>{
    for(let pattern of winpatterns)
    {
            let po1 = boxes[pattern[0]].innerText
            let po2 = boxes[pattern[1]].innerText
            let po3 = boxes[pattern[2]].innerText

            if(po1 != "" && po2 != "" && po3 != "")
            {
                if(po1 === po2 && po2 == po3)
                {
                    alert(`Winner is ${po1}`);
                }
            }
            
    }
}



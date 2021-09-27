
    
        // controller 
        function choose(bar){
            
        if(bar == chosenBar){
            disable = 'disabled';
            chosenBar = '<i>none</i>'
        }  
        else{
            chosenBar = bar;
            disable = ''
        }
            show();
        }

        function changeBar(){
            if (inputValue < 1 || inputValue > 10){
            alert("Please choose a number between 1 and 10!")
        }
            else{
                numbers[chosenBar-1] = inputValue;
                chosenBar = '<i>none</i>';
                inputValue = '';
                disable = 'disabled';
            }
            

            show();
        }

        function removeBar() {
            numbers.splice(chosenBar - 1, 1)
            
            show();
        }

        function addBar(){ 
            if (inputValue < 1 || inputValue > 10){
            alert("Please choose a number between 1 and 10!")
        }
            else{
                numbers.push(inputValue);
                chosenBar = '<i>none</i>';
                inputValue = '';
            }

            show();
        }
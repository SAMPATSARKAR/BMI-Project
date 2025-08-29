const form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result= document.querySelector('#results');
    if(height <0 || isNaN(height)){
        result.innerHTML=`Plz enter a valid number ${height}`;
    }
    else if(weight <0 || isNaN(weight)){
        result.innerHTML=`Plz enter a valid number ${weight}`;
    }
    else {
        const BMI = (weight/(height/100*height/100)).toFixed(2);
        if(BMI < 18.6){
            result.innerHTML=`<span>Under Weight ${BMI}</span>`;
        }else if(BMI >=18.6 && BMI <=24.9){
            result.innerHTML=`<span>Normal range</span>`;
            
        }else{
            result.innerHTML=`<span>Overweight</span>`;            
        }
    }

})
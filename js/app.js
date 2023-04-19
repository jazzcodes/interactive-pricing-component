const price = document.querySelector(".price");
const views = document.querySelector(".views");
const range = document.querySelector(".range-slider");
const checkbox = document.querySelector(".checkbox");
const switchToggle=document.querySelector(".switch");
console.log(price);
console.log(range.value);
// price.innerText="$8";
// views.innerText="10k"

function updateValue()
{
    console.log(range.value>=8 && range.value<12);
    if(checkbox.checked==false)
    {

 
    if(range.value==8)
    {
        price.innerText="$8.00";
        views.innerText="10k"
        console.log(range.value);
    }

    if(range.value>=12 && range.value<16)
    {
        price.innerText="$12.00";
        views.innerText="50k";
        console.log(range.value);
    }

    if(range.value>=16 && range.value<24)
    {
        price.innerText="$16.00";
        views.innerText="100k"
    }
    
    if(range.value>=24 && range.value<36)
    {
        price.innerText="$24.00";
        views.innerText="500k"
    }
    if(range.value==36)
    {
        price.innerText="$36.00";
        views.innerText="1M"
    }
}
else{
    addDiscount();
}
}





function addDiscount()
{
    if(checkbox.checked == true)
    {
       if(range.value==8)
       {
        discountedValue=(8)-(0.25*8);
        price.innerText=`$${discountedValue}.00`;
       }
       if(range.value>=12 && range.value<16)
       {
        discountedValue=(12)-(0.25*12);
        price.innerText=`$${discountedValue}.00`;
       }

       if(range.value>=16 && range.value<24)
       {
        discountedValue=(16)-(0.25*16);
        price.innerText=`$${discountedValue}.00`;
       }
       if(range.value>=24 && range.value<36)
       {
        discountedValue=(24)-(0.25*24);
        price.innerText=`$${discountedValue}.00`;
       }
       if(range.value==36)
       {
        discountedValue=(36)-(0.25*36);
        price.innerText=`$${discountedValue}.00`;
       }
    }
    else{
        if(range.value>=8 && range.value<12)
        {
            price.innerText="$8.00";
          
            
        }
    
        if(range.value>=12 && range.value<16)
        {
            price.innerText="$12.00";
        
        }
    
        if(range.value>=16 && range.value<24)
        {
            price.innerText="$16.00";
        
        }
        
        if(range.value>=24 && range.value<36)
        {
            price.innerText="$24.00";
       
        }
        if(range.value==36)
        {
            price.innerText="$36.00";
        
        }
    }
}

switchToggle.addEventListener("click",addDiscount);
range.addEventListener("change", updateValue);
range.addEventListener("mousemove", updateValue);


import { useRef,useState } from "react";
import Input from "../ui/Input"
import "./mealItemForm.css"
function MealItemForm(props)
{
    const amountInputRef = useRef();
    const [amtIsValid,setAmtIsValid] = useState(true);
    function submitHandler(event)
    {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const num = +enteredAmount
        if(enteredAmount.trim().length===0 || num<1 || num>5)
        {
            setAmtIsValid(false);
            return

        }
        props.onAddToCart(num);
    }

    /*function xyz(event)
    {
        event.prevetDefault();
        return;
    }*/
    return(
        <form onSubmit={submitHandler}>
            <Input ref={amountInputRef} label="Amount" input={{
                id:'amount' + props.id,
                type:"number",
                min:"1",
                step:"1",
                defaultValue:"1"
            }} />
            <button > + Add</button>
            {!amtIsValid && <p>Invalid Amount Entered</p>}
        </form>
    )
}

export default MealItemForm
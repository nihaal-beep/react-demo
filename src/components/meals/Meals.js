import { Fragment } from "react";
import MealSummary from "./MealSummary";
import MealItem from "./MealItem";
import "./meals.css";

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const meals_list = DUMMY_MEALS.map((item)=><MealItem item={item} key={item.id}/>)  
function Meals()
{
    return(
        <Fragment>
        
        <MealSummary />
        <section className="meals">
            <div className="card">
              <ul>
                {meals_list}
                </ul>
            </div>
        </section>
        </Fragment>
    )
}

export default Meals;
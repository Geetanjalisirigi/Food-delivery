import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { storeContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'


const FoodDisplay = ({category}) => {
    const {food_list}=useContext(storeContext)
  return (
    <div>
        <div className="food-display" id="food-display">
            <h2>Top Dishes near You</h2>
            <div className="food-display-list">
                {
                    food_list.map((item,index)=>{
                        if(category==="All"|| category===item.category){
                            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                        }
                        
                    })
                }
            </div>
        </div>
      
    </div>
  )
}

export default FoodDisplay
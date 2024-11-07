import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className="explore-menu" id="explore-menu">
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Choose a diverse menu featuring a detectable array of dishes crafted with the finest taste to satisfy your cravings and elevate your dining experience,one delicios meal at a time</p>
        <div className="explore-menu-list">
            {
                menu_list.map((item,index)=>{
                    return (
                        <div className="explore-menu-list-item" key={index}>
                            <img src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )

                })
            }

        </div>
    </div>
  )
}

export default ExploreMenu
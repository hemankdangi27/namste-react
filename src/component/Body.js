import RestaurantCard from "./RestaurantComponent";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
    const [listsOFRestaurant, setlistOfRestaurant] = useState(resList);
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                 onClick={() => {
                    const filterList = listsOFRestaurant.filter(
                    (resso) => resso.data.avgRating > 4
                    );
                    setlistOfRestaurant(filterList);
                }}
                >   
                 top rated list
                 </button>
            </div>
            <div className="res-container">
                {listsOFRestaurant.map((restaurant) => (
               <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
                 
            </div>
        </div>
    );
};

export default Body;

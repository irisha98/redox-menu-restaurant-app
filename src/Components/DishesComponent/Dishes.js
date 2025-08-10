import Dish from "./Dish";
import dataDishes from "../../data/dataDishes";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/dishesSlice";


const Dishes = () => {
    const selectedCategory = useSelector(getSelectedCategory)
    return <div className="menu-grid">
        {dataDishes
        .filter(dish => {
            if (selectedCategory === 'ВСЕ') return true;
            return selectedCategory === dish.category
        })
        .map(dish => <Dish key={dish.id} dish={dish} />)}
    </div>
}
export default Dishes;
import Filter from "./Filter";
const AllCategories = () => {
    return (<div>
        <h1>МЕНЮ</h1>
        <div className="categories">
        {['ВСЕ','ЗАКУСКИ', 'САЛАТЫ', 'ГОРЯЧИЕ ЗАКУСКИ', 'СУПЫ', 'ГОРЯЧИЕ БЛЮДА', 'БУУЗЫ/ХУШУУРЫ И НАБОРЫ', 'ДЕСЕРТЫ' ]
        .map(category => <Filter key={category} category={category} />
        )}
        </div>
    </div>)
}
export default AllCategories;
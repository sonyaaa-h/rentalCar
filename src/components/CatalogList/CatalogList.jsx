import { useSelector } from "react-redux";
import { selectCars } from "../../redux/global/selectors";
import CatalogItem from "../CatalogItem/CatalogItem";
import s from "./CatalogList.module.css"

const CatalogList = () => {
    const cars = useSelector(selectCars);

    return (
        <div className={s.listWrapper}>
            <ul className={s.list}>
                {cars.map((car) => (
                    <CatalogItem key={car._id} {...car} />
                ))}
            </ul>
            <button className={s.btn}>Load more</button>
        </div>
    );
};
export default CatalogList;

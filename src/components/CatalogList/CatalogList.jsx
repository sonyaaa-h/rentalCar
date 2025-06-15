import { useDispatch, useSelector } from "react-redux";
import {
    selectCars,
    selectFilters,
    selectIsLoading,
    selectPagination,
} from "../../redux/global/selectors";
import CatalogItem from "../CatalogItem/CatalogItem";
import s from "./CatalogList.module.css";
import { setPage } from "../../redux/global/slice";
import { fetchCars } from "../../redux/global/operations";
import Loader from "../Loader/Loader";

const CatalogList = () => {
    const dispatch = useDispatch();
    const cars = useSelector(selectCars);
    const { page, totalPages } = useSelector(selectPagination);
    const loading = useSelector(selectIsLoading);
    const filters = useSelector(selectFilters);

    const handleClick = () => {
        const nextPage = page + 1;
        dispatch(setPage(nextPage));
        dispatch(fetchCars({ filters, page: nextPage }));
    };

    return (
        <div className={s.listWrapper}>
            {loading && cars.length === 0 ? (
                <Loader />
            ) : cars.length === 0 ? ( 
                <p className={s.noCars}>No cars available</p>
            ) : (
                <ul className={s.list}>
                    {cars.map((car) => (
                        <CatalogItem key={car.id} {...car} />
                    ))}
                </ul>
            )}
            {totalPages > page && !loading && (
                <button className={s.btn} onClick={handleClick}>
                    Load more
                </button>
            )}
        </div>
    );
};
export default CatalogList;
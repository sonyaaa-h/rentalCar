import { useDispatch, useSelector } from "react-redux";
import {
    selectCars,
    selectfilters,
    selectPagination,
} from "../../redux/global/selectors";
import CatalogItem from "../CatalogItem/CatalogItem";
import s from "./CatalogList.module.css";
// import { fetchCars } from "../../redux/global/operations";
import { setPage } from "../../redux/global/slice";
// import { useEffect } from "react";
// import { fetchCars } from "../../redux/global/operations";

const CatalogList = () => {
    const dispatch = useDispatch();
    const cars = useSelector(selectCars);
    const { page, totalPages } = useSelector(selectPagination);
    const filters = useSelector(selectfilters);
    console.log(filters);
    

    // useEffect(() => {
    //     dispatch(fetchCars({...filters, page}));
    // }, [dispatch, page, filters]);

    const handleClick = () => {
        dispatch(setPage(page + 1));
    };

    return (
        <div className={s.listWrapper}>
            <ul className={s.list}>
                {cars.map((car) => (
                    <CatalogItem key={car._id} {...car} />
                ))}
            </ul>
            {totalPages > page && (
                <button className={s.btn} onClick={handleClick}>
                    Load more
                </button>
            )}
        </div>
    );
};
export default CatalogList;

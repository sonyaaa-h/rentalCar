import { useEffect } from "react"; 
import { useDispatch } from "react-redux";
import { fetchCars } from "../../redux/global/operations";
import { setPage, setFilters } from "../../redux/global/slice";

import CatalogList from "../../components/CatalogList/CatalogList";
import Filters from "../../components/Filters/Filters";
import s from "./CatalogTab.module.css";

const CatalogTab = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const initialFilters = {
            brand: "",
            rentalPrice: "",
            minMileage: "",
            maxMileage: "",
        };
        dispatch(setFilters(initialFilters)); 
        dispatch(setPage(1)); 
        dispatch(fetchCars({ filters: initialFilters, page: 1 }));
    }, [dispatch]);

    return (
        <div className={s.wrapper}>
            <Filters/>
            <CatalogList />
        </div>
    );
};
export default CatalogTab;
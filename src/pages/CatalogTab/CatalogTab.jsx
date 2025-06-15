import { useEffect } from "react";
import CatalogList from "../../components/CatalogList/CatalogList";
import Filters from "../../components/Filters/Filters";
import s from "./CatalogTab.module.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/global/operations";
import { selectfilters, selectPagination } from "../../redux/global/selectors";

const CatalogTab = () => {
    const dispatch = useDispatch();
    const filters = useSelector(selectfilters); 
    const { page } = useSelector(selectPagination); 

useEffect(() => {
        dispatch(fetchCars({ filters, page: 1 }));
    }, [dispatch, filters, page]);

    return (
        <div className={s.wrapper}>
            <Filters/>
            <CatalogList />
        </div>
    );
};
export default CatalogTab;

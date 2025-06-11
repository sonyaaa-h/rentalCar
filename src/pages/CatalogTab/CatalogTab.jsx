import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCars } from "../../redux/global/operations";
import CatalogList from "../../components/CatalogList/CatalogList";

const CatalogTab = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch]);

    return (
        <div>
            <CatalogList />
        </div>
    );
};
export default CatalogTab;

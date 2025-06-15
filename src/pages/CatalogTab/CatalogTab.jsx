// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCars } from "../../redux/global/operations";
import CatalogList from "../../components/CatalogList/CatalogList";
// import { selectfilters, selectPagination } from "../../redux/global/selectors";
import Filters from "../../components/Filters/Filters";

const CatalogTab = () => {


    return (
        <div>
            <Filters/>
            <CatalogList />
        </div>
    );
};
export default CatalogTab;

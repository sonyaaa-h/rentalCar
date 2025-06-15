import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api, fetchCars } from "../../redux/global/operations";
import Select from "react-select";
import {
    setBrand,
    setMaxMileage,
    setMinMileage,
    setPage,
    setPrice,
} from "../../redux/global/slice";
import { selectfilters, selectPagination } from "../../redux/global/selectors";
import s from "./Filters.module.css";

const Filters = () => {
    const dispatch = useDispatch();
    const [brands, setBrands] = useState([]);
    const filters = useSelector(selectfilters);
    const { page } = useSelector(selectPagination);

    const prices = ["30", "40", "50", "60", "70", "80"];

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await api.get("/brands");
                console.log(response.data); // тут приходить масив брендів
                setBrands(response.data);
            } catch (error) {
                console.error("Error fetch brands:", error.message);
            }
        };

        fetchBrands();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setPage(1));
        dispatch(fetchCars({ filters, page }));
    };

    return (
        <div className={s.formWrapper}>
            <form onSubmit={handleSubmit} className={s.form}>
                <label className={s.label}>
                    Car brand
                    <Select
                        options={brands.map((brand) => ({
                            value: brand,
                            label: brand,
                        }))}
                        // className="customSelect"
                        // classNamePrefix="custom-select"
                        placeholder="Choose a brand"
                        value={brands.find((b) => b.value === filters.brand)}
                        onChange={(selected) => dispatch(setBrand(selected.value))}
                        className={s.select}
                    />
                </label>
                <label className={s.label}>
                    Price/ 1 hour
                    <Select
                        options={prices.map((price) => ({
                            value: price,
                            label: price,
                        }))}
                        // className="customSelect"
                        // classNamePrefix="custom-select"
                        placeholder="Choose a price"
                        value={prices.find((p) => p.value === filters.rentalPrice)}
                        onChange={(selected) => dispatch(setPrice(selected.value))}
                        className={s.select}
                    />
                </label>
                <fieldset className={s.mileage}>
                    <legend className={s.label}>Car mileage / km</legend>
                    <div className={s.fromWrapper}>
                        <p className={s.inputText}>From</p>
                        <input
                            // placeholder="From"
                            type="number"
                            value={filters.minMileage}
                            onChange={(event) => dispatch(setMinMileage(event.target.value))}
                            className={s.mileageInput}
                        />
                    </div>
                    <div className={s.toWrapper}>
                        <p className={s.inputText}>To</p>
                        <input
                            // placeholder="To"
                            type="number"
                            value={filters.maxMileage}
                            onChange={(event) => dispatch(setMaxMileage(event.target.value))}
                            className={s.mileageInput}
                        />
                    </div>
                </fieldset>
                <button type="submit" className={s.search}>Search</button>
            </form>
        </div>
    );
};
export default Filters;

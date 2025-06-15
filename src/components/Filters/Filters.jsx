import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api, fetchCars } from "../../redux/global/operations";
import Select from "react-select";
import { setFilters } from "../../redux/global/slice";
import { selectfilters, selectPagination } from "../../redux/global/selectors";
import s from "./Filters.module.css";
import { customSelect } from "../../assets/styles/customSelect";

const Filters = () => {
    const dispatch = useDispatch();
    const [brands, setBrands] = useState([]);
    const filters = useSelector(selectfilters);
    const { page } = useSelector(selectPagination);
    const [selectFilters, setselectFilters] = useState({
        brand: "",
        rentalPrice: "",
        minMileage: "",
        maxMileage: "",
    });

    const prices = ["30", "40", "50", "60", "70", "80"];

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await api.get("/brands");
                console.log(response.data);
                setBrands(response.data);
            } catch (error) {
                console.error("Error fetch brands:", error.message);
            }
        };

        fetchBrands();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setFilters(selectFilters));
        dispatch(fetchCars({ filters: selectFilters, page }));
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
                        classNamePrefix="custom-select"
                        placeholder="Car brand"
                        value={
                            filters.brand
                                ? { value: filters.brand, label: filters.brand }
                                : null
                        }
                        onChange={(selected) =>
                            setselectFilters((prev) => ({ ...prev, brand: selected?.value }))
                        }
                        className={s.select}
                        styles={customSelect}
                    />
                </label>
                <label className={s.label}>
                    Price/ 1 hour
                    <Select
                        options={prices.map((price) => ({
                            value: price,
                            label: price,
                        }))}
                        placeholder="Price/ 1 hour"
                        value={filters.rentalPrice ? { value: filters.rentalPrice, label: filters.rentalPrice } : null}
                        onChange={(selected) =>
                            setselectFilters((prev) => ({
                                ...prev,
                                rentalPrice: selected?.value,
                            }))
                        }
                        className={s.select}
                        styles={customSelect}
                    />
                </label>
                <fieldset className={s.mileage}>
                    <legend className={s.label}>Car mileage / km</legend>
                    <div className={s.fromWrapper}>
                        <p className={s.inputText}>From</p>
                        <input
                            type="number"
                            value={selectFilters.minMileage}
                            onChange={(e) =>
                                setselectFilters((prev) => ({
                                    ...prev,
                                    minMileage: e.target.value,
                                }))
                            }
                            className={s.mileageInput}
                        />
                    </div>
                    <div className={s.toWrapper}>
                        <p className={s.inputText}>To</p>
                        <input
                            type="number"
                            value={selectFilters.maxMileage}
                            onChange={(e) =>
                                setselectFilters((prev) => ({
                                    ...prev,
                                    maxMileage: e.target.value,
                                }))
                            }
                            className={s.mileageInput}
                        />
                    </div>
                </fieldset>
                <button type="submit" className={s.search}>
                    Search
                </button>
            </form>
        </div>
    );
};
export default Filters;

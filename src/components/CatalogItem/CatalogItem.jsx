import { Link } from "react-router-dom";
import s from "./CatalogItem.module.css";

const CatalogItem = ({
    brand,
    model,
    img,
    year,
    address,
    type,
    mileage,
    rentalCompany,
    rentalPrice,
}) => {
    const carAddress = address.split(",");
    const carType = type.charAt(0) + type.slice(1).toLowerCase();
    const carMileage = mileage.toLocaleString("uk-UA");

    return (
        <div className={s.itemWrapper}>
            <img src={img} alt={`${brand} ${model}`} className={s.image}></img>
            <div className={s.titleWrapper}>
                <p>
                    {brand} <span className={s.carModel}>{model}</span>, {year}
                </p>
                <p>${rentalPrice}</p>
            </div>
            <div className={s.infoWrapper}>
                <p className={s.info}>{carAddress[1]}</p>
                <p className={s.info}>{carAddress[2]}</p>
                <p className={s.info}>{rentalCompany}</p>
                <div className={s.typeInfo}>
                    <p className={s.info}>{carType}</p>
                    <p className={s.info}>{carMileage} km</p>
                </div>
            </div>
            <Link className={s.readMore}>Read more</Link>
        </div>
    );
};
export default CatalogItem;

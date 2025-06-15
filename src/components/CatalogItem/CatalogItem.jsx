import { Link } from "react-router-dom";
import s from "./CatalogItem.module.css";
import {
    formatAddress,
    formatMileage,
    formatType,
} from "../../utils/FormatingData";
import { useDispatch, useSelector } from "react-redux";
import { selectFavourite } from "../../redux/global/selectors";
import { toggleFavourite } from "../../redux/global/slice";
import heart from "../../assets/icons/like.svg"
import heartActive from "../../assets/icons/like-active.svg"

const CatalogItem = ({
    id,
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
    const dispatch = useDispatch()
    const carAddress = formatAddress(address);
    const carType = formatType(type);
    const carMileage = formatMileage(mileage);
    const isFavourite = useSelector(selectFavourite);
    const checkFavourite = isFavourite.includes(id);

    const handleFavourite = (id) => {
        dispatch(toggleFavourite(id));
    }

    return (
        <li className={s.itemWrapper}>
            <button onClick={() => handleFavourite(id)} className={s.heartBtn}>
                {!checkFavourite ? (
                    <img src={heart} alt="select" className={s.heartSvg} />
                ) : (
                    <img src={heartActive} alt="select" className={s.heartSvg} />
                )}
            </button>
            <img src={img} alt={`${brand} ${model}`} className={s.image}></img>
            <div className={s.titleWrapper}>
                <h2 className={s.nameCar}>
                    {brand} <span className={s.carModel}>{model}</span>, {year}
                </h2>
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
            <Link to={`/catalog/${id}`} className={s.readMore}>
                Read more
            </Link>
        </li>
    );
};
export default CatalogItem;

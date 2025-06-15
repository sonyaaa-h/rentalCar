import {
    formatAddress,
    formatMileage,
    formatType,
} from "../../utils/FormatingData";
import s from "./InfoCar.module.css";
import checkCircleSvg from "../../assets/icons/check-circle.svg";
import calendarSvg from "../../assets/icons/calendar.svg";
import carSvg from "../../assets/icons/car.svg";
import fuelPumpSvg from "../../assets/icons/fuel-pump.svg";
import gearSvg from "../../assets/icons/gear.svg";
import locationSvg from "../../assets/icons/location.svg";
import { registerLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB";

registerLocale("enGB", enGB);

const InfoCar = ({ car }) => {
    const carAddress = formatAddress(car.address);
    const carMileage = formatMileage(car.mileage);
    const carType = formatType(car.type);
    
    return (
        <div className={s.infoWrapper}>
            <div className={s.titleBox}>
                <h2 className={s.title}>
                    {car.brand} {car.model}, {car.year}{" "}
                    <span className={s.titleSpan}>
                        Id:
                        {car.img.match(/\/(\d{4})-/)?.[1]}
                    </span>
                </h2>
                <div className={s.subtitleBox}>
                    <img src={locationSvg} alt="location" className={s.locationSvg} />
                    <p className={s.location}>
                        {carAddress[1]}, {carAddress[2]}
                    </p>
                    <p>Mileage: {carMileage} km</p>
                </div>
                <p className={s.price}>${car.rentalPrice}</p>
                <p>{car.description}</p>
            </div>
            <div className={s.infoBox}>
                <div>
                    <h3 className={s.infoTitle}>Rental Conditions:</h3>
                    <ul className={s.infoList}>
                        {car.rentalConditions.map((c, i) => (
                            <li className={s.infoItem} key={i}>
                                <img
                                    src={checkCircleSvg}
                                    alt="select"
                                    className={s.detailsSvg}
                                />
                                <p>{c}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className={s.infoTitle}>Car Specifications:</h3>
                    <ul className={s.infoList}>
                        <li className={s.infoItem}>
                            <img src={calendarSvg} alt="calendar" className={s.detailsSvg} />
                            <p>Year: {car.year}</p>
                        </li>
                        <li className={s.infoItem}>
                            <img src={carSvg} alt="car" className={s.detailsSvg} />
                            <p>Type: {carType}</p>
                        </li>
                        <li className={s.infoItem}>
                            <img src={fuelPumpSvg} alt="fuel-pump" className={s.detailsSvg} />
                            <p>Fuel Consumption: {car.fuelConsumption}</p>
                        </li>
                        <li className={s.infoItem}>
                            <img src={gearSvg} alt="gear" className={s.detailsSvg} />
                            <p>Engine Size: {car.engineSize}</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className={s.infoTitle}>Accessories and functionalities:</h3>
                    <ul className={s.infoList}>
                        {car.accessories.map((a, i) => (
                            <li className={s.infoItem} key={i}>
                                <img
                                    src={checkCircleSvg}
                                    alt="select"
                                    className={s.detailsSvg}
                                />
                                <p>{a}</p>
                            </li>
                        ))}
                        {car.functionalities.map((f, i) => (
                            <li className={s.infoItem} key={i}>
                                <img
                                    src={checkCircleSvg}
                                    alt="select"
                                    className={s.detailsSvg}
                                />
                                <p>{f}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default InfoCar;

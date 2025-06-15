import { useEffect, useState } from "react";
import { api } from "../../redux/global/operations";
import { useParams } from "react-router-dom";
import InfoCar from "../../components/InfoCar/InfoCar";
import s from "./DetailsTab.module.css";
import FormBoking from "../../components/FormBooking/FormBoking";

const DetailsTab = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const response = await api.get(`/cars/${id}`);
                setCar(response.data);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchCar();
    }, [id]);

    if (!car) {
        return <div>Loading...</div>;
    }

    return (
        <div className={s.detailsWrapper}>
            <div className={s.formWrap}>
                <img
                    src={car.img}
                    alt={`${car.brand} ${car.model}`}
                    className={s.img}
                />
                <FormBoking/>
            </div>
            <InfoCar car={car} />
        </div>
    );
};
export default DetailsTab;

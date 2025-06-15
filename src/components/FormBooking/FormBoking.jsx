import { useState } from "react";
import s from "./FormBooking.module.css";
import "./DateCalendar.css";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";
import "./DateCalendar.css"

const FormBoking = () => {
    const [selectDate, setSelectDate] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateName = (name) => {
        return /^[A-Za-zА-Яа-яІіЇїЄєҐґ'\-\s]{2,32}$/.test(name.trim())
    }

    const validateForm = () => {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Please enter your name";
        } else if (!validateName(name)) {
            newErrors.name ="Name must be 2–32 letters, no numbers";
        }

        if (!email.trim()) {
            newErrors.email = "Please enter your email";
        } else if (!validateEmail(email)) {
            newErrors.email = "Invalid email format";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        toast.success("Car successfully booked!");

        setName("");
        setEmail("");
        setSelectDate(null);
        setComment("");
        setErrors({});
    };

    return (
        <div className={s.formWrap}>
            <h3 className={s.formTitle}>Book your car now</h3>
            <p className={s.formText}>
                Stay connected! We are always ready to help you.
            </p>
            <form onSubmit={handleSubmit}>
                <div className={s.divInputs}>
                    <div className={s.inputWrap}>
                        <input
                            className={s.formInput}
                            type="text"
                            name="name"
                            placeholder="Name*"
                            autoComplete="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <p className={s.errorMessage}>{errors.name}</p>}
                    </div>
                    <div className={s.inputWrap}>
                        <input
                            className={s.formInput}
                            type="email"
                            placeholder="Email*"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className={s.errorMessage}>{errors.email}</p>}
                    </div>
                    <div className={s.inputWrap}>
                        <DatePicker
                            selected={selectDate}
                            onChange={(date) => setSelectDate(date)}
                            dateFormat="dd.MM.yyyy"
                            placeholderText="Booking date"
                            className="custom-datepicker"
                            calendarClassName="custom-calendar"
                            minDate={new Date()}
                            showPopperArrow={false}
                            locale="enGB"
                            formatWeekDay={(nameOfDay) => nameOfDay.toUpperCase().slice(0, 3)}
                        />
                    </div>

                    <textarea
                        className={s.textareaItem}
                        placeholder="Comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>
                <button className={s.sendBtn} type="submit">
                    Send
                </button>
            </form>
        </div>
    );
};
export default FormBoking;

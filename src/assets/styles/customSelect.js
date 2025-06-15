export const customSelect = {
    control: (provided, state) => ({
        ...provided,
        borderRadius: "12px",
        backgroundColor: "#f7f7f7",
        border: state.isFocused ? "0px solid transparent" : "0px solid transparent",
        boxShadow: state.isFocused ? "none" : "none",
        padding: "0 16px",
        marginTop: "8px",
        minHeight: "44px",
        fontSize: "16px",
        fontWeight: 500,
        color: "#101828",
    }),
    placeholder: (provided) => ({
        ...provided,
        color: "#101828",
        fontWeight: 500,
    }),
    menu: (provided) => ({
        ...provided,
        borderRadius: "12px",
        backgroundColor: "#FFFFFF",
        marginTop: "0",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
        zIndex: 20,
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: "#FFFFFF",
        color: state.isFocused ? " #101828" : "#8d929a",
        padding: "4px 18px",
        cursor: "pointer",
        fontWeight: 500,
        fontSize: " 16px",
        borderRadius: "12px",
        '&:hover': {
        color: '#101828',}
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "#101828",
    }),
    indicatorSeparator: () => ({
        display: "none",
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: " #101828",
        transition:
            "transform 350ms cubic-bezier(0.4, 0, 0.2, 1), color 350ms cubic-bezier(0.4, 0, 0.2, 1)",
        transform: state.selectProps.menuIsOpen ? "scaleY(-1)" : "scaleY(1)",
        "&:hover": {
            color: "#0b44cd",
        },
    }),
};

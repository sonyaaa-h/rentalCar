export const formatAddress = (address) => {
    const newAddress = address.split(",");
    return newAddress;
}

export const formatMileage = (mileage) => {
    const newMileage = mileage.toLocaleString("uk-UA");
    return newMileage;
}

export const formatType = (type) => {
    const newType = type.charAt(0) + type.slice(1).toLowerCase();
    return newType;
}
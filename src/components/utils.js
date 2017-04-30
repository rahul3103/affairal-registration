const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

export default function DateConverter(date) {
    return(monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear());
};
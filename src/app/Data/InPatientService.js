import { FaHandHoldingMedical } from "react-icons/fa";
import { BsPersonArmsUp } from "react-icons/bs";
import { FaBaby } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { FaBedPulse } from "react-icons/fa6";

const InPatientService = [
    {
        id : 1,
        icons : <FaHandHoldingMedical />,
        title : "Operation Theatre",
    },
    {
        id: 2,
        icons : <BsPersonArmsUp />,
        title : "Paeditric Care",
    },
    {
        id : 3,
        icons : <FaBaby />,
        title : "Maternity Care",
    },
    {
        id: 4,
        icons : <FaBriefcaseMedical />,
        title: "Critical care",
    },
    {
        id: 5,
        icons : <FaBedPulse />,
        title : "Adult ward"
    }
]

export default InPatientService
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineEventAvailable } from "react-icons/md";
import { IoBookmarks } from "react-icons/io5";
import { MdHealthAndSafety } from "react-icons/md";

const firstContact = [
  {
    id: 1,
    name: (
      <>
        Emergency: <br /> +254 741 769 558
      </>
    ),
    icons: <IoCallOutline />
  },
  {
    id: 2,
    name: (
      <>
        Email: <br /> reception@chan-f.or.ke
      </>
    ),
    icons: <MdOutlineMail />
  },
  {
    id: 3,
    name: (
      <>
        Opening Hours <br /> Monday – Sunday: 24hrs
      </>
    ),
    icons: <MdOutlineEventAvailable />
  },
  {
    id: 4,
    name: <>Appointment Booking</>,
    icons: <IoBookmarks />
  },
  {
    id: 5,
    name: <>Intake Ongoing</>,
    icons: <MdHealthAndSafety />
  }
];

export default firstContact;

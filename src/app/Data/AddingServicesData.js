import ImgOne from '../Images/GroupTwo/3.png'
import ImgTwo from '../Images/GroupTwo/4-1.png'
import ImgThree from '../Images/GroupTwo/5-1-2048x1147.png'
import ImgFour from '../Images/GroupTwo/6-1-2048x1147.png'
import ImgFive from '../Images/GroupTwo/Untitled-design-1-1.png'
import ImgSix from '../Images/GroupTwo/Untitled-design-2-1-2048x1147.png'
import ImgSeven from '../Images/GroupTwo/Untitled-design-3-2048x1147.png'
import ImgEight from '../Images/GroupTwo/Untitled-design-4-1.png'
import ImgNine from '../Images/GroupTwo/Untitled-design-5-2048x1147.png'
import ImgTen from '../Images/GroupTwo/Untitled-design-6-1.png'
import ImgEleven from '../Images/GroupTwo/Untitled-design-7-1-2048x1147.png'
import ImgTwelve from '../Images/GroupTwo/doctor-patient-with-face-masks-talking-about-disease-annual-checkup-visit-examination-medic-consulting-young-woman-cabinet-while-having-protection-against-coronavirus-2048x1152.jpg'
import ImgThirty from '../Images/GroupTwo/hospital-ward-friendly-black-head-260nw-1985507345.jpg'
import ImgFourteen from '../Images/GroupTwo/pexels-enginakyurt-1435904.jpg'

// Function to generate random "good" ratings between 4 and 5 stars
const generateGoodRating = () => (Math.random() * 1 + 4).toFixed(1);

const AddingServicesData = [
    {
        id: 1,
        myImg : ImgTwelve,
        title   : "Gynaecology",
        description: "Our expert gynaecologists are here to ensure your health and comfort, providing personalized care every step of the way.",
        rating: generateGoodRating() // Add random rating
    },
    {
        id: 2,
        myImg : ImgEleven,
        title   : "Family Planning",
        description: "We guide you through every stage of family planning, ensuring you feel confident and secure in making the best choices for your family.",
        rating: generateGoodRating() 
    },
    {
        id: 3,
        myImg : ImgFourteen,
        title   : "Nutrition",
        description: "Our nutritionists will help you achieve a balanced diet, ensuring your body gets the nutrients it needs to thrive and heal.",
        rating: generateGoodRating()
    },
    {
        id: 4,
        myImg : ImgSix,
        title   : "Comprehensive Care",
        description: "You are in safe hands with our comprehensive care services, focused on your complete health and well-being.",
        rating: generateGoodRating()
    },
    {
        id: 5,
        myImg : ImgThirty,
        title   : "Men's Wellness",
        description: "Our men's wellness program ensures personalized care to help you stay strong and healthy, no matter your stage of life.",
        rating: generateGoodRating()
    },
    {
        id: 6,
        myImg : ImgOne,
        title   : "Oncology",
        description: "Our oncology team is committed to offering the best treatment options, giving you the strength and support to overcome any challenge.",
        rating: generateGoodRating()
    },
    {
        id: 7,
        myImg : ImgTwo,
        title   : "Cardiology",
        description: "With cutting-edge technology and expert care, our cardiology team will help keep your heart strong and healthy.",
        rating: generateGoodRating()
    },
    {
        id: 8,
        myImg : ImgFive,
        title   : "Ear, Nose, and Throat",
        description: "Our ENT specialists ensure that you breathe easier, hear better, and enjoy life more with effective, personalized treatments.",
        rating: generateGoodRating()
    },
    {
        id: 9,
        myImg : ImgFour,
        title   : "Dermatology",
        description: "We care for your skin with advanced treatments, helping you look and feel your best.",
        rating: generateGoodRating()
    },
    {
        id: 10,
        myImg : ImgTen,
        title   : "Gastrology",
        description: "Our gastroenterology team is dedicated to ensuring your digestive health, so you can enjoy life without discomfort.",
        rating: generateGoodRating()
    },
    {
        id: 11,
        myImg : ImgNine,
        title   : "Antenatal Clinic",
        description: "With compassion and expertise, our antenatal care ensures a safe and healthy journey for both you and your baby.",
        rating: generateGoodRating()
    },
    {
        id: 12,
        myImg : ImgThree,
        title   : "Optician",
        description: "Our opticians are here to help you see clearly, ensuring your eye health is in the best hands.",
        rating: generateGoodRating()
    },
    {
        id : 13,
        myImg : ImgEight,
        title : "Psychiatry",
        description: "Our caring psychiatry team is dedicated to supporting your mental well-being, helping you find peace and balance.",
        rating: generateGoodRating()
    },
    {
        id : 14,
        myImg : ImgSeven,
        title : "Endoscopy",
        description: "Our endoscopy services offer advanced diagnostic and treatment options, ensuring your health is in the best hands.",
        rating: generateGoodRating()
    }
];

export default AddingServicesData;

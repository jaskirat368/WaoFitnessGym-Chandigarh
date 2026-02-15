import { Program, Review, FAQItem, ServiceArea } from './types';

export const BUSINESS_INFO = {
  name: "Wao Fitness",
  phone: "+91 62831 17815",
  displayPhone: "+91 62831 17815",
  address: "SCO 34, 35, 36, 37, Madhya Marg, Sector 9-D, Chandigarh, Punjab, 160009",
  mapLink: "https://maps.app.goo.gl/p81wq7f2oFiKuTCm6",
  established: "2022",
  rating: "4.8",
  reviewCount: "1155+",
  hours: "Mon–Sat: 5:30 AM – 10:00 PM | Sun: Closed"
};

export const LOGO_URL = "https://scontent.fluh1-1.fna.fbcdn.net/v/t39.30808-6/283150443_104185085639955_8209233460620595041_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=azcRfnG8PFkQ7kNvwG8h0Sc&_nc_oc=Adm2sTuOfH5UgMGbZbda4x3gCdTKXuN5Ndu1LqnB525LI_0Fsv3RwrJw3QPV-_I4VZ7dDpJeuzqdM0kT2UR84CSw&_nc_zt=23&_nc_ht=scontent.fluh1-1.fna&_nc_gid=hbQBdsB0A8Nvi8yZAnPZgg&oh=00_AfvlR7pA1szkKQ4qZP_YB-hDKCUbuqceUV7Bn_3fROwIkw&oe=6988C15E";

export const PROGRAMS: Program[] = [
  {
    id: "gym-cardio",
    title: "Gym & Cardio",
    shortDescription: "State-of-the-art equipment for heart health and endurance.",
    fullDescription: "Our Gym & Cardio program offers a comprehensive approach to improving cardiovascular health and overall stamina. We feature top-tier treadmills, ellipticals, stair masters, and cycles. Whether you are training for a marathon or just want to stay active, our zone is equipped for you.",
    benefits: ["Improved Heart Health", "Increased Stamina", "Calorie Burning", "Stress Reduction"],
    targetAudience: "Everyone from beginners to marathon runners.",
    image: "https://d1qpnt4t1p05jk.cloudfront.net/wp-content/uploads/2025/10/27041021/image-20344-1024x683.png"
  },
  {
    id: "personal-training",
    title: "Personal Training",
    shortDescription: "1-on-1 expert guidance to crush your fitness goals.",
    fullDescription: "Get personalized attention from our certified trainers. We build a roadmap specifically for your body type and goals. From form correction to diet advice (general guidance), our trainers are your partners in success.",
    benefits: ["Customized Workout Plans", "Real-time Form Correction", "Motivation & Accountability", "Faster Results"],
    targetAudience: "Individuals wanting focused results or those with specific injuries/limitations.",
    image: "https://www.wholeintent.com/media/k2/items/cache/938a195f8810cb9b31c6503221891897_XL.jpg"
  },
  {
    id: "zumba-aerobics",
    title: "Zumba & Aerobics",
    shortDescription: "High-energy group classes to dance your way to fitness.",
    fullDescription: "Join our energetic Zumba and Aerobics sessions. It's not just a workout; it's a party. Burn calories while moving to the beat in a supportive group environment lead by enthusiastic instructors.",
    benefits: ["Full Body Workout", "Improved Coordination", "Mood Enhancement", "Massive Calorie Burn"],
    targetAudience: "Anyone who loves music and group energy.",
    image: "https://www.happiesthealth.com/wp-content/uploads/2022/11/Zumba-and-aerobics-Different-beats-same-tone-Article.jpg"
  },
  {
    id: "weight-management",
    title: "Weight Management",
    shortDescription: "Scientific approach to gaining muscle or losing fat.",
    fullDescription: "Our weight management program focuses on sustainable lifestyle changes. Whether you are looking to bulk up or slim down, we combine strength training and cardio protocols to hit your target weight safely.",
    benefits: ["Sustainable Results", "Muscle Toning", "Metabolic Boost", "Body Composition Change"],
    targetAudience: "Those struggling with weight loss or muscle gain plateaus.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCSm_xuq-2XwlLbD2wqrsdLO6RssyZwZIs9A&s"
  },
  {
    id: "functional-training",
    title: "Functional Training",
    shortDescription: "Train your body for real-life activities and movement.",
    fullDescription: "Functional training prepares your body for daily activities. We use kettlebells, battle ropes, and bodyweight movements to improve your core strength, balance, and flexibility.",
    benefits: ["Better Daily Movement", "Core Strength", "Injury Prevention", "Agility"],
    targetAudience: "Athletes and individuals wanting practical strength.",
    image: "https://fitnesscfgyms.com/mountdorafl/wp-content/uploads/sites/4/2025/06/shutterstock_2331301891.jpg"
  }
];

export const REVIEWS: Review[] = [
  { id: 1, author: "Mukesh Acharya", rating: 5, text: "This is the best gym in chandigarh.. I was suffering from back pain and afraid to join gym..but the trainers there gave confidence and today I am totally fit...", date: "7 months ago", localGuide: true },
  { id: 2, author: "Himanshu Kalher", rating: 5, text: "This gym is amazing. Amazing facility, top equipment and great environment. Sagar sir is very knowledgeable, humble and experienced trainer.", date: "4 weeks ago", localGuide: true },
  { id: 3, author: "Diksha Sharma", rating: 5, text: "WAO Gym in Chandigarh is an excellent fitness center with top-notch facilities. The group classes are energetic and well-structured.", date: "7 months ago", localGuide: false },
  { id: 4, author: "Kashish Ranchan", rating: 5, text: "WAO Gym is truly one of the best in Chandigarh! The group classes are fun, dynamic, and very effective. Trainers are extremely helpful.", date: "7 months ago", localGuide: false },
  { id: 5, author: "Sideepak428ggn Mehra", rating: 5, text: "Best gym in chandigarh great service. Certified training team and good management especially Bhupendra sir.", date: "1 year ago", localGuide: false },
];

export const SERVICE_AREAS: ServiceArea[] = [
  { name: "Sector 9-D", slug: "sector-9d", description: "The heart of our operations. Conveniently located on Madhya Marg." },
  { name: "Madhya Marg", slug: "madhya-marg", description: "Serving the entire Madhya Marg business and residential district." },
  { name: "Sector 8", slug: "sector-8", description: "Just a short walk away for Sector 8 residents." },
  { name: "Sector 10", slug: "sector-10", description: "Easily accessible for fitness enthusiasts in Sector 10." },
  { name: "Sector 17", slug: "sector-17", description: "Perfect for office goers in the Sector 17 Plaza area." },
];

export const FAQS: FAQItem[] = [
  { question: "Is this gym beginner-friendly?", answer: "Absolutely! We pride ourselves on a welcoming environment. Our trainers will guide you through equipment usage and form basics from day one." },
  { question: "Are trainers certified?", answer: "Yes, our team consists of certified coaches who are experienced in various disciplines including strength training, functional fitness, and rehabilitation." },
  { question: "Do you offer a trial?", answer: "We encourage you to visit the facility to feel the vibe. Please call us at +91 62831 17815 to schedule a visit." },
  { question: "What are your operating hours?", answer: "We are open Monday through Saturday from 5:30 AM to 10:00 PM. We are closed on Sundays." },
  { question: "Do trainers guide form & safety?", answer: "Safety is our #1 priority. Trainers are always on the floor to correct form and ensure you are lifting safely to prevent injury." },
];
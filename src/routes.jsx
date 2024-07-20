import Home from "./pages/Home";

import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import EMI_Calculator from "./pages/Resources/EMI_Calculator";
import Luxury from "./pages/Luxury/Luxury";
import Sustainability from "./pages/Sustainability/Sustainability";
import Privacy_Policy from "./pages/Terms_and_conditions/Privacy_Policy";
import Terms_and_condition from "./pages/Terms_and_conditions/Terms_and_condition";
import Work_with_us from "./pages/Terms_and_conditions/Work_with_us";
import Media from "./pages/Media/Media";
import Community from "./pages/Community/Community";
import Ongoing_Projects from "./pages/Projects/Ongoing_Projects";
import Awards from "./pages/About/Awards";
import Companies from "./pages/About/Companies";
import Leadership from "./pages/About/Leadership";
import Commercial_Projects from "./pages/Projects/Commercial_Projects";
import Completed_Projects from "./pages/Projects/Completed_Projects";
import Rental_Properties from "./pages/Projects/Rental_Properties";
import Home_loan from "./pages/Resources/Home_loan";
import Blogs from "./pages/Resources/Blogs";

import Cardsd from "./Cardsd";
import Goldenspring from "./pages/Projects/Goldenspring";

const routes = [
  {
    exact: true,
    isPublic: true,
    path: "/",
    name: "home",
    element: <Home />,
  },
  {
    exact: true,
    isPublic: true,
    path: "/Cardsd",
    name: "Cardsd",
    element: <Cardsd />,
  },
  {
    exact: true,
    isPublic: true,
    path: "/premium/ongoing-projects",  
    name: "ongoing_projects",
    element: <Ongoing_Projects />,
  },
  { 
    exact: true,
    isPublic: true,
    path: "/premium/commercial-projects",  
    name: "commercial_projects",
    element: <Commercial_Projects />,
  },
  {
    exact: true,
    isPublic: true,
    path: "/premium/completed-projects",  
    name: "completed_projects",
    element: <Completed_Projects />,
  },
  {
    exact: true,
    isPublic: true,
    path: "/luxury/goldenspring",  
    name: "Goldenspring",
    element: <Goldenspring />,
  },
  
  {
    exact: true,
    isPublic: true,
    path: "/premium/rental-properties",  
    name: "rental_properties",
    element: <Rental_Properties />,
  },
  {
    exact: true,
    isPublic: true,
    path: "/contact-us",  
    name: "contact",
    element: <Contact />,
  },
  {
    exact: true,
    isPublic: true,
    path: "/luxury",  
    name: "luxury",
    element: <Luxury />,
  },
  {
    exact: true,
    isPublic: true,
    path: "/about-us",  
    name: "about",
    element: <About />,
  },
  {
    exact: true,
    isPublic: true,
    path: "/awards",  
    name: "awards",
    element: <Awards />,
  },
  {
    exact: true,
    isPublic: true,
    path: "/companies",  
    name: "companies",
    element: <Companies />,
  },
  {
    exact: true,
    isPublic: true,
    path: "/leadership",  
    name: "leadership",
    element: <Leadership />,
  },
 
  {
    exact: true,
    isPublic: true,
    path: "/emi-calculator",  
    name: "emi_calculator",
    element: <EMI_Calculator />,
  },
 
  {
    exact: true,
    isPublic: true,
    path: "/home-loan",  
    name: "home_loan",
    element: <Home_loan />,
  },
  {
    exact: true,
    isPublic: true,
    path: "/blogs",  
    name: "blogs",
    element: <Blogs />,
  },

  {
    exact: true,
    isPublic: true,
    path: "/sustainability",  
    name: "sustainability",
    element: <Sustainability />,
  },
  {
    exact: true,
    isPublic: true,
    path: "/privacy-policy",  
    name: "privacy_policy",
    element: <Privacy_Policy />,
  },
  {
    exact: true,
    isPublic: true,
    path: "/terms-and-condition",  
    name: "terms_and_condition",
    element: <Terms_and_condition />,
  },
  {
    exact: true,
    isPublic: true,
    path: "/work-with-us",  
    name: "work_with_us",
    element: <Work_with_us />,
  },
  {
    exact: true,
    isPublic: true,
    path: "/media",  
    name: "media",
    element: <Media />,
  },
  {
    exact: true,
    isPublic: true,
    path: "/true-sage-foundation",  
    name: "community",
    element: <Community />,
  },

];

export default routes;

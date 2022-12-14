import React, { useState } from 'react';
import Nav from "./components/Nav"
import About from "./components/About";
import Gallery from "./components/Gallery";
import ContactForm from './components/Contact';
import Modal from "./components/Modal";


function App() {

  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {/* if contactSelected is false, which it is by default, only render the gallery and about info */}
        {/* {!condition} ? true code here : false code here */}
        {!contactSelected ? (
          <>

            <Gallery currentCategory={currentCategory}></Gallery>    
            <About></About>
          </>
        ) : (

          // otherwise render the contact form
          <ContactForm></ContactForm>
          

        )}


        
        
        
      </main>
    </div>
  
  );

}

export default App;
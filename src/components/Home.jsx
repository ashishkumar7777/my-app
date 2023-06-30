import React, { useState, useRef } from 'react';
import { saveAs } from 'file-saver';
import { toBlob } from 'html-to-image';
import JSZip from 'jszip';

import Banner from './Banner';


function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [inputText, setInputText] = useState('');
  const [propertText, setPropertText] = useState('2 BHK FLat');
  const [carpetInput, setCarpetInputt] = useState('1350 sqft');
  const [LocationInput, setLocationInput] = useState('India, delhi');
  const [priceInput, setPriceInput] = useState('95 Lac onwards');

  
  
  const componentRefs = [
    useRef(),
    useRef(),
    useRef()
  ];

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const priceInputChange = (event) => {
    setPriceInput(event.target.value); 
  };

  const proprtyInputChange = (event) => {
    setPropertText(event.target.value);
  };

  const carpetInputChange = (event) => {
    setCarpetInputt(event.target.value); 
  };

  const LocationInputChange = (event) => {
    setLocationInput(event.target.value); 
  };


 
  const getFontSize = () => {
    return propertText.length > 11 ? '12px' : '16px';
  };

  const getLocationFontSize = () => {
    return LocationInput.length > 13 ? '10px' : '11px';
  };



  const handleExport = () => {
    const zip = new JSZip();
    const promises = [];

    componentRefs.forEach((ref, index) => {
      const promise = toBlob(ref.current)
        .then(function (blob) {
          zip.file(`myComponent_${index}.jpeg`, blob);
        });

      promises.push(promise);
    });

    Promise.all(promises)
      .then(() => {
        zip.generateAsync({ type: 'blob' })
          .then(function (content) {
            saveAs(content, 'components.zip');
          });
      });
  };

  return (
    <div style={styles.container}>

      <div style={styles.inputContaner}>
        <h6 style={styles.inputText}>PRICE</h6>
        <input style={styles.inputContent} type="text" value={priceInput} onChange={priceInputChange} />

        <h6 style={styles.inputText}>PROPERTY TYPE</h6>
        <input style={styles.inputContent} type="text" value={propertText} onChange={proprtyInputChange} />

        <h6 style={styles.inputText}>CARPET AREA</h6>
        <input style={styles.inputContent} type="text" value={carpetInput} onChange={carpetInputChange} />

        <h6 style={styles.inputText}>LOCATION</h6>
        <input style={styles.inputContent} type="text" value={LocationInput} onChange={LocationInputChange} />

        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <button style={styles.saveButton} onClick={handleExport}>Save</button>

        
      </div>

      <div>
          {/* banner 1 */}
          <div ref={componentRefs[0]} >
            <div style={styles.banner1}>
                  <div style={{ backgroundImage: `url(${selectedImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }}></div>
                <div style={styles.textonbanner1}>
                
                    <h1 style={{ fontSize: getFontSize()}}>{propertText}</h1>
                    <h1 style={{ fontSize: '13px' }}>{carpetInput}</h1>
                    <h1 style={{ fontSize: getLocationFontSize(), width: '65px', float: 'right' }}>{LocationInput}</h1>
                </div>

                <img src={require('../assets/banner1.png')} style={styles.cruveImgBanner1}/>
                <div style={styles.priceStar}>
                      <div style={{position: 'relative'}}>
                        <p style={styles.priceText}>{priceInput}</p>
                      </div>
                </div>
            </div>
          </div>

          {/* banner 2 */}
          <div ref={componentRefs[1]} style={styles.section}>
          {selectedImage && <img src={selectedImage} alt="Selected" />}
            <h1 style={{ fontSize: getFontSize() }}>{inputText}</h1>
          </div>

          {/* banner 3 */}  
          <div ref={componentRefs[2]} style={styles.section}>
          {selectedImage && <img src={selectedImage} alt="Selected" />}
            <h1 style={{ fontSize: getFontSize() }}>{inputText}</h1>
          </div>

         
            
          </div>



      </div>
  );
}


const styles = {
  container: {
    display: 'flex',
    flexDirection : 'row',
    with: '100%',
    height : '100vh'
  },
  banner1:{
    width: "250px",
    height: "250px",
    border: "1px solid red",
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  priceText: {
    fontSize: '10px',
    color: '#000',
    lineHeight: '10px',
    fontWeight: '600',
    width: '50px',
    textAlign: 'center'
  },
  priceStar:{
    position: 'absolute',
    left: '43%',
    top: '31%',
    width: '75px',
    height: '75px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cruveImgBanner1:{
    position: 'absolute',
    width: '100%'
  },
  textonbanner1:{
    zIndex: 1,
    position: 'absolute',
    top: '30px',
    right: '9px',
    textAlign: 'end',
    width: '120px'
  },
  section: {
    width: "500px",
    border: "1px solid red",
  },
  inputContaner:{
    display: 'flex',
    flexDirection : 'column',
    background : '#4163cf',
    margin: '10px',
    padding: '20px',
    borderRadius: '10px'
  },
  inputText: {
    margin: 0,
    fontSize: '14px',
    paddingBottom: '2px'
  },
  inputContent: {
    marginBottom : '10px',
    height: '22px'
  },
  saveButton: {
   padding: '8px',
   marginTop: '20px',
   border: 0,
   background: '#6f8ee9',
   cursor: 'pointer'
  }
};

export default Home;

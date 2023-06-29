import React, { useState, useRef } from 'react';
import { saveAs } from 'file-saver';
import { toBlob } from 'html-to-image';
import JSZip from 'jszip';


function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [inputText, setInputText] = useState('');
  const [propertText, setPropertText] = useState('2 BHK FLat');


  
  const componentRefs = [
    useRef(),
    useRef(),
    useRef()
  ];

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value); 
  };

  const proprtyInputChange = (event) => {
    setPropertText(event.target.value);
  };


 
  const getFontSize = () => {
    return inputText.length > 13 ? '15px' : 'inherit';
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
        <h6 style={styles.inputText}>text 1</h6>
        <input style={styles.inputContent} type="text" value={inputText} onChange={handleInputChange} />

        <h6 style={styles.inputText}>text 2</h6>
        <input style={styles.inputContent} type="text" value={propertText} onChange={proprtyInputChange} />

        <h6 style={styles.inputText}>text 3</h6>
        <input style={styles.inputContent} type="text" value={inputText} onChange={handleInputChange} />

        <h6 style={styles.inputText}>text 4</h6>
        <input style={styles.inputContent} type="text" value={inputText} onChange={handleInputChange} />

        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <button style={styles.saveButton} onClick={handleExport}>Save</button>
      </div>

      <div>
          {/* banner 1 */}
          <div ref={componentRefs[0]} style={styles.banner1}>
            <div style={{ backgroundImage: `url(${selectedImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }}></div>
           <div style={styles.textonbanner1}>
              <h1 style={{ fontSize: getFontSize(), fontSize: '15px' }}>{propertText}</h1>
              <h1 style={{ fontSize: getFontSize(), fontSize: '15px' }}>1310 sqft</h1>
              <h1 style={{ fontSize: getFontSize(), fontSize: '9px' }}>Korangrapady, Udupi</h1>
           </div>

           <img src={require('../assets/curve.png')} style={styles.cruveImgBanner1}/>
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
  cruveImgBanner1:{
    position: 'absolute',
    width: '100%'
  },
  textonbanner1:{
    zIndex: 1,
    position: 'absolute',
    right: '9px',
    textAlign: 'end',
    width: '100px'
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

import React, { useState, useRef } from 'react';
import  Draggable  from 'react-draggable';
import EditText from 'react-edit-text';
import 'react-edit-text/dist/index.css';

import { saveAs } from 'file-saver';
import { toBlob } from 'html-to-image';
import JSZip from 'jszip';




function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [inputText, setInputText] = useState('');
  const [propertText, setPropertText] = useState('3 BHK FLat');
  const [carpetInput, setCarpetInputt] = useState('1350 sqft');
  const [LocationInput, setLocationInput] = useState('India, delhi');
  const [priceInput, setPriceInput] = useState('95 Lac onwards');

  
  
  const componentRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef()
  ];


  function formatText(text) {
    var words = text.split(" ");
    var formattedText = words[0];
  
    for (var i = 1; i < words.length; i++) {
      if (words[i].endsWith(",")) {
        formattedText += "\n" + words[i];
      } else {
        formattedText += " " + words[i];
      }
    }
  
    return formattedText;
  }

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

  const banner2getFontSize = () => {
    return propertText.length > 11 ? '9px' : '14px';
  }

  const banner3getFontSize = () => {
    return propertText.length > 11 ? '15px' : '20px';
  }

  const banner4getFontSize = () => {
    return propertText.length > 11 ? '14px' : '20px';
  }
  const banner5getFontSize = () => {
    return propertText.length > 11 ? '40px' : '60px';
  }
  const banner6getFontSize = () => {
    return propertText.length > 11 ? '19px' : '29px';
  }
  const banner7getFontSize = () => {
    return propertText.length > 11 ? '15px' : '22px';
  }
  const banner8getFontSize = () => {
    return propertText.length > 11 ? '11px' : '18px';
  }
  const banner9getFontSize = () => {
    return propertText.length > 11 ? '40px' : '55px';
  }
  const banner10getFontSize = () => {
    return propertText.length > 11 ? '12px' : '18px';
  }
  const banner11getFontSize = () => {
    return propertText.length > 11 ? '18px' : '27px';
  }
  const banner12getFontSize = () => {
    return propertText.length > 11 ? '18px' : '30px';
  }
  const banner13getFontSize = () => {
    return propertText.length > 11 ? '11px' : '18px';
  }




  const getLocationFontSize = () => {
    return LocationInput.length > 22 ? '8px' : '9px';
  };

  const banner2getLocationFontSize = () => {
    return LocationInput.length > 22 ? '8px' : '9px';
  }

  const banner3getLocationFontSize = () => {
    return LocationInput.length > 22 ? '10px' : '13px';
  }

  const banner4getLocationFontSize = () => {
    return LocationInput.length > 13 ? '12px' : '13px';
  }

  const banner5getLocationFontSize = () => {
    return LocationInput.length > 22 ? '22px' : (LocationInput.length > 13 ? '26px' : '30px');
  }
  const banner6getLocationFontSize = () => {
    return LocationInput.length > 13 ? '13px' : '15px';
  }
  const banner7getLocationFontSize = () => {
    return LocationInput.length > 13 ? '12px' : '14px';
  }
  const banner8getLocationFontSize = () => {
    return LocationInput.length > 22 ? '8px' : (LocationInput.length > 13 ? '9px' : '10px');
  }
  const banner9getLocationFontSize = () => {
    return LocationInput.length > 22 ? '16px' : (LocationInput.length > 13 ? '18px' : '26px');
  }
  const banner10getLocationFontSize = () => {
    return LocationInput.length > 13 ? '10px' : '14px';
  }
  const banner11getLocationFontSize = () => {
    return LocationInput.length > 13 ? '14px' : '19px';
  }
  const banner12getLocationFontSize = () => {
    return LocationInput.length > 13 ? '14px' : '19px';
  }
  const banner13getLocationFontSize = () => {
    return LocationInput.length > 22 ? '9px' : (LocationInput.length > 13 ? '10px' : '15px');
  }

  
  const banner8getMargin = () => {
    return propertText.length > 13 ? '24px' : '15px';
  }
  const banner9getMargin = () => {
    return propertText.length > 13 ? '24px' : '39px';
  }
  const banner10getMargin = () => {
    return propertText.length > 13 ? '12px' : '0px';
  }
  const banner11getMargin = () => {
    return propertText.length > 13 ? '12px' : '0px';
  }
  const banner12getMargin = () => {
    return propertText.length > 13 ? '12px' : '0px';
  }
  const banner13getMargin = () => {
    return propertText.length > 13 ? '3px' : '5px';
  }




  const handleExport = () => {
    const zip = new JSZip();
    const promises = [];

    const componentNames = ['250x250-Square', '200x200-Small Square', '300x250-Inline Rectangle', '336x280-Large Rectangle', '1200x628-Custom size 2', '300x600-Half Page', '160x600-Wide Skyscraper', '320x100-Large Mobile', '970x250-Billboard', '468x60-Main Banner', '728x90-Leaderboard', '970x90-Large Leaderboard', '320x50-Mobile Leaderboard']; // Array of component names

    componentRefs.forEach((ref, index) => {
      const promise = toBlob(ref.current)
      .then(function (blob) {
        const fileName = `${componentNames[index]}.jpg`; // Use the corresponding name from the array
        zip.file(fileName, blob);
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
        <h6 className='inputsText' style={styles.inputText}>Price</h6>
        <input style={styles.inputContent} type="text" value={priceInput} onChange={priceInputChange} />

        <h6 className='inputsText' style={styles.inputText}>Property Type</h6>
        <input style={styles.inputContent} type="text" value={propertText} onChange={proprtyInputChange} />

        <h6 className='inputsText' style={styles.inputText}>Carpet Area</h6>
        <input style={styles.inputContent} type="text" value={carpetInput} onChange={carpetInputChange} />

        <h6  className='inputsText' style={styles.inputText}>Location</h6>
        <input style={styles.inputContent} type="text" value={LocationInput} onChange={LocationInputChange} />

        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <button style={styles.saveButton} onClick={handleExport}>Save</button>

       

        
      </div>

      <div  style={{display: 'flex', flexWrap: 'wrap', overflow: 'auto', justifyContent: 'space-evenly', alignItems: 'center', gap: '10px', margin: '10px'}}>
          {/* banner 1 */}
          <div className='bg-color' ref={componentRefs[0]} style={{width: '250px', height: '250px'}}>
            <div style={styles.banner1}>
                  <div style={{ backgroundImage: `url(${selectedImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }}></div>
                <div style={styles.textonbanner1}>
                
                <Draggable><h1 style={{ fontSize: getFontSize()}}>{propertText}</h1></Draggable>
                <Draggable><h1 style={{ fontSize: '13px' }}>{carpetInput}</h1></Draggable>
                <Draggable><div style={{width: '65px', float: 'right'}}><h1 style={{ fontSize: getLocationFontSize(),  float: 'right' }}>{formatText(LocationInput)}</h1></div></Draggable>
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
          <div className='bg-color' ref={componentRefs[1]} style={{width: '200px', height: '200px'}}>
          <div style={styles.banner2}>
                  <div style={{ backgroundImage: `url(${selectedImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }}></div>
                  <div style={styles.textonbanner2}>
                
                  <Draggable><h1 style={{ fontSize: banner2getFontSize(), cursor: 'move', paddingTop: '7px'}}>{propertText}</h1></Draggable>
                    <Draggable><h1 style={{ fontSize: '10px', paddingTop: '0px', cursor: 'move' }}>{carpetInput}</h1></Draggable>
                    <Draggable><h1 style={{ cursor: 'move', fontSize: banner2getLocationFontSize(), width: '66px', float: 'right', paddingTop: '0px' }}>{LocationInput}</h1></Draggable>
                </div>

                <img src={require('../assets/banner-2.png')} style={styles.cruveImgBanner1}/>
                <div style={styles.banner2priceStar}>
                      <div style={{position: 'relative'}}>
                        <p style={styles.banner2priceText}>{priceInput}</p>
                      </div>
                </div>
            </div>
          </div>

          {/* banner 3 */}  
          <div className='bg-color' ref={componentRefs[2]} style={{width: '300px', height: '250px'}}>
            <div style={styles.banner3}>
                  <div style={{ backgroundImage: `url(${selectedImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }}></div>
                <div style={styles.textonbanner3}>
                
                <Draggable><h1 style={{ fontSize: banner3getFontSize()}}>{propertText}</h1></Draggable>
                <Draggable><h1 style={{ fontSize: '13px', paddingTop: '8px' }}>{carpetInput}</h1></Draggable>
                <Draggable><h1 style={{ fontSize: banner3getLocationFontSize(), width: '82px', float: 'right' }}>{LocationInput}</h1></Draggable>
                </div>

                <img src={require('../assets/banner-3.png')} style={styles.cruveImgBanner1}/>
                <div style={styles.banner3priceStar}>
                      <div style={{position: 'relative'}}>
                        <p style={styles.banner3priceText}>{priceInput}</p>
                      </div>
                </div>
            </div>
          </div>

          {/* banner 4 */}  
          <div className='bg-color' ref={componentRefs[3]} style={{width: '336px', height: '280px'}}>
            <div style={styles.banner4}>
                  <div style={{ backgroundImage: `url(${selectedImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }}></div>
                <div style={styles.textonbanner3}>
                
                <Draggable><h1 style={{ fontSize: banner4getFontSize()}}>{propertText}</h1></Draggable>
                <Draggable><h1 style={{ fontSize: '13px', paddingTop: '8px' }}>{carpetInput}</h1></Draggable>
                <Draggable><h1 style={{ fontSize: banner4getLocationFontSize(), width: '95px', float: 'right' }}>{LocationInput}</h1></Draggable>
                </div>

                <img src={require('../assets/banner-4.png')} style={styles.cruveImgBanner1}/>
                <div style={styles.banner4priceStar}>
                      <div style={{position: 'relative'}}>
                        <p style={styles.banner4priceText}>{priceInput}</p>
                      </div>
                </div>
            </div>
          </div>

          


           {/* banner 6 */}  
           <div className='bg-color' ref={componentRefs[5]} style={{width: '300px', height: '600px'}}>
            <div style={styles.banner6}>
                  <div style={{ backgroundImage: `url(${selectedImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }}></div>
                <div style={styles.textonbanner6}>
                
                    <h1 style={{ fontSize: banner6getFontSize()}}>{propertText}</h1>
                    <h1 style={{ fontSize: '18px', paddingTop: '0px' }}>{carpetInput}</h1>
                    <h1 style={{ fontSize: banner6getLocationFontSize(), width: '130px', float: 'right' }}>{LocationInput}</h1>
                </div>

                <img src={require('../assets/banner-6.png')} style={styles.cruveImgBanner1}/>
                <div style={styles.banner6priceStar}>
                      <div style={{position: 'relative'}}>
                        <p style={styles.banner6priceText}>{priceInput}</p>
                      </div>
                </div>
            </div>
          </div>

          {/* banner 7 */}  
          <div className='bg-color' ref={componentRefs[6]} style={{width: '160px', height: '600px', boxSizing: 'border-box'}}>
            <div style={styles.banner7}>
                  <div style={{ backgroundImage: `url(${selectedImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }}></div>
                <div style={styles.textonbanner7}>
                
                <Draggable><h1 style={{ fontSize: banner7getFontSize()}}>{propertText}</h1></Draggable>
                    <Draggable><h1 style={{ fontSize: '15px', paddingTop: '1px' }}>{carpetInput}</h1></Draggable>
                    <Draggable><h1 style={{ fontSize: banner7getLocationFontSize(), width: '85px', float: 'right' }}>{LocationInput}</h1></Draggable>
                </div>

                <img src={require('../assets/banner-7.png')} style={styles.cruveImgBanner1}/>
                <div style={styles.banner7priceStar}>
                      <div style={{position: 'relative'}}>
                        <p style={styles.banner7priceText}>{priceInput}</p>
                      </div>
                </div>
            </div>
          </div>

          {/* banner 8 */}  
          <div className='bg-color' ref={componentRefs[7]} style={{width: '320px', height: '100px'}}>
            <div style={styles.banner8}>
                  <div style={{ backgroundImage: `url(${selectedImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '60%', height: '100%', position: 'relative', left: '128px' }}></div>
                <div style={styles.textonbanner8}>
                
                <Draggable><h1 style={{ fontSize: banner8getFontSize(), marginBottom: '2px', marginTop: banner8getMargin()}}>{propertText}</h1></Draggable>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Draggable><h1 style={{ fontSize: '12px', paddingTop: '0px' }}>{carpetInput} | </h1></Draggable>
                    <Draggable><h1 style={{ fontSize: banner8getLocationFontSize(), width: '80px', float: 'left', marginLeft: '3px' }}>{LocationInput}</h1></Draggable>
                    </div>
                    
                </div>

                <img src={require('../assets/banner-8n.png')} style={styles.cruveImgBanner1}/>
                <div style={styles.banner8priceStar}>
                      <div style={{position: 'relative'}}>
                        <p style={styles.banner8priceText}>{priceInput}</p>
                      </div>
                </div>
            </div>
          </div>

          {/* banner 9 */}  
          <div className='bg-color' ref={componentRefs[8]} style={{width: '970px', height: '250px'}}>
            <div style={styles.banner9}>
                  <div style={{ backgroundImage: `url(${selectedImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '60%', height: '100%', position: 'relative', left: '388px' }}></div>
                <div style={styles.textonbanner9}>
                
                    <h1 style={{ fontSize: banner9getFontSize(), marginBottom: '2px', marginTop: banner9getMargin(), lineHeight: '35px'}}>{propertText}</h1>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <h1 style={{ fontSize: '26px', paddingTop: '5px', fontWeight: '500' }}>{carpetInput}  | </h1>
                    <h1 style={{ fontSize: banner9getLocationFontSize(), width: '230px', float: 'left', marginLeft: '5px', fontWeight: '500', paddingTop: '7px', whiteSpace: 'nowrap' }}>{LocationInput}</h1>
                    </div>
                    
                </div>

                <img src={require('../assets/banner-9.png')} style={styles.cruveImgBanner1}/>
                <div style={styles.banner9priceStar}>
                      <div style={{position: 'relative'}}>
                        <p style={styles.banner9priceText}>{priceInput}</p>
                      </div>
                </div>
            </div>
          </div>

          {/* banner 10 */}  
          <div className='bg-color' ref={componentRefs[9]} style={{width: '468px', height: '60px'}}>
            <div style={styles.banner10}>
                  <div style={{ backgroundImage: `url(${selectedImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '60%', height: '100%', position: 'relative', left: '187px' }}></div>
                <div style={styles.textonbanner10}>
                
                <Draggable><h1 style={{ fontSize: banner10getFontSize(), marginBottom: '2px', marginTop: banner10getMargin(), lineHeight: '12px', width: '100px'}}>{propertText}</h1></Draggable>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '105px'}}>
                    <Draggable><h1 style={{ fontSize: '12px', paddingTop: '0px', fontWeight: '500', margin: '5px' }}>{carpetInput}   </h1></Draggable>
                    <Draggable><h1 style={{ fontSize: banner10getLocationFontSize(),  float: 'left', margin: '0px', fontWeight: '500', textAlign: 'center' }}>{LocationInput}</h1></Draggable>
                    </div>
                    
                </div>

                <img src={require('../assets/banner-10.png')} style={styles.cruveImgBanner1}/>
                <div style={styles.banner10priceStar}>
                      <div style={{position: 'relative'}}>
                        <p style={styles.banner10priceText}>{priceInput}</p>
                      </div>
                </div>
            </div>
          </div>


          {/* banner 11 */}  
          <div className='bg-color' ref={componentRefs[10]} style={{width: '728px', height: '90px'}}>
            <div style={styles.banner11}>
                  <div style={{ backgroundImage: `url(${selectedImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '60%', height: '100%', position: 'relative', left: '291px' }}></div>
                <div style={styles.textonbanner11}>
                
                <Draggable><h1 style={{ fontSize: banner11getFontSize(), marginBottom: '2px', marginTop: banner11getMargin(), lineHeight: '20px', width: '160px'}}>{propertText}</h1></Draggable>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '153px'}}>
                    <Draggable><h1 style={{ fontSize: '19px', paddingTop: '0px', fontWeight: '500', margin: '5px' }}>{carpetInput}   </h1></Draggable>
                    <Draggable><h1 style={{ fontSize: banner11getLocationFontSize(),  float: 'left', margin: '0px', fontWeight: '500', textAlign: 'center' }}>{LocationInput}</h1></Draggable>
                    </div>
                    
                </div>

                <img src={require('../assets/banner-11.png')} style={styles.cruveImgBanner1}/>
                <div style={styles.banner11priceStar}>
                      <div style={{position: 'relative'}}>
                        <p style={styles.banner11priceText}>{priceInput}</p>
                      </div>
                </div>
            </div>
          </div>

          {/* banner 12 */}  
          <div className='bg-color' ref={componentRefs[11]} style={{width: '970px', height: '90px'}}>
            <div style={styles.banner12}>
                  <div style={{ backgroundImage: `url(${selectedImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '60%', height: '100%', position: 'relative', left: '387px' }}></div>
                <div style={styles.textonbanner12}>
                
                <Draggable><h1 style={{ fontSize: banner12getFontSize(), marginBottom: '2px', marginTop: banner12getMargin(), lineHeight: '20px', width: '170px'}}>{propertText}</h1></Draggable>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '215px'}}>
                    <Draggable><h1 style={{ fontSize: '19px', paddingTop: '0px', fontWeight: '500', margin: '5px' }}>{carpetInput}   </h1></Draggable>
                    <Draggable><h1 style={{ fontSize: banner12getLocationFontSize(),  float: 'left', margin: '0px', fontWeight: '500', textAlign: 'center' }}>{LocationInput}</h1></Draggable>
                    </div>
                    
                </div>

                <img src={require('../assets/banner-12.png')} style={styles.cruveImgBanner1}/>
                <div style={styles.banner12priceStar}>
                      <div style={{position: 'relative'}}>
                        <p style={styles.banner12priceText}>{priceInput}</p>
                      </div>
                </div>
            </div>
          </div>

          {/* banner 13 */}  
          <div className='bg-color' ref={componentRefs[12]} style={{width: '320px', height: '50px'}}>
            <div style={styles.banner13}>
                  <div style={{ backgroundImage: `url(${selectedImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '50%', height: '100%', position: 'relative', left: '160px' }}></div>
                <div style={styles.textonbanner13}>
                
                <Draggable><h1 style={{ fontSize: banner13getFontSize(), marginBottom: '2px', marginTop: banner13getMargin(), lineHeight: '20px', width: '150px'}}>{propertText}</h1></Draggable>
                    <div >
                     
                    <Draggable><h1 style={{ fontSize: banner13getLocationFontSize(),  float: 'left', margin: '0px', fontWeight: '500', width: '148px' }}>{LocationInput}</h1></Draggable>
                    </div>
                    
                </div>

                <img src={require('../assets/banner-13.png')} style={styles.cruveImgBanner1}/>
                <div style={styles.banner13priceStar}>
                      <div style={{position: 'relative'}}>
                        <p style={styles.banner13priceText}>{priceInput}</p>
                      </div>
                </div>
            </div>
          </div>

          {/* banner 5 */}  
          <div className='bg-color' ref={componentRefs[4]} style={{width: '1200px', height: '628px'}}>
            <div style={styles.banner5}>
                  <div style={{ backgroundImage: `url(${selectedImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }}></div>
                <div style={styles.textonbanner5}>
                
                    <h1 style={{ fontSize: banner5getFontSize()}}>{propertText}</h1>
                    <h1 style={{ fontSize: '30px', paddingTop: '15px' }}>{carpetInput}</h1>
                    <h1 style={{ fontSize: banner5getLocationFontSize(), width: '252px', float: 'right' }}>{LocationInput}</h1>
                </div>

                <img src={require('../assets/banner-5.png')} style={styles.cruveImgBanner1}/>
                <div style={styles.banner5priceStar}>
                      <div style={{position: 'relative'}}>
                        <p style={styles.banner5priceText}>{priceInput}</p>
                      </div>
                </div>
            </div>
          </div>






           

          
         
            
          </div>



      </div>
  );
}


const styles = {
  container: {
    display: 'flex',
    flexDirection : 'row',
    width: '100%',
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
    width: '100%',
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
    background : '#3c4c8a',
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
  },
  banner2:{
    width: "200px",
    height: "200px",
    border: "1px solid red",
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  textonbanner2:{
    zIndex: 1,
    position: 'absolute',
    top: '13px',
    right: '9px',
    textAlign: 'end',
    width: '85px'
  },
  banner2priceText: {
    fontSize: '9px',
    color: '#000',
    lineHeight: '10px',
    fontWeight: '600',
    width: '50px',
    textAlign: 'center'
  },
  banner2priceStar:{
    position: 'absolute',
    left: '39%',
    top: '37%',
    width: '75px',
    height: '75px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  banner3:{
    width: "300px",
    height: "250px",
    border: "1px solid red",
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  textonbanner3:{
    zIndex: 1,
    position: 'absolute',
    top: '30px',
    right: '9px',
    textAlign: 'end',
    width: '140px'
  },
  banner3priceText: {
    fontSize: '11px',
    color: '#000',
    lineHeight: '10px',
    fontWeight: '600',
    width: '50px',
    textAlign: 'center'
  },
  banner3priceStar:{
    position: 'absolute',
    left: '45%',
    top: '39%',
    width: '75px',
    height: '75px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  banner4:{
    width: "336px",
    height: "280px",
    border: "1px solid red",
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  textonbanner4:{
    zIndex: 1,
    position: 'absolute',
    top: '30px',
    right: '9px',
    textAlign: 'end',
    width: '140px'
  },
  banner4priceText: {
    fontSize: '11px',
    color: '#000',
    lineHeight: '10px',
    fontWeight: '600',
    width: '50px',
    textAlign: 'center'
  },
  banner4priceStar:{
    position: 'absolute',
    left: '43%',
    top: '39%',
    width: '75px',
    height: '75px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  banner5:{
    width: "1200px",
    height: "628px",
    border: "1px solid red",
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  textonbanner5:{
    zIndex: 1,
    position: 'absolute',
    top: '75px',
    right: '40px',
    textAlign: 'end',
    width: '340px'
  },
  banner5priceText: {
    fontSize: '30px',
    color: '#000',
    lineHeight: '27px',
    fontWeight: '600',
    width: '200px',
    textAlign: 'center'
  },
  banner5priceStar:{
    position: 'absolute',
    left: '67%',
    top: '50%',
    width: '75px',
    height: '75px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  banner6:{
    width: "300px",
    height: "600px",
    border: "1px solid red",
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  textonbanner6:{
    zIndex: 1,
    position: 'absolute',
    top: '41px',
    right: '30px',
    textAlign: 'end',
    width: '180px'
  },
  banner6priceText: {
    fontSize: '16px',
    color: '#000',
    lineHeight: '15px',
    fontWeight: '600',
    width: '80px',
    textAlign: 'center'
  },
  banner6priceStar:{
    position: 'absolute',
    left: '58%',
    top: '38%',
    width: '75px',
    height: '75px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  banner7:{
    width: "160px",
    height: "600px",
    border: "1px solid red",
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    boxSizing: 'border-box'
  },
  textonbanner7:{
    zIndex: 1,
    position: 'absolute',
    top: '22px',
    right: '15px',
    textAlign: 'end',
    width: '140px'
  },
  banner7priceText: {
    fontSize: '13px',
    color: '#000',
    lineHeight: '15px',
    fontWeight: '600',
    width: '80px',
    textAlign: 'center'
  },
  banner7priceStar:{
    position: 'absolute',
    left: '42%',
    top: '33%',
    width: '75px',
    height: '75px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  banner8:{
    width: "320px",
    height: "100px",
    border: "1px solid red",
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  textonbanner8:{
    zIndex: 1,
    position: 'absolute',
    top: '-2px',
    left: '9px',
    textAlign: 'start',
    width: '150px'
  },
  banner8priceText: {
    fontSize: '9px',
    color: '#000',
    lineHeight: '9px',
    fontWeight: '600',
    width: '60px',
    textAlign: 'center'
  },
  banner8priceStar:{
    position: 'absolute',
    left: '45%',
    top: '10%',
    width: '75px',
    height: '75px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  banner9:{
    width: "970px",
    height: "250px",
    border: "1px solid red",
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  textonbanner9:{
    zIndex: 1,
    position: 'absolute',
    top: '25px',
    left: '55px',
    textAlign: 'start',
    width: '390px'
  },
  banner9priceText: {
    fontSize: '18px',
    color: '#000',
    lineHeight: '17px',
    fontWeight: '600',
    width: '90px',
    textAlign: 'center'
  },
  banner9priceStar:{
    position: 'absolute',
    left: '50%',
    top: '35%',
    width: '75px',
    height: '75px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  banner10:{
    width: "468px",
    height: "60px",
    border: "1px solid red",
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    
  },
  textonbanner10:{
    zIndex: 1,
    position: 'absolute',
    top: '5px',
    left: '10px',
    textAlign: 'start',
    width: '390px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  banner10priceText: {
    fontSize: '8px',
    color: '#000',
    lineHeight: '10px',
    fontWeight: '600',
    width: '40px',
    textAlign: 'center'
  },
  banner10priceStar:{
    position: 'absolute',
    left: '43%',
    top: '-15%',
    width: '75px',
    height: '75px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  banner11:{
    width: "728px",
    height: "90px",
    border: "1px solid red",
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    
  },
  textonbanner11:{
    zIndex: 1,
    position: 'absolute',
    top: '10px',
    left: '25px',
    textAlign: 'start',
    width: '390px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  banner11priceText: {
    fontSize: '14px',
    color: '#000',
    lineHeight: '13px',
    fontWeight: '600',
    width: '50px',
    textAlign: 'center'
  },
  banner11priceStar:{
    position: 'absolute',
    left: '47%',
    top: '5%',
    width: '75px',
    height: '75px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  banner12:{
    width: "970px",
    height: "90px",
    border: "1px solid red",
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    
  },
  textonbanner12:{
    zIndex: 1,
    position: 'absolute',
    top: '10px',
    left: '25px',
    textAlign: 'start',
    width: '390px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  banner12priceText: {
    fontSize: '14px',
    color: '#000',
    lineHeight: '13px',
    fontWeight: '600',
    width: '50px',
    textAlign: 'center'
  },
  banner12priceStar:{
    position: 'absolute',
    left: '48%',
    top: '12%',
    width: '75px',
    height: '75px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  banner13:{
    width: "320px",
    height: "50px",
    border: "1px solid red",
    display: 'flex',
    flexDirection: 'cloumn',
    position: 'relative',
    
  },
  textonbanner13:{
    zIndex: 1,
    position: 'absolute',
    top: '0px',
    left: '8px',
    textAlign: 'start',
    width: '390px',
   
    alignItems: 'center',
    
  },
  banner13priceText: {
    fontSize: '9px',
    color: '#000',
    lineHeight: '10px',
    fontWeight: '600',
    width: '40px',
    textAlign: 'center'
  },
  banner13priceStar:{
    position: 'absolute',
    left: '43%',
    top: '-22%',
    width: '75px',
    height: '75px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
};

export default Home;

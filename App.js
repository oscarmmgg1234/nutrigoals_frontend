import React from 'react';
import Root from './Src/core';
import { get_bool_data, save_bool_data } from './Src/Utilities/local_storage';
import { navigation_key } from './Src/Constants';


const App = () => {
  const [initAPP, setInit] = React.useState(false)
console.disableYellowBox = true;
  React.useEffect(async ()=>{
    let response = await get_bool_data(navigation_key);
    if(response === true){
      setInit(true)
    }
  }, [])

  return (
    <>
  
      <Root init={initAPP} setInitialS={setInit}/>
   
    </>
  );
};
export default App;

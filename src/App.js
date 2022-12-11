import './App.css';
import { useMediaQuery } from './hooks/useMediaQuery';

const renderDeviceSizeText = (isTabletOrSmaller, isPhoneScreen) => {
  if(isTabletOrSmaller === false) {
    return <h1>Desktop</h1>
  } else if (isTabletOrSmaller === true && isPhoneScreen === false){
    return <h1>Tablet</h1>
  } else {
    return <h1>Mobile</h1>
  }
}

function App() {

  const isTabletOrSmaller = useMediaQuery('(max-width: 768px');
  const isPhoneScreen = useMediaQuery('(max-width: 480px)');

  return (
    <div>
      {
        renderDeviceSizeText(isTabletOrSmaller, isPhoneScreen)
      }
    </div>
  );
}

export default App;

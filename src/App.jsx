import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addComponent } from './reducers/universalSwitchSlice';
import UniversalSwitch from './components/UniversalSwitch';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      addComponent({
        type: 'SHIFTING_BOX', 
        portalRoot: 'portal-root-shiftingbox',
      })
    );
  }, [dispatch]);

  return (
    <main>
      <UniversalSwitch />
    </main>
  )
}

export default App

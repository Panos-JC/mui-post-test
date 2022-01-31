import { BasicButton } from './ui/BasicButton/BasicButton';
import '../styles/main.css';

function App() {
  return (
    <div className="App">
      <BasicButton label="This is a button" variant="primary" />
      <BasicButton
        label="This is a button"
        variant="primary"
        subline="Test"
      />
      <BasicButton label="Back" variant="primary" inverted />

      <BasicButton label="Test" variant="secondary" />
      <BasicButton label="Test" variant="secondary" subline="Test" />
      <BasicButton label="Back" variant="secondary" inverted />

      <BasicButton label="Test" variant="secondary" disabled />
      <BasicButton
        label="Test"
        variant="secondary"
        subline="Test"
        disabled
      />
      <BasicButton
        label="Back"
        variant="secondary"
        inverted
        disabled
      />

      <BasicButton
        label="This is a button"
        variant="primary"
        disabled
      />
      <BasicButton
        label="This is a button"
        variant="primary"
        subline="Test"
        disabled
      />
      <BasicButton label="Back" variant="primary" inverted disabled />
    </div>
  );
}

export default App;

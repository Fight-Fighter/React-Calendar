import logo from './logo.svg';
import './App.css';
import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';

function App() {
  return (
    <div className="App">
      <ScheduleComponent>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]}> </Inject>
      </ScheduleComponent>
    </div>
  );
}

export default App;

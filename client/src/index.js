import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserDiary from "./training_diary/UserDiary";
import DiaryDiary from "./training_diary/DiaryDiary";
import CyclesDiary from "./training_diary/CyclesDiary";
import PlansDiary from "./training_diary/PlansDiary";
import InfoDiary from "./training_diary/InfoDiary";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserDiary(),
        cycle: new CyclesDiary(),
        diary: new DiaryDiary(),
        info: new InfoDiary(),
        plans: new PlansDiary(),

    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

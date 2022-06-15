import {
    AUTHSPORTSMAN_ROUTE, AUTHTRAINER_ROUTE, CYCLES_ROUTE,
    DIARY_ROUTE,
    INFOSPORTSMAN_ROUTE,
    INFOTRAINER_ROUTE,
    LOGIN_ROUTE,
    PLANS_ROUTE,
    REGISTRATION_ROUTE
} from "./utils/consts";
import Plans from "./pages/Plans";
import Diary from "./pages/Diary";
import Auth from "./pages/Auth";
import InfoSportsman from "./pages/InfoSportsman";
import InfoTrainer from "./pages/InfoTrainer";
import AuthSportsman from "./pages/AuthSportsman";
import AuthTrainer from "./pages/AuthTrainer";
import Cycles from "./pages/Cycles";


export const authRoutes = [
    {
        path : DIARY_ROUTE,
        Component: Diary
    },
    {
        path: PLANS_ROUTE,
        Component: Plans
    },
    {
      path: CYCLES_ROUTE,
        Component: Cycles
    },
    {
        path: INFOSPORTSMAN_ROUTE,
        Component: InfoSportsman
    },
    {
        path: INFOTRAINER_ROUTE,
        Component: InfoTrainer
    },
    {
        path: AUTHSPORTSMAN_ROUTE,
        Component: AuthSportsman
    },
    {
        path: AUTHTRAINER_ROUTE,
        Component: AuthTrainer
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]

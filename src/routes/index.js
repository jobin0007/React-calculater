import Calculater from "../pages/Calculater";
import Stopwatch from "../pages/Stopwatch";

const { createBrowserRouter } = require("react-router-dom");
const { default: App } = require("../App");
const { default: Home } = require("../pages/Home");

const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        {
            path: "",
            element: <Home />
        },
        {
            path: "stopwatch",
            element: <Stopwatch />
        },
        {
            path: "calculater",
            element: <Calculater />
        }
    ]
}])
export default router
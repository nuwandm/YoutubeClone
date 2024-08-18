import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Body />,
		children: [
			{
				path: "/",
				element: <MainContainer />,
			},
			{
				path: "/watch",
				element: <WatchPage />,
			},
		],
	},
]);

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Header className="fixed top-0 left-0 w-full z-20" />
				<div className="h-screen overflow-y-auto">
					<RouterProvider router={appRouter} />
				</div>
			</div>
		</Provider>
	);
}

export default App;

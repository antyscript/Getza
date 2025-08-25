import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
//import Products from "./pages/Products.js";
//import Profile from "./pages/Profile.js";
//import Market from "./pages/Market.js";
function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						{/*		<Route path="/products" element={<Products />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/matket" element={<Market />} />*/}
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;

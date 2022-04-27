import {Navbar, Welcome, Footer, Loader, Services, Transactions} from "./components";

export const App = () => {
  return (
      <div className='min-h-screen'>
        <div className="gradient-bg-welcome">
            <Navbar/>
            <Welcome/>
        </div>
          <Services/>
          <Transactions/>
          <Footer/>
      </div>
  )
}
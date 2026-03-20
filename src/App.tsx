import './App.css'
import Map from './components/Map'
import pusztafalu from './assets/pusztafalu.jpg';
import nagymilic from './assets/nagy-milic.jpg';
import fuzer from './assets/fuzer.jpg';

function App() {
    return (
        <div className="container-fluid vh-100 d-flex flex-column p-0">
            <div className="border-bottom p-2">
                <h5 className="m-0">Totally original and not copied hikig app</h5>
            </div>
            <div className="row flex-grow-1 g-0 overflow-hidden">
                <div className="col-md-2 border-end p-2 overflow-scroll vh-100">
                    <img src={pusztafalu} class="img-fluid" alt="..." />
                    <img src={nagymilic} class="img-fluid" alt="..."/>
                    <img src={fuzer} class="img-fluid" alt="..."/>
                </div>
                <div className="col-8 col-md-9 p-0">
                    <Map/>
                </div>
            </div>
            <div className="border-top p-2 text-center">
                Copyright 2026
            </div>
        </div>
    )
}

export default App
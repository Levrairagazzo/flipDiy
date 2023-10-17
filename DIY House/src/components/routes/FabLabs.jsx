import NavBar from "../NavBar";
import carteFabLabs from '../../assets/CarteFabLab.png'
import SearchBar2 from "../CustomizedInputBase";

function Fablabs() {
    return (
        <>
        <NavBar/>
        <section className="fabLabs">
        <h1>Les FabLabs près de chez moi</h1>
        <SearchBar2/>
        <img src={carteFabLabs} alt="carte_fab_labs" width={'75%'}/>
        </section>
        </>
      );
}

export default Fablabs;
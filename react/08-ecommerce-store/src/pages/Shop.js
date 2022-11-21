import classes from './Shop.module.scss';
import Filters from "../components/Filters"
import Listings from "../components/Listings"

// function Shop(props) {
function Shop({ listings }) { // destructuring: { listings } = props.listings

  const filteredData = (filter) => {
    console.log(filter)
    // listings = listings.filter(product =>
    //   product.price <= filter.price &&
    //   product.rating <= filter.rating
    // )
  }

  return (
    <div className={classes.Shop}>
      <Filters handleFilterData={filteredData} />
      <Listings products={listings} />
    </div>
  );
}

export default Shop;

// destructuring

// let { title } = {
//   title: 'Ram',
//   class: 'X'
// }


// REDUX/CONTEXT API > A SINGLE PLACE OF STORAGE


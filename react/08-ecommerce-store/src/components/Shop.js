import classes from './Shop.module.scss';
import Filters from "./Filters"
import Listings from "./Listings"

// function Shop(props) {
function Shop({ listings }) { // destructuring: { listings } = props.listings
  console.log(listings)
  return (
    <div className={classes.Shop}>
      <Filters />
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


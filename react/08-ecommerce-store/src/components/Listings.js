import classes from './Listings.module.scss';

function Listings({ products }) {
  return (
    <div className={classes.Listings}>
      <h3>Products Listings</h3>
      {/* <ul>
        {
          products.map(product => <li key={product.id}>{product.title}</li>)
        }
      </ul> */}

      <ul>
        {products.map((product, i) => (i < 12) &&
          <li key={product.id}>
            <p className={classes.title}>{product.title}
              <span className={classes.category}>{product.category}</span>
            </p>

            <p className={classes.description}>{product.description}</p>
            <p className={classes.price}>{product.price}</p>
            <p className={classes.rating}>{product.rating}</p>
            <br />
          </li>
        )}
      </ul>

      <div className={classes.pagination}>
        <button>Previous Page</button>
        <button>Next Page</button>
      </div>
    </div>
  );
}

export default Listings;

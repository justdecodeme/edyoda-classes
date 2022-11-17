import { useState } from "react"
// import classes from './Listings.module.scss';
import "./Listings.scss"

function Listings({ products }) {
  const [page, setPage] = useState(1)

  let totaPages = Math.ceil(products.length / 12)

  const updatePage = (value) => {
    setPage(page + value)
  }

  return (
    <div className="Listings">
      <h3>Products</h3>
      <div className="pagination">
        <button disabled={page == 1} onClick={() => updatePage(-1)}>Previous Page</button>
        <button disabled={page == totaPages} onClick={() => updatePage(1)}>Next Page</button>
        <p>Page {page} of {totaPages}</p>
      </div>

      <ul>
        {products.map((product, i) => (i >= 12 * (page - 1) && i < (12 * page)) &&
          <li key={product.id}>
            {/* <div className="image"> */}
            <div className="image">
              <span style={{ backgroundImage: `url(${product.thumbnail})` }}></span>
              <span className="background" style={{ backgroundImage: `url(${product.thumbnail})` }}></span>
            </div>
            <p className="title" title={product.title}>
              <span className="ellipsis">{product.title}</span>
              <span className="category ellipsis" title={product.category}>{product.category}</span>
            </p>

            <p className="description ellipsis" title={product.description}>{product.description}</p>
            <p className="price_rating">
              <span>Price: ₹{product.price}</span>
              <span>Rating: {product.rating}</span>
            </p>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Listings;

// Products: 30(0 - 29)
// Each page: 12 products
// p = 1 (0,1,2,...10,11)  i = 0
// i >= 12 * (p - 1) && i < (12 * p)
// p = 2 (12 - 23) i = 1
// i >= 12 * (p - 1) && i < (12 * p)
// p = 3 (24 - 35) i = 2
// i >= 12 * (p - 1) && i < (12 * p)

// 36 / 12 = 4 pages
// 37 / 12 = 4.xx = 5 pages

// currentPage =
//   totalPages = Math.ceil(length / 12)
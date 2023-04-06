import { useState, useEffect } from "react"
import classes from './Filters.module.scss';

function Filters({ handleFilterData }) {
  const [filters, setFilters] = useState({ price: 0, rating: 0 })

  const handlePrice = (value) => {
    // setFilters({
    //   price: 0,
    //   rating: filters.rating,
    //   discount: filters.discount,
    //   color: filters.color
    // })
    setFilters({ ...filters, price: value })
  }

  const handleRating = (value) => {
    setFilters({ ...filters, rating: value })
  }

  useEffect(() => {
    handleFilterData(filters)
  }, [filters])

  // console.log(filters)

  return (
    <div className={classes.Filters}>
      <h3>Filters</h3>

      <ul>
        <li>
          <p>Price</p>
          {/* TODO: `max` value should dynamic */}
          <input type="range" min="0" max="1000" onChange={(e) => handlePrice(e.target.value)} />
        </li>
        <li>
          <p>Rating</p>
          <input type="range" min="0" max="5" onChange={(e) => handleRating(e.target.value)} />
        </li>
      </ul>
    </div>
  );
}

export default Filters;

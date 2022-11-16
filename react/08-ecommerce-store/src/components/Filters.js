import classes from './Filters.module.scss';

function Filters() {
  return (
    <div className={classes.Filters}>
      <h3>Filters</h3>

      <ul>
        <li>
          <p>Price</p>
          {/* TODO: `max` value should dynamic */}
          <input type="range" min="0" max="1000" />
        </li>
        <li>
          <p>Rating</p>
          <input type="range" min="0" max="5" />
        </li>
      </ul>
    </div>
  );
}

export default Filters;

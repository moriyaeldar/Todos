export function TodoFilter({onChangeFilter}) {
  return (
    <div className="filter">
      <label id="filter" htmlFor="filter">
        Filter:
      </label>
      <select
        name="filter"
        id="filter"
        onChange={(ev) =>{onChangeFilter(ev.target.value)}}
      >
        <option value="All">All</option>
        <option value="Active">Active</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
}

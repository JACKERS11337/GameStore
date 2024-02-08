import "./style.scss";
import filterData from "../../data/filter.json";

export const Filter = () => {
  return (
    <div className="filter-container">
      <div className="filter-content">
        <div>
          {filterData.map((item) => {
            return (
              <div key={item.filterParam}>
                <h4>{item.filterName}</h4>
                <form>
                  {item.type === "checkbox"
                    ? item.options.map((option) => {
                        return (
                          <label key={option.value}>
                            <input
                              value={option.value}
                              name={item.filterName}
                              type={"checkbox"}
                            />
                            <span>{option.name}</span>
                          </label>
                        );
                      })
                    : item.options.map((option) => {
                        return (
                          <label key={option.value}>
                            <input
                              value={option.value}
                              name={item.filterName}
                              type={"radio"}
                            />
                            <span>{option.name}</span>
                          </label>
                        );
                      })}
                </form>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

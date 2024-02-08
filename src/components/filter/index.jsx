import "./style.scss";
import filterData from "../../data/filter.json";

export const Filter = () => {
  return (
    <div className="filter-container">
      <div className="filter-content">
        <div>
          {filterData.map((item) => {
            return (
              <div>
                <h4>{item.filterName}</h4>
                <div>
                  {item.type === "checkbox"
                    ? item.options.map((option) => {
                        return (
                          <label>
                            <input value={option.value} type={"checkbox"} />
                            <span key={option.name}>{option.name}</span>
                          </label>
                        );
                      })
                    : item.options.map((option) => {
                        return (
                          <label>
                            <input value={option.value} type={"radio"} />
                            <span>{option.name}</span>
                          </label>
                        );
                      })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const SelectOptions = ({
  arr,
  text,
  op = null,
  value,
  onChangeSetting,
  property,
}) => {
  return (
    <div className="select-options">
      <h6 style={{ color: 'white' }}>{text}</h6>
      <select
        className="browser-default"
        value={JSON.stringify(value)}
        onChange={(e) => onChangeSetting(JSON.parse(e.target.value), property)}
      >
        {arr.map((el, idx) => (
          <option value={JSON.stringify(el)} key={idx}>
            {op === null ? el : el[op]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOptions;

const IO = ({ type, fontSize, out, onInputChange, inp }) => {
  return (
    <div className={type}>
      <div className={`${type}-head`}>
        <h6>
          <strong style={{ textTransform: 'capitalize' }}>{type}</strong>
        </h6>
      </div>
      {out ? (
        <textarea
          name={`${type}-text-area`}
          value={out}
          style={{ fontSize: fontSize }}
        />
      ) : (
        <textarea
          value={inp}
          name={`${type}-text-area`}
          onChange={onInputChange}
          style={{ fontSize: fontSize }}
        />
      )}
    </div>
  );
};

export default IO;

const socketHandler = (
  socket,
  setCode,
  setStdin,
  setStdop,
  setSetting,
  setting,
  query
) => () => {
  console.log('connected');
  socket.emit('join', query.id);
  socket.on('new-code', (data) => {
    setCode(data);
  });
  socket.on('stdin', (data) => {
    setStdin(data);
  });
  socket.on('stdout', (data) => {
    setStdop(data);
  });
  socket.on('lang-change', (value) => {
    let newSetting = { ...setting };
    newSetting['lang'] = value;
    setSetting(newSetting);
  });
  socket.on('typing', (name) => console.log(`${name} is typing`));
};

export default socketHandler;

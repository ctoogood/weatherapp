const dateFormatter = (dateProp) => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const month = monthNames[dateProp.getMonth()];
  const day = daysOfWeek[dateProp.getDay()];
  const date = dateProp.getDate();

  return (
    `${day} ${date} ${month}`
  );
};

export default dateFormatter;

const availableTimesByDate = {
    '2024-01-31': ['17:00', '18:00', '19:00'],
    '2024-02-01': ['17:00', '18:00', '19:00'],
    '2024-02-02': ['20:00', '21:00', '22:00'],
    '2024-02-03': ['17:00', '18:00', '19:00'],
    '2024-02-04': ['20:00', '21:00', '22:00'],
    '2024-02-05': ['17:00', '18:00', '19:00'],
    '2024-02-06': ['20:00', '21:00', '22:00'],
    '2024-02-07': ['17:00', '18:00', '19:00'],
    '2024-02-08': ['20:00', '21:00', '22:00'],
    '2024-02-09': ['17:00', '18:00', '19:00'],
    '2024-02-10': ['20:00', '21:00', '22:00'],
    '2024-02-11': ['17:00', '18:00', '19:00'],
    '2024-02-12': ['20:00', '21:00', '22:00'],
    '2024-02-13': ['17:00', '18:00', '19:00'],
    '2024-02-14': ['20:00', '21:00', '22:00'],
    '2024-02-15': ['17:00', '18:00', '19:00'],
    '2024-02-16': ['20:00', '21:00', '22:00'],
    '2024-02-17': ['17:00', '18:00', '19:00'],
    '2024-02-18': ['20:00', '21:00', '22:00'],
    '2024-02-19': ['17:00', '18:00', '19:00'],
    '2024-02-20': ['20:00', '21:00', '22:00'],
  };


  const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(availableTimesByDate[date]){
                resolve(availableTimesByDate[date])
            }
            else{
                reject(new Error('No available times for the selected date.'));
            }
        } , 1000)
    })
  }

  const submitAPI = (formData) => {

    availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true);
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000);
    });
  };

  export{fetchAPI,submitAPI}
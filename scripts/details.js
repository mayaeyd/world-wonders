const wonderIndex = localStorage.getItem('wonder-index');



axios.get('https://www.world-wonders-api.org/v0/wonders')
    .then(response => {
        result=response.data[wonderIndex];
        console.log("object: ",result,"index: ", wonderIndex);  
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
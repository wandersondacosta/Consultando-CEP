const cep = document.querySelector("#cep");
const showData = result => {
  for(const camp in result){
    if(document.querySelector("#"+camp)) {       
      document.querySelector("#"+camp).value = result[camp];
    }
  }
}
cep.addEventListener('blur', event => {
  let search = cep.value.replace('-','');
  const options ={
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  }
  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
  .then(response => {
    response.json()
    .then(data => {
      showData(data);
    })
  })
  .catch(err => {
    console.log('Falhou', err.message)
  });
});
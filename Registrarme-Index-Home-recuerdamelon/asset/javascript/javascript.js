console.log("Hola Melon!!");

//Search Task Controllers //
const navbarAutocomplete = document.querySelector('#navbar-search-autocomplete');
const navbarData = ['Search all', 'Work', 'Bussines', 'Events', 'Name user']; //Name user: se actualiza la lista los nombres d usuarios con tareas en común
const navbarDataFilter = (value) => {
  return navbarData.filter((item) => {
    return item.toLowerCase().startsWith(value.toLowerCase());
  });
};

new mdb.Autocomplete(navbarAutocomplete, {
  filter: navbarDataFilter,
});
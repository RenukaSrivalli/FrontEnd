const menu=document.getElementById('menu');
const sidebar=document.querySelector('.sidebar')
menu.addEventListener('click',function(){
    sidebar.classList.toggle('show-sidebar');
});
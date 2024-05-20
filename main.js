mainForm = document.getElementById('mainForm');
orderShow = document.getElementById('orderShow');

tableForm = document.getElementById('tableForm');
orderForm = document.getElementById('orderForm');
tableData = [];
orderData = [];
index = 0;

mainForm.addEventListener('submit',function(e){
    e.preventDefault();
    tableData[index] = tableForm.value;
    orderData[index] = orderForm.value;
    orderShow.innerHTML = `
    
        <div class="fs-4 text-center">` + orderShow.innerHTML + `A mesa <b>` + tableData[index]+ `</b> Pediu <b>` + orderData[index] + `</b></div><br>`;
        index = index + 1;
    
});
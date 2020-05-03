url = 'https://occupassion.herokuapp.com';

header = {
  headers: {
    api_key : 'VbQDbT3ninCzbfcVnd69' 
  }
 }

function registerEmployee() {
    fname = document.getElementById('fname1').value;
    lname = document.getElementById('lname1').value;
    email = document.getElementById('email1').value;
    // alert(fname+' '+lname+' '+email)
    document.getElementById('emp').innerHTML=`<div class="loader"></div>`;
    document.getElementById('hir').innerHTML=`<div class="loader"></div>`;

    axios.post(`${url}/talent/save`,{
      fname,
      lname,
      email
    },
    header
    )
    .then(res=>{
      
      if(res.data.success){
        window.location.href = './thankyou.html';
      }
      else{
        alert('Try again')
        window.location.href = './';
      }
    })
    return false;
  }

  function registerHirer() {

    fname = document.getElementById('fname2').value;
    lname = document.getElementById('lname2').value;
    email = document.getElementById('email2').value;
    company = document.getElementById('c').value;
    companyrole = document.getElementById('cp').value;
    phone = document.getElementById('con').value;
    
    document.getElementById('hir').innerHTML=`<div class="loader"></div>`;

    axios.post(`${url}/employer/save`,{
      fname,
      lname,
      email,
      company,
      companyrole,
      phone
    },
    header)
    .then(res=>{
      if(res.data.success){
        window.location.href = './thankyou.html';
      }
      else{
        alert('Try again')
        window.location.href = './';
      }
      
    })
    
    return false;
  }
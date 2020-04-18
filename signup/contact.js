function registerEmployee() {
    fname = document.getElementById('fname1').value;
    lname = document.getElementById('lname1').value;
    email = document.getElementById('email1').value;
    // alert(fname+' '+lname+' '+email)
    document.getElementById('emp').innerHTML=`<div class="loader"></div>`;
    setTimeout(()=>{
        // alert('3sec')
        window.location.href = 'thankyou.html'
    },3000)
    // window.location.href = 'thankyou.html'
    return false;
  }

  function registerHirer() {
    fname = document.getElementById('fname2').value;
    lname = document.getElementById('lname2').value;
    email = document.getElementById('email2').value;
    company = document.getElementById('c').value;
    companyRole = document.getElementById('cp').value;
    // alert(fname+' '+lname+' '+email)
    document.getElementById('hir').innerHTML=`<div class="loader"></div>`;
    setTimeout(()=>{
        // alert('3sec')
        window.location.href = 'thankyou.html'
    },3000)
    // window.location.href = 'thankyou.html'
    return false;
  }
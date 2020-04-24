url = 'https://occupassion.herokuapp.com'

function showTalentEmployer(){
    // document.getElementById('talent').innerHTML = `<center> <div class="loader"></div> </center>`
    if(!getStorage('admin')){
        logout()
    }   
    axios.get(`${url}/talent/get`)
    .then(res=>{
        if(res.data.success){
        str=''
        res.data.data.map(d=>{
            str+=`<tr>
            <td><a href="#">${d.fname}</a></td>
            <td>${d.lname}</td>
            <td>${d.email}</td>
        </tr>`
        })
        document.getElementById('talent').innerHTML = str
    }else{
        alert('try again')
    }

    })
    .catch(e=>{
        alert('Try Again')
    })

    axios.get(`${url}/employer/get`)
    .then(res=>{
        if(res.data.success){
        str=''
        res.data.data.map(d=>{
            str+=`<tr>
            <td><a href="#">${d.fname}</a></td>
            <td>${d.lname}</td>
            <td>${d.email}</td>
            <td>${d.company}</td>
            <td>${d.companyrole}</td>
            <td>${d.phone}</td>
        </tr>`
        })
        document.getElementById('employer').innerHTML = str
    }else{
        alert('Try again')
    }
    })
    .catch(e=>{
        alert('Try Again')
    })
   
}

function login(){
    name = document.getElementById('name').value 
    pass = document.getElementById('pass').value

    if (name=="admin" && pass=="admin"){
        setStorage('admin',{
            admin : "admin"
        })
        window.location.href = './alldata.html'
    }else{
        alert('check your credentials')
    }
}

function logout(){
    localStorage.clear()
    window.location.href = './'
}
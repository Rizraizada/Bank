document.getElementById('login-submit').
addEventListener('click',function(){

    const emailField  =document.getElementById
    ('user-email');
    const userEmail=emailField.Value;

    const passwordField=document.getElementById
    ('user-pass');
    const userPassword=passwordField.value;

    if(userEmail == 'sontan@gmail.com' &&
     userPassword == 'zahid')
    {
      window.location.href='bank.html';
     //console.log('valid user');
    }
  })
//handel deposit
document.getElementById('deposit-button').addEventListener('click',function(){
  const depositinput = document.getElementById('deposit-input');
  const depositamount =depositinput.value;
  console.log(depositamount);
})
//handel event
  
        const greenButton = document.getElementById
        ('make-green-button');
        greenButton.onclick=function makeGreen(){
            document.body.style.backgroundColor='green'
        }



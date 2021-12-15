//ラジオボタン

const btn = document.getElementById('btn')


btn.addEventListener('click',()=>{ 
  const form = document.forms.myForm;

  form.os.forEach(item => {

    if(item.checked) console.log(item.value);

  })
});


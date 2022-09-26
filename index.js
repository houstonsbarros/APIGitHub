var user = prompt("Digite o nome do usuário do GitHub")

url = `https://api.github.com/users/${user}`

fetch(url)
.then(retorno => retorno.json())
.then(a => document.getElementById('avatar').innerHTML = `<img src='${a.avatar_url}' 
style="height: 280px; border-radius:50%; box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 0.25);"> <br> <p style="font-size: 48px; font-weight: 700;">${a.name} <p>
<p style="margin-top: -40px; font-weight: 400; font-size: 14px;"> ${a.bio}</p>
<p><b>Seguidores:</b> ${a.followers} | <b>Seguindo:</b> ${a.following}`)
const linksSocialMedia = {
  github: 'brunohenri08',
  instagram: 'bruno.henri08',
  youtube: 'rocketseat',
  twitter: 'rocketseat',
  facebook: '100001244193426'
}

function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMedia()

function getGiHubInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userGitHub.href = data.html_url
      userBio.textContent = data.bio
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGiHubInfos()

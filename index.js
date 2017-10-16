const token = '';
const baseAPI = 'https://api.github.com'
const repo = 'mattgellert/javascript-fetch-lab'

function getIssues() {
  fetch(`${baseAPI}/repos/${repo}/issues`,
    {
      headers: {
        Authorization: `token ${token}`
      }
    }).then(resp => resp.json()).then(json => {showIssues(json)})
}

function showIssues(json) {
  json.forEach(issue => {
    $('div#issues').append(`<h3>${issue.title}</h3><p>${issue.body}</p>`)
  })

}

function createIssue() {
  const data = {
    title: document.querySelector('input#title').value,
    body: document.querySelector('input#body').value
  }
  fetch(`${baseAPI}/repos/${repo}/issues`,
    {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        Authorization: `token ${token}`
      }
    }).then(resp => resp.json()).then(json => {getIssues()})
}

function showResults(json) {
  $('div#results').append(`<li><a href='${json.html_url}'>${json.full_name}</a></li>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`${baseAPI}/repos/${repo}/forks`,
  {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(resp => resp.json()).then(json => {showResults(json)})
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

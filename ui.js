class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    }
    showProfile(user){
        // Displays the profile in UI
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
        `;
    }
  // Show user repos
  showRepos(repos){
    let output = '';

    repos.forEach(function(repo){
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>
      `;
    });
    // Output the repos
    document.getElementById('repos').innerHTML = output;
  }
  // Show alert message when a profile isn't found
  showAlert(meg1, megclass){
    // clear current alert first
    this.clearAlert();
    // Create new div element
    const div = document.createElement('div');
    // Add the class names to the div
    div.className = megclass;
    // Append text to the new div
    div.appendChild(document.createTextNode(meg1));
    // Get the parent of the continaer that we want to append the message
    const container = document.querySelector('.searchContainer');
    // Get search box
    const search = document.querySelector('.search');
    // Insert alert
    container.insertBefore(div, search);

    // Set timeout after 3 seconds
    setTimeout(() =>{
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
       currentAlert.remove();
       }
  }
  // clear the profile UI when the search bar is clear
  clearProfile(){
    this.profile.innerHTML = '';
  }
}

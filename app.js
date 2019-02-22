// Init Github
const github = new Github;
// Search input
const searchUser = document.getElementById('searchUser')
// Init UI
const ui = new UI;

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input tect
  const userText = e.target.value;

  if(userText !== ''){
    // Make http call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found'){
          // Show alert
          ui.showAlert('User not found', 'alert alert-danger');
         }else{
          // Show profile
           ui.showProfile(data.profile);
           ui.showRepos(data.repos);
         }
    });
  }else{
    // Clear profile
    ui.clearProfile();
  }
});

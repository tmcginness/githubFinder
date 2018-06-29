// init github
const github = new GitHub;
const ui = new UI;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;
    if(userText !== ''){
        // make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                // Alert profile not found
                ui.showAlert('User Not Found', 'alert alert-danger');
            } else {
                // Show the profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        // clear the profile
        ui.clearProfile();
    }
});


# IEEE-LEAD-5.0

This is a student repository for projects submitted during IEEE LEAD 2024

## Project Structure

Your project should be in a single folder (of your name) which needs to be uploaded in the respective domain folder. There should be no `.git` folders in your project, because `IEEE-LEAD-5.0` is itself a git repository and repositories can't be nested. 

You can look at the final structure of repository from a [repository of previous editions of LEAD](https://github.com/ieeebitmesra/IEEE-LEAD-4.0). Although this year we have multiple domains, the main motive remains the same.  

NOTE: In the README.md file of your project, ensure to include either link to the hosted website or a video demo of your website.

## Submitting your Projects

Before you get started, these are the steps that you need to follow only ONCE at the begining:
- [Fork this repository](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) so that you can make your changes without affecting the original project until you're ready to merge them.
- Go to your forked repository. Notice that the end of the URL should resemble `<your_github_username>/IEEE-LEAD-5.0`.
- Clone your forked repository: Click on the green `Code` button and copy the `HTTPS` URL of the repository.
    - Now, open `gitbash`(or `Terminal`, if you are on UNIX-system) in the folder where you want to clone the repository, and issue the following command:
    ```
    git clone <paste_your_cloned_URL_here>
    ```
    - After cloning is done, confirm that a folder named `IEEE-LEAD-5.0` is present in your current working directory.


Now, Follow the below steps for submitting each Project:
- Copy your project folder.
- Paste it in the local clone of `IEEE-LEAD-5.0`(created in the above steps), inside the respective Project folder.
- Rename your Project folder to your Full name.
- Now, Right-click and open `gitbash` in the `IEEE-LEAD-5.0` folder, and issue the following commands in order:
```
git add .

git commit -m "Your commit message"

git push -u origin main
```
- After pushing your project to github, you need to create a Pull Request to the main IEEE LEAD repository. For that, open your forked repository in browser, and you'll notice a big green button saying “Compare & pull request”. Press it!
- This will open a page in which you’ll be able to further edit the description for your proposed changes. Once, you are done with those, you can click on the "Create Pull Request button", and that's it.
 Congratulations, you just made a new Pull request!!! :fire:

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

# [Exercism Javascript Track](https://exercism.io/my/tracks/javascript)

<div align="center"> 
<img width="10%" height="10%" src="https://github.com/ikostan/Exercism_Python_Track/blob/master/img/exercism-logo.png" hspace="20">
<img width="8%" height="8%" src="https://github.com/ikostan/Exercism_Javascript_Track/blob/master/img/js_logo.svg">
</div>

## Exercism exercises in JavaScript

### About Exercism

Exercism is an online platform designed to help you improve your coding skills through practice and mentorship.

Exercism provides you with thousands of exercises spread across numerous language tracks. Once you start a language track you are presented with a core set of exercises to complete. Each one is a fun and interesting challenge designed to teach you a little more about the features of a language.

You complete a challenge by downloading the exercise to your computer and solving it in your normal working environment. Once you've finished you submit it online and one of our mentors will give you feedback on how you could improve it using features of the language that you may not be familiar with. After a couple of rounds of refactoring, your exercise will be complete and you will unlock both the next core exercise and also a series of related side-exercises for you to practice with.

Exercism is entirely open source and relies on the contributions of thousands of wonderful people.

Exercism is designed to be fun and friendly, and we place a strong emphasis on empathetic communication. 

Sign up and have fun. Exercism is 100% free :)

## Getting Started

We know using a new product can be daunting, and Exercism is a little complicated. So here's a really simple set of instructions to get you started. [Click here for help](https://exercism.io/getting-started)

### [Exercism installation guide](https://exercism.io/cli-walkthrough)

This guide was created in order to help you get started learning with Exercism. Answer a few questions, follow a few instructions, and you should be ready in no time!

### [Installer for the Latest Exercism Windows CLI](https://github.com/exercism/windows-installer/releases/tag/v1.5.3)

### [Configuring the CLI](https://exercism.io/cli-walkthrough)

### Download exercise

* You should now have the CLI installed.
* Download the exercise using:

```bash
exercism download --exercise=<exercise name> --track=python
```

### Submit your solution

* You should now have the CLI installed and the exercise downloaded to your computer.
* Solve the exercise and then upload it using:

```bash
exercism submit /PATH/TO/SOLUTION
```

* In your web-browser, go back to the language tracks page, choose your exercise and the exercise you've just worked on. You will now see your solution online and notice that it is awaiting a mentor.<br/>


## Environment setup

Check that you have node and npm installed.

To check if you have Node.js installed, run this command in your terminal:

```bash
node -v
```

To confirm that you have npm installed you can run this command in your terminal:

```bash
npm -v
```

### Install yarn tool

```bash
npm install yarn -g
```

More info about yarn see [here](https://yarnpkg.com/en/)

### Quickes & easiest way to set up babel

```bash
yarn add @babel/cli @babel/core @babel/node @babel/preset-env
```

More info about Babel see [here](https://babeljs.io/)

### How to run tests

This runs an arbitrary command from a package’s "scripts" object. If no "command" is provided, it will list the available scripts. run[-script] is used by the test, start, restart, and stop commands, but can be called directly, as well. When the scripts in the package are printed out, they’re separated into lifecycle (test, start, restart) and directly-run scripts.

As of npm@2.0.0, you can use custom arguments when executing scripts. The special option -- is used by getopt to delimit the end of the options. npm will pass all the arguments after the -- directly to your script:

```bash
npm run test
```

[Source](https://docs.npmjs.com/cli/run-script)

### How to delete multiples files in Git

* In the command-line, navigate to your local repository.
* Ensure you are in the default branch:

```bash 
git checkout master
```

* The rm -r command will recursively remove your folder:

```bash 
git rm -r folder-name
```

* Commit the change:

```bash 
git commit -m "Remove duplicated directory"
```

* Push the change to your remote repository:

```bash 
git push origin master
```

### How to fix in case .gitignore is ignored by Git

Even if you haven't tracked the files so far, Git seems to be able to "know" about them even after you add them to .gitignore

**NOTE:** First commit your current changes, or you will lose them.

Then run the following commands from the top folder of your Git repository:

```bash 
git rm -r --cached .
git add .
git commit -m "fixed untracked files"
```

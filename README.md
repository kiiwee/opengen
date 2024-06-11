<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">OpenGen</h3>


<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kiiwee/opengen.svg)](https://github.com/kiiwee/opengen/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kiiwee/opengen.svg)](https://github.com/kiiwee/opengen/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> The open source UI generation interface. Powered by Llama3
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

This repository contains the web application for the project and all relevant notebooks used to research the topics around the project.
The application uses a fine tuned model aimed at TailwindCSS
## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

Software needed to run the project
```
python
bun
ollama
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Start the WebApp in dev mode
1. Go to the app
```
cd opengen_app
```
2. Install dependencies 
```
bun install
```
3. Run the development server
```
bun run dev
```

Setup Ollama with modelfile:
1. In The repository run this command to download the model and set it up with the ModelFile
```
ollama create choose-a-model-name -f <location of the file e.g. ./Modelfile>'
```
2. Start the inference server
```
ollama serve
```

### Demo photos 🔧🔧🔧 WIP 🔧🔧🔧


## 🎈 Usage 

After starting the Ollama server and the WebApp you can go to the application in localhost and start prompting for results!
## 🚀 Deployment <a name = "deployment"></a>

🔧🔧🔧 WIP 🔧🔧🔧

## ⛏️ Built Using <a name = "built_using"></a>
🔧🔧🔧 WIP 🔧🔧🔧


- [VueJs](https://vuejs.org/) - Web Framework


## ✍️ Authors 

- [@kiiwee](https://github.com/kiiwee) - Idea & Initial work
- [@kiseloMlyako](https://github.com/kiseloMlyako) - Idea & Initial work

See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors) who participated in this project.

## 🎉 Acknowledgements 

- Hat tip to anyone whose code was used
- Inspiration
- References

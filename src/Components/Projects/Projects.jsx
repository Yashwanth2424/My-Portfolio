import {Component} from 'react'

import TabItem from '../tabItem/tabItem'
import ProjectItem from '../projectItem/projectItem'

import './Projects.css'

const tabsList = [
  {tabId: 'STATIC', displayText: 'Static'},
  {tabId: 'RESPONSIVE', displayText: 'Responsive'},
  {tabId: 'DYNAMIC', displayText: 'Dynamic'},
]

const projectsList = [
    {
    projectId: 0,
    category: 'STATIC',
    imageURL: '/ProjectsPhotos/Flipkart.jpg',
    title: 'Flipkart Home Page',
    url : "https://yashwanth2424.github.io/Flipkart_Front_End/",
    description:
      'The project includes a responsive layout, interactive UI elements, and smooth navigation, providing a user-friendly shopping experience.',
  },
  
  {
    projectId: 1,
    category: 'STATIC',
    imageURL: '/ProjectsPhotos/College_Website_Image.jpg',
    title: 'College Website',
    url : " https://yashwanth2424.github.io/COLLEGE-WEBSITE/",
    description:
      'The website also includes semester-wise notes, study materials, and topic-wise details to help students navigate their coursework efficiently.',
  },
  {
    projectId: 2,
    category: 'STATIC',
    imageURL: '/ProjectsPhotos/amazon.png',
    title: 'Amazon Home Page',
    url : " https://yashwanth2424.github.io/Amazon-Home-Page-Clone/",
    description:
      'The project features a clean, responsive layout, with interactive elements like search bars, product categories, and image sliders.',
  },
  {
    projectId: 4,
    category: 'RESPONSIVE',
    imageURL: '/ProjectsPhotos/to-do-list-app.png',
    title: 'To-do-List',
    url : " https://yashwanth2424.github.io/Todo-list/",
    description:
      'The app features task organization, prioritization, and local storage to save tasks even after refreshing the page.',
  },
  {
    projectId: 5,
    category: 'RESPONSIVE',
    imageURL: '/ProjectsPhotos/calculator.jpg',
    title: 'Basic Calculator',
    url : "https://yashwanth2424.github.io/Mini-Calculator/",
    description: 'The webpage includes mathematical operations like addition, subtraction, multiplication, and division, with an intuitive and user-friendly interface',
  },
  {
    projectId: 6,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
    title: 'Portfolio',
    url : "https://yashwanth2424.github.io/Flipkart_Front_End/",
    description:
      'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
  },

  {
    projectId: 8,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    url : "https://yashwanth2424.github.io/Flipkart_Front_End/",
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
  },
  {
    projectId: 9,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    url : "https://yashwanth2424.github.io/Flipkart_Front_End/",
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
  },
  {
    projectId: 10,
    category: 'DYNAMIC',
    imageURL: '/ProjectsPhotos/Text-Translator.jpg',
    title: 'Text-Translator',
    url : " https://yashwanth2424.github.io/Text-Translator/",
    description:
      'The app features an easy-to-use interface, real-time translation, and supports various languages, making communication easier across borders.',
  },
]

class Projects extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
  }

  clickTabItem = tabValue => {
    this.setState({activeTabId: tabValue})
  }
  
  updateActiveTabId = (tabId) => {
    this.setState({activeTabId : tabId})
  }

  getFilteredProjects = () => {
    const {activeTabId} = this.state
    const filteredProjects = projectsList.filter(
      eachprojectDetails => eachprojectDetails.category === activeTabId,
    )
    return filteredProjects
  }

  render() {
    const {activeTabId} = this.state
    const filteredProjects = this.getFilteredProjects()
    return (
      
      <section id="projects" className="app-container">
        <h1 className="title">Projects</h1>
        <p className="description">
          I have developed a variety of dynamic web projects, including a Todo List, Flipkart Home Section Page, Amazon Home Section Page, and a Text Translator using an API. 
          These projects showcase my skills in frontend development, API integration, and creating responsive user interfaces. 
          I am always eager to build and explore new technologies to enhance my web development expertise.
        </p>

        <ul className="tabs-container">
          {tabsList.map(tabDetails => (
            <TabItem key={tabDetails.tabId} tabDetails={tabDetails} updateActiveTabId={this.updateActiveTabId} isActive ={activeTabId === tabDetails.tabId}/>
          ))}
        </ul>

        <ul className="project-list-container">
          {filteredProjects.map(projectDetails => (
            <ProjectItem
              key={projectDetails.projectId}
              projectDetails={projectDetails}
            />
          ))}
        </ul>
      </section>
    )
  }
}

export default Projects

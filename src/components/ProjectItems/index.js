import './index.css'

const ProjectItem = props => {
  const {projectItemDetails} = props
  const {name, imageUrl} = projectItemDetails

  return (
    <li className="listItem-bg-container">
      <img src={imageUrl} alt={name} className="projectImg" />
      <p className="project-heading">{name}</p>
    </li>
  )
}

export default ProjectItem

import './Course.css'

const Course = ({img,title,desc}) => {
    return (
        <section className='course--container'> 
            <img className='course--image' src={`../images/${img}`} alt="" />
            <div className='course--text'>
                <h1 className='course--name'>
                    {title}
                </h1>
                <h2 className='course--desc'>
                    {desc}
                </h2>
                <h3 className='course--start'>
                    Get Started
                </h3>
            </div>
        </section>
    )
}

export default Course
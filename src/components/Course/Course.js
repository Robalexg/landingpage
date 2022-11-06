import './Course.css'

const Course = () => {
    return (
        <section className='course--container'> 
            <img className='course--image' src="../images/icon-animation.svg" alt="" />
            <h1 className='course--name'>
                Animation
            </h1>
            <h2 className='course--desc'>
                Learn the latest animation techniques to create 
                stunning motion design and captivate your audience.
            </h2>
            <h3 className='course--start'>
                Get Started
            </h3>
        </section>
    )
}

export default Course
import './Courses.css'
import Course from '../Course/Course'

const Courses = () => {

    const blah = () => {
        let arr = []

        for(let i =0 ; i< 4; i++){
            arr.push(<Course/>)
        }

        return arr
    }

    return(
        <section className='container'>
            <div className='about'>
                <h1>
                    Check out our most popular courses!
                </h1>
            </div>
            {blah()}
        </section>
    )   
}

export default Courses
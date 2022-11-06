import './Courses.css'
import Course from '../Course/Course'
import data from '../../data'

const Courses = () => {

    const blah = () => {
        let arr = []

        for(let i =0 ; i< data.length; i++){
            arr.push(
                <Course 
                    img={data[i].img}
                    title={data[i].title}
                    desc={data[i].desc}
                    key={data[i].key}
                />
            )
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
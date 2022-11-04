import './Hero.css'

const Hero = () => {
    return(
        <section className='hero--container'>
            <div className='hero--textcontainer'>
                <h1 className='hero--title'>
                    Maximize skill,
                    minimize budget
                </h1>
                <h2 className='hero--subtitle'>
                    Our modern courses across a range of in-demand skills will give 
                    you the knowledge you need to live the life you want.
                </h2>
                <button className='hero--button' >Get Started</button>
            </div>
            <div className='hero--image'>
            </div>

        </section>
    )
}

export default Hero
import './WeatherForecast.css'

const WeatherForecast = (props) => {
    const { forecast } = props
    console.log (forecast)
    return (
        <>
            <p>On {forecast.day}</p>
            <img src={forecast.img} alt={forecast.imgAlt} />
            <p><span>conditions: </span>{forecast.conditions}</p>
            <p><span>time: </span>{forecast.time}</p>
        </>
    )
}

export default WeatherForecast

    // day: 'Mon',
    // img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
    // imgAlt: 'sun icon',
    // conditions: 'sunny',
    // time: 'Morning',
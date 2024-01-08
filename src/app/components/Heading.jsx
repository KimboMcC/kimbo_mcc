
export default function Heading( props ) {
    const { h1, h2, aim, outcome } = props

    return(
        <div className="pt-48 pb-24 px-12">
            <h1 className="pb-6">{h1}</h1>
            <h2>{h2}</h2>
        </div>
    )
}
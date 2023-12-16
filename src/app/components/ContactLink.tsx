import ContactButton from "./ContactButton";

export default function ContactLink( props ) {

    return (
        <div className="my-24 px-5">
            <h3 className="mb-8">{props.h3}</h3>   
            <p className="mb-6">{props.p}</p>
            <ContactButton/>
        </div>
    )
}
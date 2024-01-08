import ContactButton from "./ContactButton";

export default function ContactLink( props ) {

    return (
        <div className="my-28 md:px-12 px-5">
            <h3 className="mb-4 ">{props.h3}</h3>   
            <p className="mb-8">{props.p}</p>
            <ContactButton/>
        </div>
    )
}
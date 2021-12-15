import css from "../jobLanding.module.css";


const Description=({title,description})=>{
    return(
        <div>
        <p className={css.secon_title_font}> {title}</p>
        <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
    )
}

export default Description
import React, { FunctionComponent } from "react";
import styles from './styles.module.css'

interface CurtainProps {
    imageURL: string,
    hoverText: string,
    IconComponent: React.ReactNode
}

export const Curtain: FunctionComponent<CurtainProps> = ({ imageURL, hoverText, IconComponent }) => {
    return (
        <div className={styles.curtainContainer} style={{"backgroundImage":`url('${imageURL}')`, "backgroundSize":"cover"}}>
            <div className={styles.curtainInterior} >
                <p style={{"scale":"0.9","transform":"translateY(-50px)"}}>{IconComponent} Inspirations</p>
                <p>{hoverText}</p>
            </div>
        </div>
    )
}

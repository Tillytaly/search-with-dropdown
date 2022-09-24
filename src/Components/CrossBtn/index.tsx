import {Component, ReactNode} from "react"
import styles from "./CrossBtn.module.scss"
import {TCrossBtn} from "./types"
const {crossBtn, cross} = styles


class CrossBtn extends Component<TCrossBtn>{
    render() {
        const {onClick} = this.props
        return(
            <div className={crossBtn} onClick={onClick}>
                <div className={cross}></div>
            </div>
        )
    }
}

export {CrossBtn}
import React, {useState} from "react"
import {Tooltip} from "reactstrap"

export default function CennikItem (props) {
    const [tooltipOpen, setTooltipOpen] = useState(false);  
    const toggleTooltip = () => setTooltipOpen(!tooltipOpen);
    const key = `${props.id}`
    return(
        <tr>
                <td>{props.sluzba.nazov}</td>
                <td id={key}>{props.sluzba.cena}</td>
                <Tooltip placement="bottom" isOpen={tooltipOpen} target={key} toggle={toggleTooltip}>
          {props.sluzba.detail}
        </Tooltip>
              </tr>
    )
}

import { useState } from "react";
import data from './data'
import './styles.css'
// Seleção única
//Seleção multipla

export default function Accordion() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);

    }

    function handleMultiSelection(getCurrentId) {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

        if (findIndexOfCurrentId === -1) {
            copyMultiple.push(getCurrentId)
        } else {
            copyMultiple.splice(findIndexOfCurrentId, 1);
        }

        setMultiple(copyMultiple);
    }

    return (

        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Habilitar Seleção Multipla</button>
            <div className="accordion">
                {data && data.length > 0 ? ((data.map(dataItem => <div className="item">
                    <div onClick={enableMultiSelection
                        ? () => handleMultiSelection(dataItem.id)
                        : () => handleSingleSelection(dataItem.id)
                    }
                        className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {enableMultiSelection ?
                        multiple.indexOf(dataItem.id) !== -1 && (<div className="content">{dataItem.answer}</div>)
                        : selected === dataItem.id && (<div className="content">{dataItem.answer}</div>)}
                    {/*{selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?
                        (<div className="content">{dataItem.answer}</div>)
                        : null} */}
                </div>))) :
                    (<div>Ocorreu um erro!</div>)
                }
            </div>
        </div>
    );
}
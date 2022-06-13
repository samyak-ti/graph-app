import React from 'react'
import './ShowContent.css'

function ShowContent(props) {
    const nodeContent = props.nodeContent;
    let name = true;
    let label = true;
    let ref = true;
    let description = true;
    let learning_objectives = true;
    let url = true;

    if (nodeContent['name'] === "")
        name = false;

    if (nodeContent['label'] === "")
        label = false;

    if (nodeContent['ref'] === "")
        ref = false;

    if (nodeContent['description'] === "")
        description = false;

    if (nodeContent['learning_objectives'] === "")
        learning_objectives = false;

    if (nodeContent['url'] === "")
        url = false;

    return (

        <table border="1">

            {
                name &&
                <tr>
                    <th><b>Name:</b></th>
                    <td>{nodeContent['name']}</td>
                </tr>
            }

            {
                label &&
                <tr>
                    <th><b>Label:</b></th>
                    <td>{nodeContent['label']}</td>
                </tr>
            }

            {
                ref &&
                <tr>
                    <th><b>Ref:</b></th>
                    <td><a href={nodeContent['ref']}>Link to the section</a></td>
                </tr>
            }

            {
                description &&
                <tr>
                    <th><b>Description:</b></th>
                    <td dangerouslySetInnerHTML={{ __html: nodeContent['description'] }}></td>
                </tr>
            }

            {
                learning_objectives &&
                <tr>
                    <th><b>Learning Objectives:</b></th>
                    <td dangerouslySetInnerHTML={{ __html: nodeContent['learning_objectives'] }}></td>
                </tr>
            }

            {
                url &&
                <tr>
                    <th><b>Url:</b></th>
                    <td><a href={nodeContent['url']}>Resources</a></td>
                </tr>
            }
        </table>

    )
}

export default ShowContent
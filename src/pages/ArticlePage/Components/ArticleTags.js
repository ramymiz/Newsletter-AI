import './ArticleTags.css';
import { useEffect, useState } from 'react';
 
const tagColorMapping = {
    "Software Engineer": {
        backgroundColor: "rgba(186, 168, 93, 0.25)",
        color: "#F9AD1F"
    },
    "Sustainable Development": {
        backgroundColor: "rgba(34,230,96, 0.25)",
        color: "#22E660"
    },
    "Web Dev": {
        backgroundColor: "rgba(245,43,28, 0.25)",
        color: "rgb(245,43,28)"
    },
    "Data Science": {
        backgroundColor: "rgba(37,82,230, 0.25)",
        color: "rgb(37,82,230)"
    },
    "Algorithm Design": {
        backgroundColor: "rgba(201,37,230, 0.25)",
        color: "rgb(201,37,230)"
    },
    "Computer Science": {
        backgroundColor: "rgba(34,194,230, 0.25)",
        color: "rgb(34,194,230)"
    },
    "Environmental Policy": {
        backgroundColor: "rgba(100,229,21, 0.25)",
        color: "rgb(100,229,21)"
    },
    "Natural Gas Distribution": {
        backgroundColor: "rgba(230,114,37, 0.25)",
        color: "rgb(230,114,37)"
    },
    "Climate Change Mitigation": {
        backgroundColor: "rgba(32,230,144, 0.25)",
        color: 'rgb(32,230,144)'
    },
    "Environmental Law": {
        backgroundColor: "rgba(81, 166, 50, 0.25)",
        color: 'rgb(81, 166, 50)'
    }
}

export default function ArticleTags({ tags, maxTagLength }) {
    const [newTags, setNewTags] = useState(tags);

    
    useEffect(() => {
        let tagChars = 0;
        let endingTagIndx = 0;

        for (const tag of tags) {
            if (tagChars + tag.length > maxTagLength) {
                break;
            } else {
                tagChars += tag.length;
                endingTagIndx++;
            }
        }

        setNewTags(tags.slice(0, endingTagIndx + 1));
    }, [])

    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {newTags.map((tag, index) => (
                <div>
                    <p style={{
                        fontSize: '0.8rem',
                        padding: '3px 5px 3px 5px',
                        margin: '4px 6px 4px 0',
                        borderRadius: '4px',
                        fontWeight: 'bold',
                        width: 'fit-content',
                        backgroundColor: tagColorMapping[tag].backgroundColor,
                        color: tagColorMapping[tag].color
                    }}>{tag}</p>
                </div>
            ))}
        </div>
    )
}
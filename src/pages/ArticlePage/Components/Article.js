import './Article.css';

export default function Article({ article }) {
    return (
        <div className="Article">
            <h3>{article.title}</h3>
        </div>
    )
}
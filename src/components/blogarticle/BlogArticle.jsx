import './BlogArticle.css'
import {useEffect,useState} from 'react'

const hostUrl = import.meta.env.VITE_APP_URL;
const apiUrl = import.meta.env.VITE_API_BASE_URL;

function BlogArticle(){

    const [blogArticleData,setBlogArticleData] = useState(null);

    useEffect(()=>{

        const fetchApi = async ()=>{
            const apiResponse = await fetch(`${apiUrl}api/Home/BlogArticles`);
            const apiData = await apiResponse.json();
            if(apiData.status == "Success"){
                setBlogArticleData(apiData.data);
            }
        }
fetchApi();
    },[]);

    //console.log(blogArticleData);

    if(blogArticleData != null && blogArticleData.length > 0){
        return (
            <section className="section news" id="news" aria-label="news">
    <div className="container">

        <p className="section-subtitle">News</p>

    <h2 className="h2 section-title d-flex">Latest <span className="article-type-change">Articles</span></h2>

        <ul className="has-scrollbar">

            {
                blogArticleData.map((data,index)=>{
                    return (
                <li className="scrollbar-item" key={index}>

                    <div className="card news-card">

                        <figure className="card-banner img-holder" style={{'--width': '600', '--height': '675',}}>
                            <img src={`${hostUrl}src/images/articles/${data.imagePath}`} width="600" height="675" loading="lazy"
                                 alt="VS Code Gets New JavaScript Debugger" className="img-cover"/>
                        </figure>

                        <a href={`${hostUrl}BlogArticleDetail?ArticleId=${data.id}`} className="card-content">

                            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>

                            <time className="card-text" dateTime="2022-09-02">{data.publishDate} <small>{data.type != null ? "(" + data.type + ")": ""} </small> </time>

                            <h3 className="h3 card-title">{data.title}</h3>

                        </a>

                    </div>
                </li>
                    );
                })
            }

        </ul>

    </div>
</section>
        );
    }

}

export default BlogArticle;
import './BlogArticleDetail.css'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

import Header from '../header/Header'
import Footer from '../footer/Footer'

const hostUrl = import.meta.env.VITE_APP_URL;
const apiUrl = import.meta.env.VITE_API_BASE_URL;


function BlogArticleDetail() {

    const [articleDetailData, setArticleDetailData] = useState(null);
    const [articleData, setArticleData] = useState(null);
    const [queryData] = useSearchParams();
    const [articleId, setArticleId] = useState(null);

    useEffect(() => {

        const currentArticleId = queryData.get("ArticleId");

        if (currentArticleId) {
            sessionStorage.setItem("prevArticleId", currentArticleId);
            setArticleId(currentArticleId);
        }
        else {
            const prevArticleId = sessionStorage.getItem("prevArticleId");
            if (prevArticleId) {
                setArticleId(prevArticleId);
            }
            else {
                setArticleId(null);
            }
        }

        const fetchApi = async () => {

            // if (!articleId) return;

            const articleDetailResponse = await fetch(`${apiUrl}api/HomeApi/BlogArticleDetail?ArticleId=${articleId}`);
            const articleDetailApiData = await articleDetailResponse.json();

            const articleResponse = await fetch(`${apiUrl}api/HomeApi/BlogArticles`);
            const articleApiData = await articleResponse.json();

            if (articleDetailApiData.status == "Success") {
                setArticleDetailData(articleDetailApiData.data);
            }
            if (articleApiData.status == "Success") {
                setArticleData(articleApiData.data);
            }
        }
        fetchApi();
    }, [articleId]);

    // console.log(articleData)
    // console.log(articleDetailData)

    if (articleDetailData != null && articleDetailData.length > 0) {

        return (

            <>
                <Header />
                <section className="section section-page" id="news-articles-content" style={{ 'paddingTop':'10px !important' }}>
                    <div id="page-container">
                        <div id="content-wrapper">
                            <div id="main-article">
                                {articleDetailData.map((data, index) => {
                                    const descArr = data.description ? data.description.split('#') : [];

                                    return (
                                        <div key={index}>
                                            <h1 id="article-heading">{data.heading}</h1>

                                            {data.imagePath && (
                                                <img id="article-image" src={`${data.imagePath}`} alt="Article Image" />
                                            )}

                                            {descArr.map((d, idx) => (
                                                <p id="article-description" key={idx}>{d}</p>
                                            ))}

                                            <br />
                                        </div>
                                    );
                                })}
                            </div>


                            {articleData != null && articleData.length > 0 && (
                                <div id="sidebar">
                                    <h2 id="sidebar-title">Next Articles</h2>
                                    {articleData.map((nxt, idx) => {
                                        const briefDesc = nxt.briefDescription ? nxt.briefDescription.split('#')[0] : "";
                                        return (
                                            <a href={`?ArticleId=${nxt.id}`} className="sidebar-article" key={idx}>
                                                <img className="sidebar-thumb" src={`${nxt.imagePath}`} alt="article image" />
                                                <div className="sidebar-text">
                                                    <h3 className="sidebar-article-heading">{nxt.title}</h3>
                                                    <p className="sidebar-article-description">{briefDesc}</p>
                                                </div>
                                            </a>
                                        );
                                    })}
                                </div>
                            )}


                        </div>
                    </div>
                </section>
                <Footer />
            </>


        );

    }

    else if ((articleDetailData == null || articleDetailData.length == 0) && (articleData != null && articleData.length > 0)) {
        return (
            <>
                <Header />
                <section className="section section-page" id="news-articles-content" style={{ 'padding-top': '10px !important' }}>
                {articleData.map((nxt, idx) => {
                    const briefDesc = nxt.briefDescription ? nxt.briefDescription.split('#')[0] : "";
                    return (

                        
                            <div className="unique-articles-section"  key={idx}>

                                <a href={`?ArticleId=${nxt.id}`} className="sidebar-article">
                                    <div className="article-card">
                                        <div className="image-container">
                                            <img src={`${hostUrl}src/images/articles/${nxt.imagePath}`} alt="Article Image 1" />
                                        </div>

                                        <div className="text-container">
                                            <h2>{nxt.title}</h2>
                                            <p>{briefDesc}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                       

                    );
                })}
 </section>




                <Footer />
            </>

        )
    }

}

export default BlogArticleDetail;
import React from 'react'
import '../news/news.scss'

function News(props){
    return(
        <>
            <div className="container-news">
                <div className="box-informations-news">
                    <div className="img-news" style={{ backgroundImage: `url(${props.imgNews})` }}>
                    <div className="box-black">
                        <div className="text-news">
                            <span className="spanNews">{props.spanNews}</span>
                        </div>
                        <strong className="strongNews">{props.strongNews}</strong>
                        <h2 className="h2News">{props.h2News}</h2>
                        <div className="check-out">
                            <a className="a-check-out" href="">{props.aNews}</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News;
import React, { Component } from 'react'

export class NewsItem extends Component {


    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div className="my-3 mx-3">

                <div className="card" style={{ width: "20rem" }}>
                    <img src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2021/03/SS-Indian-Economy-770x433.jpg?impolicy=website&width=770&height=431":imageUrl} />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

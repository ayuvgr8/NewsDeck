import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor() {
        super();
        console.log("Hey i am constructor from news component")
        this.state = {
            articles:[],
            loading: false,
        }
    }

    async componentDidMount(){
        console.log("cdm");
        let url ="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=77a84efe0c3f4f43b60a761ad00d034b";
        let data= await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles});
    }

    render() {
        return (
            <div className="container my-3 ">
                
                <h1>NewsDeck - Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element)=>{
                     return <div className="col-md-3" key={element.url}> 
                        <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage}
                         newsUrl={element.url}/>
                         </div>

                    })}
                   
                   
            
               </div>
                
            </div>
        )
    }
}

export default News

import React from 'react';

export default class ImageSwitcher extends React.Component {
    state = {
        image1: require('./puppy.jpg').default,
        image2: require('./bubble-tea.jpg').default,
        currentImage: 1
    }

    /*
    render() {
        if (this.state.currentImage===1) {
            return (
                <React.Fragment>
                    <div>
                        <img src={this.state.image1}/>
                        <button onClick={this.showImage1}>Show image 1</button>
                        <button onClick={this.showImage2}>Show Image 2</button>
                    </div>
                </React.Fragment>
            ) 
        } else if (this.state.currentImage==2){
            return (
                <React.Fragment>
                    <div>
                        <img src={this.state.image2}/>
                        <button onClick={this.showImage1}>Show image 1</button>
                        <button onClick={this.showImage2}>Show Image 2</button>
                    </div>
                </React.Fragment>
            )
        }
    }
    */

    render() {
        return (
            <div>
                <img src={this.state['image' + this.state.currentImage]}/>
                <button onClick={this.showImage1}>Show image 1</button>
                <button onClick={this.showImage2}>Show Image 2</button>
            </div>

        )
    }

    showImage1 =() => {
        this.setState({
            currentImage: 1
        })
    }

    showImage2 = () => {
        this.setState({
            currentImage: 2
        });
    }
}
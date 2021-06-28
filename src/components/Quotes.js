import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";

class Quotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: "",
      bg_image: "",
      author: "",
      loading: true
    };
  }

  componentDidMount() {
    axios
      .get("https://quotes.rest/qod.json")
      .then((res) => {
        const content = res.data.contents.quotes[0];
        console.log(content);
        this.setState({
          quote: content.quote,
          author: content.author,
          bg_image: content.background,
          loading: false
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <div className="row main">
          <div className="col-lg-8 container">
            {this.state.loading ? (
              <Box pt={0.5}>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton width="60%" />
                <Skeleton width="60%" />
              </Box>
            ) : (
              <Paper elevation={20}>
                <img
                  width="100%"
                  height="80%"
                  alt="quote background"
                  src={this.state.bg_image}
                ></img>
                <h2 className="quote centered" style={{ color: "white" }}>
                  {this.state.quote}
                </h2>
                <h4 style={{ fontFamily: "Akaya Kanadaka" }}>
                  Quote fetch from{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://quotes.rest"
                  >
                    quotes.rest
                  </a>
                </h4>
              </Paper>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Quotes;

import React, { Component } from "react";
import { GridList, GridTile, IconButton } from "material-ui";
import PropTypes from "prop-types";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";

class ImageResults extends Component {
  state = {
    open: false,
    currentImg: ""
  };

  render() {
    let imageListContent;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <GridList cols={4}>
          {images.map(img => (
            <GridTile
              title={img.tags}
              id={img.id}
              subtitle={
                <span>
                  by <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton>
                  <ZoomIn color="black" />
                </IconButton>
              }
            >
              <img src={img.largeImageURL} alt="" />
            </GridTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }

    return <div>{imageListContent}</div>;
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.required
};

export default ImageResults;

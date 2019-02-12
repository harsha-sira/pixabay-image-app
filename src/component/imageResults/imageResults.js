import React, { Component } from "react";
import { GridList, GridTile, IconButton, Dialog } from "material-ui";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import FlatButton from "material-ui/FlatButton";

class ImageResults extends Component {
  state = {
    open: false,
    currentImg: ""
  };

  handleOpen = img => {
    this.setState({ open: true, currentImg: img });
  };

  handleClose = () => {
    this.setState({ open: false });
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
                <IconButton onClick={() => this.handleOpen(img)}>
                  <ZoomIn color="white" />
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

    const action = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />
    ];

    return (
      <div>
        {imageListContent}
        <Dialog
          title={this.state.currentImg.tags}
          actions={action}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <img src={this.state.currentImg.largeImageURL} alt="" style={{ width : '100%' }}/>
        </Dialog>
      </div>
    );
  }
}

export default ImageResults;

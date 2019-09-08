import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../../Components/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Dropzone from 'react-dropzone';
import UploadZone from '../../Components/DropZone'
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

class UploadMedia extends Component {
  constructor(props) {
        super(props);
        this.state = {
            crop: { aspect: 12 / 16 ,unit: "%", width: 30,},
            avator:'',
            croppedImg:''
        }
    }


    uploadAvator=() =>{

       this.props.getAvator(this.state.croppedImg)
       this.props.onClose()
   }
   // convert the uploaded image into DataURL
  onSelectFile = files => {
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        this.setState({avator:reader.result} )
      );
      reader.readAsDataURL(files[0]);

  };

    async  makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        "newFile.jpeg"
      );
     this.setState({croppedImg:croppedImageUrl}  );
    }
  }
    //use canvas to generate the cropped image
   getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error("Canvas is empty");
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, "image/jpeg");
    });
  }
  onCropChange = (crop) => {
    this.setState({ crop });
  };
   onImageLoaded = image => {
    this.imageRef = image;
  };
    render(){
         const { onClose, open } = this.props;
         return (
    <Dialog
               fullWidth={true}
               maxWidth={'sm'}
        open={open}
        onClose={onClose}

      >
        <DialogTitle >Upload Avatar</DialogTitle>
        <DialogContent>
         <Dropzone accept={'.png,.jpg,.svg'} multiple={false}
                                      onDrop={acceptedFiles => this.onSelectFile(acceptedFiles)}>
                                {({getRootProps, getInputProps}) => (
                                    <section>
                                        <div {...getRootProps()} style={{
                                        }}>
                                            <UploadZone/>
                                            <input type={'file'} {...getInputProps()} />
                                        </div>
                                    </section>
                                )}
                            </Dropzone>
            {this.state.croppedImg && (
          <img alt="Crop" style={{ maxWidth: "100%" }} src={this.state.croppedImg} />
        )}
             {this.state.avator && (
          <ReactCrop
            src={this.state.avator}
            crop={this.state.crop}
            onImageLoaded={this.onImageLoaded}
             onComplete={this.makeClientCrop(this.state.crop)}
            onChange={newCrop => this.onCropChange(newCrop)}
          />
        )}

        </DialogContent>
        <DialogActions>
            <Button onClick={onClose} theme={'secondary'}>
            Cancel
          </Button>

            <Button disabled={!this.state.croppedImg} onClick={this.uploadAvator} theme={'primary'}>
            Done
          </Button>

        </DialogActions>
      </Dialog>
  );
    }

}

UploadMedia.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired, //use these props to control the Modal open state
};

export default UploadMedia